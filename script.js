const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
const calculateBtn = document.querySelector('.calculate-btn');
const daySpan = document.querySelector('#dd');
const monthSpan = document.querySelector('#mm');
const yearSpan = document.querySelector('#yy');

calculateBtn.addEventListener('click', ()=> {
    let dayInputValue = dayInput.value;
    let monthInputValue = monthInput.value;
    let yearInputValue = yearInput.value;
    if (dayInputValue == 0) {
        alert('Enter a Day');
    }
        if (dayInputValue > 31) {
            alert('Wrong day number')
        }
    if (monthInputValue == 0) {
        alert('Enter a Month');
    }
        if (monthInputValue > 12) {
            alert('Wrong month number')
        }
    if (yearInputValue == 0) {
        alert('Enter a Year')
    }
        if (yearInputValue < 1000) {
            alert('Wrong year number')
        }
    // function works with 8/15/2023 date
    let calculatedDayNumber = 31 - dayInputValue;
    daySpan.textContent = calculatedDayNumber;
    let calculatedMonthNumber = 12 - monthInputValue;
    monthSpan.textContent = calculatedMonthNumber;
    let calculatedYearNumber = 2023 - yearInputValue;
    yearSpan.textContent = calculatedYearNumber;
});





