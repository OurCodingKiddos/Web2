// =====================================================================
// WELCOME TO JAVASCRIPT FOR KIDS! 🎮
// This is script.js - the BRAIN of our website!
// =====================================================================

// --------------------------------------------
// WINDOW.ONLOAD - THE STARTING LINE 🏁
// --------------------------------------------
// Imagine: The webpage is a race track, and our code are the race cars.
// We CAN'T start racing until the track is completely ready!

// window = the entire browser window (Chrome, Edge, Firefox, etc.)
// .onload = "when EVERYTHING is loaded and ready"
// function() = a container for our instructions

// SO THIS MEANS:
// "Wait for the ENTIRE webpage to load first,
// THEN run all the code inside these curly braces {}"

window.onload = function () {
    // Everything inside here runs ONLY after the page is ready!
    // Think of this as our "safe zone" where we can play with HTML
    
    // =====================================================================
    // PART 1: FINDING THINGS ON OUR WEBPAGE 🔍
    // =====================================================================
    // Before we can USE things on the page, we need to FIND them first!
    // It's like finding toys in your toy box before playing with them.
    
    // --------------------------------------------
    // FINDING THE "SHOW VARIABLES" BUTTON
    // --------------------------------------------
    // let = we're creating a NEW BOX (variable) to store something
    // Think of "let" as saying "Let's make a new box called..."
    
    // showBtn is the NAME we give to our box
    // "Btn" is short for "Button" - it's a good naming habit!
    
    // document = the ENTIRE HTML page (like a big document)
    // . (dot) means "go inside and look for..."
    // getElementById = "get/find an element by its ID name"
    // ('showVariables') = looking for something with id="showVariables"
    
    // SO THIS LINE MEANS: 👇
    // "Hey JavaScript! Go into the HTML document,
    // find the button with the ID 'showVariables',
    // and put it in a box named showBtn so we can use it later!"
    
    let showBtn = document.getElementById('showVariables');
    
    // --------------------------------------------
    // FINDING THE DISPLAY BOX (WHERE TEXT WILL APPEAR)
    // --------------------------------------------
    // This is the EMPTY <div> in our HTML where we'll show our variables
    
    // variableDisplay = the ID of our empty box in HTML
    // We're putting this box in a container called displayBox
    
    // Think: displayBox is now a REMOTE CONTROL for that HTML box!
    let displayBox = document.getElementById('variableDisplay');
    
    // =====================================================================
    // PART 2: CREATING OUR VARIABLES (THE STORAGE BOXES 📦)
    // =====================================================================
    // Variables are like LABELED BOXES where we store information.
    // Each box has a NAME and can hold different TYPES of stuff.
    
    // --------------------------------------------
    // BOX TYPE 1: LET (CHANGEABLE BOXES) 🔄
    // --------------------------------------------
    // let boxes CAN change what's inside them later!
    // The ✅ symbol means "Yes, you can change me!"
    
    // age is a box holding a NUMBER
    // = 10 means "put the number 10 inside this box"
    let age = 10;  // This box is labeled "age" and contains the number 10
    
    // name is a box holding TEXT (text is called a "string")
    // Strings ALWAYS go inside quotes "" or ''
    let name = "Alex";  // Box labeled "name" contains text "Alex"
    
    // isHappy is a YES/NO box (called a "boolean")
    // Boolean boxes can only hold: true (YES) or false (NO)
    let isHappy = true;  // Box labeled "isHappy" contains "true" (YES!)
    
    // --------------------------------------------
    // BOX TYPE 2: CONST (UNCHANGEABLE BOXES) 🔒
    // --------------------------------------------
    // const boxes CANNOT change what's inside them!
    // The ❌ symbol means "No, you cannot change me!"
    // Once we put something in, it's stuck there forever!
    
    // birthday is a PERMANENT box - birthdays don't change!
    const birthday = "June 15th";  // This will ALWAYS be "June 15th"
    
    // =====================================================================
    // PART 3: CREATING FUNCTIONS (THE INSTRUCTION SETS 📝)
    // =====================================================================
    // Functions are like RECIPES or INSTRUCTION MANUALS.
    // They contain steps that tell the computer WHAT TO DO.
    // Functions DON'T run automatically - we have to CALL them (use them).
    
    // --------------------------------------------
    // FUNCTION: showVariables
    // --------------------------------------------
    // function = we're creating a new set of instructions
    // showVariables = the NAME of our instruction set
    // () = the "ingredients" area (we'll learn this later)
    // {} = where we write ALL the instructions
    
    // This function's job: Display our variables in a nice way!
    function showVariables() {
        // EVERYTHING inside these {} runs when we CALL this function

        // innerHTML means: "Replace what's INSIDE the HTML box"
        // The backtick symbols `` let us write MULTI-LINE text
        // ${ } lets us put JavaScript variables INSIDE our text
        
        displayBox.innerHTML = 
            `<div class="variable-card">
                <div class="variable-name">Name:</div>
                <div class="variable-value">${name}</div>
             </div>
             <div class="variable-card">
                <div class="variable-name">Age:</div>
                <div class="variable-value">${age}</div>
             </div>
             <div class="variable-card">
                <div class="variable-name">Happy:</div>
                <div class="variable-value">${isHappy}</div>
             </div>
             <div class="variable-card">
                <div class="variable-name">Birthday:</div>
                <div class="variable-value">${birthday}</div>
             </div>`;
        
        // -------------------------------------------------------
        // LET'S BREAK DOWN
        // -------------------------------------------------------
        // `<div class="variable-card"> = Create a DIV with CSS class
        // <div class="variable-name">Name:</div> = Label in special style
        // <div class="variable-value">${name}</div> = Value in special style
        // ${name} = "Take what's in the 'name' box and put it here"
        // </div> = Close the card
        //
        // This creates BEAUTIFUL CARDS that our CSS will style automatically!
        // Each variable gets its own pretty card with colored labels!
        
        // -------------------------------------------------------
        // VISUAL EXPLANATION OF WHAT WE CREATED: 👀
        // -------------------------------------------------------
        // BEFORE clicking button: [EMPTY BOX]
        //
        // AFTER clicking button:
        // ┌─────────────────────┐
        // │   Name:             │  ← variable-name (bold, dark color)
        // │   Alex              │  ← variable-value (pink, code font)
        // └─────────────────────┘  ← variable-card (white, shadow, stripe)
        //
        // ┌─────────────────────┐
        // │   Age:              │
        // │   10                │
        // └─────────────────────┘
        //
        // etc... Each in its own pretty card!
    }
    
    // =====================================================================
    // PART 4: CONNECTING BUTTONS TO FUNCTIONS 🔌
    // =====================================================================
    // Now we need to CONNECT our button to our function!
    // Think: We're giving the button a REMOTE CONTROL to call our function.
    
    // addEventListener means: "Listen for something to happen"
    // It's like telling the button: "When X happens, do Y"
    
    // 'click' = the event to listen for (when button is CLICKED)
    // showVariables = the function to RUN when clicked
    
    // SO THIS LINE MEANS: 👇
    // "Hey button! Listen up! When someone CLICKS on you,
    // run the showVariables function (those instructions)!"
    
    showBtn.addEventListener('click', showVariables);
    
    // =====================================================================
    // BONUS SECTION: LET'S ADD MORE FUNCTIONS! 🎉
    // =====================================================================
    // Now that you understand functions, let's add MORE buttons!
    // First, let's create more variable-changing functions:
    
    // Function to make Alex older (change the age)
    function makeOlder() {
        age = age + 1;  // Take current age, add 1, put back in box
        showVariables(); // Update the display
    }
    
    // Function to change happiness
    function changeMood() {
        // If currently happy (true), make unhappy (false), and vice versa
        isHappy = !isHappy;  // The ! means "opposite"
        showVariables(); // Update the display
    }
    
    // Function to reset to original values
    function resetAll() {
        age = 10;        // Back to 10
        name = "Alex";   // Back to Alex
        isHappy = true;  // Back to happy
        // birthday stays the same (it's const!)
        showVariables(); // Update the display
    }
    
    // =====================================================================
    // FINDING AND CONNECTING NEW BUTTONS
    // =====================================================================
    // First, we need to add these buttons to our HTML!
    // Add this to your HTML inside the <section>:
    /*
    <div class="button-container">
        <button id="showVariables">Show Variables</button>
        <button id="makeOlder">Make Older</button>
        <button id="changeMood">Change Mood</button>
        <button id="resetAll">Reset All</button>
    </div>
    */
    
    // Then find the new buttons (if they exist):
    let olderBtn = document.getElementById('makeOlder');
    let moodBtn = document.getElementById('changeMood');
    let resetBtn = document.getElementById('resetAll');
    
    // Connect them to functions:
    olderBtn.addEventListener('click', makeOlder);
    moodBtn.addEventListener('click', changeMood);
    resetBtn.addEventListener('click', resetAll);
    
    
    // =====================================================================
    // SUMMARY OF WHAT WE'VE DONE: 📚
    // =====================================================================
    // 1. WAITED for page to load (window.onload)
    // 2. FOUND our button and display box
    // 3. CREATED boxes (variables) to store data
    // 4. Wrote INSTRUCTIONS (function) to show data
    // 5. CONNECTED button to function
    // 6. ADDED bonus functions for more fun!
}

// =====================================================================
// END OF OUR PROGRAM
// =====================================================================
// Everything above is like a recipe book that's ready to use.
// The browser will follow our recipes when needed!

// Remember: JavaScript is like giving SUPER POWERS to your website!
// With JavaScript, your website can:
// - Remember things (variables)
// - Do tasks (functions)
// - Respond to clicks (event listeners)
// - Change what's on the screen (innerHTML)