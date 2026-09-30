import os
import shutil
from PIL import Image

def copy_android_res():
    src_icon = 'public/icon-512.png'
    src_splash = 'public/splash-logo.jpg'
    
    if not os.path.exists(src_icon):
        print("src_icon missing")
        return

    # Mipmap dimensions
    mipmap_sizes = {
        'mipmap-mdpi': 48,
        'mipmap-hdpi': 72,
        'mipmap-xhdpi': 96,
        'mipmap-xxhdpi': 144,
        'mipmap-xxxhdpi': 192,
    }

    img = Image.open(src_icon).convert("RGBA")

    for folder, size in mipmap_sizes.items():
        target_dir = os.path.join('android/app/src/main/res', folder)
        os.makedirs(target_dir, exist_ok=True)
        
        resized = img.resize((size, size), Image.Resampling.LANCZOS)
        resized.save(os.path.join(target_dir, 'ic_launcher.png'), format="PNG")
        resized.save(os.path.join(target_dir, 'ic_launcher_round.png'), format="PNG")

    # Splash screen drawable
    drawable_dir = 'android/app/src/main/res/drawable'
    os.makedirs(drawable_dir, exist_ok=True)
    if os.path.exists(src_splash):
        shutil.copy(src_splash, os.path.join(drawable_dir, 'splash.jpg'))
        shutil.copy(src_icon, os.path.join(drawable_dir, 'splash.png'))

    print("Native Android Mipmaps & Drawables generated successfully!")

if __name__ == '__main__':
    copy_android_res()
