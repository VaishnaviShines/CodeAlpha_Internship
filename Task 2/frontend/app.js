let token = '';

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    fetch('http://localhost:5000/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            token = data.token;
            document.getElementById('register').style.display = 'none';
            document.getElementById('postStatus').style.display = 'block';
        } else {
            alert('Registration failed');
        }
    });
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            token = data.token;
            document.getElementById('login').style.display = 'none';
            document.getElementById('postStatus').style.display = 'block';
        } else {
            alert('Login failed');
        }
    });
}

function postStatus() {
    const status = document.getElementById('status').value;
    fetch('http://localhost:3000/api/user/status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, status })
    })
        .then(response => response.json())}