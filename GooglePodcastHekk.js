(
	function(){

		var a=document.getElementsByTagName('a');
		for(var i=0;i<a.length;i++){
			var h=a[i].href;
			if(h.startsWith('https://podcasts.google.com/feed/')){
				var c=(a[i].firstChild.lastChild.firstChild);
				var j=null;
				if(c) j=c.getAttribute('jsdata');
				if(j) console.log(c.getAttribute('jsdata').split(';')[1]);
			}
		}

	}
)()
