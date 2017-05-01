(function() {

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
            request.open('POST', url);
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
    }; // POST


    //         const submitBtn = document.querySelector('#submit');
    //         console.log(submitBtn);
    //         const loginUsername = document.querySelector('#username');
    //         const loginPassword = document.querySelector('#password');

    // submitBtn.addEventListener('click', ()=>{
    //   const username = loginUsername.value;
    //   const password = loginPassword.value;
    //   console.log(username)
    //   console.log(password)
    //   // GET('/auth/login',{username, password})
    // })

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
    };
    
        const LoginBtn = document.querySelector('#submit');
            const loginUsername = document.querySelector('#username');
            const loginPassword = document.querySelector('#password');
            const loginFirst_name = document.querySelector('#First_name')
            const loginLast_name = document.querySelector('#Last_name')
                            
            const SignupBtn = document.querySelector('#submitSignup')
            const SignupUsername = document.querySelector('.username');
            const SignupPassword = document.querySelector('.password');
            const SignupFirst_name = document.querySelector('.First_name')
            const SignupLast_name = document.querySelector('.Last_name')


            LoginBtn.addEventListener('click', (e) => {
//                        if(submit!="null"){
//  submit.addEventListener("click",getLogin);
//  
//   function getLogin(){
//      const nameData = "createNewUser";
//      const passData = "createNewUser";
//      console.log(nameData)
//      const userName = document.userLogin.loginUsername.value;
//      const passWord = document.userLogin.loginPassword.value;


//      if(userName.compareTo(nameData) && pass.compareTo(passData)){
//          replace.textContent("Hello there " + nameData);
//      }
//      else{
//          document.write("Try again");
//                const username = loginUsername.value;
//                const password = loginPassword.value;
              
//                  console.log(username)
//                 console.log(password)
               });
/* SIGN UP  */
           SignupBtn.addEventListener('click', (e) => {
            console.log('working')
         if(submit!="null"){
SignupBtn.addEventListener("click",getLogin);

}

 function getLogin(){
   fetch: loginUsername, loginPassword{
  method: 'post',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({})
.then(res =>{
    if(res.ok) return res.json()
});
.then(data =>{
    console.log(data);
    window.location.reload(true);
    });
   
    const userName = document.userLogin.loginUsername.value;
    const passWord = document.userLogin.loginPassword.value;


    if(userName.compareTo(nameData) && pass.compareTo(passData){
        replace.textContent("Hello there " + SignupFirst_name);
    }
    else {
        document.write("Try again");
    }
            const first_name = SignupFirst_name.value;
            const last_name = SignupLast_name.value;
            const username = SignupUsername.value;
            const password = SignupPassword.value;

            console.log(first_name);
            console.log(last_name);
           });                 

      POST('/auth/createNewUser',{username, password, first_name, last_name})

      GET("/users").ready(function(){
    ("SignupBtn").click(function(){
        .get([First_name, Last_name, username, password] function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
     

   // GET('/')
   //      .then((data) => {
   //          document.querySelector('.').innerHTML = data.message;
   //      })
   //      .catch((e) => {
   //          alert(e);
   //      });

})();

      // console.log(username)
      // console.log(password)
      // console.log(first_name)
      // console.log(last_name)

//  const update = document.getElementById('');
// if (update){
// update.addEventListener('click', function () {

//   fetch('quotes', {
//   method: 'put',
//   headers: {'Content-Type': 'application/json'},
//   body: JSON.stringify({
//     'name': 'Muskan',
//     'quote': 'I find your lack of faith disturbing.'
//   })
// })
// .then(res =>{
//     if(res.ok) return res.json()
// })
// .then(data =>{
//     console.log(data);
//     window.location.reload(true);
// })
// })
// }


        //       GET('/public/', {
        //          username,
        //          password,
        //      }).then((data) => {
        //          console.log(data)
        //          if (data.success) {
        //              window.location.href = '/index.html'
        //         }
        //     });

        //    }

        // });




// (function(){
//  const username = document.querySelector('username')
//  const password = document.querySelector('password')
//  const button = document.querySelector('submit')
//  const url = 'url'
            
//      function POST(url, data) {
//         return new Promise((resolve, reject) => {
//             const request = new XMLHttpRequest();
//             request.open('POST', url);
//             request.setRequestHeader('Content-Type', 'application/json');

//             request.onload = () => {
//                 const data = JSON.parse(request.responseText);
//                 resolve(data)
//             }; 
//             request.onerror = (err) => {
//                 reject(err)
//             };

//             request.send(JSON.stringify(data));
//         });
//     } // POST
  
//     const GET = (url = null) => {
//         return new Promise((resolve, reject) => {
//             if (url === null) {
//                 reject('URL not valid');
//             }

//             const http = new XMLHttpRequest();
//             http.open('GET', url);

//             http.onload = () => {
//                 try {
//                     const jsonData = JSON.parse(http.responseText);
//                     resolve(jsonData);
//                 } catch (e) {
//                     reject(e);
//                 }
//             } // onload     
//         });
//     }
//     GET('/users.js')
//         .then((data) => {
//             document.querySelector('.').innerHTML = data.message;
//         })
//         .catch((e) => {
//             alert(e);
//         });


