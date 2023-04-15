function validatePassword() {
    let inputFieldEl = document.getElementById("inputField").value

    let passwordArray = inputFieldEl.split("")
console.log(inputFieldEl)
    let passwordIsLongEnough = passwordArray.length >= 8
    let passwordHasUppercase = inputFieldEl.match(/[A-Z]/)
    let passwordHasLowercase = inputFieldEl.match(/[a-z]/)
    let passwordHasNumber = inputFieldEl.match(/[0-9]/)
    let passwordHasSpecialCharacter = inputFieldEl.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)

    if (!passwordIsLongEnough) {
        alert("Password must contain at least 8 characters")
    } else if (!passwordHasUppercase) {
        alert("Password must contain an upper case letter")  
    } else if (!passwordHasLowercase) {
        alert("Password must contain a lower case letter")
    } else if (!passwordHasNumber) {
        alert("Password must contain a number")
    } else if (!passwordHasSpecialCharacter) {
        alert("Password must contain a special character")
    } else {
        alert("Password is valid")
    }

}