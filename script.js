const toggle = document.querySelector("#themeToggle");
console.log(toggle);
themeValue = localStorage.getItem("theme");
console.dir(document.body);
console.dir(document.body.classList);
if (themeValue === "light") {
    document.body.classList.add("light");
    //document ki body ki classlist m add kr do dark 
    console.dir(document.body.classList);
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
        localStoarge.setItem("theme", "light");
    } else {
        localStoarge.setItem("theme", "dark");
    }

})
// calculation
const screenValue = document.querySelector("#screen");
console.dir(screenValue);
// Event Listeners 
//"focus" event listener gets trigger when we have clicked on element like input ,button,a 
screenValue.addEventListener("focus", () => {
    if (screenValue.value === "0") {
        screenValue.value = "";
    }
})
//"blur"gets trigger as soon as the element loses focus
screenValue.addEventListener("blur", () => {
    if (screenValue.value === "") {
        screenValue.value = "0";
    }
})
//"input" gets trigger everytime the value changes like as soon as the keyboard typing starts
// there is one other event listener "change", it get triggers once the user commits to the change .. can be user to get error in username and email
screenValue.addEventListener("input", () => {
    screenValue.value = screenValue.value.replace(/[^0-9]/g, "");
})

const buttonValue = document.querySelectorAll("button");
console.dir(buttonValue);
buttonValue.forEach(button => {
    button.addEventListener("click", () => {
        let expression = screenValue.value;
        let value = button.innerText;
        console.log(value);
        if (value === "AC") {
            screenValue.value = "";
        } else if (value === "=") {
            screenValue.value = eval(expression);
        } else {
            if (value == "x") {
                value = "*";
            }
            console.log(value);
            if (screenValue.value === "0") {
                screenValue.value = "";
                screenValue.value = screenValue.value + value;
            } else {
                screenValue.value = screenValue.value + value;
            }

        }
    })
})
