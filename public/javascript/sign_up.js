
async function login(username, password) {

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}



async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#newUserNameInput').value.trim();
    const password = document.querySelector('#newUserPasswordInput').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // check the response status
        if (response.ok) {
            console.log('successfully created sign up');
            login(username, password);
        } else {
            alert(response.statusText);
        }
    }
}


document.querySelector('#signUpForm').addEventListener('submit', signupFormHandler);
