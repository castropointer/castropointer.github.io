var d=new Date();
var i={
    title:document.title,
    link: document.location.href,
    date:d.getTime()
};
window.open('file:///home/joni/Desktop/Git%20SIte/Bookmarklets/inCite/inCite.html?'+btoa(JSON.stringify(i)),'_blank')