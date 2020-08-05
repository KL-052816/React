import React from 'react'
import {Link} from 'react-router-dom'

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={
            lists:[],
            value:''
        }
    }
    componentDidMount(){
        this.getData(this.props.match.params.type)
        console.log(this.props.match.params.type)
    }
    componentWillReceiveProps(newProps){
        this.setState({
            type:newProps.match.params.type
        })
        console.log(newProps.match.params.type)
        this.getData(newProps.match.params.type)
    }
    getData(i){
        console.log(11111)
        React.axios.get('https://api.jisuapi.com/news/search?keyword='+i+'&appkey=bf15f31e8ece687c').then(res=>{
            console.log(res.data.msg)
            if(res.data.msg!='ok'){
                alert('请重新输入关键字...')
            }else{
                this.state.lists=res.data.result.list
                this.setState({
                    lists:this.state.lists
                })
            }
            
        }).catch(err=>{
            console.log(err)
        })
    }
    sendCont(i){
        this.props.history.push('/App/detail/'+this.state.type,{cont:i})
    }
    getData1(i){
        this.setState({
          value:i
        })
        console.log(this.state.value)
      }
    render(){
        return(
            <div >
                <div className="search" >
                    <input className="ipt" placeholder="请输入你要搜索的内容" value={this.state.value} onChange={(e)=>this.getData1(e.target.value)}/><Link to={'/App/Search/'+this.state.value}><i className="iconfont icon-sousuo"></i></Link>
                </div>
                {
                    this.state.lists.map((item,index)=>
                    <div key={index} className="real" onClick={()=>this.sendCont(item)}>
                        <div className="real-div1">
                            <p className="real-div1-p1">{item.title}</p>
                            <p className="real-div1-p2">
                                <span>{item.src}</span><span>{item.category}</span>
                            </p>
                        </div>
                        <div className="real-div2">
                            <img src={item.pic}/>
                        </div>
                    </div>
                    )
                }
            </div>
        )
    }
}

export default Search