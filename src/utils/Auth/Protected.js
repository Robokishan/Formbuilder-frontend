import React from 'react'
import {getToken} from '../storage/storage'
import {Redirect, Route} from 'react-router-dom'

function CheckAuthentication(){
    //Checks Authentication from stored localstorage
    let token = getToken();
    if(token !== null && token !== '')
    {
      return true
    }
    
    else{ 
      return false;
    }
  }
  
  const Protectedroute = ({component: Component,...rest}) => (
     <Route {...rest} render={(props)=> {
        if(CheckAuthentication())
        {
          return <Component  {...props} />
        }
        else
        {
          return <Redirect to = "/auth/login"/>
        }
     }}
     />
  )
  
  export default Protectedroute