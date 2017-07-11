var lucky = [];
var unlucky = [];

$(function() {
  $("form#fortune").submit(function(event) {
    event.preventDefault();
    $("#submit").hide();
    $("input:checkbox[name=lucky-events]:checked").each(function() {
      var luckBox = $(this).val();
      lucky.push(luckBox);
    });
    $("input:checkbox[name=unlucky-events]:checked").each(function() {
      var runBad = $(this).val();
      unlucky.push(runBad);
    });
  });
});
