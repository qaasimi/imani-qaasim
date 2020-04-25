// Array creation
var messages = [];

var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message',
};

var data = [
    {
        type: messageType.out,
        user: 'Imani',
        message: 'Hello World!'
    },
    {
        type: messageType.in,
        user: 'Tytice',
        message: "What does that mean?"
    },
    {
        type: messageType.out,
        user: "Imani",
        message: 'We talked  about this! Tell me you have forgotten?'
    },
];

// Constructor function creation
function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.message = message;
}

function createMessageElement(message) {
    var messageText = document.createTextNode(
        message.user + ': ' + message.message
    );

    var messageEL = document.createElement('div');
    messageEL.appendChild(messageText);
    messageEL.className = message.type;

    return messageEL;
}

function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messageContainerEL = document.getElementById('message-container');

    switch (event.target.id) {
        case 'send-button':
        user = 'Imani';
        type = messageType.out;
        break;
        case 'reply-button':
        user = 'Tytrice';
        type = messageType.in;
        break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

    if (messageInput.value != '') {
        var message = new Message(type, user, messageInput.value);
        messages.push(message);
        var el = createMessageElement(message);
        messageContainerEL.appendChild(el);
        messageInput.value = '';
    }
}

function loadSeedData() {
    for (var i = 0; i < data.length; i++) {
        var message = new Message(data[i].type, date[i].user, data[i].message);
        messages.push(message);
    }

    var messagesContainerEL = document.getElementById('message-container');

    for(var i = 0; i < messages.length; i++) {
        var message = messages[i];
        var el = createMessageElement(message)
        messagesContainerEL.appendChild(el);
  }
}

var init = function() {

    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;
    loadSeedData();
};

init();