/* eslint-disable no-unused-vars */
import { RichText, InnerBlocks } from '@wordpress/block-editor';


/** Node Modules is excluded in orig webpack config. Added include of wcl components poc found in node-modules
 * so that repo could be included as a dependency using NPM as is currently done except for React
 * components instead of global css. Each component should have it's own CSS or import from global into component.
 */

/** 
 * Example of 3rd-party React component being used.
 * IMPORTANT!! Load markup only version durring save. (no interactivity aka no hooks otherwise React 321 error)
 *  - El */
import { AccordionMarkup } from '/wcl-react-poc/src/components/Accordion';

// used for easier testing during dev.
//import { AccordionMarkup } from './Accordion.function';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized  by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 * @param {Object} [props]           Properties passed from the editor.
 * @param {Object} props.attributes
 * @param {string} props.attributes.title
 * @param {string} props.attributes.className
 * @return {WPElement} Element to render.
 */

/**
 * Would be great if WordPress would ignore interactivity (hooks) during save and load React components on the front end
 * by default or through a switch value in block.json. Until then have to use viewScript to reload React component.
 * 
 */

const save = ({ attributes: { title, blockId, className } }) => {
    const richTextElement = (
        <RichText.Content tagName="span"
            value={title} />
    )

    return (
        <div data-accordionroot={blockId}>
            <AccordionMarkup
                className={className}
                title={richTextElement}
            >
                <InnerBlocks.Content />
            </AccordionMarkup>
        </div >
    );
}

export default save;
