// Add your code here
function submitData(name, email){


    const configObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com"
        }),
    }
   return fetch(`http://localhost:3000/users`, configObject)
    .then(res => res.json())
    .then(data => {
        document.body.innerHTML = data.id;
    })
    .catch(function(error){
        alert('Unauthorized Access');
        document.body.innerHTML = error.message;
    })
    
    
}