/**
 * !! IMPORTANT !!
 * viewScript is being used to reload block React elements on the front-end because save.js stripes
 * the component hooks and standard state values thereby nullifying interactivity based on state. - ESat
 * 
 */

import { render } from '@wordpress/element'
import Accordion from './Accordion.component'

document.querySelectorAll('[data-accordionroot').forEach((acc) => {
    const title = acc.querySelector('.accordion__title dt :first-child');
    const content = acc.querySelector('.accordion__content :first-child');
    render(<Accordion title={title.outerHTML}>{content.outerHTML}</Accordion>, acc);
});



