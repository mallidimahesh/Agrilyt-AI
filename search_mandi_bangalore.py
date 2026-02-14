import requests
from config import Config
import json

def search_bangalore(commodity):
    url = f"{Config.MANDI_API_URL}"
    # Try filtering by market name or district
    params = {
        'api-key': Config.DATA_GOV_API_KEY,
        'format': 'json',
        'filters[state]': 'Karnataka',
        'filters[commodity]': commodity,
        'limit': 500
    }
    headers = {
        'User-Agent': 'Mozilla/5.0'
    }
    try:
        res = requests.get(url, params=params, headers=headers, timeout=15)
        data = res.json()
        print(f"\n--- Searching {commodity} in Karnataka ---")
        if data.get('records'):
            found = False
            for r in data['records']:
                market = r.get('market', '').upper()
                district = r.get('district', '').upper()
                if "BANGALORE" in market or "BENGALURU" in market or "BANGALORE" in district or "BENGALURU" in district:
                    print(f"MATCH: Market={r.get('market')} | Dist={r.get('district')} | Modal={r.get('modal_price')} | Date={r.get('arrival_date')}")
                    found = True
            if not found:
                print("No Bangalore-specific records found in first 500.")
        else:
            print("No records found at all.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    search_bangalore("Wheat")
    search_bangalore("Onion")
    search_bangalore("Potato")
