let addToDoButton = document.getElementById('AddToDo');
let toDoContainer = document.getElementById('toDoContainer');
let toDoClear = document.getElementById('ClearToDo');
let title =document.getElementById('title');
title.style.color="red";


addToDoButton.addEventListener('click',function(){
    let paragraph = document.createElement('p');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value="";


    
paragraph.addEventListener('click',function(){
    paragraph.style.textDecoration = 'line-through';
})

paragraph.addEventListener('dblclick', function(){
    toDoContainer.removeChild(paragraph);
})


toDoClear.addEventListener('click',function(){
    paragraph.style.display="none";
})


;})
