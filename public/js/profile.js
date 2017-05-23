// Main feed / landing page after login
(()=> {// Protect the Lemurs
	function renderFeed(posts) {
	    const feed = document.querySelector('.js-feed-feed');
	    feed.innerHTML = '';
	    for (const postItem of posts) {
	    	console.log('in renderfeed loop')
		    const h4 = document.createElement('h4');
		    h4.innerHTML = `

<div class="ui card">
	<i class="remove circle icon js-remove-post"></i>
  <div class="image">
    <img src="${postItem.post}">
  </div>
  <div class="content">
    <p class="header">${postItem.username}</p>
</div>
					`;

	        console.log(h4)
	        feed.appendChild(h4)

	        const userId = localStorage.getItem('currentUser');
	    	h4.querySelector('.js-remove-post').addEventListener('click', (e) => {
	    		e.preventDefault()
	    		console.log(postItem.rId)
	    			DELETE('/api/post/' + postItem.rId, {
	    				userID: userId,
	    			})
					.then((data) => {
						renderFeed(data);
					})
					.catch((e) => {
						alert(e)
					});
	    	})
	    }


		if (posts.length === 0) {
			feed.innerHTML = `
				<li class="list-group-item">
				No Posts!
				</li>
			`;
		}


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

	GET(`/api/${userId}/posts`).then(res => {
    	console.log(res, 'in api/id/testing')
    	renderFeed(res)

    	//Render DOM HERE
    })

})()