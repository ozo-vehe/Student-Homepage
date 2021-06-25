let categoryIcon = document.querySelectorAll(".navigationSection .fa-angle-down"),
    notificationIcon = document.querySelector(".userNotification i"),
    userNotificationMsg = document.querySelector(".userNotification p"),
    profileImg = document.querySelector(".userImg img"),
    profileMenu = document.querySelector(".profileDropdownMenu"),
    rightIcon = document.querySelectorAll(".fa-angle-right"),
    showCategory = document.querySelector(".category .catDropdownMenu"),
    showTeach = document.querySelector(".teach .teachDropdownMenu"),
    showMyLearning = document.querySelector(".myLearning .learningDropdownMenu"),
    gamesList = document.querySelector(".games ul"),
    basicSchSbjsList = document.querySelector(".basicSchSbjs ul"),
    highSchSbjsList = document.querySelector(".highSchSbjs ul"),
    searchIcon = document.querySelector(".searchBar i"),
    searchBar = document.querySelector(".searchBar input");


/*****************   Drop Down Menu   ************/

/************       For Category section       ************/
categoryIcon.forEach((icon) => {
    icon.addEventListener("click", function() {
        switch (icon.parentElement.className) {
            case "category":
                showCategory.classList.toggle("showDropdownMenu")
                showMyLearning.classList.remove("showDropdownMenu")
                showTeach.classList.remove("showDropdownMenu")
                break;
            case "teah":
                showTeach.classList.toggle("showDropdownMenu")
                showCategory.classList.remove("showDropdownMenu")
                showMyLearning.classList.remove("showDropdownMenu")
                break;
            case "myLearning": 
                showMyLearning.classList.toggle("showDropdownMenu")
                showCategory.classList.remove("showDropdownMenu")
                showTeach.classList.remove("showDropdownMenu")
                break;
        }
    })
})
/****************   Drop down menu for games, basic subjects and high school subjects *********/
rightIcon.forEach((icon) => {
    icon.addEventListener("click", function () {
        switch (icon.parentElement.className) {
            case "games":
                gamesList.classList.toggle("showDropdownMenu")
                basicSchSbjsList.classList.remove("showDropdownMenu")
                highSchSbjsList.classList.remove("showDropdownMenu")
                break;
            case "basicSchSbjs":
                basicSchSbjsList.classList.toggle("showDropdownMenu")
                gamesList.classList.remove("showDropdownMenu")
                highSchSbjsList.classList.remove("showDropdownMenu")
                break;
            case "highSchSbjs": 
                highSchSbjsList.classList.toggle("showDropdownMenu")
                gamesList.classList.remove("showDropdownMenu")
                basicSchSbjsList.classList.remove("showDropdownMenu")
                break;
        }
    })
})
/******************     For user notification   ************/
notificationIcon.addEventListener("click", function () {
    userNotificationMsg.classList.toggle("showDropdownMenu")
})

/***************        Profile Image drop down     ***********/
profileImg.addEventListener("click", function () {
    profileMenu.classList.toggle("showDropdownMenu")
})


/***********    Search Bar Input Value  ************/
searchIcon.addEventListener("click", function () {
    let seacrhValue = searchBar.value;
    if(seacrhValue) {
        searchBar.parentElement.style.border = "thin solid var(--border-color)"
        /*****  Send search value to database   ********/
        /* set value to empty string after fetchinh the result  
        searchBar.value = "";
        */
    }
    else {
        searchBar.parentElement.style.border = "2px solid var(--red-color)"
    }
})