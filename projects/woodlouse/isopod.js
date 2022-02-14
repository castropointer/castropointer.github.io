var showFeed=d=>{
    let channel=d.getElementsByTagName('channel')[0];
    let title=channel.getElementsByTagName('title')[0].innerHTML;
    let author=channel.getElementsByTagName('itunes:author')[0].innerHTML;
    let description=channel.getElementsByTagName('description')[0].innerHTML;
    let image=channel.getElementsByTagName('image')[0].getElementsByTagName('url')[0].innerHTML;
    document.getElementById('title').innerText=title;
    document.getElementById('author').innerText=author;
    //document.getElementById('desc').innerText=description;
    document.getElementById('cover').style.backgroundImage='url('+image+')';
}

var loadPod=(url)=>{
    fetch(url)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {showFeed(data)});
}

navStates={
    'closed':'open',
    'open':'closed'
}

var toggleNav=()=>{
    document.getElementById('navbar').className=navStates[document.getElementById('navbar').className];
}

var hithere=()=>{
    alert("hello world");
}

const sysk = 'https://feeds.megaphone.fm/stuffyoushouldknow';
const fem = 'https://anchor.fm/s/4d413e38/podcast/rss';
const daily = 'https://feeds.simplecast.com/54nAGcIl';

loadPod(sysk);
