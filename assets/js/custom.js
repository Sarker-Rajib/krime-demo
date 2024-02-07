const triggers = document.querySelectorAll(".top")
const linkBoxes = document.querySelectorAll(".links")

triggers.forEach((trigger, index) => {
    trigger.addEventListener("click", () => {
        console.log('cli');
        if (linkBoxes[index].style.height == '0') {
            linkBoxes[index].style.height = 'auto';
        } else {
            linkBoxes[index].style.height = '0';
        }
    });
});