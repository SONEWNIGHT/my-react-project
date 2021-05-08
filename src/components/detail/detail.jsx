import React from 'react';

class Detail extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
                <div>Detail</div>
                <div>{this.propsData}</div>
            </div>
        )
    }
}

export default Detail;