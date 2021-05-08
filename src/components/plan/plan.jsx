import React from 'react';
import { Route, Link } from 'react-router-dom';
import PlanChildren from './planChildren.jsx';
import './plan.scss';


class Plan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: [{
                title: '子路由1',
                id: 255
            }, {
                title: '子路由2',
                id: 256
            }]
        }
    }
    componentDidMount () {
        this.props.history.push(`/plan/${this.state.nav[0].id}`)
    }
    render () {
        console.log('sss');
        return (
            <div className="planWrap">
                <nav>
                    {
                        this.state.nav.map(item => {
                            return (
                                <div key={item.id}>
                                    <Link to={`/plan/${item.id}`}>{item.title}</Link>  {/* 点了Link会触发调用render */}
                                </div>
                            )
                        })
                    }
                </nav>
                <div className="planContent">
                    <Route path="/plan/:id" component={PlanChildren} />
                </div>
            </div>
        )
    }
}

export default Plan;