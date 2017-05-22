(function() {// Protect the Lemurs

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
    
      const submitBtn = document.querySelector('#submit');
        const loginUsername = document.querySelector('#username');
        const loginPassword = document.querySelector('#password');

    submitBtn.addEventListener('click', (e)=>{
        e.preventDefault();

      const username = loginUsername.value;
      const password = loginPassword.value;

      console.log(username)
      console.log(password)

      POST('/auth/login', {
        email: username,
        password: password
      }).then((data) => {
        localStorage.setItem("currentUser", data.userID);
        localStorage.setItem("currentUsername", data.username);
        console.log(data, data.success, data.userID)
        if (data.success) {
            window.location.href = '/profile.html'
        }
      })
      

    });  // GET('/auth/login',{username, password})

})();
 