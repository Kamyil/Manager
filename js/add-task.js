let button = document.querySelector('.add-task');

let ul2 = document.querySelector('ul');
button.addEventListener('click',addItem);




function addItem(){
    
 let value = document.querySelector('#task-input').value;
 if(value.length>=1){
    let li = document.createElement('li');
    
   
    li.innerHTML = value;
    ul2.appendChild(li);
    }
else{
    alert("Type something before adding it to the list");
    }
}