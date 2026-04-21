"""
Generates public/og-cover.png (1200x630) for kimpboard.com
Run: python scripts/make-og-image.py
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "og-cover.png"

W, H = 1200, 630
BG_TOP = (8, 17, 31)
BG_BOT = (13, 27, 48)
ACCENT_GREEN = (74, 222, 128)
ACCENT_RED = (248, 113, 113)
ACCENT_BLUE = (96, 165, 250)
ACCENT_AMBER = (251, 191, 36)
WHITE = (245, 247, 250)
MUTED = (148, 163, 184)
GRID = (26, 41, 66)

FONT_BOLD = "C:/Windows/Fonts/malgunbd.ttf"
FONT_REG = "C:/Windows/Fonts/malgun.ttf"


def gradient_bg(img: Image.Image) -> None:
    px = img.load()
    for y in range(H):
        t = y / (H - 1)
        r = int(BG_TOP[0] + (BG_BOT[0] - BG_TOP[0]) * t)
        g = int(BG_TOP[1] + (BG_BOT[1] - BG_TOP[1]) * t)
        b = int(BG_TOP[2] + (BG_BOT[2] - BG_TOP[2]) * t)
        for x in range(W):
            px[x, y] = (r, g, b)


def draw_grid(d: ImageDraw.ImageDraw) -> None:
    step = 60
    for x in range(0, W, step):
        d.line([(x, 0), (x, H)], fill=GRID, width=1)
    for y in range(0, H, step):
        d.line([(0, y), (W, y)], fill=GRID, width=1)


def draw_sparkline(d: ImageDraw.ImageDraw) -> None:
    pts = [
        (80, 180), (140, 165), (200, 175), (260, 150), (320, 160),
        (380, 135), (440, 145), (500, 120), (560, 130), (620, 105),
        (680, 118), (740, 92), (800, 100), (860, 78), (920, 88),
        (980, 62), (1040, 72), (1100, 48), (1140, 58),
    ]
    for i in range(len(pts) - 1):
        d.line([pts[i], pts[i + 1]], fill=ACCENT_GREEN, width=4)
    for p in pts[::3]:
        d.ellipse([p[0] - 5, p[1] - 5, p[0] + 5, p[1] + 5], fill=ACCENT_GREEN)


def pill(d: ImageDraw.ImageDraw, x: int, y: int, text: str, color: tuple[int, int, int]) -> int:
    font = ImageFont.truetype(FONT_BOLD, 30)
    bbox = d.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    pad_x, pad_y = 26, 14
    w = tw + pad_x * 2
    h = th + pad_y * 2 + 8
    r = h // 2
    d.rounded_rectangle([x, y, x + w, y + h], radius=r, outline=color, width=3)
    d.text((x + pad_x, y + pad_y - 2), text, font=font, fill=color)
    return x + w


def main() -> None:
    img = Image.new("RGB", (W, H), BG_TOP)
    gradient_bg(img)
    d = ImageDraw.Draw(img)
    draw_grid(d)
    draw_sparkline(d)

    # Brand block
    brand_font = ImageFont.truetype(FONT_BOLD, 140)
    eng_font = ImageFont.truetype(FONT_BOLD, 36)
    sub_font = ImageFont.truetype(FONT_BOLD, 44)

    base_x = 80
    d.text((base_x, 240), "김프보드", font=brand_font, fill=WHITE)
    d.text((base_x + 8, 395), "K I M P B O A R D", font=eng_font, fill=ACCENT_BLUE)
    d.text((base_x, 450), "코인 · ETF · 원자재 한국 프리미엄 관측소", font=sub_font, fill=MUTED)

    # Pills
    pills = [
        ("코인 김프", ACCENT_GREEN),
        ("ETF 괴리율", ACCENT_BLUE),
        ("원자재 프리미엄", ACCENT_AMBER),
        ("위험 신호", ACCENT_RED),
    ]
    x = base_x
    y = 535
    for text, color in pills:
        x = pill(d, x, y, text, color) + 14

    # Domain tag bottom-right
    dom_font = ImageFont.truetype(FONT_REG, 28)
    dom = "kimpboard.com"
    bbox = d.textbbox((0, 0), dom, font=dom_font)
    tw = bbox[2] - bbox[0]
    d.text((W - tw - 80, 60), dom, font=dom_font, fill=MUTED)

    # Small accent badges top-right ("+김프 / -역프")
    badge_font = ImageFont.truetype(FONT_BOLD, 26)
    def badge(text: str, color: tuple[int, int, int], cx: int, cy: int) -> None:
        bb = d.textbbox((0, 0), text, font=badge_font)
        tw = bb[2] - bb[0]
        pad = 16
        w = tw + pad * 2
        h = 48
        x0 = cx - w
        d.rounded_rectangle([x0, cy, cx, cy + h], radius=h // 2, fill=color)
        d.text((x0 + pad, cy + 6), text, font=badge_font, fill=BG_TOP)

    badge("+ 김프", ACCENT_GREEN, W - 80, 120)
    badge("- 역프", ACCENT_RED, W - 80, 180)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, format="PNG", optimize=True)
    print(f"saved: {OUT}  ({OUT.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
