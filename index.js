fetch('https://jsonplaceholder.typicode.com/todos/1')
fetch('https://jsonplaceholder.typicode.com/users')
    // fetch('https://jsonplaceholder.typicode.com/people')
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(json => displayUser(json))
    // .catch(error => console.log(error));

function displayUser(users) {
    // console.log("users", users);
    const userNames = users.map(user => user.username);
    // console.log(userNames);
    const ul = document.getElementById('users-container')
    for (let i = 0; i < userNames.length; i++) {
        const user = userNames[i];
        const li = document.createElement('li');
        li.innerText = user;
        ul.appendChild(li);
    }
}