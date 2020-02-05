const socket = io();
var idContainer = document.getElementById('id-container');
var idText = document.getElementById('id-text');
var buzzButton = document.getElementById('buzz-button');
var id = 'DEFAULT_ID';

socket.on('lock', function() {
    buzzButton.setAttribute('disabled', 'true');
});

socket.on('unlock', function() {
    console.log('INSIDE UNLOCK');
    buzzButton.removeAttribute('disabled');
});

function buzz() {
    socket.emit('buzz', { id: id });
}

function idSubmit() {
    if (idText.value) {
        id = idText.value;
        idContainer.style.display = 'none';
        buzzButton.removeAttribute('hidden');
    } else {
        alert('Please enter a name into the field');
    }

}