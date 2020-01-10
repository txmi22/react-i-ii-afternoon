import React, {Component} from 'react';
import '../App.css';

class Button extends Component {
    constructor(){
        super();
        this.state = {}
    }
    
    render(){
        return(
            <div className='buttonsContainer'>
                <button className='previous' onClick={()=>{this.props.previous()}}>{'<'} Previous</button>
            <div>
                <button className='edit'>Edit</button>
                <button className='delete'>Delete</button>
                <button className='new'>New</button>
            </div>
                <button className='next' onClick={()=>{this.props.next()}}>Next {'>'}</button>
            </div>
        )
    }
}
export default Button;