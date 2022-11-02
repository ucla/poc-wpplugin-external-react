/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


import { RichText, InnerBlocks } from '@wordpress/block-editor';


/**
 * Can include React file without parsing during build because React is available in 
 * the browser. https://www.cssigniter.com/how-to-use-external-react-components-in-your-gutenberg-blocks/
 */

/** El Note Node Modules are excluded in orig webpack config. Added include of wcl components poc found in node-modules
 * so that repo could be included as a dependency using NPM as is currently done except for React
 * components instead of global css. Each component should have it's own CSS or import from global into component.
 * 
 * NOTE: The WCL React components would ordinarily be located under /node_modules and added
 * through the repository referenced in the package.json just like the current WCL repo is currently included in the existing plugin. To make it easier for the POC I
 * moved the package to the root of the project folder so that I could save it to the POC repo.
 * 
*/

import Accordion from '/wcl-react-poc/src/components/Accordion';

// used for easier testing
//import Accordion from './Accordion.function';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @param {Object} [props]           Properties passed from the editor.
 * @param {Object} [props.attributes]
 * @param {string} [props.setAttributes]
 * @param {string} [props.className] Class name generated for the block.
 * @return {WPElement} Element to render.
 */

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        title = '',
        blockId,
        className = false
    } = attributes;

    React.useEffect(() => {
        if (!blockId) {
            setAttributes({ blockId: clientId });
        }
    }, []);

    const onChangeTitle = (value) => {
        setAttributes({ title: value });
    };

    const richTextElement = (
        <RichText tagName="span"
            value={title}
            onChange={onChangeTitle}
            placeholder={
                __("Enter title here...", 'ucla-wcl-wpblocks')
            } />
    );


    /** #Example of 3rd-party React component being used. - El */
    return (
        <div data-accordionroot={clientId}>
            <Accordion
                className={className}
                blockId={blockId}
                title={richTextElement}
            >
                <InnerBlocks />
            </Accordion>
        </div>
    );
};
