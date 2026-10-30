/* Sitewide menu additions for usretirementeducators.org.
   Loaded once from GHL Website Settings (footer tracking code).
   Adds links to the menu that is built into each page's code. */
(function(){
  var LINKS=[ // [label, path, insert after link whose text is]
    ['Meet the Team','/meet-the-team-8622','About Us']
  ];
  var st=document.createElement('style');st.textContent='.usre-nav>a,.usre-nav button{white-space:nowrap}';document.head.appendChild(st);
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
