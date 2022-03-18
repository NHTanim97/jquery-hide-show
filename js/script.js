$(document).ready(function(){
 
    $(".hide").click(function(){
      $(".box").hide(1000);
    //   5000 mili sec = 5 sec;
    });

    $('.show').click(function(){
        $('.box').show('slow');
    });

});
