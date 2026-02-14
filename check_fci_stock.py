import requests
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("DATA_GOV_API_KEY")
# Resource ID for FCI Daily Food Stock Position
# Source: https://data.gov.in/resource/region-wise-district-wise-commodity-wise-daily-food-stock-position-fci
BASE_URL = "https://api.data.gov.in/resource/814d6bf2-2790-4e1d-8d8a-eea417efb7a7"

def check_fci_data():
    if not API_KEY:
        print("Error: DATA_GOV_API_KEY not found in .env")
        return

    print(f"Using API Key: {API_KEY[:5]}...")

    params = {
        'api-key': API_KEY,
        'format': 'json',
        'limit': 100,
        # 'filters[districtname]': 'BANGALORE', # Try uppercase
        # 'filters[commodityname]': 'Rice' 
    }
    
    print("\nSrching for Bangalore/Rice in FCI Stock...")
    try:
        response = requests.get(BASE_URL, params=params)
        data = response.json()
        
        if 'records' in data:
            records = data['records']
            print(f"Total Records Fetched: {len(records)}")
            
            # Manual Client-side filtering to check exact values
            for r in records:
                d_name = r.get('districtname', '').upper()
                c_name = r.get('commodityname', '').lower()
                
                if 'BANGALORE' in d_name or 'BENGALURU' in d_name:
                    print(f"MATCH! Region: {r.get('code')} | District: {d_name} | Commodity: {r.get('commodityname')} | Stock: {r.get('stock')}")
                
            # Also print unique commodities to see mapping
            commodities = set(r.get('commodityname') for r in records)
            print("Available Commodities:", commodities)
            
        else:
            print("No records found.", data)
            
    except Exception as e:
        print(f"Request failed: {e}")

if __name__ == "__main__":
    check_fci_data()
