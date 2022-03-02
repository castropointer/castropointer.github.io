var showPod=d=>{
    let channel=d.getElementsByTagName('channel')[0];
    let pod=document.createElement('pod');
    let title=document.createElement('pod-title');
    title.innerText=channel.getElementsByTagName('title')[0].innerHTML;
    let author=document.createElement('pod-owner');
    author.innerText=channel.getElementsByTagName('itunes:author')[0].innerHTML;
    pod.style.backgroundImage='url('+channel.getElementsByTagName('image')[0].getElementsByTagName('url')[0].innerHTML+')';
    title.classList.add('one-line');
    author.classList.add('one-line');
    //pod.appendChild(title);
    //pod.appendChild(author);
    document.getElementById('content').appendChild(pod);
    //let description=channel.getElementsByTagName('description')[0].innerHTML;
}

var subs=[
    'https://feeds.megaphone.fm/stuffyoushouldknow',
    'https://anchor.fm/s/4d413e38/podcast/rss',
    'https://feeds.simplecast.com/54nAGcIl',
    'https://feeds.simplecast.com/BqbsxVfO',
    'https://www.ndr.de/nachrichten/info/podcast4684.xml',
    'https://detektor.fm/feeds/spektrum-der-wissenschaft',
    'https://feeds.viertausendhertz.de/reflektor',
    'https://feeds.narando.com/feeds/be2dab30-295e-4102-8aa1-e8542c3c0775/rendered/rss',
    'https://www.fritz.de/programm/podcasts/kaenguru.xml/feed=podcast.xml',
    'https://feminismus-podcast.podigee.io/feed/mp3',
    'https://feeds.megaphone.fm/hubermanlab',
    'https://www.smashingsecurity.com/rss',
    'https://feeds.megaphone.fm/darknetdiaries',
    'https://feeds.npr.org/510315/podcast.xml',
    'https://malicious.life/feed/podcast/',
    'https://www.numberphile.com/podcast?format=rss',
    'https://podcast.dissenspodcast.de/feed/mp3',
    'https://iono.fm/rss/chan/1516',
    'https://latenightlinux.com/feed/all',
    'https://feeds.simplecast.com/y1LF_sn2',
    'https://www.unmade.fm/episodes?format=rss'


];

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

for(var a=0;a<subs.length;a++) try{loadPod(subs[a]);} catch(e){}
