// get element inner text using id
function getInnerTextById(id){
    const text = document.getElementById(id).innerText
    return text
}


// function for to get button by id and make btn disable
function getBtnClickResultById(id){
    document.getElementById(id).addEventListener('click', function(event){
        alert('Board update successfully')
        disabled = document.getElementById(id).disabled = true;

       // to decrease the value of task assigned
        let taskAssignedValue = document.getElementById('task-assigned');
        const convertedTaskAssignedValue = parseFloat(taskAssignedValue.innerText);
        const output = convertedTaskAssignedValue - 1;
        taskAssignedValue.innerText = output;

        // to increase the value of the number of the navbar area
        let navbarCount = document.getElementById('navbar-count');
        const convertedNavbarCount = parseFloat(navbarCount.innerText);
        
        const navbarOutput = convertedNavbarCount + 1;
        navbarCount.innerText = navbarOutput

        // code to append child into the history area
        const historyArea = document.getElementById('history-area')
        
        const time = (new Date()).toLocaleTimeString(); 
        const historyItem = document.createElement('p')
        historyItem.classList.add('text-center', 'text-md', 'font-regular', 'bg-slate-200', 'mx-4', 'p-4', 'rounded-lg', 'mb-2')
        historyItem.innerHTML = `
            <p>You have complete this at ${time}</p>
        `
        historyArea.appendChild(historyItem);
    })
}

document.getElementById('clear-history-btn').addEventListener('click', function(event){
    
    const historyArea = document.getElementById('history-area')
    const items = document.querySelectorAll('p')
    historyArea.innerHTML = null;
})

