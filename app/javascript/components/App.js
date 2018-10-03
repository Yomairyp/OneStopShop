import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from "./Home"
import BusinessAccounts from "./BusinessAccounts"
import Profile from "./Profile"
import Shop from "./Shop"
import ShoppingCart from "./ShoppingCart"
import About from "./About"




class App extends React.Component {
    render (){
        return (
            <div>
                <switch>
                    <Route exact path ="/" component={Home}/>
                    <Route exact path ="/about" component={About}/>
                    <Route exact path ="/businessAccounts" component={BusinessAccounts}/>
                    <Route exact path ="/profile" component={Profile}/>
                    <Route exact path ="/shop" component={Shop}/>
                    <Route exact path ="/shoppingCart" component={ShoppingCart}/>
                </switch>
            </div>
        )
    }
}


export default App