import { useState } from 'react';

/**
 * 
 * @param {Component} [props.children] - Required - Inner content of accordion. Content can be HTML.
 * @param {string or component} [props.title] - Required - Link text.
 * @param {string} [props.className] Class name to add to outer wrapper for customization.
 * 
 * As of 11/22 WordPress does not allow hook calls during the save block mode therefore separate out the
 * markup from the interactive portion of the function so that Save can load markup only. 
 * 
 * Component classes work without creating separation between parent with state management and child markup only comp
 * however using function classes and hooks is considered the modern standard and uses
 * much leaner syntax. Interactivity is reloaded on the front-end through the viewScript. 
 * - ESat
 */


const Accordion = (props) => {
    const {
        className = false,
        title = '',
        children,
        valuesAreHtml = false
    } = props;

    const [showBody, setShowBody] = useState(false);

    const toggleContentDisplay = () => {
        setShowBody(!showBody);
    };

    return (
        <AccordionMarkup
            className={className}
            title={title}
            valuesAreHtml={valuesAreHtml}
            showBody={showBody}
            toggleContentDisplay={toggleContentDisplay}
        >
            {children}
        </AccordionMarkup>
    )
}

export const AccordionMarkup = (props) => {
    const {
        className = false,
        title = '',
        children = '',
        toggleContentDisplay = false,
        showBody = false,
        valuesAreHtml = false
    } = props;

    return (
        <section className={`accordion${className ? ' ' + className : ''}`}>
            <dl>
                <button onMouseDown={toggleContentDisplay} className="accordion__title" aria-expanded="false">
                    {valuesAreHtml &&
                        <dt dangerouslySetInnerHTML={{ __html: title }} />
                    }
                    {!valuesAreHtml &&
                        <dt>{title}</dt>
                    }
                </button>
                {valuesAreHtml &&
                    <dd className="accordion__content" style={{ display: `${showBody ? 'block' : 'none'}` }}
                        dangerouslySetInnerHTML={{ __html: children }}
                    >
                    </dd>
                }
                {!valuesAreHtml &&
                    <dd className="accordion__content" style={{ display: `${showBody ? 'block' : 'none'}` }}>
                        {children}
                    </dd>
                }
            </dl>
        </section>
    );
}

export default Accordion;