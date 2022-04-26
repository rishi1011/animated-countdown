const nums = document.querySelectorAll('.nums > span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.getElementById('replay');

replay.addEventListener('click', () => {
    counter.classList.remove('hide');
    finalMessage.classList.remove('show');
    setTimeout(() => {
        runAnimation();
    }, 500);
})

function runAnimation() {
    nums[0].classList.add('active');
}

function createAnimation() {
    nums.forEach(num => {
        num.addEventListener('animationend', () => {
            num.classList.remove('active');
            if (num.nextElementSibling) {
                num.nextElementSibling.classList.add('active');
            } else {
                counter.classList.add('hide');
                finalMessage.classList.add('show');
            }
        });
    });
}

createAnimation();
runAnimation();
