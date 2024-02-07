const triggers = document.querySelectorAll(".top");
const linkBoxes = document.querySelectorAll(".links");

var screenWidth = window.screen.width;

if (screenWidth < 768) {
    triggers.forEach((trigger, index) => {
        trigger.addEventListener("click", () => {
            const computedStyle = window.getComputedStyle(linkBoxes[index]);
            const currentHeight = computedStyle.getPropertyValue("height");

            if (currentHeight === '0px' || currentHeight === '0') {
                linkBoxes.forEach(box => {
                    box.style.height = '0';
                });
                linkBoxes[index].style.height = 'auto';
            } else {
                linkBoxes[index].style.height = '0px';
            }
        });
    });
}


