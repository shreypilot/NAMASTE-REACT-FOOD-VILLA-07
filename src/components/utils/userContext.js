import React, { createContext } from 'react'

const userContext =createContext( {
  user: {
    name : "Dummy",
    email : "shreypilot@gmail.com"
  }
  
});

userContext.displayName = "userContext"

export default userContext;