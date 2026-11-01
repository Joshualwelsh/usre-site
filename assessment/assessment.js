(function(){var c=document.getElementById('usre-assessment');if(!c)return;var st=document.createElement('style');st.textContent="\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');\n:root{--nv:#1a2f4e;--nd:#0F2347;--ch:#344054;--gd:#c9a84c;--gdk:#9a7724;--gdl:#f7f0dc;--ow:#f6f7f9;--br:#e6e9ef;--mu:#5d6b82;--ink:#101828}\n*{box-sizing:border-box;margin:0;padding:0}\nbody{font-family:'Inter',Arial,sans-serif;background:var(--ow);color:var(--ch)}\nform{display:none!important}\n#rw{max-width:720px;margin:0 auto;padding:48px 20px}\n.rh{background:var(--nd);border-radius:16px 16px 0 0;padding:15px 28px;display:flex;justify-content:space-between;align-items:center}\n.rl{font-family:'Inter',Arial,sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:var(--gd)}\n.rs{font-family:'Inter',Arial,sans-serif;font-size:11px;color:#94a3b8}\n.pw{background:var(--nv);padding:13px 28px;margin-bottom:2px}\n.pm{display:flex;justify-content:space-between;font-family:'Inter',Arial,sans-serif;font-size:11px;color:#94a3b8;margin-bottom:7px}\n.pt{height:4px;background:rgba(255,255,255,.15);border-radius:100px}\n.pf{height:100%;background:var(--gd);border-radius:100px;transition:width .4s ease;width:0}\n.qc{background:#fff;border-radius:0 0 16px 16px;padding:44px 48px;box-shadow:0 20px 50px rgba(15,30,51,.10);min-height:400px;animation:su .3s ease}\n@keyframes su{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}\n.qcat{display:inline-block;background:rgba(26,47,78,.08);color:var(--nv);font-family:'Inter',Arial,sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;padding:5px 12px;border-radius:4px;margin-bottom:16px}\n.qn{font-family:'Inter',Arial,sans-serif;font-size:12px;color:var(--mu);margin-bottom:10px}\n.qt{font-size:22px;font-weight:700;letter-spacing:-.3px;line-height:1.4;color:var(--nd);margin-bottom:10px}\n.qno{font-family:'Inter',Arial,sans-serif;font-size:12px;font-style:italic;color:var(--mu);margin-bottom:24px}\n.mnote{font-family:'Inter',Arial,sans-serif;font-size:12px;font-weight:700;color:var(--gd);margin-bottom:12px}\n.ab{display:flex;align-items:center;gap:13px;width:100%;padding:16px 20px;margin-bottom:10px;background:var(--ow);border:2px solid var(--br);border-radius:12px;font-size:16px;font-family:'Inter',Arial,sans-serif;color:var(--ch);text-align:left;cursor:pointer;transition:all .18s ease}\n.ab:hover{border-color:var(--nv);background:#eef2f9}\n.ab.picked{border-color:var(--gd);background:#fffbf0;font-weight:600;color:var(--nd)}\n.ad{width:20px;height:20px;border-radius:50%;border:2px solid var(--br);flex-shrink:0;transition:all .18s}\n.ab.picked .ad{background:var(--gd);border-color:var(--gd)}\n.iw{position:relative;margin-bottom:8px}\n.iw .pre{position:absolute;left:18px;top:50%;transform:translateY(-50%);font-family:'Inter',Arial,sans-serif;font-size:20px;color:var(--mu)}\n.iw .suf{position:absolute;right:18px;top:50%;transform:translateY(-50%);font-family:'Inter',Arial,sans-serif;font-size:14px;color:var(--mu)}\n.ni{display:block;width:100%;padding:17px 90px 17px 38px;border:2px solid var(--br);border-radius:12px;font-size:20px;font-family:'Inter',Arial,sans-serif;color:var(--nd);background:var(--ow)}\n.ni:focus{outline:none;border-color:var(--nv);background:#fff}\n.nh{font-family:'Inter',Arial,sans-serif;font-size:12px;color:var(--mu);margin-bottom:6px}\n.bk{display:inline-block;background:none;border:none;font-family:'Inter',Arial,sans-serif;font-size:13px;color:var(--mu);cursor:pointer;margin-top:18px;padding:4px 0}\n.bk:hover{color:var(--nv);text-decoration:underline}\n.nerr{font-family:'Inter',Arial,sans-serif;font-size:13px;color:#b91c1c;min-height:18px;margin-bottom:10px}\n#os{display:none}\n.oc{background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(15,30,51,.12);animation:su .3s ease}\n.oh{background:var(--nd);padding:30px 40px;text-align:center}\n.ob2{display:inline-block;border:1px solid var(--gd);color:var(--gd);font-family:'Inter',Arial,sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;padding:5px 14px;border-radius:4px;margin-bottom:14px}\n.oh h2{font-size:25px;color:#fff;line-height:1.3;margin-bottom:8px}\n.oh p{font-family:'Inter',Arial,sans-serif;font-size:14px;color:#94a3b8;line-height:1.6}\n.ob{padding:34px 40px}\n.ob input{display:block;width:100%;padding:15px 18px;margin-bottom:11px;border:2px solid var(--br);border-radius:12px;font-size:16px;font-family:'Inter',Arial,sans-serif;color:var(--ch);background:var(--ow);transition:border-color .2s}\n.ob input:focus{outline:none;border-color:var(--nv);background:#fff}\n.os2{display:block;width:100%;padding:18px;background:var(--gd);color:var(--nd);border:none;border-radius:999px;font-size:17px;font-weight:700;font-family:'Inter',Arial,sans-serif;cursor:pointer;letter-spacing:.4px;margin-top:4px;transition:background .2s,transform .2s}\n.os2:hover{background:#d4b45e;transform:translateY(-1px)}\n.pv{font-family:'Inter',Arial,sans-serif;font-size:11px;color:var(--mu);text-align:center;margin-top:12px}\n.sc{font-family:'Inter',Arial,sans-serif;font-size:11px;color:var(--mu);text-align:center;line-height:1.6;margin-top:14px}\n.sc a{color:var(--nv);text-decoration:underline}\n#res{display:none;animation:su .4s ease}\n.rsh{border-radius:16px 16px 0 0;padding:32px 40px;text-align:center}\n.rsl{font-family:'Inter',Arial,sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:rgba(255,255,255,.65);margin-bottom:8px}\n.rsv{font-size:21px;font-weight:900;color:#fff;text-transform:uppercase;letter-spacing:.5px;line-height:1.2;margin-bottom:18px}\n.scr{display:inline-flex;align-items:center;gap:18px;background:rgba(0,0,0,.22);border-radius:8px;padding:12px 24px}\n.sb{font-size:54px;font-weight:900;color:#fff;line-height:1}\n.sb span{font-size:20px;color:rgba(255,255,255,.45)}\n.sml{font-family:'Inter',Arial,sans-serif;font-size:10px;color:rgba(255,255,255,.55);text-transform:uppercase;letter-spacing:1px}\n.smv{font-family:'Inter',Arial,sans-serif;font-size:13px;font-weight:700;color:#fff;margin-top:2px}\n.rb{background:#fff;padding:36px 40px;box-shadow:0 8px 32px rgba(15,30,51,.12)}\n.sl{font-family:'Inter',Arial,sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:var(--mu);margin-bottom:14px;padding-bottom:8px;border-bottom:1px solid var(--br)}\n.bx{background:var(--ow);border:1px solid var(--br);border-radius:12px;padding:18px 22px;margin-bottom:28px}\n.bxt{font-family:'Inter',Arial,sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:var(--mu);margin-bottom:10px}\n.br2{display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid var(--br);font-size:13px;font-family:'Inter',Arial,sans-serif}\n.br2:last-child{border-bottom:none}\n.br2{gap:14px}\n.br2>span:first-child,.anc>.lbl{flex:1;min-width:0}\n.br2>span:last-child,.val{white-space:nowrap;text-align:right}\n.br2.act{font-weight:700;font-size:14px}\n.bp{color:var(--mu)}\n.prods{font-family:'Inter',Arial,sans-serif;font-size:14px;color:var(--ch);line-height:1.7}\n.vct{font-family:'Inter',Arial,sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#991b1b;margin:28px 0 14px;padding-bottom:8px;border-bottom:1px solid #fecaca}\n.vi{display:flex;gap:15px;margin-bottom:16px;padding:18px 20px;background:#fff5f5;border-left:4px solid #dc2626;border-radius:0 8px 8px 0}\n.vic{font-size:20px;flex-shrink:0;margin-top:2px}\n.vit{font-family:'Inter',Arial,sans-serif;font-size:15px;font-weight:700;color:var(--nd);margin-bottom:6px}\n.vtl{font-family:'Inter',Arial,sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#991b1b;margin-bottom:6px}\n.vid{font-family:'Inter',Arial,sans-serif;font-size:14px;color:#4b5563;line-height:1.65}\n.rf{background:#eef4ff;border-left:3px solid #1d4ed8;border-radius:0 6px 6px 0;padding:12px 14px;margin-bottom:14px}\n.rf-tag{font-family:'Inter',Arial,sans-serif;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#1d4ed8;margin-bottom:6px}\n.rf-txt{font-family:'Inter',Arial,sans-serif;font-size:13px;font-weight:600;color:#1e293b;line-height:1.65}\n.cb{background:var(--nd);border-radius:0 0 16px 16px;padding:40px;text-align:center}\n.ce{font-family:'Inter',Arial,sans-serif;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:var(--gd);margin-bottom:12px}\n.ch2{font-size:23px;font-weight:bold;color:#fff;line-height:1.3;margin-bottom:12px}\n.cs{font-family:'Inter',Arial,sans-serif;font-size:14px;color:#94a3b8;line-height:1.75;margin-bottom:28px;max-width:520px;margin-left:auto;margin-right:auto}\n.ca{display:inline-block;padding:18px 44px;background:var(--gd);color:var(--nd);text-decoration:none;border-radius:8px;font-size:16px;font-weight:700;font-family:'Inter',Arial,sans-serif;letter-spacing:.3px;transition:transform .2s,box-shadow .2s}\n.ca:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(201,168,76,.4)}\n.cn{font-family:'Inter',Arial,sans-serif;font-size:11px;color:#64748b;margin-top:14px}\n.sent{background:#fff;border:1px solid var(--br);border-radius:12px;padding:28px 32px;margin-top:20px;text-align:center;box-shadow:0 8px 32px rgba(15,30,51,.08)}\n.sent-ic{font-size:26px;margin-bottom:8px}\n.sent h3{font-size:19px;color:var(--nd);margin-bottom:8px}\n.sent p{font-family:'Inter',Arial,sans-serif;font-size:14px;color:#4b5563;line-height:1.7}\n.sent b{color:var(--nd);white-space:nowrap}\n.anc{color:inherit;text-decoration:none;cursor:pointer;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;width:100%;column-gap:14px;row-gap:4px}\n.anc:hover .see{text-decoration:underline}\n.see{font-family:'Inter',Arial,sans-serif;font-size:11px;font-weight:700;color:#1d4ed8;white-space:nowrap}\n.vi.flash{box-shadow:0 0 0 3px #93c5fd;transition:box-shadow .3s}\n/* ===== Site design refresh (look only; questions, scoring and webhook unchanged) ===== */\nbody{background:linear-gradient(180deg,#fbf9f3 0px,#f6f7f9 520px)}\n#rw{max-width:740px;padding:36px 20px 64px}\n.abr{display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:26px}\n.abr img{width:44px;height:44px;border-radius:50%;box-shadow:0 4px 12px rgba(15,35,71,.18)}\n.abr span{font-family:Georgia,'Times New Roman',serif;font-weight:700;font-size:20px;color:var(--nd)}\n.abr em{font-style:normal;color:var(--gdk)}\n.rh{border-radius:20px 20px 0 0;padding:16px 30px}\n.pw{padding:12px 30px 16px;margin-bottom:0;border-bottom:2px solid var(--gd)}\n.pt{height:6px}\n.qc{border-radius:0 0 20px 20px;padding:44px 50px 40px;box-shadow:0 30px 70px rgba(15,35,71,.12);border:1px solid var(--br);border-top:0}\n.qcat{background:var(--gdl);color:var(--nd);border-radius:999px;padding:6px 13px;font-size:10.5px;letter-spacing:1.6px}\n.qt{font-size:26px;font-weight:800;letter-spacing:-.5px;line-height:1.3;color:var(--ink)}\n.ab{background:#fff;border:1.5px solid var(--br);border-radius:14px;padding:17px 20px;font-weight:500;box-shadow:0 1px 2px rgba(16,24,40,.04)}\n.ab:hover{border-color:#c9cfdb;background:#fafbfc;transform:translateY(-1px);box-shadow:0 6px 16px rgba(15,35,71,.08)}\n.ab.picked{border-color:var(--gd);background:#fffaf0;box-shadow:0 0 0 3px rgba(201,168,76,.18)}\n.ad{border:2px solid #c9cfdb}\n.ab.picked .ad{box-shadow:inset 0 0 0 3px #fff}\n.ni,.ob input{background:#fff;border:1.5px solid var(--br);border-radius:14px}\n.ni:focus,.ob input:focus{border-color:var(--gd);box-shadow:0 0 0 3px rgba(201,168,76,.18)}\n.oc{border-radius:20px;box-shadow:0 30px 70px rgba(15,35,71,.12)}\n.oh{padding:34px 44px;border-bottom:2px solid var(--gd)}\n.oh h2{font-size:27px;font-weight:800;letter-spacing:-.5px}\n.ob2{border-radius:999px;padding:6px 14px}\n.ob{padding:34px 44px 30px}\n.rsh{border-radius:20px 20px 0 0}\n.rb{border-left:1px solid var(--br);border-right:1px solid var(--br);box-shadow:0 30px 70px rgba(15,35,71,.10)}\n.bx{background:#fff;border-radius:14px;box-shadow:0 1px 2px rgba(16,24,40,.04)}\n.vi{border-radius:0 12px 12px 0}\n.cb{border-radius:0 0 20px 20px;border-top:2px solid var(--gd)}\n.ch2{font-weight:800;letter-spacing:-.4px}\n.ca{border-radius:999px}\n.sent{border-radius:20px}\n/* Mobile: calmer question screens (look only) */\n@media(max-width:600px){\n  .abr{margin-bottom:14px}.abr span{font-size:15px}.abr img{width:32px;height:32px}\n  #qs .rh{display:none}\n  #qs .pw{background:#fff;border:1px solid var(--br);border-bottom:0;border-radius:20px 20px 0 0;padding:16px 18px 0}\n  #qs .pm{color:var(--mu);font-size:11.5px;font-weight:600;margin-bottom:8px}\n  .qn{display:none}\n  #qs .pt{background:#eef0f4;height:5px}\n  .qcat{display:none}\n  .qc{border-radius:0 0 20px 20px;padding:18px 18px 24px;box-shadow:0 18px 40px rgba(15,35,71,.08)}\n  .qt{margin-bottom:8px}\n  .qno{margin-bottom:18px}\n  .ab{margin-bottom:9px;box-shadow:none}\n  .bk{margin-top:10px}\n}\n@media print{\n  @page{margin:12mm}\n  body *{visibility:hidden}\n  #rw,#rw *{visibility:visible}\n  #rw{position:absolute;left:0;top:0;width:100%;max-width:none;padding:0}\n  #rw *{-webkit-print-color-adjust:exact;print-color-adjust:exact}\n  #qs,#os,.bk,.see{display:none!important}\n  .rb,.oc,.qc{box-shadow:none!important}\n  .rsh,.bx,.vi,.cb,.rf{break-inside:avoid;page-break-inside:avoid}\n  .rsh{border-radius:0;padding:20px}\n  .rb{padding:20px 0}\n  .cb{border-radius:0;padding:20px}\n  .vct{break-after:avoid;page-break-after:avoid}\n  #res{animation:none!important}\n}\n@media(max-width:600px){#rw{padding:22px 12px 40px}.abr{margin-bottom:18px}.abr img{width:38px;height:38px}.abr span{font-size:17px}.rh,.pw{padding-left:18px;padding-right:18px}.oh h2{font-size:22px}.bx{padding:14px 16px}.bxt{letter-spacing:1px}.br2{font-size:13px}.br2.act{font-size:13px}.anc .see{flex-basis:100%;order:3}.qc,.ob,.rb,.cb{padding:28px 18px}.qt{font-size:20px}.ab{font-size:15px;padding:15px 16px}.oh{padding:24px 22px}}\n";document.head.appendChild(st);c.innerHTML="<div id=\"rw\">\n  <div class=\"abr\"><img src=\"https://joshualwelsh.github.io/usre-site/assets/usre-logo.png\" alt=\"\"><span>US <em>Retirement</em> Educators</span></div>\n  <div id=\"qs\">\n    <div class=\"rh\"><div class=\"rl\">Retirement Risk Diagnostic</div><div class=\"rs\">&#128274; Confidential Assessment</div></div>\n    <div class=\"pw\">\n      <div class=\"pm\"><span id=\"pt\">Diagnostic Intake &#8212; Question 1 of 19</span><span id=\"pp\">0% Complete</span></div>\n      <div class=\"pt\"><div class=\"pf\" id=\"pf\"></div></div>\n    </div>\n    <div class=\"qc\" id=\"qc\"></div>\n  </div>\n  <div id=\"os\">\n    <div class=\"oc\">\n      <div class=\"oh\">\n        <div class=\"ob2\">&#9888; Analysis Complete &#8212; Report Pending</div>\n        <h2>Your Retirement Risk Score Has Been Calculated</h2>\n        <p>Enter your details to immediately access your personalized Retirement Risk Diagnostic Report &#8212; including your score, risk level, and all active risk factors.</p>\n      </div>\n      <div class=\"ob\">\n        <input type=\"text\" id=\"ff\" placeholder=\"First Name\"/>\n        <input type=\"text\" id=\"fl\" placeholder=\"Last Name\"/>\n        <input type=\"email\" id=\"fe\" placeholder=\"Email Address\"/>\n        <input type=\"tel\" id=\"fp\" placeholder=\"Phone Number\"/>\n        <button class=\"os2\" onclick=\"submitOptIn()\">Access My Risk Diagnostic Report &#8594;</button>\n        <p class=\"sc\">By clicking &ldquo;Access My Risk Diagnostic Report,&rdquo; you agree to receive text messages from US Retirement Educators about appointment reminders, scheduling updates, and customer support at the number provided. Message frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out, HELP for help. Consent is not a condition of purchase. <a href=\"https://www.usretirementeducators.org/disclosures\" target=\"_blank\" rel=\"noopener\">Privacy Policy</a> &middot; <a href=\"https://www.usretirementeducators.org/disclosures\" target=\"_blank\" rel=\"noopener\">Terms of Service</a></p>\n        <p class=\"pv\">&#128274; Confidential. Your information is secured and never sold or shared.</p>\n      </div>\n    </div>\n  </div>\n  <div id=\"res\"></div>\n</div>";})();

var BOOKING_URL='https://www.usretirementeducators.org/book-a-call';
var WEBHOOK_URL='https://services.leadconnectorhq.com/hooks/YvOLeoXfNSryNdZQ39AN/webhook-trigger/4ddd00d6-0dc9-40bf-abeb-b2d5ff4068b7';
var PORTFOLIO_MID=[2500000,1500000,750000,375000,175000];
var EQUITY_MID=[0.90,0.65,0.35,0.10];
var RULE100_BENCH=[0.25,0.31,0.38,0.45];
var LTC={al:70800,nhp:127750,yrsM:2.2,yrsW:3.7};

function fmtDollar(n){
  var r=Math.round(n/1000)*1000;
  if(r>=1000000)return '$'+(r/1000000).toFixed(1).replace(/\.0$/,'')+'M';
  return '$'+r.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
}

var Qs=[
{c:'Age & Vulnerability Window',t:'What is your current age?',n:'Your age plays a big role in how a market drop could affect you.',
a:[{l:'73 to 78',w:6},{l:'66 to 72',w:5},{l:'60 to 65',w:4},{l:'59\u00bd or under',w:1}]},
{c:'Tax & Filing Profile',t:'How do you typically file your taxes?',n:null,
a:[{l:'Married, filing jointly',w:2},{l:'Single / individual filer',w:2}]},
{c:'Distribution Status',t:'Where are you in your retirement journey right now?',n:null,
a:[{l:'Fully retired \u2014 I rely on my savings for regular income',w:8},{l:'Semi-retired \u2014 using some savings income',w:6},{l:'Fully retired \u2014 pension/Social Security covers me, I don\u2019t need savings income',w:2},{l:'Still working full-time',w:1}]},
{c:'Social Security Integration',t:'What\u2019s your current plan with Social Security?',n:'Social Security gives you steady income that doesn\u2019t depend on the stock market.',
a:[{l:'I\u2019m already collecting it',w:0},{l:'I\u2019m eligible but haven\u2019t applied yet',w:3},{l:'I plan to apply within the next 1\u20133 years',w:2},{l:'I\u2019m more than 3 years from collecting',w:4}]},
{c:'Monthly Expenses',t:'How much do you need each month to live comfortably in retirement, including bills, travel, hobbies and gifts?',n:null,num:true,min:1,ph:'6,000'},
{c:'Social Security Income',t:'How much does your household receive, or expect to receive, from Social Security each month in total?',n:'If married, include both spouses\u2019 benefits.',num:true,min:0,ph:'2,500'},
{c:'Other Income',t:'How much monthly income do you have from other sources, like a pension, rental property, or part-time work?',n:null,num:true,min:0,ph:'0'},
{c:'Protected Income',t:'Which of these retirement products do you currently have?',n:'Select all that apply.',multi:true,
items:[
  {id:'401k',l:'401(k) / 403(b) / employer plan'},
  {id:'ira',l:'Roth IRA / Traditional IRA'},
  {id:'brokerage',l:'Brokerage account / Stocks / Bonds / Mutual funds'},
  {id:'income_annuity',l:'Income annuity (pays monthly income)'},
  {id:'growth_annuity',l:'Growth annuity / MYGA (savings growth)'},
  {id:'cd',l:'Certificate of Deposit (CD)'},
  {id:'cash',l:'Cash / Savings / Money Market'}
]},
{c:'Income Distribution Timeline',t:'When did you begin \u2014 or plan to begin \u2014 taking money out of your retirement accounts?',n:null,
a:[{l:'More than 5 years ago',w:10},{l:'1 to 5 years ago',w:8},{l:'Within the next 1\u20132 years',w:7},{l:'3 or more years from now',w:1}]},
{c:'Portfolio Management Structure',t:'Who currently manages your retirement investments?',n:null,
a:[{l:'A traditional broker or financial advisor',w:5},{l:'I manage them myself',w:3},{l:'Fixed or guaranteed accounts',w:1}]},
{c:'Liquidity Reserve Analysis',t:'If the market dropped tomorrow, how many months of expenses could you cover from cash or savings?',n:'Cash on hand is your protection against having to sell investments at a loss.',
a:[{l:'12 or more months',w:0},{l:'6 to 12 months',w:4},{l:'3 to 6 months',w:8},{l:'Less than 3 months',w:14}]},
{c:'Retirement Debt Liability',t:'How much debt are you carrying into retirement?',n:'Debt forces you to take money from your savings every month \u2014 no matter what the market is doing.',
a:[{l:'No debt',w:0},{l:'A mortgage only, with a manageable payment',w:3},{l:'A mortgage plus some other debt',w:6},{l:'Significant debt across several areas',w:10}]},
{c:'Recovery Timeline Resilience',t:'If the market dropped 30% tomorrow, would you have a strategy to get through it?',n:'This is one of the most important factors in your overall risk.',
a:[{l:'No \u2014 I\u2019d have to keep taking money out as it fell',w:16},{l:'I\u2019m not sure how my plan would handle it',w:8},{l:'Yes \u2014 I have cash reserves so I don\u2019t have to sell',w:0}]},
{c:'Equity Exposure Analysis',t:'What portion of your retirement savings is invested in the stock market?',n:'This is the single most important factor in your overall risk.',
a:[{l:'80% to 100%',w:50},{l:'50% to 79%',w:35},{l:'20% to 49%',w:15},{l:'Less than 20%',w:0}]},
{c:'Downside Stress-Test History',t:'Has your retirement plan ever been tested against a big market drop?',n:'If it hasn\u2019t been tested, you don\u2019t know how it would hold up.',
a:[{l:'No \u2014 never',w:10},{l:'I\u2019m not sure',w:5},{l:'Yes \u2014 it\u2019s been tested',w:0}]},
{c:'Required Minimum Distribution Planning',t:'Are you familiar with Required Minimum Distributions (RMDs) \u2014 the IRS-required withdrawals that begin around age 73?',n:'RMDs are amounts the IRS requires you to take from retirement accounts once you turn 73.',
a:[{l:'Yes \u2014 I\u2019ve planned for them',w:0},{l:'I\u2019ve heard of them but haven\u2019t planned',w:5},{l:'No \u2014 I haven\u2019t looked into it',w:8}]},
{c:'Long-Term Care Risk Planning',t:'Do you have a plan to cover long-term care costs, like assisted living or in-home care?',n:'Long-term care is one of the biggest risks to a retirement plan.',
a:[{l:'Yes \u2014 I have long-term care insurance',w:0},{l:'Yes \u2014 I have savings set aside for it',w:5},{l:'I plan to rely on family help',w:10},{l:'No \u2014 I have no plan',w:20}]},
{c:'Downside Dollar Exposure',t:'If the market dropped 30%, roughly how much value would your portfolio lose?',n:null,
a:[{l:'More than $400,000',w:15},{l:'$200,000 to $400,000',w:12},{l:'$100,000 to $200,000',w:8},{l:'$100,000 or less',w:3}]},
{c:'Portfolio Size Classification',t:'Approximately how much do you have in total retirement savings?',n:null,
a:[{l:'Over $2 million',w:4},{l:'$1 million to $2 million',w:4},{l:'$500,000 to $1 million',w:4},{l:'$250,000 to $500,000',w:2},{l:'Under $250,000',w:1}]}
];

var BR=[
{mn:206,mx:999,em:'\ud83d\udd34',co:'#991b1b',bg:'#7f1d1d',lb:'CRITICAL RISK',
hl:'Your Retirement Plan: Critical Risk Detected',
ds:'Your results show the highest level of risk. Several issues are working together in your plan \u2014 around income, cash reserves, market exposure, and debt. When these combine, a market drop can cause damage that compounds quickly and is very hard to recover from.',
ch:'Verifying Your Personalized Protection Plan',
cs:'Your numbers point to serious vulnerabilities that need a live review. To map your exact timeline buffers, income protections, and safeguards without giving up growth, review your report with a certified specialist.'},
{mn:161,mx:205,em:'\ud83d\udd34',co:'#dc2626',bg:'#991b1b',lb:'HIGH RISK',
hl:'Your Retirement Plan: High Risk Detected',
ds:'Your results show significant exposure to market swings. If the market dropped 20\u201340%, your plan could take serious \u2014 possibly permanent \u2014 damage.',
ch:'Verifying Your Personalized Protection Plan',
cs:'Your numbers point to clear vulnerabilities. To map your exact timeline buffers and income protections without giving up growth, review the data live with a certified specialist.'},
{mn:107,mx:160,em:'\u26a0\ufe0f',co:'#b45309',bg:'#92400e',lb:'ELEVATED RISK',
hl:'Your Retirement Plan: Elevated Risk Identified',
ds:'Your results show meaningful risk across several areas. The way your market exposure, withdrawals, and planning come together creates a weakness that grows over time.',
ch:'Verifying Your Personalized Protection Plan',
cs:'Your numbers point to areas worth addressing. To map your exact protections and options without giving up growth, book a 30-minute window below.'},
{mn:58,mx:106,em:'\ud83d\udd35',co:'#1d4ed8',bg:'#1e3a8a',lb:'MODERATE RISK',
hl:'Your Retirement Plan: Moderate Risk',
ds:'Your plan is moving from building savings toward using them for income. There are a few areas worth watching that aren\u2019t critical yet, but should be addressed before your options narrow.',
ch:'Map Your Transition Risk Plan',
cs:'A complimentary 30-minute consultation will show you the specific steps you can take now.'},
{mn:0,mx:57,em:'\u2705',co:'#15803d',bg:'#14532d',lb:'SOLID FOUNDATION',
hl:'Your Retirement Plan: Strong Foundation',
ds:'Your results show strong protection against market risk. You have meaningful safeguards in place. Even strong plans benefit from a periodic check.',
ch:'Confirm Your Protection Plan',
cs:'A complimentary 30-minute consultation will confirm your protection is current and spot any useful optimizations.'}
];

var savedMulti={},busy=false,sentEmail='',sentPhone='',hasIncomeAnnuity=false,selectedProducts=[],cur=0,score=0,picks=[],multiSel={};

function detectVectors(p){
  var v=[];
  var portEst=PORTFOLIO_MID[p[18]]||750000;
  var equityPct=EQUITY_MID[p[13]]||0.65;
  var ageBench=RULE100_BENCH[p[0]]||0.31;
  var inMarket=portEst*equityPct;
  var overexposed=Math.max(0,inMarket-(portEst*ageBench));
  var lossAt30=inMarket*0.30;
  var benchPct=Math.round(ageBench*100);
  var equPct=Math.round(equityPct*100);

  if(gapInfo(p).gap>0)
    v.push({ic:'\u26a1',tt:'Income Protection Gap',tl:'Uninsulated Income Floor',
      summary:'Income Protection Gap: No guaranteed income floor detected',
      ds:'You may not have enough guaranteed income to cover your essential monthly bills if the market drops.',finding:null});

  if(p[10]>=2)
    v.push({ic:'\ud83d\udca7',tt:'Cash Cushion Warning',tl:'Liquidity Reserve Depletion',
      summary:'Cash Cushion Warning: Less than 6 months liquid reserves',
      ds:'You may not have enough easily accessible cash to ride out a market downturn without being forced to sell investments at a loss.',finding:null});

  if(p[11]>=2)
    v.push({ic:'\ud83d\udcb3',tt:'Debt Pressure',tl:'Compounding Debt Withdrawal Pressures',
      summary:'Debt Pressure: Debt obligations forcing elevated withdrawals',
      ds:'Carrying debt into retirement can push you to withdraw more than you planned \u2014 especially during a market downturn.',finding:null});

  if(p[14]!==2)
    v.push({ic:'\ud83d\udd0d',tt:'Downside Blind Spot',tl:'Structural Downside Blind Spot',
      summary:'Downside Blind Spot: Plan never stress-tested against a market drop',
      ds:'Your plan hasn\u2019t been stress-tested against a sharp market drop, so it\u2019s unclear how your retirement would hold up.',finding:null});

  if(p[2]<=1&&p[13]<=1)
    v.push({id:'v-timing',ic:'\ud83d\udd50',tt:'Timing Risk',tl:'Active Sequence-of-Returns Exposure',
      summary:'Timing Risk: '+fmtDollar(overexposed)+' above Rule of 100 safe threshold',
      ds:'A market drop right around retirement can be especially damaging because you\u2019re withdrawing money at the same time your portfolio is falling.',
      finding:{tag:'RULE OF 100  \u00b7  SEQUENCE OF RETURNS RISK',
        txt:'The Rule of 100 recommends no more than '+benchPct+'% market exposure at your age. Your results indicate approximately '+equPct+'% \u2014 an estimated '+fmtDollar(overexposed)+' above the established threshold. Based on Sequence of Returns Risk, a market downturn during active withdrawal permanently compounds this exposure.'}});

  if(p[12]<=1)
    v.push({id:'v-recovery',ic:'\u23f1\ufe0f',tt:'Recovery Time Gap',tl:'Multi-Year Recovery Timeline Blind Spot',
      summary:'Recovery Time Gap: '+fmtDollar(lossAt30)+' at risk from a 30% market drop',
      ds:'If the market drops, you may not have enough time left to recover your losses before you need to start using that money.',
      finding:{tag:'RECOVERY MATH ANALYSIS',
        txt:'A 30% market correction would cost your portfolio an estimated '+fmtDollar(lossAt30)+'. Recovering that loss requires a 42.9% market gain \u2014 while continuing withdrawals. Most retirees in active drawdown cannot pause income during recovery.'}});

  var g=gapInfo(p);
  if(g.gap>0&&g.wr>0.04)
    v.push({id:'v-gap',ic:'\ud83d\udcb8',tt:'Income Gap',tl:'Savings Withdrawal Pressure',
      summary:'Income Gap: about '+fmtExact(g.gap)+'/mo must come from savings',
      ds:'Your monthly expenses are higher than your guaranteed income, so your savings have to make up the difference every month \u2014 in good markets and bad.',
      finding:{tag:'INCOME GAP  \u00b7  4% WITHDRAWAL GUIDELINE',
        txt:'Expenses of about '+fmtExact(g.exp)+'/mo minus Social Security and other income of about '+fmtExact(g.ss+g.oth)+'/mo leaves roughly '+fmtExact(g.gap)+'/mo \u2014 '+fmtDollar(g.gap*12)+' a year, or about '+(g.wr*100).toFixed(1)+'% of your savings each year. Many planners treat 4% as a cautious limit.'}});
  if(p[16]>=1)
    v.push({id:'v-ltc',ic:'\ud83c\udfe5',tt:'Long-Term Care Exposure',tl:'Uncovered Care Costs',
      summary:'Long-Term Care Exposure: '+fmtDollar(LTC.al)+'\u2013'+fmtDollar(LTC.nhp)+'/yr out of pocket',
      ds:'Someone turning 65 today has almost a 70% chance of needing long-term care. Medicare generally doesn\u2019t cover ongoing custodial care, so without insurance it comes out of your savings.',
      finding:{tag:'LONG-TERM CARE COST ANALYSIS',
        txt:'National median costs run '+fmtDollar(LTC.al)+' a year for assisted living up to '+fmtDollar(LTC.nhp)+' a year for a private nursing home room. Care lasts '+LTC.yrsM+' years on average for men and '+LTC.yrsW+' for women \u2014 roughly '+fmtDollar(LTC.al*LTC.yrsM)+' to '+fmtDollar(LTC.nhp*LTC.yrsW)+', or '+Math.round(LTC.al*LTC.yrsM/g.port*100)+'%\u2013'+Math.round(LTC.nhp*LTC.yrsW/g.port*100)+'% of your savings.'}});

  return v;
}

function fmtExact(n){return '$'+Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');}
function gapInfo(p){
  var exp=p[4]||0,ss=p[5]||0,oth=p[6]||0,port=PORTFOLIO_MID[p[18]]||750000;
  var gap=Math.max(0,exp-ss-oth);return {exp:exp,ss:ss,oth:oth,gap:gap,port:port,wr:gap>0?gap*12/port:0};
}

function gapPts(p){return Math.min(60,Math.floor(gapInfo(p).gap/100)*2);}

var MULTI_PTS={5:0,6:3,8:6},viewingSaved=false;
function scoreFromPicks(p){
  var t=0;
  Qs.forEach(function(q,i){
    if(q.num)return;
    if(q.multi)t+=MULTI_PTS[p[i]];
    else t+=q.a[p[i]].w;
  });
  return t+gapPts(p);
}
function reportUrl(){
  var ch='',nums=[];
  Qs.forEach(function(q,i){
    if(q.num)nums.push(picks[i].toString(36));
    else ch+=picks[i].toString(36);
  });
  return window.location.origin+window.location.pathname+'?r='+ch+'-'+nums.join('-');
}
function decodeShort(code){
  var parts=code.split('-'),ch=parts[0],nums=parts.slice(1),p=[],ci=0,ni=0;
  var nNum=Qs.filter(function(q){return q.num;}).length;
  if(nums.length!==nNum||ch.length!==Qs.length-nNum)return null;
  Qs.forEach(function(q){
    if(q.num)p.push(parseInt(nums[ni++],36));
    else p.push(parseInt(ch.charAt(ci++),36));
  });
  return p;
}
function decodeLong(code){
  code=code.replace(/-/g,'+').replace(/_/g,'/');while(code.length%4)code+='=';
  return atob(code).split('.').map(function(x){return parseInt(x,10);});
}
function loadSavedReport(){
  try{
    var qs=new URLSearchParams(window.location.search),p=null;
    if(qs.get('r'))p=decodeShort(qs.get('r'));
    else if(qs.get('report'))p=decodeLong(qs.get('report'));
    if(!p||p.length!==Qs.length)return false;
    for(var i=0;i<Qs.length;i++){
      var q=Qs[i],v=p[i];
      if(isNaN(v)||v<0)return false;
      if(q.multi){if(MULTI_PTS[v]===undefined)return false;}
      else if(!q.num&&v>=q.a.length)return false;
    }
    picks=p;hasIncomeAnnuity=p[7]===5;score=scoreFromPicks(p);viewingSaved=true;
    document.getElementById('qs').style.display='none';
    document.getElementById('res').style.display='block';
    buildResults('');
    return true;
  }catch(e){return false;}
}

function renderQ(i){
  var q=Qs[i];
  var pct=Math.round(i/Qs.length*100);
  document.getElementById('pf').style.width=pct+'%';
  document.getElementById('pt').textContent='Diagnostic Intake \u2014 Question '+(i+1)+' of '+Qs.length;
  document.getElementById('pp').textContent=pct+'% Complete';
  var nh=q.n?'<p class="qno">'+q.n+'</p>':'<p style="margin-bottom:22px"></p>';
  var html='<div class="qcat">'+q.c+'</div><div class="qn">Question '+(i+1)+' of '+Qs.length+'</div><div class="qt">'+q.t+'</div>'+nh;
  if(q.num){
    var pv=picks[i]!==undefined?picks[i].toLocaleString('en-US'):'';
    html+='<div class="iw"><span class="pre">$</span><input id="ni" class="ni" type="text" inputmode="numeric" autocomplete="off" value="'+pv+'" placeholder="'+q.ph+'" oninput="numType(this)" onkeydown="if(event.key===\'Enter\')confirmNum()"/><span class="suf">/ month</span></div>'
      +'<div class="nh">A rough estimate is fine</div><div class="nerr" id="nerr"></div>'
      +'<button class="os2" onclick="confirmNum()">Continue \u2192</button>';
  } else if(q.multi){
    multiSel=Object.assign({},savedMulti);
    html+='<div class="mnote">Select all that apply</div>';
    q.items.forEach(function(it){html+='<button class="ab'+(multiSel[it.id]?' picked':'')+'" onclick="toggleMulti(\''+it.id+'\',this)"><span class="ad"></span>'+it.l+'</button>';});
    html+='<button class="os2" onclick="confirmMulti()" style="margin-top:14px">Continue \u2192</button>';
  } else {
    q.a.forEach(function(a,idx){html+='<button class="ab'+(picks[i]===idx?' picked':'')+'" onclick="pick('+idx+',this)"><span class="ad"></span>'+a.l+'</button>';});
  }
  if(i>0)html+='<div><button class="bk" onclick="goBack()">\u2190 Back</button></div>';
  document.getElementById('qc').innerHTML=html;
  var ni=document.getElementById('ni');if(ni)ni.focus();
}

function numType(el){
  document.getElementById('nerr').textContent='';
  var d=el.value.replace(/[^\d]/g,'').slice(0,7);
  el.value=d?parseInt(d,10).toLocaleString('en-US'):'';
}
function confirmNum(){
  var q=Qs[cur],d=document.getElementById('ni').value.replace(/[^\d]/g,'');
  if(d===''){document.getElementById('nerr').textContent='Enter an amount to continue'+(q.min===0?' (0 is fine).':'.');return;}
  var n=parseInt(d,10);
  if(n<q.min){document.getElementById('nerr').textContent='Enter an amount greater than $0.';return;}
  if(busy)return;picks[cur]=n;advance();
}

function goBack(){if(busy||cur===0)return;cur--;renderQ(cur);}

function toggleMulti(id,btn){
  btn.classList.toggle('picked');
  if(multiSel[id])delete multiSel[id];else multiSel[id]=true;
}

function confirmMulti(){
  hasIncomeAnnuity=!!multiSel['income_annuity'];
  var hasGrowth=!!multiSel['growth_annuity'];
  if(busy)return;
  savedMulti=Object.assign({},multiSel);
  if(hasIncomeAnnuity){picks[cur]=5;}
  else if(hasGrowth){picks[cur]=6;}
  else{picks[cur]=8;}
  selectedProducts=Qs[cur].items.filter(function(it){return multiSel[it.id];}).map(function(it){return it.l;});
  advance();
}

function pick(idx,btn){
  if(busy)return;busy=true;
  document.querySelectorAll('.ab').forEach(function(b){b.classList.remove('picked');});
  btn.classList.add('picked');
  setTimeout(function(){busy=false;picks[cur]=idx;advance();},480);
}

function advance(){
  cur++;
  if(cur<Qs.length){renderQ(cur);}
  else{
    score=scoreFromPicks(picks);
    document.getElementById('pf').style.width='100%';
    document.getElementById('pp').textContent='100% Complete';
    document.getElementById('pt').textContent='Analysis complete \u2014 generating your report\u2026';
    setTimeout(function(){
      document.getElementById('qs').style.display='none';
      document.getElementById('os').style.display='block';
      window.scrollTo(0,0);
    },500);
  }
}

function submitOptIn(){
  var fn=document.getElementById('ff').value.trim();
  var ln=document.getElementById('fl').value.trim();
  var e=document.getElementById('fe').value.trim();
  var p=document.getElementById('fp').value.trim();
  if(!fn||!ln||!e||!p){alert('Please complete all fields to access your diagnostic report.');return;}
  var digits=p.replace(/\D/g,'');
  if(digits.length!==10){alert('Please enter a valid 10-digit US phone number.');return;}
  var b=BR.find(function(x){return score>=x.mn&&score<=x.mx;});
  var riskLabel=b?b.lb.toLowerCase().replace(/\b\w/g,function(c){return c.toUpperCase();}):'Unknown';
  var vecs=detectVectors(picks);
  var vectorSummary=vecs.length?vecs.map(function(v){return v.summary;}).join(' | '):'None detected';
  fetch(WEBHOOK_URL,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      firstName:fn,
      lastName:ln,
      email:e,
      phone:'+1'+digits,
      quiz_score:String(score),
      risk_level:riskLabel,
      risk_vectors:vectorSummary,
      report_url:reportUrl()
    })
  }).catch(function(){});
  sentEmail=e;sentPhone='('+digits.slice(0,3)+') '+digits.slice(3,6)+'-'+digits.slice(6);
  document.getElementById('os').style.display='none';
  document.getElementById('res').style.display='block';
  buildResults(fn);
  window.scrollTo(0,0);
}

function jumpTo(id){
  var el=document.getElementById(id);if(!el)return;
  el.scrollIntoView({behavior:'smooth',block:'center'});
  el.classList.add('flash');setTimeout(function(){el.classList.remove('flash');},1600);
}

function buildResults(name){
  var b=BR.find(function(x){return score>=x.mn&&score<=x.mx;});
  var rows=[
    {lb:'\ud83d\udd34 Critical Risk',mn:206,mx:248,rg:'206\u2013248'},
    {lb:'\ud83d\udd34 High Risk',mn:161,mx:205,rg:'161\u2013205'},
    {lb:'\u26a0\ufe0f Elevated Risk',mn:107,mx:160,rg:'107\u2013160'},
    {lb:'\ud83d\udd35 Moderate Risk',mn:58,mx:106,rg:'58\u2013106'},
    {lb:'\u2705 Solid Foundation',mn:0,mx:57,rg:'0\u201357'}
  ];
  var brH=rows.map(function(r){
    var act=score>=r.mn&&score<=r.mx;
    return '<div class="br2'+(act?' act':'')+'" style="'+(act?'color:'+b.co+';':'')+'">'
      +'<span>'+r.lb+(act?' \u2190 Your Score':'')+'</span>'
      +'<span class="bp">'+r.rg+' pts</span></div>';
  }).join('');
  var vecs=detectVectors(picks);
  var has={};vecs.forEach(function(v){if(v.id)has[v.id]=true;});
  function row(cls,style,label,val,id){
    var inner;
    if(id&&has[id])inner='<a class="anc" href="#'+id+'" onclick="jumpTo(\''+id+'\');return false;"><span class="lbl">'+label+'</span><span class="val">'+val+'</span><span class="see">See why \u2193</span></a>';
    else inner='<span>'+label+'</span><span class="val">'+val+'</span>';
    return '<div class="br2'+(cls?' '+cls:'')+'"'+(style?' style="'+style+'"':'')+'>'+inner+'</div>';
  }
  var mPort=PORTFOLIO_MID[picks[18]]||750000,mEq=EQUITY_MID[picks[13]]||0.65,mBench=RULE100_BENCH[picks[0]]||0.31;
  var mIn=mPort*mEq,mSafe=mPort*mBench,mOver=Math.max(0,mIn-mSafe);
  var prodH='<div class="bx"><div class="bxt">Market Risk Exposure</div>'
    +'<div class="br2"><span>Total retirement savings</span><span class="bp">'+Qs[18].a[picks[18]].l+'</span></div>'
    +'<div class="br2"><span>In the stock market (~'+Math.round(mEq*100)+'%)</span><span class="bp">'+fmtDollar(mIn)+'</span></div>'
    +row('','','At risk in a 30% market drop','<span style="color:#991b1b;font-weight:700">\u2212'+fmtDollar(mIn*0.30)+'</span>','v-recovery')
    +'<div class="br2"><span>Rule of 100 maximum at your age ('+Math.round(mBench*100)+'%)</span><span class="bp">'+fmtDollar(mSafe)+'</span></div>'
    +row('act','color:'+(mOver>0?'#991b1b':'#15803d'),'Amount that should be moved into a safe product',(mOver>0?fmtDollar(mOver):'None'),'v-timing')+'</div>';
  var g=gapInfo(picks);
  var incH='<div class="bx"><div class="bxt">Your Monthly Income Gap</div>'
    +'<div class="br2"><span>Monthly expenses</span><span class="bp">'+fmtExact(g.exp)+'</span></div>'
    +'<div class="br2"><span>Social Security</span><span class="bp">\u2212 '+fmtExact(g.ss)+'</span></div>'
    +'<div class="br2"><span>Other income</span><span class="bp">\u2212 '+fmtExact(g.oth)+'</span></div>'
    +row('act','color:'+(g.gap>0?'#991b1b':'#15803d'),'Estimated gap your savings must cover',(g.gap>0?fmtExact(g.gap)+' / mo':'None'),'v-gap')+'</div>';
  var ltcH=picks[16]===0?'':'<div class="bx"><div class="bxt">Long-Term Care Costs You May Face</div>'
    +'<div class="br2"><span>Assisted living (national median)</span><span class="bp">'+fmtExact(LTC.al)+' / yr</span></div>'
    +'<div class="br2"><span>Nursing home, private room</span><span class="bp">'+fmtExact(LTC.nhp)+' / yr</span></div>'
    +'<div class="br2"><span>Average length of care</span><span class="bp">'+LTC.yrsM+'\u2013'+LTC.yrsW+' years</span></div>'
    +row('act','color:#991b1b','Potential out-of-pocket total',fmtDollar(LTC.al*LTC.yrsM)+'\u2013'+fmtDollar(LTC.nhp*LTC.yrsW),'v-ltc')+'</div>';
  var vH='';
  if(vecs.length){
    vH='<div class="vct">Your Risk Report \u2014 '+vecs.length+' Active Risk Factor'+(vecs.length>1?'s':'')+'</div>';
    vecs.forEach(function(v){
      var fH='';
      if(v.finding)fH='<div class="rf"><div class="rf-tag">'+v.finding.tag+'</div><div class="rf-txt">'+v.finding.txt+'</div></div>';
      vH+='<div class="vi"'+(v.id?' id="'+v.id+'"':'')+'><div class="vic">'+v.ic+'</div><div style="flex:1">'+fH+'<div class="vit">'+v.tt+'</div><div class="vtl">'+v.tl+'</div><div class="vid">'+v.ds+'</div></div></div>';
    });
  }
  document.getElementById('res').innerHTML=
    '<div class="rsh" style="background:'+b.bg+'">'
      +'<div class="rsl">Retirement Risk Analysis</div>'
      +'<div class="rsv">'+b.em+' '+b.lb+'</div>'
      +'<div class="scr"><div class="sb">'+score+'<span>/248</span></div>'
      +'<div><div class="sml">Risk Score</div><div class="smv">'+b.lb+'</div></div></div>'
    +'</div>'
    +'<div class="rb">'
      +'<div class="sl">Your Risk Level Breakdown</div>'
      +'<div class="bx"><div class="bxt">Score Classification \u2014 Your Score: '+score+' Points</div>'+brH+'</div>'
      +prodH
      +incH
      +ltcH
      +'<h2 style="font-size:21px;color:'+b.co+';margin-bottom:14px;line-height:1.35;">'+b.hl+'</h2>'
      +'<p style="font-family:Arial,sans-serif;font-size:16px;color:#374151;line-height:1.8;margin-bottom:20px;">'+b.ds+'</p>'
      +vH
    +'</div>'
    +'<div class="cb">'
      +(viewingSaved
        ?'<div class="sent-ic">\ud83d\udcc4</div>'
          +'<h3 class="ch2">Your Saved Retirement Risk Report</h3>'
          +'<p class="cs" style="margin-bottom:0">Keep this link to revisit your results anytime, and review them with your advisor.</p>'
        :'<div class="sent-ic">\u2709\ufe0f</div>'
          +'<h3 class="ch2">Your Results Are on the Way</h3>'
          +'<p class="cs" style="margin-bottom:0">We\u2019ve sent a copy of your Retirement Risk Report to <b style="color:#fff;white-space:nowrap">'+sentEmail+'</b> and by text to <b style="color:#fff;white-space:nowrap">'+sentPhone+'</b>. Keep it for your records and review it with your advisor.</p>')
    +'</div>';
}

if(!loadSavedReport())renderQ(0);
