//import {useState} from 'react';

const Accordion = ({ className = false, title = '', children }) => {
    /* title can be object (used in WP) or string */

    const [showBody, setShowBody] = useState(false);
    
    // const onClick = () => {
    //     setShowBody(!showBody);
    // };

    // const showBody = false;
    const onClick = false;
    

    return (
        <section className={`accordion${className ? ' ' + className : ''}`}>
            <dl>
                <button onMouseDown={onClick} className="accordion__title" aria-expanded="false">
                    <dt>
                        {title}
                    </dt>
                </button>
                <dd className="accordion__content" style={{ display: `${showBody ? 'block' : 'none'}` }}>
                    {children}
                </dd>
            </dl>
        </section>
    );
}

export default Accordion;