$(document).ready(function() {
    
    $('#taskForm').submit(function(e) {
        e.preventDefault();
        const taskName = $('#taskName').val();
        if (taskName) {
            const listItem = $('<li>').text(taskName);
            $('#taskList').append(listItem);
            $('#taskName').val(''); 
        }
    });

    
    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    
});

const form = document.querySelector("form");
form.addEventListener("submit", function () {
console.log("Tarefa adicionada");
})


