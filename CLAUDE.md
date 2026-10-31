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
- agent: Agent profile page. Each agent has a GHL page at /<key> (e.g. /jeremy-smith) with the same embed; the path picks the AGENTS entry. Team cards link there via slug. Badges: BADGES library + EVERY_AGENT in the script; each agent lists badge keys in badges:[]. Two templates chosen automatically: video set = video section; video empty = letter section (letter + photo2). Page must work pre- and post-booking (no booking-specific wording).
- landing: Ethos-style hook page for the assessment funnel. ASSESSMENT_URL at the bottom of the script sets where every button goes (currently the TEST funnel, /assessment-5064).

## Website (GHL site "USRE Copy", usretirementeducators.org)
- Each website page (Home /home-279180, /growth, /income, /roth-conversion, /carriers, /disclosures) is one pasted Custom HTML block with its own copy of the header menu (.usre-nav desktop, .usre-mnav mobile). Those blocks are not in this repo yet.
- assets/nav.js adds extra menu links on every page. It loads from Website Settings > Body tracking code. To add or change a menu link, edit LINKS in assets/nav.js and push; no GHL change needed. The same file adds a credentials badge row under the home page hero (SHOW flag turns it off).
- Meet the Team page path: /meet-the-team-8622. Agent pages: /<key>, e.g. /jeremy-smith.

## Working rules
- Make only the change requested. Do not change scoring weights, brackets, or questions unless asked.
- Test the built .js before pushing. Intercept the webhook in tests so no real leads are created.
