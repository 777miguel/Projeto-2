import React from 'react'
import AsideUp from '../sideUp'
import AsideDown from '../sideDown'

function AsideContainer(props) {

    const { contatos, educacao } = props.data

    return  (
        <>
            <aside>
                <AsideUp contatos={contatos}/>
                <AsideDown educacao={educacao}/>
            </aside>
        </>
    )
}

export default AsideContainer