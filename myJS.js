/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/
const block = document.getElementById('color-block');
function changeColor(){
    //Write a condition determine what color it should be changed to
    if(block.getAttribute('class') === 'newColor'){
        //change the background color using JS
        block.setAttribute('class', "");
        //Change the text of the color using the span id color-name
        const span = document.getElementById('color-name');
        span.textContent = '#F08080';
    }
    else{
        //change the background color using JS
        block.setAttribute('class', 'newColor');
        //Change the text of the color using the span id color-name
        const span = document.getElementById('color-name');
        span.textContent = '#A2BCDD';

    }
}
block.addEventListener('click', changeColor);

/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here

    //Send the calculated temperature to HTML

}


