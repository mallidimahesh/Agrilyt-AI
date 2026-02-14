import sys
import os

# Add the current directory to sys.path to import services
sys.path.append(os.getcwd())

from backend.services.fci_service import get_fci_stock
from backend.config import Config

def test_fci():
    print(f"Testing FCI Stock API for Bengaluru...")
    
    # Test Rice
    rice_stock = get_fci_stock("bengaluru", "Rice")
    print(f"Rice Stock in Bengaluru: {rice_stock} Tonnes")
    
    # Test Wheat
    wheat_stock = get_fci_stock("bengaluru", "Wheat")
    print(f"Wheat Stock in Bengaluru: {wheat_stock} Tonnes")
    
    # Test Onion (Should be None as FCI usually doesn't stock onions)
    onion_stock = get_fci_stock("bengaluru", "Onion")
    print(f"Onion Stock in Bengaluru: {onion_stock}")

if __name__ == "__main__":
    test_fci()
