import React from 'react';
import TopNav from './components/topNav/topNav.jsx';
import ContentNav from './components/contentNav/contentNav.jsx';
import Router from './router/router.js'

class App extends React.Component {
    state = {
        pagesData: null
    }
    handleCallBack = data => {
        this.setState({
            pagesData: data
        })
    }
    render () {
        return (
            <div className="appContener">
                <div className="navWrap">
                    <TopNav />
                </div>
                <div className="contentWrap">
                    <div className="contentNav">
                        <ContentNav handleCallBack={this.handleCallBack} />
                    </div>
                    <div className="contentInfo">
                        <Router routerData={this.state.pagesData} />
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount () {
        console.log(this)
    }
}

export default App

