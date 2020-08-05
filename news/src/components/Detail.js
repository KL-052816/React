import React from 'react'

class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            conts:null
        }
        console.log(this.props.location.state.cont)
    }
    exit(){
        window.history.go(-1)
    }
    render(){
        return(
            <div className="detail">
                <i className="iconfont icon-jiantou-copy1" onClick={this.exit}></i>
                <p className="title1">{this.props.location.state.cont.title}</p>
                <p className="title1-src"><span>{this.props.location.state.cont.src}</span><span>{this.props.location.state.cont.time}</span></p>
                <div className="img"><img src={this.props.location.state.cont.pic}/></div>
                <div className="content" dangerouslySetInnerHTML={{__html:this.props.location.state.cont.content}}></div>
            </div>
        )
    }
}

export default Detail