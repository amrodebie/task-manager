
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskName = document.getElementById('task-name').value;
    const taskDate = document.getElementById('task-date').value;
    if (taskName && taskDate) {
        const taskList = document.querySelector('#task-list ul');
        const taskItem = document.createElement('li');
        taskItem.textContent = `${taskName} - ${taskDate}`;
        taskList.appendChild(taskItem);
        document.getElementById('task-name').value = '';
        document.getElementById('task-date').value = '';
    }
});
