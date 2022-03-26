/* // add event handler in button
document.getElementById('login-btn').addEventListener('click', function () {
    // Get input value of user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // Get input value of user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // Check email or password
    const user = localStorage.getItem('User')
    console.log(user)
    if (userEmail == 'abc@gmail.com' && userPassword == 'secret') {
        window.location.href = 'account.html'
    }
    if (userEmail !== 'abc@gmail.com' || userPassword !== 'secret') {
        document.getElementById('Error').classList.remove('hidden')
    }
}) */


const displayData = () => {
    const emailText = document.getElementById('user-email');
    const email = emailText.value;
    emailText.value = '';
    const passText = document.getElementById('user-password');
    const password = passText.value;
    passText.value = '';
    const usersData = localStorage.getItem('User')
    const users = JSON.parse(usersData)
    console.log(users)
    for (const user in users) {
        console.log(user)
        if (email === user) {
            if (password === users[user]) {
                window.location.href = 'account.html'
            }
        }
        else {
            document.getElementById('Error').classList.remove('hidden')
        }
    }
}

