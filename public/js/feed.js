(()=> {// Protect the Lemurs
	function renderFeed(posts) {
		console.log(posts, 'posts in feed.js')
	    const feed = document.querySelector('.js-feed-feed');
	    feed.innerHTML = '';
	    for (const postItem of posts) {
	    	console.log(postItem)
		    const h4 = document.createElement('h4');
		    h4.innerHTML = `
<div class="ui card">
  <div class="image">
    <img src="${postItem.post}">
  </div>
  <div class="content">
    <p class="header">${postItem.username}</p>
    <button class='ui-button js-follow'>Follow</button>
</div>
	                `;
	         feed.appendChild(h4)

	        h4.querySelector('.js-follow').addEventListener('click', (e)=>{
	     		e.preventDefault();

	     		const userId = localStorage.getItem('currentUser');
	     		console.log('in event listener', postItem.followerID);

	     		POST('/api/createNewFollower', {
	     			userID: userId,
	     			followerID: postItem.id,
	     			followerPost: postItem.post,
	     			followerUN: postItem.username
				}).then(data => {
					console.log(data)
				})
	     	});
	    }

		if (posts.length === 0) {
			feed.innerHTML = `
				<li class="list-group-item">
				No Posts!
				</li>
			`;
		}
	};


	function GET(url) {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('GET', url);
            request.onload = () => {
                const data = JSON.parse(request.responseText);
                resolve(data)
            }; 
            request.onerror = (err) => {
                reject(err)
            };
            request.send();
        });
    }; // GET
    
    function POST(url, data) {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            const baseURL = 'http://localhost:8008';
            request.open('POST', baseURL + url);
            console.log(baseURL + url, 'in POST');
            request.setRequestHeader('Content-Type', 'application/json');
             console.log(request.responseText);
            request.onload = () => {
                const data = JSON.parse(request.responseText);
                resolve(data)
            }; 
            request.onerror = (err) => {
                reject(err)
            };
            console.log(JSON.stringify(data));
            request.send(JSON.stringify(data));
        });
    };
 // POST


    GET(`./api/feed/`).then(res => {
    	const feed = res;
    	renderFeed(feed)

    	//Render DOM HERE
    })






})()


