(()=> {// Protect the Lemurs
	function renderFeed(posts) {
	    const feed = document.querySelector('.js-feed-feed');
	    feed.innerHTML = '';
	    for (const postItem of posts) {
	    	console.log(postItem)
		    const h4 = document.createElement('h4');
		    h4.innerHTML = `
	                <span class='js-feed-username'>${postItem.username}</span>
	                <button class='ui-button js-follow'>Follow</button>
		            <div>
		            	<img src="${postItem.post}" alt="" >
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


    // console.log(user)
    GET('/api/:id/users').then((res) => {
		console.log('in api/id/users', res)
    })

    const userId = localStorage.getItem('currentUser');
    console.log(userId)

    

    GET(`./api/feed/${userId}/users`).then(res => {
    	const feed = res;
    	renderFeed(feed)

    	//Render DOM HERE



    })






})()


// 	function GET(url) {
// 		return new Promise((resolve, reject) => {
// 			const request = new XMLHttpRequest();
// 			request.open('GET', url);
// 			request.onload = () => {
// 				const data = JSON.parse(request.responseText);
// 				resolve(data)
// 			}; 
// 			request.onerror = (err) => {
// 				reject(err)
// 			};
// 			request.send();
// 		});
// 	} // GET

// 	function POST(url, data) {
// 		return new Promise((resolve, reject) => {
// 			const request = new XMLHttpRequest();
// 			request.open('POST', url);
// 			request.setRequestHeader('Content-Type', 'application/json');

// 			request.onload = () => {
// 				const data = JSON.parse(request.responseText);
// 				resolve(data)
// 			}; 
// 			request.onerror = (err) => {
// 				reject(err)
// 			};

// 			request.send(JSON.stringify(data));
// 		});
// 	} // POST

// 	function PUT(url, data) {
// 		return new Promise((resolve, reject) => {
// 			const request = new XMLHttpRequest();
// 			request.open('PUT', url);
// 			request.setRequestHeader('Content-Type', 'application/json');

// 			request.onload = () => {
// 				const data = JSON.parse(request.responseText);
// 				resolve(data)
// 			}; 
// 			request.onerror = (err) => {
// 				reject(err)
// 			};

// 			request.send(JSON.stringify(data));
// 		});
// 	} // POST

// 	function DELETE(url, data = {}) {
// 		return new Promise((resolve, reject) => {
// 			const request = new XMLHttpRequest();
// 			request.open('DELETE', url);
// 			request.setRequestHeader('Content-Type', 'application/json');

// 			request.onload = () => {
// 				const data = JSON.parse(request.responseText);
// 				resolve(data)
// 			}; 
// 			request.onerror = (err) => {
// 				reject(err)
// 			};

// 			request.send(JSON.stringify(data));
// 		});
// 	} // DELETE

// 	function render(posts) {
// 		const container = document.querySelector('.js-blog');
// 		container.innerHTML = '';
// 		for (const postItem of posts) {
// 			const li = document.createElement('li');
// 			li.innerHTML = `
// 				<h2 class="js-post-title">${postItem.data.title}</h2>
// 				<h5 class="post-date">${postItem.data.when}</h5>
// 				<p>
// 				${postItem.data.post}
// 				</p>
// 			`;

// 			li.classList.add('list-group-item', 'post-item');

// 			container.appendChild(li);
// 		}

// 		if (posts.length === 0) {
// 			container.innerHTML = `
// 				<li class="list-group-item">
// 				No Posts!
// 				</li>
// 			`;
// 		}
// 	} // render

// 	function adminRender(posts) {
// 		const container = document.querySelector('.js-blog');
// 		container.innerHTML = '';
// 		for (const postItem of posts) {
// 			const li = document.createElement('li');
// 			li.innerHTML = `
// 				<p class="js-post-edit post-item-title">${postItem.data.title}</p>
// 				<span class="glyphicon glyphicon-remove post-icon js-post-remove post-item-titles"></span>
// 			`;

// 			li.classList.add('list-group-item', 'post-item');

// 			container.appendChild(li);

// 			li.querySelector('.js-post-remove').addEventListener('click', (e) => {
// 				console.log('about to delete LOL')
// 				const {id} = postItem;

// 				DELETE('/api/post/' + id)
// 					.then((data) => {
// 						adminRender(data);
// 					})
// 					.catch((e) => {
// 						alert(e)
// 					});
// 			});

// 			li.querySelector('.js-post-edit').addEventListener('click', (e) => {

// 	         PUT('/api/post' + postItem.id, {
//                 post: input.value,
//                 title: postTitle.value,
//                 when: readDate
//             });
// 			});

			
// 		}

// 		if (posts.length === 0) {
// 			container.innerHTML = `
// 				<li class="list-group-item">
// 				No Posts!
// 				</li>
// 			`;
// 		}
// 	} // adminRender


// 	// GET('/api/posts')
// 	// 	.then((posts) => {
// 	// 		render(posts);
// 	// 	});
// 	const input = document.querySelector('.js-post-text');
// 	const postTitle = document.querySelector('.js-post-title-input');
// 	const postBTN = document.querySelector('.js-add-post');
// 	const time = new Date().getTime();
// 	const date = new Date(time);
// 	const readDate = date.toString()

// // if postBTN is on page run code if not skip
// 	if (postBTN !== null) {
// 		GET('/api/posts')
// 		.then((posts) => {
// 			adminRender(posts);
// 		});
// 	    postBTN.addEventListener('click', (e) => {
//             input.setAttribute('disabled', 'disabled');
//             POST('/api/posts', {
//                 post: input.value,
//                 title: postTitle.value,
//                 when: readDate
//             }).then((data) => {
//                 input.removeAttribute('disabled');
//                 postTitle.removeAttribute('disabled');
//                 postTitle.value = '';
//                 input.value = '';
//                 adminRender(data);
//             });  
// 	    })	
// 	} else {
// 		GET('/api/posts')
// 		.then((posts) => {
// 			render(posts);
// 		});
// 	}