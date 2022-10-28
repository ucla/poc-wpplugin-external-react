import React from 'react';

/**
 * 
 * @param {Component} [props.children] - Required - Inner content of accordion. Content can be HTML.
 * @param {Boolean} [props.interactive] - Turns off interactivity. See note below.
 * @param {string or component} [props.title] - Required - Link text.
 * @param {string} [props.className] Class name to add to outer wrapper for customization.
 * 
 * Ability to turn off interactivity is required by the WordPress save process.
 * Hooks break the serialization process (React 321 error). Alternative option is to use React
 * Component class however using function classes and hooks is considered the modern standard and uses
 * much leaner syntax. Interactivity is reloaded on the front-end through the viewScript.
 * Hooks must also be called with React. syntax, e.g., React.useState, rather thank stand-alone.
 * - ESat
 */


const Accordion = (props) => {
    const {
        className = false,
        title = '',
        children,
        interactive = true,
        valuesAreHtml = false
    } = props;

    return (
        <>
            {interactive &&
                <AccordionInteractive
                    className={className}
                    title={title}
                    content={children}
                    valuesAreHtml={valuesAreHtml}
                />
            }
            {!interactive &&
                <AccordionStatic
                    className={className}
                    title={title}
                    content={children}
                    valuesAreHtml={valuesAreHtml}
                />
            }
        </>
    )
}

const AccordionInteractive = (props) => {
    const {
        className = false,
        title = '',
        content = '',
        valuesAreHtml = false
    } = props;

    const [showBody, setShowBody] = React.useState(false);

    const toggleContentDisplay = () => {
        setShowBody(!showBody);
    };

    return (
        <AccordionMarkup
            className={className}
            title={title}
            content={content}
            valuesAreHtml={valuesAreHtml}
            showBody={showBody}
            toggleContentDisplay={toggleContentDisplay}
        />
    )
}

const AccordionStatic = (props) => {
    const {
        className = false,
        title = '',
        content = '',
        valuesAreHtml = false
    } = props;

    let toggleContentDisplay, showBody = false

    return (
        <AccordionMarkup
            className={className}
            title={title}
            content={content}
            valuesAreHtml={valuesAreHtml}
            showBody={showBody}
            toggleContentDisplay={toggleContentDisplay}
        />
    )
}


const AccordionMarkup = (props) => {
    const {
        className = false,
        title = '',
        content = '',
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
                        dangerouslySetInnerHTML={{ __html: content }}
                    >
                    </dd>
                }
                {!valuesAreHtml &&
                    <dd className="accordion__content" style={{ display: `${showBody ? 'block' : 'none'}` }}>
                        {content}
                    </dd>
                }
            </dl>
        </section>
    );
}

export default Accordion;