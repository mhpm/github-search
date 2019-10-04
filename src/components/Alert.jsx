import React, { useContext} from 'react'
import AlertContext from '../context/alert/alertContext'

const Alert = () => {
    const alertContext = useContext(AlertContext)

    const {alert} = alertContext

    return (
        alert !== null &&
            <div class="alert alert-danger" role="alert" style={{position: 'fixed', zIndex: 999, top: 15, right: 21}}>
                {alert.msg}
            </div>
        
    )
}

export default Alert
