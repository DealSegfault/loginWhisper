import React from 'react'
import { Redirect } from 'react-router'

const AdminPanel = ({user, dispatch, handleSubmit}) => {
    console.log(user)
    if (user !== undefined && user !== "") {
    return (
        <div>
            Bonjour {user}, vous etes connecter ?
            <div style={{ padding: 15 }}>
                <h2>Pizza creator</h2>
                <button onClick={(() => handleSubmit(dispatch))}>Loggout</button>
            </div>
        </div>
    )
    // return <Redirect to="/"/>
    } // return <div></div>
    return <Redirect to="/"/>
    
}

export default AdminPanel