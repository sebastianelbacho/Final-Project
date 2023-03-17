document.body.classList.add('fade-out');



window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});


document.body.classList.add('fade-out');



window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;

    }
}







function validateForm() {
    let x = document.forms["myForm"]["sname"].value;
    if (x == "") {
        alert("Second Name must be filled out");
        return false;
    }
}


function validateForm() {
    let x = document.forms["myForm"]["pnum"].value;
    if (x == "") {
        alert("Phone number must be filled out");
        return false;
    }
}
