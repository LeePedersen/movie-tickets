//Business Logic
function Tickets(movieName, time, userAge) {
  this.movieName = movieName,
  this.time = time,
  this.userAge = userAge
}

Tickets.prototype.getPrice = function() {
  // see if works w/out quotes
  var price = "";
  if (this.time > 7 && this.userAge < 65) {
    price = 12;
  } else if (this.time < 7 && this.userAge < 65) {
    price = 10;
  } else if (this.userAge > 65) {
    price = 8;
  }
  return price;
}



//UI Logic

$(document).ready(function() {
  $("#movie").submit(function(event) {
    event.preventDefault();
    var inputMovieName = $("#movieName").val();
    var inputTime = $("#time").val();
    var inputAge = $("#userAge").val();

    var newTicket = new Tickets(inputMovieName, inputTime, inputAge);


      $("#price").show();
      var price = newTicket.getPrice();
      $("#result").text(price);



  })
});
