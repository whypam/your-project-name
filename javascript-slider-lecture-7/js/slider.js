function showAvatarFemale() {
    var fFull = document.getElementById("female-full");
    var mFull = document.getElementById("male-full");
    var fhalf = document.getElementById("female-half");
    var mhalf = document.getElementById("male-half");
    
    fFull.style.display = "block";
    mFull.style.display = "none";
    fhalf.style.display = "none";
    mhalf.style.display = "none";
}

function showAvatarMale() {
    var fFull = document.getElementById("female-full");
    var mFull = document.getElementById("male-full");
    var fhalf = document.getElementById("female-half");
    var mhalf = document.getElementById("male-half");

    fFull.style.display = "none";
    mFull.style.display = "block";
    fhalf.style.display = "none";
    mhalf.style.display = "none";
}

function showAvatarHalf() {
    var fFull = document.getElementById("female-full");
    var mFull = document.getElementById("male-full");
    var fhalf = document.getElementById("female-half");
    var mhalf = document.getElementById("male-half");

    fFull.style.display = "none";
    mFull.style.display = "none";
    fhalf.style.display = "block";
    mhalf.style.display = "block";
}