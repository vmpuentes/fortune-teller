var lucky = [];
var unlucky = [];

$(function() {
  $("form#fortune").submit(function(event) {
    event.preventDefault();
    $("#theButton").hide();
    $("input:checkbox[name=lucky-events]:checked").each(function() {
      var luckBox = $(this).val();
      lucky.push(luckBox);
    });
    $("input:checkbox[name=unlucky-events]:checked").each(function() {
      var runBad = $(this).val();
      unlucky.push(runBad);
    });
    if ((lucky.length + unlucky.length) <= 2) {
      $("#luckresponse").text("Buy a lotto ticket!");
    } else if ((lucky.length + unlucky.length) < 5) {
      $("#luckresponse").text("Go to the San Juan Islands and find a spotted Unicorn!");
    } else {
      $("#luckresponse").text("Go see a Psychic for Pete's sake!!!");
    }
  });
});
