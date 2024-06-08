/*=============== SHOW MENU ================*/
const navMenu = document.getElementById("nav-menu");
    navToggle = document.getElementById("nav-toggle");
    navClose = document.getElementById("nav-close");

            /* Menu Show */
navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
});

            /* Menu Close */
 navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
 })

 /*=============== SEARCH ================*/
 const search = document.getElementById("search");
    searchButton = document.getElementById("search-btn");
  searchClose = document.getElementById("search-close");

    /* Search Show */
    searchButton.addEventListener('click', () => {
        search.classList.add('show-search')
    });

    /* Search Close */
    searchClose.addEventListener('click', () => {
        search.classList.remove('show-search')
    });


    /*=============== LOGIN ================*/
    const login = document.getElementById("login");
    loginButton = document.getElementById("login-btn");
    loginClose = document.getElementById("login-close");

    /* Login Show */
    loginButton.addEventListener('click', () => {
        login.classList.add('show-login')
    });

    /* Login Close */
    loginClose.addEventListener('click', () => {
        login.classList.remove('show-login')
    });

    /*=============== SIGNUP ================*/
    const signup = document.getElementById("signup");
    signupButton = document.getElementById("signup-btn");
    signupClose = document.getElementById("signup-close");