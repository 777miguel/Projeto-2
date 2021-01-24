import React, { useState } from 'react'
import EachContact from '../eachContact'

function AsideUp(props) {

    const infos = props.contatos

    const [contact, setContact] = useState(false)

    const showContatcs = () => {
        setContact(!contact)
    }

    return (
        <>
            <div className="sidebar">
                <h3>Contatos</h3>
                <button onClick={showContatcs}>Mostrar Contatos</button>
                {
                    contact &&
                    infos.map(i => (
                        <EachContact contact={i} key={i.id}/>
                    ))
                }

            </div>
        </>
    )
}

export default AsideUp