const btn = document.querySelector('#signUpBtn');
function signUp() {
    const mainPage = document.getElementById('mainPage'); //select the main page
    const successfulPage = document.getElementById('successPage'); //select the successful page

    if (successfulPage.className = "hide") {
        mainPage.className = "hide"; //hide main page
        successfulPage.className = "show box"; //show successful page
    }
}
