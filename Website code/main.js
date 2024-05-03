ip_camera = "http://192.168.229.10:88"

document.addEventListener("DOMContentLoaded", function() {

    // Function to handle movement controls for the car
    function move(direction) {
        // Send command to move the car in the specified direction
        console.log("Moving the car " + direction + " at speed " + speed);
        sendCommand(direction);
    }

    // Event listeners for car control buttons
    document.getElementById("forwardBtn").addEventListener("click", function() {
        move("forward");
    });
    document.getElementById("backwardBtn").addEventListener("click", function() {
        move("backward");
    });
    document.getElementById("leftBtn").addEventListener("click", function() {
        move("left");
    });
    document.getElementById("rightBtn").addEventListener("click", function() {
        move("right");
    });
    document.getElementById("stopBtn").addEventListener("click", function() {
        move("stop");
  });

    // Event listener for toggle switch to enable/disable WASD controls
    let useWASD = true; // Default to using WASD controls
    document.getElementById("toggleWASD").addEventListener("change", function() {
        useWASD = this.checked;
    });

    // Event listener for keyboard control
    document.addEventListener("keydown", function(event) {
        if (useWASD) {
            switch(event.key.toLowerCase()) {
                case 'w':
                    move("forward");
                    break;
                case 's':
                    move("backward");
                    break;
                case 'a':
                    move("left");
                    break;
                case 'd':
                    move("right");
                    break;
                case 'q':
                    move("stop");
                    break;
            }
        }
    });

    // Event listener for speed slider
    let speed = 5; // Default speed
    document.getElementById("speedSlider").addEventListener("input", function() {
        speed = parseInt(this.value);
    });

    // Function to handle camera movement controls
    function senddCommand(command) {
        // Send command to the camera
        console.log('Sending command:', command);
        console.log(ip_camera,"ip camera adresss")
        fetch(`http://${ip_camera}/decoder_control.cgi?command=${command}&user=lab308&pwd=lab308`);
      }
    function stopMoveAfterDelay(command) {
        setTimeout(function() {
          senddCommand('1'); // Send stop command
        }, 500); // Delay in milliseconds
      };
    
      // Event listeners for button clicks
      document.getElementById("upBtn").addEventListener("mousedown", function() {
        senddCommand('0'); // Send command to move up
        stopMoveAfterDelay(); // Stop movement after a delay
      });
    
      document.getElementById("leftCBtn").addEventListener("mousedown", function() {
        senddCommand('6'); // Send command to move left
        stopMoveAfterDelay(); // Stop movement after a delay
      });
    
      document.getElementById("rightCBtn").addEventListener("mousedown", function() {
        senddCommand('4'); // Send command to move right
        stopMoveAfterDelay(); // Stop movement after a delay
      });
    
      document.getElementById("downBtn").addEventListener("mousedown", function() {
        senddCommand('2'); // Send command to move down
        stopMoveAfterDelay(); // Stop movement after a delay
      });
    
      document.getElementById("centerBtn").addEventListener("click", function() {
        // Toggle the center button
        this.classList.toggle("active");
        // If the center button is not active, stop movement immediately
        if (!this.classList.contains("active")) {
          senddCommand('1'); // Send stop command
        }
    });
});
