/* Sitewide menu additions for usretirementeducators.org.
   Loaded once from GHL Website Settings (footer tracking code).
   Adds links to the menu that is built into each page's code. */
(function(){
  var LINKS=[ // [label, path, insert after link whose text is]
    ['Meet the Team','/meet-the-team-8622','FAQ']
  ];
  // Keeps the header on one line now that the menu has an extra link.
  var CSS='.usre-nav>a,.usre-nav button{white-space:nowrap}'+
    '@media(min-width:861px){.usre-hdr-in{max-width:1260px;gap:16px}.usre-brand{flex-shrink:0}.usre-brand-txt,.usre-brand-txt span{white-space:nowrap}'+
    '.usre-nav>a,.usre-nav button{padding-left:10px!important;padding-right:10px!important}}'+
    '@media(min-width:861px) and (max-width:1299px){.usre-nav>a,.usre-nav button{padding-left:7px!important;padding-right:7px!important;font-size:13.5px!important}.usre-cta-wrap a{padding-left:14px!important;padding-right:14px!important}}'+
    '@media(min-width:861px) and (max-width:1149px){.usre-brand-txt span{display:none}.usre-nav>a,.usre-nav button{font-size:13px!important;padding-left:5px!important;padding-right:5px!important}}';
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
