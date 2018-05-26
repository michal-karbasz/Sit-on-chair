document.addEventListener("DOMContentLoaded", function() {

    //change image after clicking the green arrow

    var leftArrow = document.querySelector(".arrow-left");
    var rightArrow = document.querySelector(".arrow-right");
    photoArr = document.querySelectorAll(".first-section img")
    photos = [];

    for (var i = 0; i < photoArr.length; i++) {
        photos.push(photoArr[i]);
    }
    
    leftArrow.addEventListener("click", switchPhotoBck);
    rightArrow.addEventListener("click", switchPhotoFwd);
    

    function switchPhotoFwd() {
            
            photos[0].classList.add("transparent");
            photos[1].classList.remove("transparent");       
        var firstPhoto = photos.shift();
            photos.push(firstPhoto); //push the [0] element to the end of array
            transition();
    }

    function switchPhotoBck() {
            
            photos[0].classList.add("transparent");
            photos[photos.length - 1].classList.remove("transparent");
        var lastPhoto = photos.pop();
            photos.unshift(lastPhoto);
            transition();
    }

    function transition() {
        photos[0].style.WebkitTransition = "all 3s"; // Code for Safari 3.1 to 6.0
        photos[0].style.transition = "all 3s";  

    }

    //hide transparent box on each picture in 'pictures' section on hover

    var box = document.querySelectorAll(".photos .holder .box");

    for (var i = 0; i < 2; i++) {
    box[i].addEventListener("mouseover", hideInfo);
    box[i].addEventListener("mouseout", displayInfo);
    }

    function hideInfo() {
        this.querySelector(".text-background").style.visibility = "hidden";
    }
    
    function displayInfo() {
        this.querySelector(".text-background").style.visibility = "visible";
    }




});