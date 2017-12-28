$(document).ready(function(){


let tasks = $('.to_do_task').map(function(i, el) {
    return $(el).text();
}).get();;

$('.check_task'[i]).click(function(){

	$(tasks[i]).toggleClass('checked');

})


















});