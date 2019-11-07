import React, {Component} from 'react';
import './styles/Description.css';

class Description extends Component {
    render() {
        return(
            <section className='description-section'>
                <div className='descriptions'>
                    <div className='description-text' >
                        <h3>{this.props.device[this.props.id -1].text}</h3>
                        <p>{this.props.device[this.props.id - 1].subtext}</p>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </section>
        )
    }
}

export default Description;