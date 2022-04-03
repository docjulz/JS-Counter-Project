// Initial Count
let count = 0;

// select all buttons and logic to increase decrease or rest
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');
// console.log(buttons);



buttons.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        const action = e.currentTarget.classList;
        if (action.contains("decrease")) {
            count--;
        } else if (action.contains("increase")){
            count++;
        } else {
            count = null;
        }
        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "var(--ff-primary)";
        }
        value.textContent = count;
    });
    // console.log(btn);
});