import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';



class PhonInfoList extends Component {
    static defaultProps = {
        data:[]    
    };
    render() {
        const {data} = this.props;
        if (!data) return null;
        const list = data.map(
            info => (<PhoneInfo info={info} key={info.id}/>)
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhonInfoList;