
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import errorMessage from '../../components/errorMessage'
import getStore, {
  login,
  checkLoginStatus,
  selectUserDetail,
  selectError,
  AppDispatch
} from '../../store'

import LoginScreen from '../../screens/loginScreen'

function LoginContainer () {
  const user = useSelector(selectUserDetail)
  const loginError = useSelector(selectError)
  const [show, setShow] = useState(false)
  const router = useRouter()
  const dispatch:AppDispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitHandler = (e:SubmitEvent) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  useEffect(() => {
    dispatch(checkLoginStatus())
  }, [dispatch])

  useEffect(() => {
    loginError ? setShow(true) : null
  }, [loginError])

  useEffect(() => {
    user ? router.push('/') : console.log('noUser')
  }, [user, router])
  return (
      <>
    <LoginScreen
    redirectAfterLogin='/'
    setEmail={setEmail}
    setPassword={setPassword}
    submitHandler={submitHandler} />
    {errorMessage('неверный адрес электронной почты или пароль', show, setShow)}
    </>
  )
}

export async function getServerSideProps () {
  const store = getStore()
  return {
    props: {
      initialState: store.getState()
    }
  }
}

export default LoginContainer
