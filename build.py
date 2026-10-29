"""Builds each page's .js file from its .html source.
Each .html source holds <style>, markup, and <script>. The built .js injects
the style and markup into <div id="usre-NAME"> and then runs the script."""
import json, re, pathlib
ROOT = pathlib.Path(__file__).parent
for src in ROOT.glob('*/*.html'):
    s = src.read_text()
    css = re.search(r'<style>(.*?)</style>', s, re.S).group(1)
    js = re.search(r'<script>(.*?)</script>', s, re.S).group(1)
    html = re.sub(r'<style>.*?</style>|<script>.*?</script>', '', s, flags=re.S).strip()
    name = src.stem
    out = ("(function(){var c=document.getElementById('usre-%s');if(!c)return;"
           "var st=document.createElement('style');st.textContent=%s;document.head.appendChild(st);"
           "c.innerHTML=%s;})();\n" % (name, json.dumps(css), json.dumps(html))) + js
    (src.parent / (name + '.js')).write_text(out)
    print('built', src.parent / (name + '.js'))
