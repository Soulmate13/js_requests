const getUrl = 'https://jsonplaceholder.typicode.com/users'
const postUrl = 'https://jsonplaceholder.typicode.com/posts'

const postObj = {
    user : "Player one",
    health : 5,
}


let requestGenerator = function (method, url, body = null) {

    let headers = {
        'Content-type': 'application/json'
    }

   return fetch(url, {
       method: method,
       headers: headers,
       // body: JSON.stringify(body)
   }).then(response => {
       if (response.ok) {
           return response.json();
       } else {
           return response.json().then(error => {
               const e = new Error('error');
               e.data = error;
               throw e;
           })
       }
   })
}

requestGenerator('GET', getUrl)
    .then(data => console.log(data))
    .catch(err => console.log(err))

// requestGenerator('POST', postUrl, postObj)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))