# USRE site code

Shared code for US Retirement Educators' GoHighLevel (GHL) pages. Each GHL page holds only a one-line embed; the code lives here and is served by GitHub Pages at https://joshualwelsh.github.io/usre-site/.

## Layout
- `<name>/<name>.html` is the source to edit (style + markup + script).
- `<name>/<name>.js` is generated. Never edit it by hand. Run `python3 build.py` after any change to a source file.

## GHL embed for a page
<div id="usre-NAME"></div><script src="https://joshualwelsh.github.io/usre-site/NAME/NAME.js"></script>

## Pages
- assessment: Retirement Risk Diagnostic (19 questions, 248-point max). Posts to the GHL inbound webhook in the file.
- team: Meet the Team page. Edit the TEAM list in the script (name, title, photo URL, bio). Photos go in assets/team/.
- agent: Agent profile page. Each agent has a GHL page at /<key> (e.g. /jeremy-smith) with the same embed; the path picks the AGENTS entry. Team cards link there via slug.
- landing: Ethos-style hook page for the assessment funnel. ASSESSMENT_URL at the bottom of the script sets where every button goes (currently the TEST funnel, /assessment-5064).

## Working rules
- Make only the change requested. Do not change scoring weights, brackets, or questions unless asked.
- Test the built .js before pushing. Intercept the webhook in tests so no real leads are created.
