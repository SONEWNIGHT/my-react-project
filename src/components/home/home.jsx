import React from 'react';
import './home.scss'

class Home extends React.Component {
    state = {
        data: [{
            name: '打代码',
            checked: false
        }, {
            name: '睡觉',
            checked: false
        }],
        countChecked: false,
        sekectCount: 0,

    }

    handleChange = index => {
        return () => {
            let { data } = this.state;
            data[index].checked = !data[index].checked;
            this.setState({ data });
        }
    }

    handleCountCheckedChange = () => {
        let { data, countChecked } = this.state;
        !countChecked ? data.forEach(item => item.checked = true) : data.forEach(item => item.checked = false);
        this.setState({
            data,
            countChecked: !countChecked
        });
    }

    componentDidMount () {
        let { data } = this.state;
        document.onkeydown = (event) => {
            var e = event || window.e;
            var keyCode = e.keyCode || e.which;
            if (keyCode === 13 && this.input1 == document.activeElement && this.input1.value) {
                let findName = data.find(item => item.name === this.input1.value)
                if (!findName) {
                    let obj = {
                        name: this.input1.value,
                        checked: false
                    }
                    data = [obj, ...data];
                    this.setState({ data })
                }
            }
        }
    }

    componentDidUpdate (prevProps, prevState, Snapshot) {
        // // 新值
        let { data } = this.state;
        let sekectCount = 0;
        data.forEach(item => item.checked && sekectCount++);

        if (sekectCount !== prevState.sekectCount) {
            this.setState({
                sekectCount
            })
        }
    }



    render () {
        let { data, countChecked, sekectCount } = this.state;
        return (
            <div className="homeWrap">
                {/* {}<p>{this.propsData}</p> */}
                <div className="todoList">
                    <div className="inputWrap"><input type="text" ref={c => this.input1 = c} /></div>
                    <div className="checkBoxWrap">
                        {
                            data.map((item, index) => {
                                return (
                                    <p key={item.name}><input type="checkbox" checked={item.checked} onChange={this.handleChange(index)} />{item.name}</p>
                                )
                            })
                        }
                    </div>
                    <div className="countWrap">
                        <p><input type="checkbox" checked={countChecked} onChange={this.handleCountCheckedChange} />{`已完成${sekectCount}/全部${data.length}`}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;