console.log(window.innerWidth);
function myFunction(x) {
    x.classList.toggle("change");
}

if (window.innerWidth < 875) {
    console.log("phone")
    document.getElementById('links').innerHTML = ""
}else{
    console.log("PC");
    document.getElementById('container').innerHTML = ""
}