// mobile hamburger menu open

function hamburgeropen() {

    var open = document.getElementById("mobile-nav-isactive");
    if (open.style.display === "none") {
        open.style.display = "block";
    } else {
        open.style.display = "none";
    }
    var close = document.getElementById("mobile-nav");
    if (close.style.display === "block") {
        close.style.display = "none";
    } else {
        close.style.display = "block";
    }
}



function hamburgerClose() {

    var open = document.getElementById("mobile-nav-isactive");
    if (open.style.display === "none") {
        open.style.display = "block";
    } else {
        open.style.display = "none";
    }
    var close = document.getElementById("mobile-nav");
    if (close.style.display === "block") {
        close.style.display = "none";
    } else {
        close.style.display = "block";
    }
}




// mobile active menu dropdown trigger

// product section toggle

var product = document.getElementById("dropdown-product");

var dropdownActive = document.getElementById("dropdown-content-product");

var productImg = document.getElementById("product-img");

function changeFlex(){
    dropdownActive.classList.toggle("flex");
    product.classList.toggle("font-bold");
    productImg.classList.toggle("rotate180");
}






// company section toggle

var company = document.getElementById("dropdown-company");

var companyDropdownActive = document.getElementById("dropdown-content-company");

var companyImg = document.getElementById("company-img");

function changeFlexcompany() {
    companyDropdownActive.classList.toggle("flex");
    company.classList.toggle("font-bold");
    companyImg.classList.toggle("rotate180");
}



// connect section toggle


var connect = document.getElementById("dropdown-connect");

var connectDropdownActive = document.getElementById("dropdown-content-connect");

var connectImg = document.getElementById("connect-img");

function changeFlexconnect() {
    connectDropdownActive.classList.toggle("flex");
    connect.classList.toggle("font-bold");
    connectImg.classList.toggle("rotate180");
}
