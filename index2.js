// const postInfo = {
//     title: 'fooooooooo',
//     body: 'barrrrrrrrrr',
//     userId: 1
// };
document.getElementById('submit').addEventListener('click', function() {
    // console.log('click korchi')
    const title = document.getElementById('title').value;
    const bodyContent = document.getElementById('bodyContent').value;
    // console.log(title, bodyContent);
    const post = { title: title, body: bodyContent };
    nowPostToServer(post);
})

function nowPostToServer(postInfo) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    .then(response => response.json())
        .then(data => console.log(data))
}
