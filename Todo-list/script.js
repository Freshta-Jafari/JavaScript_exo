// wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
    // get reference to necessary DOM elements
    const addButton = document.getElementById("btn"); // button to add a new task
    const todoCardsContainer = document.getElementById("todoCards"); // container for all todo cards
    const cardCounter = document.getElementById("cardCounter"); //element to display the number of tasks
    let taskCount = 0;  // initialize the task count

   // Function to add a new task
    function addTask() {
        taskCount++; // increment the task count

        const todoCard = document.createElement("div"); // create a new card for the task
        todoCard.classList.add("todoCard");

        const textarea = document.createElement("textarea"); // create a textarea for the task input
        textarea.classList.add("task");
        textarea.value = `Task ${taskCount}`; // set initial value to "task x"
        textarea.maxLength = 200; // set maximum length for the textare
        textarea.cols = 20; // set column for the textarea 
        textarea.rows = 15; // set rows for the textarea

        const delBtn = document.createElement("span"); // create a delete button
        delBtn.classList.add("delBtn");
        delBtn.innerHTML = '<i class="fa-solid fa-trash-can" aria-hidden="true"></i>'; // set delete icons
        delBtn.addEventListener("click", () => {
            todoCardsContainer.removeChild(todoCard); //remove the card from the container
            taskCount--; // decrement the task count
            updateTaskNumbers(); // update the numbering of remaining tasks
            updateCardCounter(); // update the task counter display
        });

        todoCard.appendChild(textarea); // add textare to the todo card
        todoCard.appendChild(delBtn); // add ddelete button to the todo card
        todoCardsContainer.appendChild(todoCard); // add the todo card to the container
        updateCardCounter(); // update the task counter display
    }
    // Function to update the numbering of tasks
    function updateTaskNumbers() {
        const tasks = todoCardsContainer.querySelectorAll(".task");  // select all task textarea
        tasks.forEach((task, index) => {
            task.value = `Task ${index + 1}`;  // update each task's value with its new number
        });
        taskCount = tasks.length; // update the task count to the current number of tasks
    }
    // Function to update the displayed task counter
    function updateCardCounter(){
        cardCounter.textContent = `Number of tasks: ${taskCount}`; // update the text content with the task count
    }
    updateCardCounter(); // initial call to set the task counter on page load
    
    addButton.addEventListener("click", () => {
        addTask(); // add a new task when the button is clicked
    });
});
