const container = document.getElementById('list-container');
const input = document.getElementById('input');

function addTask(){
    if(input.value === ""){
        alert("You must write somthing!!")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        container.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
}

container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
})