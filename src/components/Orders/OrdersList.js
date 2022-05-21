import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrdersList({loggedIn}) {
    const navigate = useNavigate()
    useEffect(()=> {
        if (!loggedIn){
            navigate("/login")
        }
        }, [loggedIn])
  return (
    <div>OrdersList</div>
  )
}
