import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const NotFound = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/', {
                state: 'hôm nay là thứ 2'
            })
        }, 2000)
    }, [navigate])
    return <>NotFound</>
}
