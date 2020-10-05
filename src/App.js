
import React from 'react'
import Posts from './components/Posts'
import {BrowserRouter,Route,Link} from 'react-router-dom'

function App(){
    return (
        <BrowserRouter>
            <div>
                <Link to='/'></Link>
                <Route path='/' component={Posts} exact={true}/>
            </div>
        </BrowserRouter>
    )
}

export default App