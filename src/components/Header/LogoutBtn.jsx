/* eslint-disable no-unused-vars */
import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 mt-3 transition ease-in-out  delay-75   rounded-xl p-2 hover:-translate-y-1 hover:scale-100  hover:border  border-[gray] duration-200'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn