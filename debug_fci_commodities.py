import requests
from config import Config
import json

def debug_fci_commodities():
    url = "https://api.data.gov.in/resource/814d6bf2-2790-4e1d-8d8a-eea417efb7a7"
    params = {
        'api-key': Config.DATA_GOV_API_KEY,
        'format': 'json',
        'limit': 500
    }
    headers = {
        'User-Agent': 'Mozilla/5.0'
    }
    try:
        res = requests.get(url, params=params, headers=headers, timeout=15)
        data = res.json()
        if data.get('records'):
            commodities = set()
            for r in data['records']:
                commodities.add(r.get('commodityname'))
            print(f"Unique Commodities in FCI: {sorted(list(commodities))}")
        else:
            print("No records found")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    debug_fci_commodities()
