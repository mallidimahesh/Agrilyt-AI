import requests
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("DATA_GOV_API_KEY")

# Candidate Resources
RESOURCES = {
    # Ministry of Commerce: Export of Principal Commodities (Historical/Recent)
    # Source: https://data.gov.in/resource/9a0bf555-w447-49cc-8e9f-3507106041e8 (likely old but structure matters)
    "exports": "9a0bf555-w447-49cc-8e9f-3507106041e8", 
    
    # Wholesale Price Index (WPI) - often a good proxy for inflation/costs
    "wpi": "6d728522-8d76-43d6-88b9-756184560731",
    
    # Agricultural Wages (Historical)
    "wages": "e2d1d072-9847-466d-9799-a66967732d8f"
}

def check_resources():
    if not API_KEY:
        print("Error: API Key missing")
        return

    for name, rid in RESOURCES.items():
        print(f"\n--- Checking {name} ({rid}) ---")
        url = f"https://api.data.gov.in/resource/{rid}"
        params = {'api-key': API_KEY, 'format': 'json', 'limit': 5}
        
        try:
            resp = requests.get(url, params=params, timeout=5)
            data = resp.json()
            
            if 'records' in data and len(data['records']) > 0:
                print("SUCCESS! Data found.")
                print("Keys:", data['records'][0].keys())
                print("Sample:", data['records'][0])
            else:
                print("Failed or No Records:", data.get('message', 'Unknown error'))
                
        except Exception as e:
            print(f"Request failed: {e}")

if __name__ == "__main__":
    check_resources()
