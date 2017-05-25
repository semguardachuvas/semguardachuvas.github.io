$(document).ready(function(){
    $(".description").hide();
  $("h1").click(function(){
    $(".description").slideToggle(400,function(){
    });
  });
});