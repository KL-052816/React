import React from 'react'
import {BrowserRouter as Router ,Route, Redirect} from 'react-router-dom'
import App from './App'
import News from './components/News'
import Tody from './components/Tody'
import Real from './components/Real'
import Detail from './components/Detail'
import Search from './components/Search'


class rout extends React.Component{
    render(){
        return(
            <Router>
                <Route path="/App" render={()=>(
                    <App>
                        <Route path='/App/index/:type' component={News} />
                        <Route path='/App/index/:type' component={Tody} />
                        <Route path='/App/index/:type' component={Real} />
                        <Route path="/App/detail/:type" component={Detail}/>
                        <Route path="/App/Search/:type" component={Search}/>
                    </App>
                )}>
                </Route>
                <Route path='/' render={()=>(
                    <Redirect to="/App/index/头条" />
                )
                }/>
            </Router>
        )
    }
}


export default rout