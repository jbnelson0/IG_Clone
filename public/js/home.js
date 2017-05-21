// Main feed / landing page after login
(()=> {// Protect the Lemurs
	function renderFollowers(posts) {
	    const feed = document.querySelector('.js-feed-feed');
	    feed.innerHTML = '';
	    for (const postItem of posts) {
	    	console.log('in renderfeed loop')
		    const h4 = document.createElement('h4');
		    h4.innerHTML = `
	                <span class='js-feed-username'>${postItem.username}</span>
	                <button class='ui-button js-follow'>Follow</button>
		            <div class='js-image'>
		            	<img class ='js-feed-images' src="${postItem.post}" alt="" >
	                </div>
	                `;

	        console.log(h4)
	        feed.appendChild(h4)

	        h4.querySelector('.js-follow').addEventListener('click', (e)=>{
	     		e.preventDefault();

	     		const userId = localStorage.getItem('currentUser');
	     		console.log('in event listener', postItem.followerID);

	     		POST('/api/createNewFollower', {
	     			userID: userId,
	     			followerID: postItem.followerID
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

   		// for (var i=0; i<followBtn.length; i++) {
	    //     followBtn[i].addEventListener('click', (e) => {
	    //     	console.log('in event listener')
	    // 	})
	    // }


    };

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
    	renderFollowers(res)

    	//Render DOM HERE
    })

})()