$(".red").click(function() {
  alert("you got red");
  $(".yellow").fadeIn(1000);
});

$(document).ready(function() {
  console.log("ready!");
});
