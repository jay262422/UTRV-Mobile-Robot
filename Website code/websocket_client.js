// Create a WebSocket connection to the server
websocket_raspberrypi = "ws://192.168.229.199:8765"

const socket = new WebSocket(websocket_raspberrypi); // Replace raspberry_pi_ip_address with the actual IP address of your Raspberry Pi

// Event handler for successful WebSocket connection
socket.onopen = function(event) {
    console.log('WebSocket connection established');
};

// Event handler for receiving messages from the server
socket.onmessage = function(event) {
    console.log('Received message:', event.data);
};

// Event handler for WebSocket errors
socket.onerror = function(error) {
    console.error('WebSocket error:', error);
};

// Event handler for WebSocket connection closure
socket.onclose = function(event) {
    console.log('WebSocket connection closed');
};

// Function to send control command to the server
function sendCommand(command) {
    if (socket.readyState === WebSocket.OPEN) {
        console.log('Sending command:', command);
        socket.send(command);
    } else {
        console.error('WebSocket connection not open');
    }
};
