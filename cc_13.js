// Task 1: Creating the Base Structure
// Completed in the HTML file

// Task 2: Adding Employee Cards Dynamically

// Select the employee container div
const employeeContainer = document.getElementById("employeeContainer");

// Function to create and add an employee card dynamically
function addEmployeeCard(name, position) {
    const card = document.createElement("div"); // Create a new div for the employee card
    card.classList.add("employee-card"); // Add class for styling

    const nameHeading = document.createElement("h3"); // Create an h3 for the employee's name
    nameHeading.textContent = name; // Set the name text

    const positionPara = document.createElement("p"); // Create a paragraph for the position
    positionPara.textContent = position; // Set the position text

    const saveButton = document.createElement("button"); // Create "Save" button
    saveButton.textContent = "Save"; // Set button text
    saveButton.classList.add("save-btn"); // Add class for styling

    const editButton = document.createElement("button"); // Create "Edit" button
    editButton.textContent = "Edit"; // Set button text
    editButton.classList.add("edit-btn"); // Add class for styling

    const removeButton = document.createElement("button"); // Create "Remove" button
    removeButton.textContent = "Remove"; // Set button text
    removeButton.classList.add("remove-btn"); // Add class for styling
    removeButton.addEventListener("click", function () { 
        card.remove(); // Remove the employee card when clicked
    });

    // Append elements to the card
    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    card.appendChild(saveButton);
    card.appendChild(editButton);
    card.appendChild(removeButton);

    // Append the card to the employee container
    employeeContainer.appendChild(card);
}

// Example employee cards with aviation-related job titles
addEmployeeCard("James Carter", "Pilot - Captain");
addEmployeeCard("Sophia Reynolds", "Air Traffic Controller");
addEmployeeCard("Daniel Thompson", "Aircraft Maintenance");
addEmployeeCard("Emma Rodriguez", "Flight Attendant");
addEmployeeCard("Michael Johnson", "Aviation Safety Inspector");

// Task 3: Converting NodeLists to Arrays for Bulk Updates

// Function to highlight all employee cards
function highlightEmployeeCards() {
    const cards = document.querySelectorAll(".employee-card"); // Select all employee cards
    const cardArray = Array.from(cards); // Convert NodeList to an array

    // Loop through each card and add a new grayish blue background color
    cardArray.forEach(card => {
        card.style.backgroundColor = "#6c7a89"; // Grayish blue background
        card.style.border = "2px solid #556677"; // Slightly darker border for contrast
    });
}

// Call the function to apply highlighting to all cards
highlightEmployeeCards(); // **Update for task 1 commit name**

// Task 4: Implementing Removal of Employee Cards with Event Bubbling

// Add event listener to employeeContainer for event bubbling
employeeContainer.addEventListener("click", function (event) {
    console.log("An employee card was clicked!"); // Log message when any card is clicked
});

// Modify remove button event listener to prevent event bubbling
document.querySelectorAll(".remove-btn").forEach(button => {
    button.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent event from bubbling up
        this.parentElement.remove(); // Remove the employee card
    });
});