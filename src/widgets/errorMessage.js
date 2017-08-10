import React, {Component} from 'react';
import {connect} from 'react-redux'
import {List} from 'react-item-list';

const style = {
    errorStyle: {
        'font-weight': 'bold',
        'color': 'red'
    }
}

const mapStateToProps = (state) => ({
    errorMessage: state.errorMessage,
})

class ErrorItem extends Component {
    render() {
        let text = this.props.itemData.errorMessage;
        if(!text){
            text =  this.props.itemData;
        }
        let display = (<li className="messageLine">
            {text}
        </li>)
        return display;
    }
}

class Error extends Component {

    render() {
        const {errorMessage} = this.props
        let display = null
        if (errorMessage.errorMessage !== "") {
            display = (
                <div style={style.errorStyle}>
                    Please correct the following errors:
                    <ul style={style.errorStyle} className="errorMsg">
                        <List items={errorMessage.errorMessage} ListItem={ErrorItem}/>
                    </ul>
                </div>);
        }

        return display;
    }


}



export default connect(mapStateToProps)(Error)