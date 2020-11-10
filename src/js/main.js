const count = document.getElementById("buttonCountNumber");

function countPlus() {
    const countPlus = count.innerHTML;
    if (+countPlus <= 10) {
        count.innerHTML++;
    }
};

function countMinus() {
    const countMinus = count.innerHTML;
    if (+countMinus >= 2) {
        count.innerHTML--;
    }
};

function setOnClickHandlerByElemId(id, callback) {
    const elem = document.getElementById(id);
    elem.addEventListener('click', callback)
}

setOnClickHandlerByElemId("buttonCountPlus", countPlus)
setOnClickHandlerByElemId("buttonCountMinus", countMinus)

const faIcon = document.createElement('i');

function createIcon(id, iconAttr) {
    const icon = document.getElementById(id);

    faIcon.classList.add('fa', iconAttr);
    faIcon.setAttribute('aria-hidden', 'true')
    icon.appendChild(faIcon)
}

createIcon('icon', 'fa-balance-scale')

function changeIcon(e) {
    e.preventDefault();
    faIcon.className = 'fa fa-check';
    faIcon.style.color = 'green'
}

setOnClickHandlerByElemId('buyButton', changeIcon)

