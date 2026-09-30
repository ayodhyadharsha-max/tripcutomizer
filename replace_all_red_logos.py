import os
from PIL import Image, ImageDraw

def replace_all_red_logos():
    src_path = 'public/logo-header.png'
    img = Image.open(src_path).convert('RGBA')
    w, h = img.size

    # Crop tight bounding box
    img_cropped = img.crop((0, 0, w - 25, h))
    bbox = img_cropped.getbbox()
    img_tight = img_cropped.crop(bbox) if bbox else img_cropped
    tw, th = img_tight.size

    # 1. Save logo.png as clean transparent PNG
    img_tight.save('public/logo.png', format='PNG')

    # 2. Save splash-logo.jpg with white background
    splash = Image.new('RGB', (1004, 590), (255, 255, 255))
    scale_splash = min(800 / tw, 450 / th)
    nw_s, nh_s = int(tw * scale_splash), int(th * scale_splash)
    resized_splash = img_tight.resize((nw_s, nh_s), Image.Resampling.LANCZOS)
    splash.paste(resized_splash, ((1004 - nw_s) // 2, (590 - nh_s) // 2), resized_splash)
    splash.save('public/splash-logo.jpg', format='JPEG', quality=95)

    # 3. Create High-Res Royal Brand Blue (#0066ff) App Icon
    size = 512
    app_icon = Image.new('RGBA', (size, size), (0, 102, 255, 255))
    
    badge_size = 420
    badge = Image.new('RGBA', (badge_size, badge_size), (0, 0, 0, 0))
    badge_draw = ImageDraw.Draw(badge)
    badge_draw.rounded_rectangle([0, 0, badge_size, badge_size], radius=80, fill=(255, 255, 255, 255))
    
    max_dim_app = 350
    scale_app = min(max_dim_app / tw, max_dim_app / th)
    nw_a, nh_a = int(tw * scale_app), int(th * scale_app)
    
    resized_app_logo = img_tight.resize((nw_a, nh_a), Image.Resampling.LANCZOS)
    badge.paste(resized_app_logo, ((badge_size - nw_a) // 2, (badge_size - nh_a) // 2), resized_app_logo)
    app_icon.paste(badge, ((size - badge_size) // 2, (size - badge_size) // 2), badge)

    # Save to all app icon paths
    app_icon.save('public/icon-512.png', format='PNG')
    app_icon.save('public/icon.png', format='PNG')
    app_icon.save('src/app/icon.png', format='PNG')

    icon_192 = app_icon.resize((192, 192), Image.Resampling.LANCZOS)
    icon_192.save('public/icon-192.png', format='PNG')

    apple_icon = app_icon.resize((180, 180), Image.Resampling.LANCZOS)
    apple_icon.save('public/apple-icon.png', format='PNG')
    apple_icon.save('src/app/apple-icon.png', format='PNG')

    # 4. White Background Square Logo (logo-square.png & favicons)
    white_icon = Image.new('RGBA', (size, size), (255, 255, 255, 255))
    scale_w = min(400 / tw, 400 / th)
    nw_w, nh_w = int(tw * scale_w), int(th * scale_w)
    resized_w = img_tight.resize((nw_w, nh_w), Image.Resampling.LANCZOS)
    white_icon.paste(resized_w, ((size - nw_w) // 2, (size - nh_w) // 2), resized_w)
    white_icon.save('public/logo-square.png', format='PNG')

    icon_48 = white_icon.resize((48, 48), Image.Resampling.LANCZOS)
    icon_48.save('public/favicon-48x48.png', format='PNG')

    ico_img = white_icon.convert('RGB')
    ico_img.save('public/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    ico_img.save('src/app/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])

    print("Successfully replaced ALL logo assets with Royal Brand Blue theme!")

if __name__ == '__main__':
    replace_all_red_logos()
