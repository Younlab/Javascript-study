import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';



class PhonInfoList extends Component {
    static defaultProps = {
        data:[]    
    };
    render() {
        const {data, onRemove, onUpdate} = this.props;
        if (!data) return null;
        const list = data.map(
            info => (<PhoneInfo onRemove={onRemove} onUpdate={onUpdate} info={info} key={info.id}/>)
        );
        console.log('rendering list');

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhonInfoList;