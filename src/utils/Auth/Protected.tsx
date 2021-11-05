import React from 'react'
import storage from '../storage/storage'
import { Route, Redirect } from 'react-router-dom'

function CheckAuthentication(){
    //Checks Authentication from stored localstorage
    let token = storage.getToken();
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