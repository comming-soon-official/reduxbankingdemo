import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { toggleauth } from '../actions/LoginActions'

const Auth = () => {
  const dispatch = useDispatch()
  const authlogin = useSelector(state => state.auth)

  const handleAuth = ()=>{
    dispatch(toggleauth())
  }

  return (
    <div>
        <Button onClick={handleAuth} size='sm'> 
            {authlogin.isLoggedin ?"Logout":"Login"}
        </Button>
    </div>
  )
}

export default Auth