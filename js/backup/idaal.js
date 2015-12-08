/**
 * Created by cp5 on 12/06/2015.
 */
$(document).ready(function(){
   var block = $('#showHide').css("display","block");
    $('#searchControl').click(function(){
        $('#showHide').fadeToggle();
        if(block){
            $('#goRightToggle').toggle();
            $('#goRightToggle2').toggle();

         }else{
            $('#goRightToggle2').toggle();

    }
  });


});