const getUrl = 'https://jsonplaceholder.typicode.com/users'
const postUrl = 'https://jsonplaceholder.typicode.com/posts'

const postObj = {
    user : "Player one",
    health : 5,
}

let requestGenerator = function (method, url, body = null) {
    return new Promise((resolve, reject) => {
        let xhrRequest = new XMLHttpRequest();

        xhrRequest.open(method, url);

        xhrRequest.responseType = 'json';
        xhrRequest.setRequestHeader('Content-Type', 'application/json');
        xhrRequest.onload = () => {

            if (xhrRequest.status >= 400) {
                reject (xhrRequest.response)
            } else {
                resolve(xhrRequest.response);
            }

        }

        xhrRequest.onerror = (err) => {
           reject(xhrRequest.response);
        }

        xhrRequest.send(JSON.stringify(body));
    })
}

requestGenerator('GET', getUrl)
    .then(data => console.log(data))
    .catch(err => console.log(err))

requestGenerator('POST', postUrl, postObj)
    .then(data => console.log(data))
    .catch(err => console.log(err))