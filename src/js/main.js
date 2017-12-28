$(document).ready(function () {




 
  
    $(".submit_to_do").click(function(){
        var to_do_task = document.querySelector(".input_to_do").value;
        var to_do_list = document.querySelector(".to_do_list");
        if (ToDoItem == "") {
            $(to_do_list).createTextNode("! Musisz coś wpisać przed dodaniem");

        } else {
            $(ToDoList).append('<li class="ToDoActivity">' + ToDoItem + '<div class="lnr lnr-cross DeleteActivity"></div></li>');
        }


    })
    $('.to_do_list').on('click', '.delete_task', function () {

        $(this).parent().remove();
    });


    $('.ToDoList').on('click', '.to_do_task', function () {

        $(this).css('background-color', '#29d665');
        $(this).css('color', '#505050');
        
        //var sound = document.getElementById("audio");
        //sound.play();
       


    });






});
