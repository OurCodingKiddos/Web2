/* 
  Welcome to JavaScript Magic! ✨
  JavaScript is like giving your website a BRAIN and MUSCLES!
  
  Think of it like this:
  - HTML = The skeleton/bones (structure)
  - CSS = The skin and clothes (appearance) 
  - JavaScript = The brain and muscles (actions and thinking)
  
  Let's make our website come ALIVE!
*/

/*
  ===========================================================================
  PART 1: WAITING FOR THE PAGE TO LOAD
  ===========================================================================
  We wait for ALL the HTML to finish loading before we run our JavaScript.
  This is like waiting for all the LEGO pieces to be on the table before building!
*/

// Wait for the WHOLE webpage to finish loading
document.addEventListener('DOMContentLoaded', function() {
  
  /*
    ===========================================================================
    PART 2: FINDING OUR HOME SECTION - LIKE FINDING TOYS IN A TOYBOX!
    ===========================================================================
    We use 'document' (our webpage) to FIND things by their IDs.
    IDs are like NAMETAGS for HTML elements!
  */
  
  // Find the home section (it has id="home" in the HTML)
  const homeSection = document.getElementById('home');
  
  // Find the greeting text inside the home section
  const greetingText = document.getElementById('greeting-text');
  
  /*
    ===========================================================================
    PART 3: MAKING THE HOME SECTION INTERACTIVE - LIKE MAGIC BUTTONS!
    ===========================================================================
    Now we add "event listeners" - these WAIT for something to happen,
    then DO something when it happens!
  */
  
  /*
    CLICK MAGIC - When someone CLICKS the home section
    --------------------------------------------------
    We listen for CLICKS on the entire home section.
    When clicked, it will change color and show a secret message!
  */
  homeSection.addEventListener('click', function() {
    /*
      This is what happens when someone CLICKS the home section:
      1. Change the background color to PINK
      2. Change the text color to PURPLE
      3. Add a fun shadow effect
      4. Change the greeting text to a secret message
    */
    
    // 1. Change background color to PINK
    homeSection.style.backgroundColor = 'pink';
    
    // 2. Change text color to PURPLE
    homeSection.style.color = 'purple';
    
    // 3. Add a cool shadow (like the section is popping out!)
    homeSection.style.boxShadow = '0 0 20px gold';
    
    // 4. Change the greeting text to a secret message
    greetingText.innerHTML = '✨ SECRET UNLOCKED! ✨<br>You found the magic click! 🎉';
    
    // Make the text BIGGER and BOLD
    greetingText.style.fontSize = '24px';
    greetingText.style.fontWeight = 'bold';
    
    /*
      BONUS: After 2 seconds (2000 milliseconds), change it BACK!
      setTimeout is like setting a kitchen timer - it waits, then does something.
    */
    setTimeout(function() {
      // Change back to original colors
      homeSection.style.backgroundColor = 'skyblue';
      homeSection.style.color = 'black';
      homeSection.style.boxShadow = 'none';
      greetingText.innerHTML = 'Hello, young <b>coders!</b> Today we will learn how to make a game using <strong>javaScript</strong>. 🌟';
      greetingText.style.fontSize = '';
      greetingText.style.fontWeight = '';
    }, 2000); // Wait 2000 milliseconds (2 seconds)
  });
  
  /*
    MOUSE OVER MAGIC - When someone HOVERS over the home section
    -------------------------------------------------------------
    This happens when you MOVE your mouse OVER the home section
    (without clicking!)
  */
  homeSection.addEventListener('mouseover', function() {
    /*
      When you HOVER over the home section:
      1. Make it slightly BIGGER
      2. Add a glowing border
    */
    
    // 1. Make it 2% bigger (scale 1.02 = 102% of original size)
    homeSection.style.transform = 'scale(1.02)';
    
    // 2. Add a glowing green border
    homeSection.style.border = '5px solid #00ff00';
    homeSection.style.borderRadius = '25px'; // Make it extra round!
  });
  
  /*
    MOUSE OUT MAGIC - When someone MOVES AWAY from the home section
    ----------------------------------------------------------------
    This happens when you MOVE your mouse AWAY from the home section
    We change it BACK to normal!
  */
  homeSection.addEventListener('mouseout', function() {
    /*
      When you MOVE AWAY from the home section:
      1. Make it normal size again
      2. Remove the glowing border
    */
    
    // 1. Go back to normal size
    homeSection.style.transform = 'scale(1)';
    
    // 2. Go back to the original red border from CSS
    homeSection.style.border = '5px solid rgba(255, 0, 0, 0.534)';
    homeSection.style.borderRadius = '20px'; // Back to original roundness
  });
  
  /*
    ===========================================================================
    PART 4: TIME-BASED MAGIC - CHANGING THINGS AUTOMATICALLY!
    ===========================================================================
    We can make things happen AUTOMATICALLY after a certain time!
    This uses setInterval - like a repeating timer that goes off every few seconds.
  */
  
  /*
    COLOR CHANGER - Automatic color cycling
    ---------------------------------------
    This automatically changes the home section background color
    every 3 seconds, like a rainbow light!
  */
  
  // List of fun colors to cycle through
  const rainbowColors = ['skyblue', 'lightgreen', 'lightyellow', 'lightpink', 'lightcyan'];
  let colorIndex = 0; // Start with the first color
  
  // Create a repeating timer that runs every 3000 milliseconds (3 seconds)
  setInterval(function() {
    // Change to the next color in our rainbow
    homeSection.style.backgroundColor = rainbowColors[colorIndex];
    
    // Move to the next color (if we reach the end, start over)
    colorIndex = (colorIndex + 1) % rainbowColors.length;
    // The % symbol means "remainder" - it makes sure we never go past 4!
    // 0, 1, 2, 3, 4, then back to 0 again!
  }, 3000); // Run every 3000 milliseconds (3 seconds)
  
  /*
    ===========================================================================
    PART 5: CONSOLE MESSAGES - SECRET MESSAGES FOR DEVELOPERS!
    ===========================================================================
    The console is like a secret notebook where we can write messages.
    Only programmers can see it (press F12 and click "Console" to see!)
  */
  
  // Show a welcome message in the secret developer console
  console.log('🎮 Welcome to Code Wonderland! 🎮');
  console.log('The home section is now MAGICAL! ✨');
  console.log('Try clicking it and hovering over it!');
  
  // Count how many times the home section was clicked
  let clickCount = 0;
  
  // Update the click counter every time someone clicks
  homeSection.addEventListener('click', function() {
    clickCount++; // Add 1 to the counter
    console.log(`🏠 Home section clicked! Total clicks: ${clickCount}`);
    
    // Special message after 5 clicks
    if (clickCount === 5) {
      console.log('🎯 AMAZING! You clicked 5 times! You\'re a clicking champion! 🏆');
    }
  });
  
});

/*
  ===========================================================================
  CONGRATULATIONS! 🎉
  ===========================================================================
  
  You just learned:
  1. How to FIND elements on a webpage
  2. How to make elements REACT to clicks
  3. How to make elements REACT to mouse movements
  4. How to make things happen AUTOMATICALLY with timers
  5. How to write SECRET MESSAGES to the console
  
  JavaScript makes websites FEEL ALIVE!
  Keep experimenting and have FUN! 🚀
*/

// BONUS: Try adding this to your HTML file:
// <script src="your-javascript-file.js"></script>
// (Put it right before the closing </body> tag!)