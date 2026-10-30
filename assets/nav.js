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
