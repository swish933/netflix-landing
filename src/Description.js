import React, {Component} from 'react';
// import Device from './Device'
import './styles/Description.css';

class Description extends Component {
    render() {
        return(
            <section className='description-section'>
                <div className='descriptions'>
                    <div className='description-text' >
                        <h3>{this.props.device[this.props.id].text}</h3>
                        <p>{this.props.device[this.props.id].subtext}</p>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </section>
        )
    }
}

export default Description;