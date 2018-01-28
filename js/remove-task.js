const ul = document.querySelector('ul');
ul.addEventListener('dblclick',removeItem);
function removeItem(e){
e.target.remove();
}