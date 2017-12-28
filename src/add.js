$(document).ready(function(){


$('#add_list').click(function(){
let add_component = '<form><div class="form-row align-items-center"><div class="col-auto"><input type="text" class="form-control form-control-lg" id="task_value" placeholder="Wpisz tutaj nazwę zadania"> </div><div class="col-auto"><button class="btn btn-primary" id="add_task">Dodaj</button></div></div></form>';
let value = $("#list_value").val();

$('<li><a href="" class="list-group-item list-group-item-action to_do_task">' + value + '</a></li>').appendTo(".lists");
$('.list-group').append(add_component.clone());
        
        
});




$('#add_task').click(function(){
let add_task_component = '<li><div class="add_component" id="add_task_component"><input type="text" id="task_value" placeholder="Wpisz tutaj nazwę zadania"><button id="add_task">Dodaj</button></div></li>';
let value = $("#task_value").val();

if(value.length>0){
$('<li class="list-group-item list-group-item-action to-do-task"><div class="pretty p-svg p-curve"><input type="checkbox" /><div class="state p-success"><svg class="svg svg-icon" viewBox="0 0 20 20"><path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style="stroke: white;fill:white;"></path></svg><label>'+value+'</label></div></div></li>').appendTo(".to-do-list");
}
if(value.length === 0){

$('#myModal').modal('show'); 

}
        
        
});





});