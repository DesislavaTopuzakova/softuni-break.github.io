import {
    manageQueryString,
    setupEvents,
    appendPartnersElements,
} from './utils.js';
import { setupModal } from './modal.js';

document.onload = (() => {
    setupEvents();

    appendPartnersElements();

    setupModal();

    manageQueryString(location.search);
})();
