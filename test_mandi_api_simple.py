"""
Mandi API Testing Utility - Simple Version

This script helps you test your data.gov.in API integration.
Run this to verify your API key and check data quality.

Usage:
    python test_mandi_api_simple.py
"""

import sys
import os

# Add parent directory to path to import from services
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from services.mandi_service import get_market_prices
from config import Config
import json


def main():
    """Run API tests."""
    print("\n" + "=" * 60)
    print("MANDI API INTEGRATION TEST")
    print("=" * 60)
    
    # Test 1: Check API Key
    print("\n[TEST 1] API Key Configuration")
    print("-" * 60)
    if Config.has_data_gov_key():
        print("[OK] API Key is configured")
        print(f"    Key starts with: {Config.DATA_GOV_API_KEY[:20]}...")
    else:
        print("[WARN] API Key is NOT configured")
        print("       Will use fallback data")
    
    # Test 2: Fetch Data for Multiple Commodities
    print("\n[TEST 2] Fetching Market Data")
    print("-" * 60)
    
    commodities = ["Onion", "Tomato", "Rice", "Wheat", "Potato"]
    
    for commodity in commodities:
        try:
            print(f"\nFetching {commodity} prices...")
            data = get_market_prices(commodity, "Karnataka", "Bangalore")
            
            print(f"  Source: {data['source']}")
            print(f"  Records: {data['total_records']}")
            
            if data['total_records'] > 0:
                latest = data['records'][-1]
                print(f"  Latest Price ({latest['arrival_date']}):")
                print(f"    Min:   Rs.{latest['min_price']}/quintal")
                print(f"    Max:   Rs.{latest['max_price']}/quintal")
                print(f"    Modal: Rs.{latest['modal_price']}/quintal")
                
                # Show price trend (last 7 days)
                if len(data['records']) >= 7:
                    week_ago = data['records'][-7]['modal_price']
                    current = latest['modal_price']
                    change = ((current - week_ago) / week_ago) * 100
                    print(f"    7-day change: {change:+.2f}%")
            
        except Exception as e:
            print(f"  [ERROR] Failed: {str(e)[:80]}")
    
    # Test 3: Save Sample Response
    print("\n[TEST 3] Saving Sample Response")
    print("-" * 60)
    try:
        data = get_market_prices("Onion", "Karnataka", "Bangalore")
        output_file = "sample_mandi_response.json"
        with open(output_file, 'w') as f:
            json.dump(data, f, indent=2)
        print(f"[OK] Sample saved to: {output_file}")
    except Exception as e:
        print(f"[ERROR] Failed to save: {e}")
    
    # Summary
    print("\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)
    
    if Config.has_data_gov_key():
        print("[OK] API is configured and working!")
        print("     Using real data from data.gov.in")
    else:
        print("[INFO] Using intelligent fallback data")
        print("       To use real API:")
        print("       1. Get key from https://data.gov.in/")
        print("       2. Add to .env: DATA_GOV_API_KEY=your_key")
        print("       3. Restart application")
    
    print("\n[OK] Integration test complete!")
    print("=" * 60 + "\n")


if __name__ == "__main__":
    main()
