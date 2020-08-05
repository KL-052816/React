import React from 'react'

class Tody extends React.Component{
    constructor(props){
        super(props)
        this.state={
            lists:[],
            num:0,
            type:'头条'
        }
    }
    componentDidMount(){
        console.log(this.props.match.params.type)
        this.state.num=parseInt(Math.random()*100)
        // this.getData(this.props.match.params.type,this.state.num)
    }
    componentWillReceiveProps(newProps){
        console.log(newProps.match.params.type)
        this.setState({
            type:newProps.match.params.type
        })
        this.state.num=parseInt(Math.random()*100)
        // this.getData(newProps.match.params.type,this.state.num)
    }
    getData(y,i){
        React.axios.get('https://api.jisuapi.com/news/get?channel='+y+'&start='+i+'&num=4&appkey=bf15f31e8ece687c').then((res)=>{
            console.log(res.data.result)
                this.state.lists=res.data.result.list
            this.setState({
                lists:this.state.lists
            })
            console.log(this.state.lists)
        }).catch(err=>{
            console.log(err)
        })
    }
    sendCont(i){
        this.props.history.push('/App/detail'+this.state.type,{cont:i})
    }
    render(){
        return(
            <div className="tody">
                <h3>今日要闻</h3>
                <div className="tody-new">
                    {
                        this.state.lists.map((item,index)=>
                            <div key={index} className="tody-list" onClick={()=>this.sendCont(item)}>
                                <p className="title-p1">{item.title}</p>
                    <p className="title-p2"><span>{item.src}</span><span>{item.time}</span></p>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Tody