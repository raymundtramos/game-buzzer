const socket = io();
var buzzButton = document.getElementById('buzz-button');
var id = 'DEFAULT_ID';

socket.on('lock', function() {
    buzzButton.setAttribute('disabled', 'true');
});

socket.on('unlock', function() {
    buzzButton.setAttribute('disabled', 'false');
});

function buzz() {
    socket.emit('buzz', { id: id });
    console.log('I was clicked');
}