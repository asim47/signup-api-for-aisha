import { Button, CircularProgress, TextField } from '@mui/material'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { EMAIL_REGEX } from '../../constants'
import { useEnhancedDispatch, useEnhancedSelector } from '../../Helpers/reduxHooks'
import * as Actions from "../../store/actions"

const SignUp = () => {

  const dispatch = useEnhancedDispatch()

  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Gender, setGender] = useState('')
  const [IsLoading, setIsLoading] = useState(false)
  const [ErrorMsg, setErrorMsg] = useState("")


  const CustomerData = useEnhancedSelector(state => state.user.customer)
  const IsAuth = useEnhancedSelector(state => state.user.isAuth)



  async function signupFunction() {
    try {
      setErrorMsg("")
      setIsLoading(true)

      if (!Name) throw "Please enter a name"
      if (!Email) throw "Please enter a email"
      if (!EMAIL_REGEX.test(Email)) throw "Please enter a valid email address"
      if (!Password) throw "Please enter a password"
      if (!Gender) throw "Please enter a gender"

      const errorMsgFromAction = await dispatch(Actions.signUpAction(Name, Email, Password, Gender))

      if (errorMsgFromAction) throw errorMsgFromAction

      setIsLoading(false)

      toast.success("Signup successful")

    } catch (error) {
      console.log(error)
      setIsLoading(false)
      setErrorMsg(error as string)
    }
  }


  return (
    <div className='p-10'>
      <h1>SignUp page</h1>
      <br />
      <br />
      {
        CustomerData && (
          <h1>Welcome {CustomerData.FirstName} {CustomerData.LastName}</h1>
        )
      }
      <br />
      <br />
      <br />
      <TextField
        label="Name"
        style={{ width: "500px" }}
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <TextField
        label="Email"
        style={{ width: "500px" }}
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <TextField
        label="Password"
        type="password"
        style={{ width: "500px" }}
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <TextField
        label="Gender"
        style={{ width: "500px" }}
        value={Gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <br />
      <br />
      <p className='text-ERROR_COLOR'>{ErrorMsg}</p>
      <br />
      <br />
      {
        IsLoading ? <CircularProgress /> : IsAuth ? <h1>Already logged in</h1> : (
          <Button
            style={{ width: "500px" }}
            onClick={() => {
              signupFunction()
            }}
          >
            Signup
          </Button>
        )
      }

    </div>
  )
}

export default SignUp