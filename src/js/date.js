$(document).ready(function(){   


let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!

    
    if(dd < 10){
      dd='0'+dd;
    }
    if(mm < 10){
       mm="0"+mm;
    } 
    switch(mm){
    	case 1: mm="styczeń"; break;
    	case 2: mm="luty"; break;
    	case 3: mm="marzec"; break;
    	case 4: mm="kwiecień"; break;
    	case 5: mm="maj"; break;
    	case 6: mm="czerwiec"; break;
    	case 7: mm="lipiec"; break;
    	case 8: mm="sierpień"; break;
    	case 9: mm="wrzesień"; break;
    	case 10: mm="październik"; break;
    	case 11: mm="listopad"; break;
    	case 12: mm="grudzień"; break;



    }
    today = dd+':'+mm;
    

let day_div = '<a class="list-group-item list-group-item-action day" data-toggle="list" href="#list-home" role="tab" aria-controls="home">';

for(i=0;i<=3;i++){
	
$('.days-group').append(day_div + dd + '&nbsp;' + mm +'</a>' );
dd++;

}
//$('#next_week_button').click(function(){

//for(i=6;i<=12;i++){
	
//$('.days-group').append(day_div + dd + '&nbsp;' + mm +'</li>' );

//}







});




