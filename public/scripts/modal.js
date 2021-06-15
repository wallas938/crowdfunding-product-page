const modalsBackground = document.querySelector('.background-modal');
const body = document.querySelector('body');
let currentModal = null;

/* Gauge */
const startingGauge = document.querySelector('.filler');
/* Gauge */

/** Menu variables */

const btnMenu = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.mobile-nav-modal');
const paths = ["images/icon-hamburger.svg", "images/icon-close-menu.svg"];

/** Menu variables */

/* Backproject vairables */
const openBackProjectModalButton = document.querySelector('.cta__back-this-project');
const closeBackProjectModalButton = document.querySelector('.close-back-project-btn');
const backProjectModal = document.querySelector('.backing-project-modal');

const pledgeInputs = document.querySelectorAll('.radio');
const pledgeFooters = document.querySelectorAll('.card__footer');
const pledgeValidationButton = document.querySelectorAll('.validation');

const rewardsButtons = document.querySelectorAll('.select-reward-btn');
/* Backproject vairables */

/* Thanks vairables */

const thanksModal = document.querySelector('.thanks-modal');
const thanksModalButton = document.querySelector('.thanks-modal > div > button');
/* Thanks vairables */

/** Events */

(function() {
    startingGauge.classList.add('load');
}());

modalsBackground.addEventListener('click', function (e) {
    if (e.target === modalsBackground) {
        currentModal.classList.remove('show');
        modalsBackground.classList.remove('show-flex');
        body.classList.remove('backdrop-layer');
        const image = btnMenu.firstElementChild;
        let currentPath = image.getAttribute('src');
        if (currentPath === paths[1]) {
            image.setAttribute('src', paths[0]);
        }
        currentModal = null;
    }
});
btnMenu.addEventListener('click', function (e) {
    const image = btnMenu.firstElementChild;
    let currentPath = image.getAttribute('src');
    if (currentPath === paths[0]) {
        image.setAttribute('src', paths[1]);
        showMenu();
    }
});
openBackProjectModalButton.addEventListener('click', function (e) {
    showBackProjectModal()
});
closeBackProjectModalButton.addEventListener('click', function (e) {
    closeBackProjectModal();
});
pledgeInputs.forEach(input => {
    input.addEventListener('click', function (e) {
        pledgeInputs.forEach(othersInput => {
            othersInput.classList.remove('pledge-selected');
            othersInput.parentElement.parentElement.classList.remove('card-selected-border-class');
        });
        pledgeFooters.forEach(footer => {
            footer.classList.remove('show');
        });
        e.target.classList.add('pledge-selected');
        e.target.parentElement.parentElement.classList.add('card-selected-border-class');
        e.target.parentElement.parentElement.lastElementChild.classList.add('show');
    });
});
pledgeValidationButton.forEach(button => {
    button.addEventListener('click', function (e) {
        backProjectModal.classList.remove('show');
        thanksModal.classList.add('show');
        currentModal = thanksModal;
    });
});
thanksModalButton.addEventListener('click', function (e) {
    thanksModal.classList.remove('show');
    modalsBackground.classList.remove('show-flex');
    body.classList.remove('backdrop-layer');
    currentModal = null;
});
rewardsButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        showBackProjectModal();
        if (button.id === 'bamboo-stand') {
            selectReward('bamboo-stand')
        } else {
            selectReward('black-edition')
        }
    })
})

/** Events */

/** Functions */
function showMenu() {
    menu.classList.add('show');
    modalsBackground.classList.add('show-flex');
    body.classList.add('backdrop-layer');
    currentModal = menu;
};

function showBackProjectModal() {
    body.classList.add('backdrop-layer');
    backProjectModal.classList.add('show');
    modalsBackground.classList.add('show-flex');
    currentModal = backProjectModal;
};

function closeBackProjectModal() {
    body.classList.remove('backdrop-layer');
    backProjectModal.classList.remove('show');
    modalsBackground.classList.remove('show-flex');
    currentModal = null;
};

function selectReward(selectedPledge) {
    pledgeInputs.forEach(pledge => {
        // span (.radion)
        if (selectedPledge === 'bamboo-stand') {
            const bamboo = document.querySelector('.bamboo');
            bamboo.firstElementChild.firstElementChild.classList.add('pledge-selected');
            bamboo.classList.add('card-selected-border-class');
            bamboo.lastElementChild.classList.add('show');
            resetNoReward();
            resetBlackEditionReward();

        } else {
            const blackEdition = document.querySelector('.black-edition');
            blackEdition.firstElementChild.firstElementChild.classList.add('pledge-selected');
            blackEdition.classList.add('card-selected-border-class');
            blackEdition.lastElementChild.classList.add('show');
            resetNoReward();
            resetBambooReward();
        }

        currentModal = backProjectModal;
    })
};

function resetNoReward() {
    const noReward = document.querySelector('.no-reward');
    noReward.firstElementChild.firstElementChild.classList.remove('pledge-selected');
    noReward.classList.remove('card-selected-border-class');
    noReward.lastElementChild.classList.remove('show');

}

function resetBambooReward() {
    const bamboo = document.querySelector('.bamboo');
    bamboo.firstElementChild.firstElementChild.classList.remove('pledge-selected');
    bamboo.classList.remove('card-selected-border-class');
    bamboo.lastElementChild.classList.remove('show');
}
function resetBlackEditionReward() {
    const blackEdition = document.querySelector('.black-edition');
    blackEdition.firstElementChild.firstElementChild.classList.remove('pledge-selected');
    blackEdition.classList.remove('card-selected-border-class');
    blackEdition.lastElementChild.classList.remove('show');
}