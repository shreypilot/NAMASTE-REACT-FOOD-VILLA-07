import React, { createContext } from 'react'

const userContext =createContext( {
  user: {
    name : "Dummy",
    email : "shreypilot@gmail.com"
  }
  
});

export default userContext;