import React from 'react'
import {Route,Switch} from 'react-router-dom'



class App extends React.Component {
    render (){
        return (
            <div>
                <switch>
                    <Route exact path ="/" component={Home}/>
                    <Route exact path ="/about" component={About}/>
                    <Route exact path ="/profile" component={Profile}/>
                    <Route exact path ="/shop" component={Shop}/>
                    <Route exact path ="/cart" component={Cart}/>
                </switch>
            </div>
        )
    }
}


export default App