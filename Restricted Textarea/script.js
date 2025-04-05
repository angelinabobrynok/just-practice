function limitTextArea() {
    let counter = document.getElementById("counter");
    let textarea = document.getElementById("textarea");

    counter.innerText = textarea.value.length+ "/250";
    if (textarea.value.length === 250){
        counter.style.color = "red";
        textarea.style.border = "2px solid red";
    }else{
        counter.style.color = "black";
        textarea.style.border = "2px solid black";
    }
}
limitTextArea();
document.getElementById("textarea").addEventListener("input", limitTextArea);