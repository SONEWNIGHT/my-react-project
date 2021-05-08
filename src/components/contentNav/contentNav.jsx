import React from 'react';
import './contentNav.scss'
import { withRouter } from "react-router-dom"
import yxH from '../../static/images/invisibleHover.png'
import yxA from '../../static/images/invisibleActive.png'
import gdH from '../../static/images/fixdHover.png'
import gdA from '../../static/images/fixdActive.png'
import zzH from '../../static/images/planHover.png'
import zzA from '../../static/images/planActive.png'
class ContentNav extends React.Component {
    state = {
        navImg: [{
            title: '隐形正畸',
            router: '/',
            hover: yxH,
            active: yxA
        }, {
            title: '固定正畸',
            router: '/detail',
            hover: gdH,
            active: gdA
        }, {
            title: '种植',
            router: '/plan',
            hover: zzH,
            active: zzA
        }],
        activeInx: 0
    };


    componentDidMount () {
        console.log(this)
    }

    handleClick = (index, router) => {
        const { history } = this.props;
        return () => {
            console.log(this.props)
            this.setState({ activeInx: index });
            this.props.handleCallBack(this.state.navImg[index].title)
            history.push(router);
        }
    }
    render () {
        let { activeInx } = this.state;
        return (
            <div className="contentNavWrap">
                {
                    this.state.navImg.map((item, index) => {
                        return (<div key={item.title} className={['item', activeInx === index ? 'active' : null].join(' ')} onClick={this.handleClick(index, item.router)}>
                            <img src={activeInx === index ? item.active : item.hover} alt="" />
                            <p>{item.title}</p>
                        </div>)
                    })
                }
            </div>
        );
    }
}

export default withRouter(ContentNav)