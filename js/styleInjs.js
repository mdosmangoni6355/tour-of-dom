const sections = document.querySelectorAll('section');
for (const section of sections){
    section.style.border = "1px solid blue";
    section.style.borderRadius = "10px";
    section.style.backgroundColor = "silver";
    section.style.marginBottom = "15px";
    section.style.padding = "15px";
}

const fruitsContainer1 = document.getElementById("fruits-container1");
fruitsContainer1.classList.add("bg-pink");

const fruits1 = document.getElementById("fruits");
// fruits1.classList.add("text-large");
// fruits1.classList.remove("text-large");