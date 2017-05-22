(function() {// Protect the Lemurs

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
    
            const signupSubmitBtn = document.querySelector('.js-signup-BTN');
            console.log(signupSubmitBtn)
            const signupUsername = document.querySelector('.js-signup-un');
            const signupPassword = document.querySelector('.js-signup-pw');
            const signupFirstName = document.querySelector('.js-signup-fn');
            const signupLastName = document.querySelector('.js-signup-ln');

    signupSubmitBtn.addEventListener('click', (e)=>{
     e.preventDefault();

      const username = signupUsername.value;
      const password = signupPassword.value;
      const firstName = signupFirstName.value;
      const lastName = signupLastName.value;

      console.log(username)
      console.log(password)

      POST('/api/createNewUser', {
        username,
        password,
        firstName,
        lastName
      }).then(data => {
      if (data.success){
        window.location.href = '/'
      }
      })
    });


})()