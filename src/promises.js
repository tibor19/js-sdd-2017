function getOld(url) {
  // Return a new promise.
  let result = new Promise(function (resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url, true);

    req.onload = function () {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };
    
    // Handle network errors
    req.onerror = function () {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });

  let timeout = Math.random() * 2000;
  console.log(timeout);
  
  return result.then(data => delay(data, timeout));
}

function get(url) {
  let timeout = Math.random() * 2000;
  console.log('fetch', timeout);
  return fetch(url).then(r => r.text()).then(delay(timeout));
}

function delay(timeout) {
  return new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing async succeeded, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code. 
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout(resolve, timeout); // Yay! Everything went well!
  });
}

export default function run() {

  Promise.all([1, 2, 3].map(index => get(`text${index}.txt`)))
    .then(promises => promises.reduce(
      (promise, text) => promise.then(() => console.log(text)), 
      Promise.resolve()
    )
  );
}
