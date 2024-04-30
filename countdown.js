// Set the end date for the countdown
const endDate = new Date('May 20, 2022').getTime();

// Display the current date
function displayDate() {
  const currentDate = new Date();
  document.getElementById('date').innerText = currentDate.toDateString();
}

// Update the countdown timer every second
function updateCountdown() {
  const currentDate = new Date().getTime();
  const daysRemaining = Math.floor((endDate - currentDate) / (1000 * 60 * 60 * 24));
  var dayType = int -1;
  
  document.getElementById('countdown').innerText = `Days remaining: ${daysRemaining}`;
  
if (currentDate == 

  if (dayType == 2) {
    console.log(`Today is C Day`);
  }
  else if (dayType == 1) {
    console.log(`Today is B Day`);
  }
  else if (dayType == 0) {
    console.log(`Today is A Day`);
  }
  else {
    print("Error: dayType could not be collected");
  }
  
}

// Display a custom description for the C Days
function displayDescription(description) {
  document.getElementById('description').innerText = description;
}

// Call the displayDate and updateCountdown functions every second
setInterval(() => {
  displayDate();
  updateCountdown();
}, 1000);
