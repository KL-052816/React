import React from 'react';
import './App.css';
import store from './store'
import { Link } from 'react-router-dom'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      num:1
    }
  }
  touch(e){
    var fheight=e.target.scrollTop+e.target.offsetHeight
    var cheight=e.target.children[0].offsetHeight
    if(fheight==cheight){
      this.setState({
        num:this.state.num+=1
      })
      store.dispatch({type:'send',payload:this.state.num})
    }
  }
  render(){
    return (
      <div className="App" onScroll={(e)=>this.touch(e)}>
        <div>
          <div className="header">
            <div className="header-div1"><Link to='/App/index/头条'><i className="iconfont icon-geren"></i></Link></div>
            <div className="header-div2"><img className="title" src="https://static.ws.126.net/163/wap/f2e/milk_index/logo-site.png" /></div>
            <div className="header-div3"><i className="iconfont icon-icon_huabanfuben"/><span>邮箱</span><i className="iconfont icon-jiantou-copy" /></div>
          </div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
