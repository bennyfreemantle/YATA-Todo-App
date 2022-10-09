// PLAN 4.1
// declare importantThings array
// get input and button elements from DOM
// addEventListener to button to add input value to our array

let importantThings = [];

let inputField = document.querySelector('#important-thing');
let priorityLevel = document.querySelector('#priority-input');
let button = document.querySelector('#add-to-list');
let ol = document.querySelector('ol');

button.addEventListener('click', updateOrderedList);

function addImportantThings() {
    // check if our input field has text to submit
    if (inputField.value != "") {
        // format string so the starting word begins with a capital
        // if user entered all caps it would auto lower case the rest of the text
        let formattedString = inputField.value.toLowerCase();
        formattedString = formattedString.charAt(0).toUpperCase() + formattedString.slice(1);

        // our input field has text
        // create an object with our inputField and priorityLevel values
        let obj = {
            text: formattedString,
            priority: priorityLevel.value
        }
        importantThings.push(obj);
    }
    // we don't want to add an empty string in our array, so do nothing. No need for an else

    // Clear the inputField value ready for our next input
    inputField.value = "";
}

// PLAN 4.2
// call our addImportantThings() function in our new updateOrdredList function
// loop through our array, for each element add create a new li element and update it's textContent
// get our ol element from the DOM
// ol.appendChild(li) to add our li's to the ol

function updateOrderedList() {
    // adds our thing to the array first
    // then update our li's and ordered list
    addImportantThings();
    // create a new li
    let li = document.createElement('li');

    // for each item (thing) in our array (importantThings)
    // forEach reads easily and looks cleaner
    // although a for loop would do the exact same thing.
    importantThings.forEach(thing => {
        // update li text
        li.textContent = thing.text;
        // append our li to our ordered list
        ol.appendChild(li);
    });
}

// PLAN Task 4.3
// add a label and input field to our html
// instead of pushing a single string to our importantThings array
// get our input field value
// we push an object with a priority value

// PLAN Task 4.4
// add new button to our html called 'Order List'
// get our button from the DOM
// reorder our importantThings array 
// if priority is 1 it should be our the first li listed

let orderButton = document.querySelector('#order-button');
orderButton.addEventListener('click', orderList);

function orderList() {
    // reorder our array based on priority object key
    // sorts our array based on priority number 1,2,3,4,5,6,7,8,9,10
    // 10 is our max as that's the max limit i set in the html
    let sortedArray = importantThings.sort((a,b) => a.priority - b.priority);
    
    // remove our current li's as they will be updated with the new order
    while (ol.firstChild) {
        ol.removeChild(ol.lastChild);
    }

    
    // with the sorted array, reprint our li's
    sortedArray.forEach(thing => {
        let li = document.createElement('li');
        // update li text
        li.textContent = thing.text;
        // append our li to our ordered list
        ol.appendChild(li);
    });

    console.log(sortedArray)

}