import { Component } from 'react'

export class Accordion extends Component {
    constructor(props) {
        super(props)

        this.props = props;
        this.state = {
            showBody: false,
        }

        this.setShowBody = this.setShowBody.bind(this)
        this.toggleContentDisplay = this.toggleContentDisplay.bind(this);
    }

    setShowBody(show) {
        this.setState({ showBody: show })
    }

    toggleContentDisplay = () => {
        this.setShowBody(!this.state.showBody);
    };


    render() {
        const { showBody } = this.state;
        const { title, className, children, ...rest } = this.props;

        return (
            <section className={`accordion${className ? ' ' + className : ''}`} {...rest}>
                <dl>
                    <button onMouseDown={this.toggleContentDisplay} className="accordion__title" aria-expanded="false">
                        <dt>
                            {title}
                        </dt>
                    </button>
                    <dd className="accordion__content" style={{ display: `${showBody ? 'block' : 'none'}` }}>
                        {children}
                    </dd>
                </dl>
            </section>
        )
    }
}

export default Accordion;