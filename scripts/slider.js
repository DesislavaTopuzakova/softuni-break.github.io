import { elements } from './elements.js';

export const slider = {
    appendPartner({ src, name }) {
        const partnerWrapper = createHTMLElement('div', ['partner']);
        const partnerLogoWrapper = createHTMLElement('div', ['partner-logo-wrapper']);
        const partnerImg = createHTMLElement('img', ['partner-logo'], null, [{ k: 'src', v: src }]);
        const partnerTitleWrapper = createHTMLElement('div', ['partner-name-wrapper']);
        const partnerTitle = createHTMLElement('h4', ['partner-name'], name);

        partnerLogoWrapper.appendChild(partnerImg);
        partnerTitleWrapper.appendChild(partnerTitle);
        partnerWrapper.appendChild(partnerLogoWrapper);
        partnerWrapper.appendChild(partnerTitleWrapper);
        elements.slider.partnersWrapper().appendChild(partnerWrapper);
    },
};

function createHTMLElement(tagName, classNames, textContent, attributes) {
    let element = document.createElement(tagName);

    if (classNames) {
        element.classList.add(...classNames)
    }

    if (textContent) {
        element.textContent = textContent;
    }

    if (attributes) {
        attributes.forEach((attr) => {
            element.setAttribute(attr.k, attr.v);
        });
    }

    return element;
}
