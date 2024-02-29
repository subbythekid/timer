// Set the countdown date
var countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 8); // 8 days from now

// Update the countdown every second
var countdownFunction = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();
    
  // Calculate the distance between now and the countdown date
  var distance = countdownDate - now;
    
  // Calculate days, hours, minutes and seconds left
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Format the output to always have two digits
  days = String(days).padStart(2, '0');
  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  // Update the display
  document.getElementById("days").innerHTML = days + "d";
  document.getElementById("hours").innerHTML = hours + "h";
  document.getElementById("minutes").innerHTML = minutes + "m";
  document.getElementById("seconds").innerHTML = seconds + "s";
    
  // If the countdown is finished, display a message and clear the interval
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.querySelector('.countdown').innerHTML = "Countdown expired!";
  }
}, 1000);
