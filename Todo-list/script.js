document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("btn");
    const todoCardsContainer = document.getElementById("todoCards");
   const cardCounter = document.getElementById("cardCounter");
    let taskCount = 0; 

   
    function addTask() {
        taskCount++; 

        const todoCard = document.createElement("div");
        todoCard.classList.add("todoCard");

        const textarea = document.createElement("textarea");
        textarea.classList.add("task");
        textarea.value = `Task ${taskCount}`;
        textarea.maxLength = 200;
        textarea.cols = 20;
        textarea.rows = 15;

        const delBtn = document.createElement("span");
        delBtn.classList.add("delBtn");
        delBtn.innerHTML = '<i class="fa-solid fa-trash-can" aria-hidden="true"></i>';
        delBtn.addEventListener("click", () => {
            todoCardsContainer.removeChild(todoCard);
            taskCount--; 
            updateTaskNumbers(); 
            updateCardCounter();
        });

        todoCard.appendChild(textarea);
        todoCard.appendChild(delBtn);
        todoCardsContainer.appendChild(todoCard);
        updateCardCounter();
    }

  
    function updateTaskNumbers() {
        const tasks = todoCardsContainer.querySelectorAll(".task");
        tasks.forEach((task, index) => {
            task.value = `Task ${index + 1}`; 
        });
        taskCount = tasks.length; 
    }

    function updateCardCounter(){
        cardCounter.textContent = `Number of tasks: ${taskCount}`;
    }
    updateCardCounter();
    
    addButton.addEventListener("click", () => {
        addTask();
    });
});
