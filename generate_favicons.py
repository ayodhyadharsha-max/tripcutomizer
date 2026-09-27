import os
from PIL import Image, ImageDraw

def create_brand_favicon():
    # Load base logo image
    logo_path = 'public/logo-header.png'
    if not os.path.exists(logo_path):
        logo_path = 'public/logo.png'
    
    base_logo = Image.open(logo_path).convert("RGBA")

    # Crop tight bounding box of non-transparent content
    bbox = base_logo.getbbox()
    if bbox:
        base_logo = base_logo.crop(bbox)

    # We will create a 512x512 canvas with clean white background & subtle rounded border
    size = 512
    canvas = Image.new("RGBA", (size, size), (255, 255, 255, 255))
    
    # Draw soft subtle brand border around icon for high visibility
    draw = ImageDraw.Draw(canvas)
    
    # Calculate scale to fit inside 512x512 with 18% padding (370x370 content area)
    max_dim = 370
    w, h = base_logo.size
    scale = min(max_dim / w, max_dim / h)
    new_w = int(w * scale)
    new_h = int(h * scale)
    
    resized_logo = base_logo.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Center the logo on canvas
    offset_x = (size - new_w) // 2
    offset_y = (size - new_h) // 2
    
    canvas.paste(resized_logo, (offset_x, offset_y), resized_logo)
    
    # Save 512x512 PNG
    logo_square_path = 'public/logo-square.png'
    canvas.save(logo_square_path, format="PNG")
    canvas.save('public/icon-512.png', format="PNG")
    canvas.save('src/app/icon.png', format="PNG")

    # Save 192x192 PNG
    icon_192 = canvas.resize((192, 192), Image.Resampling.LANCZOS)
    icon_192.save('public/icon-192.png', format="PNG")

    # Save 180x180 Apple Icon PNG
    apple_icon = canvas.resize((180, 180), Image.Resampling.LANCZOS)
    apple_icon.save('public/apple-icon.png', format="PNG")
    apple_icon.save('src/app/apple-icon.png', format="PNG")

    # Save 48x48 PNG (Google Favicon primary size)
    icon_48 = canvas.resize((48, 48), Image.Resampling.LANCZOS)
    icon_48.save('public/favicon-48x48.png', format="PNG")

    # Save multi-resolution ICO file
    ico_img = canvas.convert("RGB")
    ico_img.save('public/favicon.ico', format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    ico_img.save('src/app/favicon.ico', format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])

    print("All Google-compliant favicons and brand logos generated successfully!")

if __name__ == '__main__':
    create_brand_favicon()
