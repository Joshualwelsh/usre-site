# USRE site code

Shared code for US Retirement Educators' GoHighLevel (GHL) pages. Each GHL page holds only a one-line embed; the code lives here and is served by GitHub Pages at https://joshualwelsh.github.io/usre-site/.

## Layout
- `<name>/<name>.html` is the source to edit (style + markup + script).
- `<name>/<name>.js` is generated. Never edit it by hand. Run `python3 build.py` after any change to a source file.

## GHL embed for a page
<div id="usre-NAME"></div><script src="https://joshualwelsh.github.io/usre-site/NAME/NAME.js"></script>

## Pages
- assessment: Retirement Risk Diagnostic (19 questions, 248-point max). Posts to the GHL inbound webhook in the file.
- team: Meet the Team page (shared site design). Edit the TEAM list in the script (name, title, photo URL, bio, slug). Each card links to /slug. Photos go in assets/team/.
- agent: Agent profile page. Each agent has a GHL page at /<key> (e.g. /jeremy-smith) with the same embed; the path picks the AGENTS entry. Team cards link there via slug. Badges: BADGES library + EVERY_AGENT in the script; each agent lists badge keys in badges:[]. Two templates chosen automatically: video set = video section; video empty = letter section (letter + photo2). Page must work pre- and post-booking (no booking-specific wording).
- landing: Ethos-style hook page for the assessment funnel. ASSESSMENT_URL at the bottom of the script sets where every button goes (currently the TEST funnel, /assessment-5064).

## Website (GHL site "USRE Copy", usretirementeducators.org)
- Design system: _site/site.html holds the shared CSS (scoped to .usre-site, us-* classes), header, footer and script. Any page source containing <!--@site--> gets it at build time. SITE links (home, assessment, book, team, logo) live at the top of its script; change once, every page updates.
- Website pages in this repo: home (/home-279180), growth, income, roth-conversion, carriers, disclosures; team and agent also use the shared header/footer. Disclosures text is legal copy: keep it verbatim.
- Until a GHL page is swapped to its embed, it still runs its old pasted Custom HTML (classes .usre-nav/.usre-hero).
- assets/nav.js (legacy, for old pasted pages only) adds extra menu links on every page. It loads from Website Settings > Body tracking code. To add or change a menu link, edit LINKS in assets/nav.js and push; no GHL change needed. The same file adds a looping badge strip under the home page stats bar (SHOW flag turns it off; artwork generated per badge in ART).
- Meet the Team page path: /meet-the-team-8622. Agent pages: /<key>, e.g. /jeremy-smith.

## Working rules
- Make only the change requested. Do not change scoring weights, brackets, or questions unless asked.
- Test the built .js before pushing. Intercept the webhook in tests so no real leads are created.
