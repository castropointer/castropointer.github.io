(function(){
    var a=document.getElementsByTagName('a');
    for (var i=0;i<a.length;i++)
    if(a[i].href.startsWith('https://podcasts.google.com/feed/'))
    try{
        var b=document.createElement('a');
        var c=a[i].firstChild.lastChild.firstChild.cloneNode(true);
        c.innerText="%C2%A0 download";
        b.appendChild(c);b.style='line-height:2em';
        b.href=a[i].firstChild.lastChild.firstChild.getAttribute('jsdata').split(';')[1].split('?')[0];
        b.target='_blank';
        a[i].firstChild.lastChild.appendChild(b);
    }catch(error){}})();