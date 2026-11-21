# Descarga el RSS de Diario Constitucional y guarda las 12 noticias más recientes
# (solo título, enlace y fecha) en data/noticias.json. El inicio las muestra de a 2, rotando.
import json, re, urllib.request, xml.etree.ElementTree as ET
from email.utils import parsedate_to_datetime

URL = "https://www.diarioconstitucional.cl/feed/"
req = urllib.request.Request(URL, headers={"User-Agent": "Procurando/1.0 (guia para litigantes)"})
raiz = ET.fromstring(urllib.request.urlopen(req, timeout=30).read())
def imagen(enlace):
    # Imagen de portada que el propio diario publica para compartir la noticia (og:image)
    try:
        html = urllib.request.urlopen(urllib.request.Request(enlace, headers=req.headers), timeout=20).read(300000).decode("utf-8", "ignore")
        m = re.search(r'<meta[^>]+property=["\']og:image["\'][^>]+content=["\']([^"\']+)', html) or \
            re.search(r'<meta[^>]+content=["\']([^"\']+)["\'][^>]+property=["\']og:image', html)
        return m.group(1) if m else ""
    except Exception:
        return ""

noticias = []
for item in raiz.iter("item"):
    fecha = parsedate_to_datetime(item.findtext("pubDate")).astimezone().strftime("%Y-%m-%d")
    noticias.append({"titulo": item.findtext("title").strip(), "enlace": item.findtext("link").strip(), "fecha": fecha})
    if len(noticias) == 12:
        break
for n in noticias:
    n["imagen"] = imagen(n["enlace"])
with open("data/noticias.json", "w", encoding="utf-8") as f:
    json.dump({"fuente": "Diario Constitucional", "noticias": noticias}, f, ensure_ascii=False, indent=1)
print(noticias)
