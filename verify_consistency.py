
import sys
import os
import json

# Add backend to path
sys.path.append(os.path.join(os.getcwd(), 'backend'))

from services.mandi_service import get_market_prices

def test_consistency():
    print("Testing Price Consistency...")
    
    # First call
    data1 = get_market_prices("Onion", "Karnataka", "Bangalore")
    price1 = data1['records'][-1]['modal_price']
    print(f"Run 1: {price1}")
    
    # Second call
    data2 = get_market_prices("Onion", "Karnataka", "Bangalore")
    price2 = data2['records'][-1]['modal_price']
    print(f"Run 2: {price2}")
    
    if price1 == price2:
        print("✅ SUCCESS: Prices are consistent!")
        return True
    else:
        print("❌ FAILURE: Prices are different!")
        return False

if __name__ == "__main__":
    test_consistency()
