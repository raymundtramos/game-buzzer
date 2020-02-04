const socket = io();

socket.on('register', function(data) {
    // Reserve for code where players get disconnected
});

socket.on('buzz', function(data) {
    console.log(data.id + ' BUZZED IN');
    socket.emit('lock');
});