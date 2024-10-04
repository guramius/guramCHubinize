const apiCall = async () => {
    const apiCallPromise = await fetch('https://jsonplaceholder.typicode.com/users');
    const apiCallObj = await apiCallPromise.json();
    
    apiCallObj.forEach(user => {
        console.log('aplication name:' + user.name);
        console.log( 'aplication e-mail' + user.email)
    });


    console.log(apiCallObj) 
 };
 apiCall()