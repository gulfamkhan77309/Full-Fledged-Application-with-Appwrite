import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth.js'
import { logout } from '../../store/authSlice.js'

import React from 'react'

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        })
    }

    return (
        <button
            className='w-full sm:w-auto text-left sm:text-center block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={logoutHandler}
        >
            LogOut
        </button>
    )
}

export default LogoutBtn