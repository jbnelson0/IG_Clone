// Setting elements to append child
const userInfo = document.querySelector('.js-feed-user_info');

console.log(userInfo);

const feed = document.querySelector('.js-feed-feed');

console.log(feed);

// Render stuff
function renderFeed(feedItems) {
	userInfo.innerHTML = '';
}

// render more stuff
function renderFeed(posts) {
    const feed = document.querySelector('.js-feed-feed');
    feed.innerHTML = '';
    for (const postItem of posts) {
    
    const h4 = document.createElement('h4');
    h4.innerHTML = `
                <span class='js-feed-username'>${postItem.data.username}</span>
                `;
    }

	if (posts.length === 0) {
		container.innerHTML = `
			<li class="list-group-item">
			No Posts!
			</li>
		`;
	}
}