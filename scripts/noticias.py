# Descarga el RSS de Diario Constitucional y guarda las 2 noticias más recientes
# (solo título, enlace y fecha) en data/noticias.json para la pantalla de inicio.
import json, urllib.request, xml.etree.ElementTree as ET
from email.utils import parsedate_to_datetime

URL = "https://www.diarioconstitucional.cl/feed/"
req = urllib.request.Request(URL, headers={"User-Agent": "Procurando/1.0 (guia para litigantes)"})
raiz = ET.fromstring(urllib.request.urlopen(req, timeout=30).read())
noticias = []
for item in raiz.iter("item"):
    fecha = parsedate_to_datetime(item.findtext("pubDate")).astimezone().strftime("%Y-%m-%d")
    noticias.append({"titulo": item.findtext("title").strip(), "enlace": item.findtext("link").strip(), "fecha": fecha})
    if len(noticias) == 2:
        break
with open("data/noticias.json", "w", encoding="utf-8") as f:
    json.dump({"fuente": "Diario Constitucional", "noticias": noticias}, f, ensure_ascii=False, indent=1)
print(noticias)
