const inputArea = document.getElementById('inputarea');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputArea.value===""){
        alert ("you must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputArea.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }inputArea.value==="";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target,this.tagName==="LI"){
        e.target.classlist.toggle("checked");
        saveData();

    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();
