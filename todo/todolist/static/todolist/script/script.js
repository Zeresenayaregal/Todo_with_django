document.getElementById('addTaskBtn').addEventListener('click', function() {
    document.getElementById('todoPage').style.display = 'none';
    document.getElementById('addTaskPage').style.display = 'block';
});

document.querySelector('.edit-btn').addEventListener('click', function() {
    document.getElementById('todoPage').style.display = 'none';
    document.getElementById('addTaskPage').style.display = 'block';
});

document.getElementById('backBtnAddTask').addEventListener('click', function() {
    document.getElementById('addTaskPage').style.display = 'none';
    document.getElementById('todoPage').style.display = 'block';
});

document.getElementById('backBtnCompletedTask').addEventListener('click', function() {
    document.getElementById('completedTaskPage').style.display = 'none';
    document.getElementById('todoPage').style.display = 'block';
});

document.getElementById('completedTasks').addEventListener('click', function() {
    document.getElementById('todoPage').style.display = 'none';
    document.getElementById('completedTaskPage').style.display = 'block';
});

document.getElementById('allTasks').addEventListener('click', function() {
    document.getElementById('completedTaskPage').style.display = 'none';
    document.getElementById('todoPage').style.display = 'block';
});
document.getElementById('allTasks2').addEventListener('click', function() {
    document.getElementById('completedTaskPage').style.display = 'none';
    document.getElementById('todoPage').style.display = 'block';
});
document.getElementById('addTaskActionBtn').addEventListener('click', function() {
    const taskDetail = document.getElementById('taskDetail').value;
    if (taskDetail) {
        alert('Task Added: ' + taskDetail);
    } else {
        alert('Please enter task details');
    }
});
