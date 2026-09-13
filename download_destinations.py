import urllib.request
import os

dest_dir = "public/destinations"
os.makedirs(dest_dir, exist_ok=True)

# Unsplash High-Res Handpicked Travel Photography URLs (Direct Unsplash Source links)
images = {
    "hero-beach.jpg": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop", # Bali Nusa Penida Cliff
    "europe.jpg": "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?q=80&w=1000&auto=format&fit=crop", # Leaning Tower of Pisa / Eiffel Tower
    "australia.jpg": "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1000&auto=format&fit=crop", # Sydney Opera House
    "japan.jpg": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop", # Japan Pagoda & Cherry Blossom
    "vietnam.jpg": "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000&auto=format&fit=crop", # Vietnam Ha Long Bay / Pagoda
    "new-zealand.jpg": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop", # New Zealand Hobbiton / Landscape
    "antarctica.jpg": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1000&auto=format&fit=crop", # Antarctica Penguins
    "kashmir.jpg": "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=1000&auto=format&fit=crop", # Kashmir Snow Mountains Gulmarg
    "kerala.jpg": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000&auto=format&fit=crop", # Kerala Backwaters Palm Trees
    "rajasthan.jpg": "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=1000&auto=format&fit=crop", # Jodhpur Rajasthan Fort
    "ladakh.jpg": "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1000&auto=format&fit=crop", # Pangong Tso Ladakh
    "andaman.jpg": "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=1000&auto=format&fit=crop", # Andaman Tropical Beach
    "singapore.jpg": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1000&auto=format&fit=crop", # Singapore Marina Bay Sands
    "dubai.jpg": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop", # Dubai Burj Khalifa Skyline
    "switzerland.jpg": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000&auto=format&fit=crop", # Switzerland Alpine Train Snow
    "france.jpg": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop", # Eiffel Tower Paris
    "uk.jpg": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop", # London Big Ben Parliament
    "uttarakhand.jpg": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop", # Rishikesh River Rafting Uttarakhand
    "up.jpg": "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop", # Taj Mahal Agra
    "spiritual.jpg": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1000&auto=format&fit=crop", # South Indian Temple Sunrise
    "honeymoon.jpg": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1000&auto=format&fit=crop", # Romantic Sunset Beach
    "luxury.jpg": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop", # Luxury Resort Overwater Pool
    "adventure.jpg": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop", # Mountain Hiker Landscape
    "wildlife.jpg": "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop", # African Safari Wildlife Elephant
    "why-us.jpg": "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1200&auto=format&fit=crop", # Family Travelers Airport Lounge
}

req_headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'}

for name, url in images.items():
    filepath = os.path.join(dest_dir, name)
    print(f"Downloading {name}...")
    try:
        req = urllib.request.Request(url, headers=req_headers)
        with urllib.request.urlopen(req) as resp, open(filepath, 'wb') as f:
            f.write(resp.read())
        print(f"  ✓ {name} downloaded successfully!")
    except Exception as e:
        print(f"  ✗ Error downloading {name}: {e}")

print("Done downloading all premium destination images!")
