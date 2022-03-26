
const addToDb = () => {
    const emailText = document.getElementById('email');
    const email = emailText.value;
    emailText.value = '';
    if (!email) {
        return
    }
    if (/[a-z]. *[0-9]. *[@.]/.test(email) === true) {
        addEmailToUser(email)
    }
    else {
        document.getElementById('error').classList.remove('hidden')
        document.getElementById('success').classList.add('hidden')
        document.getElementById('error2').classList.add('hidden')
    }

}
const getUser = () => {
    const user = localStorage.getItem('User');
    let userObj;
    if (user) {
        userObj = JSON.parse(user);
    }
    else {
        userObj = {};
    }
    return userObj
}
const addEmailToUser = email => {
    const user = getUser();
    const passText = document.getElementById('password')
    const password = passText.value
    passText.value = ''
    if (user[email]) {
        document.getElementById('error2').classList.remove('hidden')
        document.getElementById('error').classList.add('hidden')
        return
    }
    else {
        user[email] = password;
        document.getElementById('success').classList.remove('hidden')
        document.getElementById('error').classList.add('hidden')
        document.getElementById('error2').classList.add('hidden')
    }
    // user[email] = password;
    const userStringyfied = JSON.stringify(user);
    localStorage.setItem('User', userStringyfied);
}