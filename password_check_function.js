function getPasswordChecker(password) {
    return (passwordTry) =>  {
        return password === passwordTry
    }
}

passwordTry = toString(555);
console.log(getPasswordChecker("555aF")(passwordTry))

passwordTry = "555aF"
console.log(getPasswordChecker("555aF")(passwordTry))

console.log(getPasswordChecker("555aF").password)

