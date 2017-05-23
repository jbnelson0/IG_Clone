// Main feed / landing page after login
(()=> {// Protect the Lemurs
	function renderFollowers(posts) {
	    const feed = document.querySelector('.js-feed-feed');
	    feed.innerHTML = '';
	    for (const postItem of posts) {
	    	console.log('in renderfeed loop')
		    const h4 = document.createElement('h4');
		    h4.innerHTML = `

<div class="ui card">
  <div class="image">
    <img src="${postItem.followerPost}">
  </div>
  <div class="content">
    <p class="header">${postItem.followerUN}</p>
    <button class='ui-button js-unfollow'>Unfollow</button>
</div>
	                `;

	        console.log(h4)
	        feed.appendChild(h4)

	        const userId = localStorage.getItem('currentUser');
	    	h4.querySelector('.js-unfollow').addEventListener('click', (e) => {
	    		e.preventDefault()
	    		console.log(postItem.id)
	    			DELETE('/api/follower/' + postItem.id, {
	    				userID: userId,
	    			})
					.then((data) => {
						renderFollowers(data);
					})
					.catch((e) => {
						alert(e)
					});
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

    function DELETE(url, data) {
		return new Promise((resolve, reject) => {
			const request = new XMLHttpRequest();
			request.open('DELETE', url);
			request.setRequestHeader('Content-Type', 'application/json');

			request.onload = () => {
				const data = JSON.parse(request.responseText);
				resolve(data)
			}; 
			request.onerror = (err) => {
				reject(err)
			};

			request.send(JSON.stringify(data));
		});
	} // DELETE


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
	GET(`/api/feed/${userId}/users`).then(res => {
    	console.log(res, 'in api/id/testing')
    	renderFollowers(res)

    	//Render DOM HERE
    })

})()