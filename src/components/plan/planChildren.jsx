import React from 'react';

class planChildren extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ruoteParams: null
        }
    }

    // 当从父组件传过来的props发生新的变化后（初始化render不算，第一次render变化也不会执行）调用的钩子，
    // this.props 为之前的props, props为最新的props,类似于vue中的watch(old,new)
    UNSAFE_componentWillReceiveProps (props) {
        console.log(this.props);
        console.log(props)
        let { id } = props.match.params;
        this.setState({
            ruoteParams: id
        })
    }


    componentDidMount () {
        console.log('----componentDidMount')
        this.setState({
            ruoteParams: this.props.match.params.id
        })
    }



    //当state或者props改变时触发，需要注意的是一定要做判断条件，否则会陷入死循环。
    // componentDidUpdate () {  // 避免 死循环
    //     // console.log(this.props)
    //     let { ruoteParams } = this.state;
    //     let { id } = this.props.match.params;
    //     if (ruoteParams !== id) {
    //         this.setState({
    //             ruoteParams: id
    //         })
    //     }
    // }
    render () {
        let { ruoteParams } = this.state;
        return (
            <div className="">{ruoteParams}</div>
        )
    }
}

export default planChildren;