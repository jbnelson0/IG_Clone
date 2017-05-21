// Main feed / landing page after login
(()=> {// Protect the Lemurs
	function renderFollowers(posts) {
		let followerID = []
	    const feed = document.querySelector('.js-feed-feed');
	    feed.innerHTML = '';
	    for (const postItem of posts) {
	    	followerID.push(postItem.followerID)
	    	console.log(followerID, 'in renderfeed loop')
		    const h4 = document.createElement('h4');
		    h4.innerHTML = `
	                <span class='js-feed-username'>${postItem.username}</span>
	                <button class='ui-button js-follow'>Follow</button>
		            <div class='js-image'>
		            	<img class ='js-feed-images' src="${postItem.post}" alt="" >
	                </div>
	                `;
	         feed.appendChild(h4)
	    }
		if (posts.length === 0) {
			feed.innerHTML = `
				<li class="list-group-item">
				No Posts!
				</li>
			`;
		}
		const followBtn = document.querySelector('button.ui-button.js-follow');
   		console.log(followBtn);

   		followBtn.addEventListener('click', (e)=>{
     		e.preventDefault();
     		console.log(followerID);
     	});
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

	const userId = localStorage.getItem('currentUser')
	console.log(userId)

	// GET('/api/${userId}/testing').then(data => {
	// 	console.log(data)
	// })
	GET(`/api/${userId}/main/feed`).then(res => {
    	console.log(res, 'in api/id/testing')
    	const feed = res;
    	renderFollowers(feed)

    	//Render DOM HERE
    })

})()