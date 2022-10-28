/* eslint-disable no-unused-vars */
import { RichText, InnerBlocks } from '@wordpress/block-editor';

/** Node Modules is excluded in orig webpack config. Added include of wcl components poc found in node-modules
 * so that repo could be included as a dependency using NPM as is currently done except for React
 * components instead of global css. Each component should have it's own CSS or import from global into component.
 */

/** #Example of 3rd-party React component being used. - El */
//import Accordion from 'wcl-react-poc/src/components/Accordion';

import Accordion from './Accordion.component';
//import App from './App'

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized  by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 * @param {Object} [props]           Properties passed from the editor.
 * @param {Object} props.attributes
 * @param {string} props.attributes.title
 * @param {string} props.className
 * @return {WPElement} Element to render.
 */

const save = ({ attributes: { title, blockId }, className }) => {

    const richTextElement = (
        <RichText.Content tagName="span"
            value={title} />
    )

    return (
        <div data-accordionroot={blockId}>
            <Accordion className={className}
                title={richTextElement}>
                <InnerBlocks.Content />
            </Accordion>
        </div >

        // <>{
        //     parseHTML(ReactDOMServer.renderToString(
        //         <Accordion className={className}
        //             title={richTextElement}>
        //             {content}
        //         </Accordion>))
        // }</>
    );
}

export default save;
