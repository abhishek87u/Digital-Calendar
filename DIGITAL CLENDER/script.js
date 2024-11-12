// Initialize the current month and year
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// Function to render the calendar for the current month
function renderCalendar() {
  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); 
  const firstDay = new Date(currentYear, currentMonth, 1).getDay(); 

  // Update the month and year in the header
  document.getElementById('month').textContent = monthNames[currentMonth];
  document.getElementById('year').textContent = currentYear;

  // Clear the calendar grid
  const grid = document.getElementById('calendar-grid');
  grid.innerHTML = '';

  // Fill in empty days at the start of the month
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement('div');
    grid.appendChild(emptyCell);
  }

  // Fill in the days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayCell = document.createElement('div');
    dayCell.textContent = day;
    grid.appendChild(dayCell);

    // Highlight the current day
    if (day === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()) {
      dayCell.classList.add('current-day');
    }
  }

  // Animate the flip effect
  document.querySelector('.calendar').classList.remove('flip-out');
  document.querySelector('.calendar').classList.add('flip-in');
}

// Function to handle navigating to the next month
function nextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
}

// Function to handle navigating to the previous month
function prevMonth() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
}

// Initialize the calendar
renderCalendar();

// Event listeners for month navigation
document.getElementById('next-month').addEventListener('click', nextMonth);
document.getElementById('prev-month').addEventListener('click', prevMonth);

// Function to display the current date and day
function displayDate() {
  const now = new Date();
  const fullDate = now.toLocaleDateString(); 
  document.getElementById('fullDate').textContent = fullDate;
}

// Function to display the current time in the corner
function displayTime() {
  const now = new Date();
  const currentTime = now.toLocaleTimeString(); 
  document.getElementById('current-time').textContent = currentTime;
}

// Call displayDate and displayTime every 1 second to ensure the date and time stay up to date
setInterval(() => {
  displayDate();
  displayTime();
}, 1000);

// Initial call to display the date and time when the page loads
displayDate();
displayTime();
