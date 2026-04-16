// ths will give me the screen value
const screen= document.querySelector("#input-screen");
console.log(screen);
// need the value of the button
const buttonValue= document.querySelectorAll("button");
console.log(buttonValue);

// to add event on each button
buttonValue.forEach(button=>{
    // for each button in the buttonValue node list add eventlistener
    button.addEventListener("click",()=>{
        let value = button.innerText;
        // in value we save the value of button
        if (value==="AC"){
            screen.value=""; 
            // resent the value on screen
            // .value as value is an attribute in <input> tag
        }else if(value==="="){
            let expression=screen.value;
            screen.value=eval(expression);
        }else{
            screen.value+=value;
        }
    })

})

