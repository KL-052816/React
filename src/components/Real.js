import React from 'react'
import store from '../store'
class Real extends React.Component{
    constructor(props){
        super(props)
        this.state={
            lists:[],
            num:1
        }
        console.log(this.state.num)
        store.subscribe(this.change.bind(this))
    }
    change(){
        this.setState({
            num:store.getState()
        })
        console.log(this.state.num)
    }
    componentDidMount(){
        this.getData(this.props.match.params.type,this.state.num)
    }
    componentWillReceiveProps(newProps){
        this.setState({
            type:newProps.match.params.type
        })
        console.log(this.state.num)
        this.getData(newProps.match.params.type,this.state.num+1)
    }
    getData(i,num){
        React.axios.get('https://api.jisuapi.com/news/get?channel='+i+'&start='+num*10+'&num=10&appkey=bf15f31e8ece687c').then(res=>{
            console.log(res.data.result)
            this.state.lists=this.state.lists.concat(res.data.result.list)
            this.setState({
                lists:this.state.lists
            })
        }).catch(err=>{
            console.log(err)
        })
    }
    sendCont(i){
        this.props.history.push('/App/detail/'+this.state.type,{cont:i})
    }
    render(){
        return(
            <div >
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

export default Real