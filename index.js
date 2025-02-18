let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

const generatePassword = (len) => {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbol = "!@#$%^&*()_+-={}:<>?";

    let data = lowerAlphabet + upperAlphabet + numbers + symbol;
    let generator = '';
    for(let i = 0; i < len; i++){
        generator += data[~~(Math.random() * data.length)];
    }
    return generator;
}

const getPassword = () => {
    const newPassword = generatePassword(passwordLength.value);
    password.value = newPassword;
    alert('Password berhasil dibuat');
}

const savePassword = () => {
    document.title = password.value;
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`));
    saveButton.setAttribute('download', 'MyPasswordLOG.txt');
    setTimeout(() => {
        alert('Password berhasil disimpan');
    }, 1000);
}