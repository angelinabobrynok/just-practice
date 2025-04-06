document.querySelectorAll(".question").forEach(question => {
    question.addEventListener("click", function(){
        const answer = this.querySelector(".answer");
        const isOpen = answer.style.display === "block";
        document.querySelectorAll(".answer").forEach(ans => {
            ans.style.display = "none";
        });
        if (!isOpen) {
            answer.style.display = "block";
        }
    })
});