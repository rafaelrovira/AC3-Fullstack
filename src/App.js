import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Sobre from './Sobre';
import Usuario from './Usuario';
import Ac3 from './ac3'
import CallApi from './CallApi';


export default function App() {
   return (
       <>
     <header>
     <p> <Link to='/ac3'>AC3 - Rafael</Link></p>
     </header>
     <main>
         <Switch>
           <Route path='/usuario' component= {Usuario}/>
           <Route path='/sobre/:id?' component= {Sobre}/>
           <Route path='/home' component= {Home}/>
           <Route path='/ac3' component={Ac3}/>
         </Switch>
       </main>
       <CallApi />
       </>
   );
}
