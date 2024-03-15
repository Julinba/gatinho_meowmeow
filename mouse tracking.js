// Eye movement
document.addEventListener("DOMContentLoaded", function() {
    var leftEye = document.querySelector('.cat-left-eye');
    var rightEye = document.querySelector('.cat-right-eye');
    
    if (leftEye && rightEye) { // Ensure the elements are found
      // Add mousemove event listener to track mouse movement
      document.addEventListener('mousemove', function(e) {
        // Get mouse coordinates
        var mouseX = e.clientX;
        var mouseY = e.clientY;
  
        // Calculate eye position relative to the center of the face
        var faceRect = document.querySelector('.cat-head').getBoundingClientRect();
        var faceCenterX = faceRect.left + faceRect.width / 2;
        var faceCenterY = faceRect.top + faceRect.height / 2;
        var deltaX = mouseX - faceCenterX;
        var deltaY = mouseY - faceCenterY;
  
        // Calculate angle from the face center to the mouse position
        var angle = Math.atan2(deltaY, deltaX);
        
        // Calculate maximum movement range for the eyes
        var maxEyeMove = 5;
  
        // Limit eye movement to the maximum range
        var eyeMoveX = Math.cos(angle) * maxEyeMove;
        var eyeMoveY = Math.sin(angle) * maxEyeMove;
  
        // Set eye position based on mouse movement
        leftEye.style.transform = 'translate(' + eyeMoveX + 'px, ' + eyeMoveY + 'px)';
        rightEye.style.transform = 'translate(' + eyeMoveX + 'px, ' + eyeMoveY + 'px)';
      });
    } else {
      console.error('Left or right eye not found.');
    }
  });

  // Meow on click
  // Initialize click counter
let clickCount = 0;

// Function to play meow sound
function playMeow() {
  const meowAudio = document.getElementById('meowSound');
  meowAudio.play();
}

// Function to handle cat click event
function catClickHandler() {
  // Increment click count
  clickCount++;

  // Check if click count reaches threshold
  if (clickCount >= 13) {
    playMeow();
    clickCount = 0;
  }
}

// Get cat element
const catElement = document.getElementById('cat');

// Add click event listener to cat element
catElement.addEventListener('click', catClickHandler);

  