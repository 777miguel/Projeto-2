import React from 'react'

function Perfil(props) {

    const { avatar } = props.data

    return (
        <>
            <div className="perfil">
                <img src={avatar} alt="Perfil" />
            </div>
        </>
    )
}

export default Perfil