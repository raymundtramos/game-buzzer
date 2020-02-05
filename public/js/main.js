const socket = io();
var player = document.getElementById('player');
var unlockButton = document.getElementById('unlock-button');

socket.on('register', function(data) {
    // Reserve for code where players get disconnected
});

socket.on('buzz', function(data) {
    player.innerText = data.id + ' BUZZED IN';
    unlockButton.removeAttribute('hidden');
    socket.emit('lock');
});

function unlock() {
    player.innerText = 'Waiting on players...';
    unlockButton.setAttribute('hidden', 'true');
    socket.emit('unlock');
}