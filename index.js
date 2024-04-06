// Add your code here
function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    };

    let config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", config)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error.message));

}