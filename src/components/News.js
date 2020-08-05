import React from 'react'
import {Link} from 'react-router-dom'

class News extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show:false,
            show1:true,
            lists:[],
            value:''
        }
    }
    // componentDidMount(){
    //     React.axios.get("https://api.jisuapi.com/news/channel?appkey=bf15f31e8ece687c").then(res=>{
    //         console.log(res.data.result)
    //         this.state.lists=res.data.result
    //         this.setState({
    //             lists:this.state.lists
    //         })
    //     }).catch(err=>{
    //         console.log(err)
    //     })
    // }
    compore(){
        document.getElementsByClassName('news')[0].classList.add('news1')
        this.setState({
            show:true,
            show1:false
        })
    }
    compore1(){
        document.getElementsByClassName('news')[0].classList.remove('news1')
        this.setState({
            show:false,
            show1:true
        })
    }
    sendData(i){
        this.props.history.push({ pathname: '/App/index/'+i});
    }
    getData(i){
        this.setState({
          value:i
        })
        console.log(this.state.value)
      }
    render(){
        return(
            <div className="news">
                <div className="search" >
                    <input className="ipt" placeholder="请输入你要搜索的内容" value={this.state.value} onChange={(e)=>this.getData(e.target.value)}/><Link to={'/App/Search/'+this.state.value}><i className="iconfont icon-sousuo"></i></Link>
                </div>
                {this.state.lists.map((item,index)=>
                    <p className="list" key={index} onClick={()=>this.sendData(item)}>{item}</p>
                )}
                <i className="iconfont icon-jiantou-copy" onClick={this.compore.bind(this)} style={{display:this.state.show1?'block':'none'}}/>
                <i className="iconfont icon-jiantou-copy-copy" onClick={this.compore1.bind(this)} style={{display:this.state.show?'block':'none'}} />
            </div>
        )
    }
}

export default News