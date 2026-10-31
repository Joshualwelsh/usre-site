"""Builds each page's .js file from its .html source.
Each .html source holds <style>, markup, and <script>. The built .js injects
the style and markup into <div id="usre-NAME"> and then runs the script.

Website pages: a source containing <!--@site--> also gets the shared design
system from _site/site.html (shared style, header, footer, script). Folders
starting with "_" are shared parts, not pages."""
import json, re, pathlib
ROOT = pathlib.Path(__file__).parent

def parts(s):
    css = re.search(r'<style>(.*?)</style>', s, re.S).group(1)
    js = re.search(r'<script>(.*?)</script>', s, re.S).group(1)
    html = re.sub(r'<style>.*?</style>|<script>.*?</script>', '', s, flags=re.S).strip()
    return css, html, js

site = (ROOT / '_site' / 'site.html').read_text()
S_CSS, S_HTML, S_JS = parts(site)
S_HEAD, S_FOOT = S_HTML.split('<!--@content-->')

for src in sorted(ROOT.glob('*/*.html')):
    if src.parent.name.startswith('_'):
        continue
    s = src.read_text()
    css, html, js = parts(s)
    name = src.stem
    is_site = '<!--@site-->' in s
    if is_site:
        css = S_CSS + css
        html = S_HEAD + '<main class="us-main">' + html.replace('<!--@site-->', '') + '</main>' + S_FOOT
        js = S_JS + js
    out = ("(function(){var c=document.getElementById('usre-%s');if(!c)return;%s"
           "var st=document.createElement('style');st.textContent=%s;document.head.appendChild(st);"
           "c.innerHTML=%s;})();\n" % (name, "c.classList.add('usre-site');" if is_site else '',
                                        json.dumps(css), json.dumps(html))) + js
    (src.parent / (name + '.js')).write_text(out)
    print('built', src.parent / (name + '.js'))
