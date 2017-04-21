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
    } // GET

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
    };
    
    		const submitBtn = document.querySelector('#submit');
            const loginUsername = document.querySelector('#username');
            const loginPassword = document.querySelector('#password');

            submitBtn.addEventListener('click', ()=>{
              const username = loginUsername.value;
              const password = loginPassword.value;

              console.log(username)
              console.log(password)

              POST('./post',{username, password})

            })




        //    	 GET('/public/', {
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
// 	const username = document.querySelector('username')
// 	const password = document.querySelector('password')
// 	const button = document.querySelector('submit')
// 	const url = 'url'
            
// 	    function POST(url, data) {
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

})();