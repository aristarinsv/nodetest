var WebSocketServer = new require('ws');
var wss = new WebSocketServer.Server({port: 9000});
var clients = [];
wss.on('connection', function(ws){
    var id = clients.length;
    clients[id] = ws;
    console.log("Hoвoe соединение N "+id);
    var jsn = {
        d1: {title: 'Заголовок 1', text: 'Тут содержится текст 1'}, 
        d2: {title: 'Заголовок 2', text: 'Тут содержится текст 2'}, 
        d3: {title: 'Заголовок 3', text: 'Тут содержится текст 3'}
    };
    clients[id].send(JSON.stringify(jsn));
    console.log(clients);
});