import os
from PIL import Image, ImageDraw

def generate_icons():
    # Load base transparent header logo
    src_path = 'public/logo-header.png'
    if not os.path.exists(src_path):
        src_path = 'public/logo.png'
    
    img = Image.open(src_path).convert('RGBA')
    w, h = img.size

    # Crop tight bounding box around content
    img_cropped = img.crop((0, 0, w - 25, h))
    bbox = img_cropped.getbbox()
    if bbox:
        img_tight = img_cropped.crop(bbox)
    else:
        img_tight = img_cropped

    tw, th = img_tight.size

    # -------------------------------------------------------------
    # 1. White Background Square Logo (logo-square.png & favicon.ico)
    # -------------------------------------------------------------
    size = 512
    white_icon = Image.new('RGBA', (size, size), (255, 255, 255, 255))
    
    max_dim_white = 400
    scale_w = min(max_dim_white / tw, max_dim_white / th)
    nw_w, nh_w = int(tw * scale_w), int(th * scale_w)
    
    resized_white = img_tight.resize((nw_w, nh_w), Image.Resampling.LANCZOS)
    white_icon.paste(resized_white, ((size - nw_w) // 2, (size - nh_w) // 2), resized_white)
    
    white_icon.save('public/logo-square.png')

    # Multi-resolution favicon.ico
    ico_img = white_icon.convert('RGB')
    ico_img.save('public/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    ico_img.save('src/app/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])

    # 48x48 Favicon PNG
    icon_48 = white_icon.resize((48, 48), Image.Resampling.LANCZOS)
    icon_48.save('public/favicon-48x48.png')

    # -------------------------------------------------------------
    # 2. Phone App Icon (Brand Blue Background + High-Contrast Logo Emblem)
    #    Royal Brand Blue: #0066ff (RGB: 0, 102, 255)
    # -------------------------------------------------------------
    app_icon = Image.new('RGBA', (size, size), (0, 102, 255, 255))
    
    # We create a clean white rounded badge in the middle for maximum mobile app icon clarity
    badge_size = 420
    badge = Image.new('RGBA', (badge_size, badge_size), (0, 0, 0, 0))
    badge_draw = ImageDraw.Draw(badge)
    # Draw rounded rectangle container
    badge_draw.rounded_rectangle([0, 0, badge_size, badge_size], radius=80, fill=(255, 255, 255, 255))
    
    # Scale logo emblem inside the white badge
    max_dim_app = 350
    scale_app = min(max_dim_app / tw, max_dim_app / th)
    nw_a, nh_a = int(tw * scale_app), int(th * scale_app)
    
    resized_app_logo = img_tight.resize((nw_a, nh_a), Image.Resampling.LANCZOS)
    badge.paste(resized_app_logo, ((badge_size - nw_a) // 2, (badge_size - nh_a) // 2), resized_app_logo)
    
    # Paste badge into brand blue app icon canvas
    app_icon.paste(badge, ((size - badge_size) // 2, (size - badge_size) // 2), badge)
    
    # Save Phone App Icons
    app_icon.save('public/icon-512.png')
    app_icon.save('src/app/icon.png')

    icon_192 = app_icon.resize((192, 192), Image.Resampling.LANCZOS)
    icon_192.save('public/icon-192.png')

    apple_icon = app_icon.resize((180, 180), Image.Resampling.LANCZOS)
    apple_icon.save('public/apple-icon.png')
    apple_icon.save('src/app/apple-icon.png')

    print("Mobile Phone App Icons and Web Logos generated with Royal Brand Blue & Jet Black theme!")

if __name__ == '__main__':
    generate_icons()
