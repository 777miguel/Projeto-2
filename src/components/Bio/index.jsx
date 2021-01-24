import React from 'react'

function Biography(props) {

    const { nome, ocupacao, resumo } = props.data

    return (
        <>
            <div className="biografia">
                <h1>{nome}</h1>
                <div className="ocupacao">{ocupacao}</div>
                <p>{resumo}</p>
            </div>
        </>
    )
}

export default Biography