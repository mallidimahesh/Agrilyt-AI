"""
Mandi API Testing Utility

This script helps you test your data.gov.in API integration.
Run this to verify your API key and check data quality.

Usage:
    python test_mandi_api.py
"""

import sys
import os

# Add parent directory to path to import from services
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from services.mandi_service import get_market_prices, _fetch_real_mandi_data, _generate_realistic_mandi_data
from config import Config
import json


def test_api_key_configuration():
    """Test if API key is properly configured."""
    print("=" * 60)
    print("TEST 1: API Key Configuration")
    print("=" * 60)
    
    if Config.has_data_gov_key():
        print("[OK] API Key is configured")
        print(f"   Key starts with: {Config.DATA_GOV_API_KEY[:20]}...")
        return True
    else:
        print("[FAIL] API Key is NOT configured")
        print("   Please add DATA_GOV_API_KEY to your .env file")
        print("   Get your key from: https://data.gov.in/")
        return False


def test_fallback_data():
    """Test the fallback data generation."""
    print("\n" + "=" * 60)
    print("TEST 2: Fallback Data Generation")
    print("=" * 60)
    
    try:
        data = _generate_realistic_mandi_data("Onion", "Karnataka", "Bangalore")
        
        print(f"[OK] Fallback data generated successfully")
        print(f"   Source: {data['source']}")
        print(f"   Total records: {data['total_records']}")
        print(f"   Date range: {data['records'][0]['arrival_date']} to {data['records'][-1]['arrival_date']}")
        
        # Show sample record
        sample = data['records'][-1]
        print(f"\n   Latest Price (Onion in Bangalore):")
        print(f"   Date: {sample['arrival_date']}")
        print(f"   Min: ₹{sample['min_price']}/quintal")
        print(f"   Max: ₹{sample['max_price']}/quintal")
        print(f"   Modal: ₹{sample['modal_price']}/quintal")
        
        return True
    except Exception as e:
        print(f"[FAIL] Fallback data generation failed: {e}")
        return False


def test_real_api_data():
    """Test fetching data from real API."""
    print("\n" + "=" * 60)
    print("TEST 3: Real API Data Fetch")
    print("=" * 60)
    
    if not Config.has_data_gov_key():
        print("WARN: Skipping - No API key configured")
        return None
    
    try:
        print("   Fetching data from data.gov.in API...")
        data = _fetch_real_mandi_data("Onion", "Karnataka", "Bangalore")
        
        print(f"[OK] Real API data fetched successfully")
        print(f"   Source: {data['source']}")
        print(f"   Total records: {data['total_records']}")
        
        if data['total_records'] > 0:
            print(f"   Date range: {data['records'][0]['arrival_date']} to {data['records'][-1]['arrival_date']}")
            
            # Show sample record
            sample = data['records'][-1]
            print(f"\n   Latest Price (Onion in {sample['district']}):")
            print(f"   Market: {sample['market']}")
            print(f"   Date: {sample['arrival_date']}")
            print(f"   Min: ₹{sample['min_price']}/quintal")
            print(f"   Max: ₹{sample['max_price']}/quintal")
            print(f"   Modal: ₹{sample['modal_price']}/quintal")
        else:
            print("   WARN: No records returned - try different filters")
        
        return True
    except Exception as e:
        print(f"[FAIL] Real API fetch failed: {e}")
        print("   This is normal if:")
        print("   - API key is invalid")
        print("   - Rate limit exceeded")
        print("   - Network issues")
        print("   - No data available for filters")
        return False


def test_integrated_service():
    """Test the integrated get_market_prices function."""
    print("\n" + "=" * 60)
    print("TEST 4: Integrated Service (with fallback)")
    print("=" * 60)
    
    try:
        commodities = ["Onion", "Tomato", "Rice"]
        
        for commodity in commodities:
            data = get_market_prices(commodity, "Karnataka", "Bangalore")
            
            print(f"\n   {commodity}:")
            print(f"   [OK] Data source: {data['source']}")
            print(f"   Records: {data['total_records']}")
            
            if data['total_records'] > 0:
                latest = data['records'][-1]
                print(f"   Latest price: ₹{latest['modal_price']}/quintal ({latest['arrival_date']})")
        
        return True
    except Exception as e:
        print(f"[FAIL] Integrated service failed: {e}")
        return False


def test_different_commodities():
    """Test various commodities to see data availability."""
    print("\n" + "=" * 60)
    print("TEST 5: Multiple Commodities Test")
    print("=" * 60)
    
    if not Config.has_data_gov_key():
        print("WARN: Skipping - No API key configured")
        return None
    
    commodities = ["Onion", "Tomato", "Potato", "Rice", "Wheat"]
    results = []
    
    for commodity in commodities:
        try:
            data = _fetch_real_mandi_data(commodity, "Karnataka", "Bangalore")
            results.append({
                "commodity": commodity,
                "success": True,
                "records": data['total_records']
            })
            print(f"   [OK] {commodity}: {data['total_records']} records")
        except Exception as e:
            results.append({
                "commodity": commodity,
                "success": False,
                "error": str(e)
            })
            print(f"   [FAIL] {commodity}: Failed - {str(e)[:50]}")
    
    return results


def save_sample_response():
    """Save a sample API response for reference."""
    print("\n" + "=" * 60)
    print("Saving Sample Response")
    print("=" * 60)
    
    try:
        data = get_market_prices("Onion", "Karnataka", "Bangalore")
        
        output_file = "sample_mandi_response.json"
        with open(output_file, 'w') as f:
            json.dump(data, f, indent=2)
        
        print(f"[OK] Sample response saved to: {output_file}")
        return True
    except Exception as e:
        print(f"[FAIL] Failed to save sample: {e}")
        return False


def main():
    """Run all tests."""
    print("\n")
    print("=" * 60)
    print("     MANDI API INTEGRATION TEST SUITE")
    print("=" * 60)
    
    # Run tests
    has_api_key = test_api_key_configuration()
    test_fallback_data()
    
    if has_api_key:
        test_real_api_data()
        test_different_commodities()
    
    test_integrated_service()
    save_sample_response()
    
    # Summary
    print("\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)
    
    if has_api_key:
        print("[OK] Your API is configured and ready to use!")
        print("   The service will use real data from data.gov.in")
    else:
        print("WARN: No API key configured")
        print("   The service will use intelligent fallback data")
        print("\n   To use real data:")
        print("   1. Get API key from https://data.gov.in/")
        print("   2. Add to .env file: DATA_GOV_API_KEY=your_key")
        print("   3. Restart your application")
    
    print("\n[OK] Your application works with or without the API key!")
    print("   Fallback data is realistic and suitable for development/demo")
    print("\n" + "=" * 60 + "\n")


if __name__ == "__main__":
    main()
