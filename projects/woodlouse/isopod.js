var showPod=d=>{
    let channel=d.getElementsByTagName('channel')[0];
    let pod=document.createElement('pod');
    let title=document.createElement('pod-title');
    title.innerText=channel.getElementsByTagName('title')[0].innerHTML;
    let author=document.createElement('pod-owner');
    author.innerText=channel.getElementsByTagName('itunes:author')[0].innerHTML;
    let image=document.createElement('cover');
    image.style.backgroundImage='url('+channel.getElementsByTagName('image')[0].getElementsByTagName('url')[0].innerHTML+')';
    pod.appendChild(image);
    pod.appendChild(title);
    pod.appendChild(author);
    document.getElementById('content').appendChild(pod);
    //let description=channel.getElementsByTagName('description')[0].innerHTML;
}

var loadSubs=()=>{
    return {
        sysk:'https://feeds.megaphone.fm/stuffyoushouldknow',
        fem:'https://anchor.fm/s/4d413e38/podcast/rss',
        daily:'https://feeds.simplecast.com/54nAGcIl'
    };
}

var loadPod=(url)=>{
    fetch(url)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {showPod(data)});
}

navStates={
    'closed':'open',
    'open':'closed'
}

var toggleNav=()=>{
    document.getElementById('navbar').className=navStates[document.getElementById('navbar').className];
}

loadPod(loadSubs().daily);
loadPod(loadSubs().fem);
loadPod(loadSubs().sysk);
