import requests
from config import Config
import json

def debug_mandi(commodity, state):
    url = f"{Config.MANDI_API_URL}"
    params = {
        'api-key': Config.DATA_GOV_API_KEY,
        'format': 'json',
        'filters[state]': state,
        'filters[commodity]': commodity,
        'limit': 100
    }
    headers = {
        'User-Agent': 'Mozilla/5.0'
    }
    try:
        res = requests.get(url, params=params, headers=headers, timeout=15)
        data = res.json()
        print(f"\n--- {commodity} in {state} ---")
        if data.get('records'):
            districts = set()
            for r in data['records']:
                districts.add(r.get('district'))
            print(f"Districts found: {districts}")
            for r in data['records'][:5]:
                print(f"Date: {r.get('arrival_date')} | Dist: {r.get('district')} | Market: {r.get('market')} | Modal: {r.get('modal_price')}")
        else:
            print("No records found")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    debug_mandi("Wheat", "Karnataka")
    debug_mandi("Onion", "Karnataka")
    debug_mandi("Potato", "Karnataka")
