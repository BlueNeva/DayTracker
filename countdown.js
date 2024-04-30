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
  
  document.getElementById('countdown').innerText = `Days remaining: ${daysRemaining}`;
  
  // Call your custom function based on the day type
  let dayType;
  if (daysRemaining % 3 === 0) {
    dayType = 'C Day';
    displayDescription('This is a special C Day!');
  } else if (daysRemaining % 2 === 0) {
    dayType = 'B Day';
  } else {
    dayType = 'A Day';
  }
  
  console.log(`Today is ${dayType}`);
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
