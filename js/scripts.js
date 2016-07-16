$(document).ready(function(){
  $("#contact").submit(function(e){
    e.preventDefault();
    var name = $('input[name="name"]').val();
    var terms = $('input[name="terms"]:checked').val();
    var state = $('select[name="state"]').val();

    emailjs.send("gmail","template_Lgviy877",{name: "Mat", notes: "Check this out!"});
  });
});
