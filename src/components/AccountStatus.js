import React from 'react'
import { useSelector } from 'react-redux'

const AccountStatus = () => {
  const isSavingsAcc = useSelector(state => state.banking.isSavingsAcc)
  return (
    <div>
        <h1>{isSavingsAcc?"Savings Account":"Checking Account"}</h1>
    </div>
  )
}

export default AccountStatus