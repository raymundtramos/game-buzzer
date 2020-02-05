const socket = io();
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