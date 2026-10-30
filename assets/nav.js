/* Sitewide menu additions for usretirementeducators.org.
   Loaded once from GHL Website Settings (footer tracking code).
   Adds links to the menu that is built into each page's code. */
(function(){
  var LINKS=[ // [label, path, insert after link whose text is]
    ['Meet the Team','/meet-the-team-8622','FAQ']
  ];
  // Keeps the header on one line now that the menu has an extra link.
  var H='.usre-hdr ';
  var CSS=H+'.usre-nav>a,'+H+'.usre-nav button{white-space:nowrap}'+
    '@media(min-width:1001px){'+H+'.usre-hdr-in{max-width:1260px;gap:16px}'+H+'.usre-brand{flex-shrink:0}'+H+'.usre-brand-txt,'+H+'.usre-brand-txt span{white-space:nowrap}'+H+'.usre-nav>a,'+H+'.usre-nav button{padding-left:10px;padding-right:10px}}'+
    '@media(min-width:1001px) and (max-width:1299px){'+H+'.usre-nav>a,'+H+'.usre-nav button{padding-left:7px;padding-right:7px;font-size:13.5px}'+H+'.usre-cta-wrap a{padding-left:14px;padding-right:14px}}'+
    '@media(min-width:1001px) and (max-width:1179px){'+H+'.usre-brand img{width:46px;height:46px}'+H+'.usre-brand-txt{font-size:17px}'+H+'.usre-brand-txt span{font-size:10px}'+H+'.usre-nav>a,'+H+'.usre-nav button{font-size:13px;padding-left:3px;padding-right:3px}}';
  var st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);
  function add(){
    var navs=document.querySelectorAll('.usre-nav, .usre-mnav');
    if(!navs.length)return false;
    var here=location.pathname.replace(/\/+$/,'');
    for(var i=0;i<navs.length;i++){
      var nav=navs[i];
      LINKS.forEach(function(l){
        var exists=[].some.call(nav.querySelectorAll('a'),function(a){return a.getAttribute('href')===l[1];});
        if(exists)return;
        var a=document.createElement('a');a.href=l[1];a.textContent=l[0];
        if(here===l[1])a.className='active';
        var after=[].filter.call(nav.children,function(c){return c.tagName==='A'&&c.textContent.trim()===l[2];})[0];
        if(after)after.parentNode.insertBefore(a,after.nextSibling);else nav.appendChild(a);
      });
    }
    return true;
  }
  if(!add()){var n=0,t=setInterval(function(){if(add()||++n>40)clearInterval(t);},250);}
})();

/* HOME PAGE CREDENTIALS ROW. Shows a row of badges right under the home page hero.
   To remove it, set SHOW to false and push. */
(function(){
  var SHOW=true;
  var HOME_PATHS=['','/','/home-279180'];
  var BADGES=[ // [shape, top text, big text or @icon, caption] - every badge has its own shape
    ['circle','YEARS','25+','Years in Business'],
    ['square','FAMILIES','10K+','Families Helped'],
    ['rosette','CERTIFIED','CRE','Certified Retirement Educators'],
    ['shield','LICENSED','50','Licensed in All 50 States'],
    ['hexagon','MEDICARE','@medicare','Medicare'],
    ['octagon','LIFE','@life','Life Insurance'],
    ['diamond','ANNUITIES','@annuity','Annuities'],
    ['arch','CARE','@ltc','Long-Term Care'],
    ['pennant','ESTATE','@will','Wills & Trusts']
  ];
  // Icons for badges whose big text starts with @ (gold line drawings, centered at 40,46).
  var IC={
    medicare:'<path d="M36 34h8v8h8v8h-8v8h-8v-8h-8v-8h8z" fill="none" stroke="#c9a84c" stroke-width="2" stroke-linejoin="round"/>',
    life:'<path d="M40 60s-13-7.5-13-17a7 7 0 0 1 13-3.6A7 7 0 0 1 53 43c0 9.5-13 17-13 17z" fill="none" stroke="#c9a84c" stroke-width="2" stroke-linejoin="round"/>',
    annuity:'<path d="M27 58V48M35 58V44M43 58V40M51 58V35" stroke="#c9a84c" stroke-width="3" stroke-linecap="round"/><path d="M26 41l10-6 7 3 10-7" fill="none" stroke="#c9a84c" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>',
    ltc:'<path d="M27 45l13-10 13 10M30 43v15h20V43" fill="none" stroke="#c9a84c" stroke-width="2" stroke-linejoin="round"/><path d="M40 55s-4.5-2.6-4.5-5.3a2.3 2.3 0 0 1 4.5-.8 2.3 2.3 0 0 1 4.5.8c0 2.7-4.5 5.3-4.5 5.3z" fill="#c9a84c"/>',
    will:'<path d="M31 34h13l6 6v20H31z M44 34v6h6 M35 46h11 M35 51h11 M35 56h7" fill="none" stroke="#c9a84c" stroke-width="1.8" stroke-linejoin="round"/>'
  };
  if(!SHOW||HOME_PATHS.indexOf(location.pathname.replace(/\/+$/,''))<0)return;
  var ST='fill="#0F2347" stroke="#c9a84c" stroke-width="2.5" stroke-linejoin="round"';
  var SH={
    circle:'<circle cx="40" cy="40" r="37" '+ST+'/><circle cx="40" cy="40" r="31" fill="none" stroke="#c9a84c" stroke-width=".8" opacity=".6"/>',
    square:'<rect x="5" y="5" width="70" height="70" rx="18" '+ST+'/>',
    rosette:'<polygon points="40.0,2.0 46.7,6.2 54.5,4.9 59.2,11.3 66.9,13.1 68.7,20.8 75.1,25.5 73.8,33.3 78.0,40.0 73.8,46.7 75.1,54.5 68.7,59.2 66.9,66.9 59.2,68.7 54.5,75.1 46.7,73.8 40.0,78.0 33.3,73.8 25.5,75.1 20.8,68.7 13.1,66.9 11.3,59.2 4.9,54.5 6.2,46.7 2.0,40.0 6.2,33.3 4.9,25.5 11.3,20.8 13.1,13.1 20.8,11.3 25.5,4.9 33.3,6.2" fill="#c9a84c"/><circle cx="40" cy="40" r="29" fill="none" stroke="#0F2347" stroke-width="1.2" opacity=".55"/>',
    shield:'<path d="M40 3l32 10v24c0 20-14 33-32 40C22 70 8 57 8 37V13z" '+ST+'/>',
    hexagon:'<path d="M40 3l32 18.5v37L40 77 8 58.5v-37z" '+ST+'/>',
    octagon:'<polygon points="74.2,54.2 54.2,74.2 25.8,74.2 5.8,54.2 5.8,25.8 25.8,5.8 54.2,5.8 74.2,25.8" '+ST+'/>',
    diamond:'<path d="M40 2l38 38-38 38L2 40z" '+ST+'/>',
    arch:'<path d="M9 76V38a31 31 0 0 1 62 0v38z" '+ST+'/>',
    pennant:'<path d="M9 4h62v56L40 77 9 60z" '+ST+'/>'
  };
  function svg(b){
    var gold=b[0]==='rosette',ink=gold?'#0F2347':'#fff',acc=gold?'#0F2347':'#c9a84c';
    var fs=b[2].length>=4?16:b[2].length===3?20:26,y=b[0]==='shield'||b[0]==='pennant'?46:49;
    if(b[2].charAt(0)==='@')return '<svg viewBox="0 0 80 80" role="img" aria-label="'+b[3].replace(/&/g,'&amp;')+'">'+SH[b[0]]+
      '<text x="40" y="'+(b[0]==='diamond'?31:27)+'" font-family="Inter,Arial,sans-serif" font-size="6" font-weight="700" letter-spacing="1.2" fill="'+acc+'" text-anchor="middle">'+b[1]+'</text>'+
      '<g transform="translate(0,2)">'+IC[b[2].slice(1)]+'</g></svg>';
    return '<svg viewBox="0 0 80 80" role="img" aria-label="'+b[3].replace(/&/g,'&amp;')+'">'+SH[b[0]]+
      '<text x="40" y="'+(y-(fs>=26?22:19))+'" font-family="Inter,Arial,sans-serif" font-size="6.5" font-weight="700" letter-spacing="1.4" fill="'+acc+'" text-anchor="middle">'+b[1]+'</text>'+
      '<text x="40" y="'+y+'" font-family="Georgia,serif" font-size="'+fs+'" font-weight="700" fill="'+ink+'" text-anchor="middle">'+b[2]+'</text>'+
      '<path d="M32 '+(y+8)+'h16" stroke="'+acc+'" stroke-width="1.2"/></svg>';
  }
  var CSS='.usre-credrow{display:block;width:100%;box-sizing:border-box;clear:both;background:#fff;padding:34px 24px 30px;border-bottom:1px solid #e4e7ec;text-align:center}'+
    '.usre-credrow-in{width:100%;max-width:1120px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;flex-wrap:wrap;gap:22px 14px}'+
    '.usre-credrow .cb{flex:0 0 auto;margin:0;width:106px;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center}'+
    '.usre-credrow svg{display:block;margin:0 auto;width:72px;height:72px;filter:drop-shadow(0 4px 10px rgba(15,35,71,.18))}'+
    '.usre-credrow span{display:block;text-align:center;font:600 12px/1.3 Inter,Arial,sans-serif;color:#5b6675}'+
    '@media(max-width:600px){.usre-credrow{padding:28px 12px 24px}.usre-credrow-in{gap:18px 6px}.usre-credrow .cb{width:100px}.usre-credrow svg{width:60px;height:60px}}';
  function add(){
    var hero=document.querySelector('.usre-hero');if(!hero)return false;
    // Goes right after the stats bar (the first block after the hero with several numbers like 6,000+). Falls back to after the hero.
    var at=hero,sib=hero.nextElementSibling;
    for(var k=0;sib&&k<5;k++,sib=sib.nextElementSibling){if((sib.textContent.match(/\d[\d,]*\s*[+\u2605]/g)||[]).length>=2){at=sib;break;}}
    if(document.querySelector('.usre-credrow'))return true;
    var st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);
    var d=document.createElement('div');d.className='usre-credrow';
    d.innerHTML='<div class="usre-credrow-in">'+BADGES.map(function(b){return '<div class="cb">'+svg(b)+'<span>'+b[3].replace(/&/g,'&amp;')+'</span></div>';}).join('')+'</div>';
    at.parentNode.insertBefore(d,at.nextSibling);return true;
  }
  if(!add()){var n=0,t=setInterval(function(){if(add()||++n>40)clearInterval(t);},250);}
})();
