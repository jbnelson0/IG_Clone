(() => { // protect the lemmings!
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

const userID = localStorage.getItem("currentUser");
const username = localStorage.getItem("currentUsername");


// Initialize Firebase
const config = {
apiKey: "AIzaSyC7Z-pxRlfi5vbTXhWlgdWu5s1mq63vKWg",
authDomain: "instaclone-66c99.firebaseapp.com",
databaseURL: "https://instaclone-66c99.firebaseio.com",
projectId: "instaclone-66c99",
storageBucket: "instaclone-66c99.appspot.com",
messagingSenderId: "608828367882"
};
firebase.initializeApp(config);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = firebase.storage();
// Create a storage reference from our storage service
const storageRef = storage.ref();

// Create a child reference
const imagesRef = storageRef.child('images');
// imagesRef now points to 'images'
// Create a ref to a file - space.jpg
const spaceRef = imagesRef.child('space.jpg');
// ^^^ now you should have a "path" in your firebase storage that looks like: 'images/space.jpg'
// select anchor tag and file input
const fileSelect = document.querySelector('.js-fileSelect');
const fileElem = document.querySelector('.js-fileElem');
// click handler for fileElem
fileSelect.addEventListener('click', (e) => {
    e.preventDefault();
    // trigger click on input type="file"
    // this will call the change event defined below
    if (fileElem) {
        fileElem.click();
    }
});
// change handler for fileSelect
fileElem.addEventListener('change', (e) => {
    // e.target.files contains File object references
    // to all chosen items by user
    console.log(e.target.files);
    /* ADDED THESE LINES */
    // since e.target.files is "array-like", we turn it into an array
    // then map it to the .put() method from Firebase, which returns promises...
    const fileUploads = Array.from(e.target.files).map((currFile) => {
        // we store the name of the file as a storage ref
        const fileRef = imagesRef.child(currFile.name);
        // we return a promise where we first "put" or upload the file
        // and then once the upload is complete, we return promise with
        // download URL string of the file we uploaded
        return fileRef.put(currFile).then((snapshot) => snapshot.downloadURL);
    });
    // once ALL the promises have been resolved
    // we console.log the urls...but we can do whatever we need to with this data 
    // from here
    Promise.all(fileUploads).then((itemURL) => {
        POST('/api/createNewPost', {
        	userID,
        	username,
        	post: itemURL[0]
        }).then(data => {
        	console.log(data)
        })
    });
    /* END ADDED THESE LINES */
});
})();