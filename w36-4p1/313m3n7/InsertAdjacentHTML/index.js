const insert = document.querySelector("#insert");
insert.addEventListener("click", () =>{
    const subject = document.querySelector("#subject");
    const positionSelect = document.querySelector("#position");
    let newHTML = "<strong>NEW HTML</strong>";
    subject.insertAdjacentHTML(positionSelect.value, newHTML);
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", ()=>{
    document.location.reload();
});