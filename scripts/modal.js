import { elements } from './elements.js';
import { formatTimeContent } from './utils.js';
import { isStartedYet } from './controls.js';

const { closeButton, form, modalOverlay, modal, suggestions } = elements.modal;
let { time, minutes, seconds } = elements.time;
export function setupModal() {
    closeButton().addEventListener("click", toggleModal);
    time().addEventListener("click", toggleModal);
    form().addEventListener('submit', setTheTimer);
    suggestions().addEventListener('click', pickSuggestedTime);
};

export function toggleTimerState(timerStateEl, isStarted) {
    timerStateEl.classList = [];
    if (isStarted) {
        timerStateEl.textContent = "[ON]";
        timerStateEl.classList.toggle('timer-on');
    } else {
        timerStateEl.textContent = "[OFF]";
        timerStateEl.classList.toggle('timer-off');
    }
};

function setTheTimer(e) {

    e.preventDefault();

    const [minutesVal, secondsVal] = [...document.querySelectorAll('form input')].map((e) => formatTimeContent(e.value));

    const suggestedPick = e.suggestedPick ? formatTimeContent(e.suggestedPick) : false;
    const timeFromForm = formatTimeContent(minutesVal);

    minutes().textContent = suggestedPick || timeFromForm;
    seconds().textContent = formatTimeContent(secondsVal);

    toggleModal();

    if(!isStartedYet()) { elements.info.timerState().click(); }
}

function toggleModal() {
    modal().classList.toggle("closed");
    modalOverlay().classList.toggle("closed");
}

function pickSuggestedTime(e) {
    const { textContent } = e.target;
    if (textContent.length !== 2) {
        return 0;
    }

    setTheTimer({
        suggestedPick: textContent,
        preventDefault: () => { console.log('hello from the modal side...') }
    });
}
