function searchfn(){
    var searchterm=document.getElementById("searchbox");
    // https://itunes.apple.com/search?term=jack%20johnson&entity=song&limit=5
    var httpRequest=new XMLHttpRequest();
    // httpRequest.onreadystatechange = alertContents;
    // httpRequest.open('GET', ' https://itunes.apple.com/search?term=jack+johnson&entity=song&limit=5');
    // httpRequest.send();
    // function alertContents(){
    //     debugger;
    //     if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status == 200) {
          
    //             debugger;
    //             alert(httpRequest.responseText);

    //         }
    // }


   // 
   const promise = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    
    request.open('GET', 'https://itunes.apple.com/search?term=jack+johnson&entity=musicVideo');
   // request.setRequestHeader('Content-Type', 'application/json')
   // request.withCredentials=true;
   request.setRequestHeader('Access-Control-Allow-Headers', '*');
    request.onload = () => {
       
      if (request.status === 200) {
        resolve(request.response); // we got data here, so resolve the Promise
      } else {
        reject(Error(request.statusText)); // status is not 200 OK, so reject
      }
    };
  
    request.onerror = () => {
      reject(Error('Error fetching data.')); // error occurred, reject the  Promise
    };
  
    request.send(); // send the request
  });
 
  promise.then((data) => {
    console.log('Got data! Promise fulfilled.');
    //document.body.textContent = JSON.parse(data).value.joke;
  }, (error) => {
    console.log('Promise rejected.');
    console.log(error.message);
  });

    
  
}
