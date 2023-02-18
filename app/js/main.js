const btnDarkMode = document.querySelector(".dark-mode-btn")  
const titleDark = document.querySelector(".title-1")  

if (localStorage.getItem('darkMode') === 'dark'){
    btnDarkMode.classList.toggle("dark-mode-btn--active")
    document.body.classList.toggle("dark")
    titleDark.classList.toggle("title-1--dark");
};

btnDarkMode.onclick=function(){
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark=document.body.classList.toggle("dark");
    if (isDark ){
        localStorage.setItem('darkMode','dark')
    }
    else{
        localStorage.setItem('darkMode','light');
    }

    titleDark.classList.toggle("title-1--dark");
    


}

