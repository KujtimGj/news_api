const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '09a5348db7mshcd56cf8e1c924f7p1149d8jsnb973d7bda032',
		'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
	}
};

 fetch('https://free-news.p.rapidapi.com/v1/search?q=bitcoin&lang=en&page=1&page_size=6', options)
	.then(response => response.json())
	.then(data =>{
        const list = data.articles;
        
        list.map((item)=> 
        {
           const title = item.title;
           const author = item.author;
           const date =item.published_date;
           const media = item.media;
           const summary = item.summary;
           const redirect = item.link;
           const card = `<div class="news">
            <div class="wrapper">
            <div class="pic"><a href="${redirect}"><img src="${media}"></a></div>
            <div class="title">
            <a href="${redirect}"><h4>${title}</h4></a>
            <p>${summary}</p>
            </div></div
           </div>`
            document.querySelector('.news').innerHTML += card
        })
    })
	.catch(err => console.error(err));
