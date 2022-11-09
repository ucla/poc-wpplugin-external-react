/**
 * !! IMPORTANT !!
 * viewScript is being used to reload block React elements on the front-end because save.js stripes
 * the component hooks and standard state values thereby nullifying interactivity based on state. - ESat
 * 
 * An alternative to loading the React component is to use the JavaScript that comes with the HTML
 * WCL here. That would mean that the WP plug-in would use React on the back-end and static HTML on the
 * front-end as is done now. While using the WCL React library is still better than embedding the HTML
 * directly in WordPress blocks using static JS on the front-end is not ideal. - ESat
 * 
 * 
 * IMPORTANT SEO Note: Replacing the static markup with a React component after page load does not negatively impact SEO.
 */

import { render } from '@wordpress/element'
import Accordion from '/wcl-react-poc/src/components/Accordion';

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-accordionroot').forEach((acc) => {
        const className = acc.children[0].classList; /* okay if accordion class on twice */
        const title = acc.querySelector('.accordion__title dt :first-child');
        const content = acc.querySelector('.accordion__content :first-child');
        render(<Accordion className={className} title={title.outerHTML} valuesAreHtml={true}>{content.outerHTML}</Accordion>, acc);
    });
}, false);


