import React from 'react'

function AsideDown(props) {
  const infos = props.educacao

    return (
            <>
              <div className="sidebar">
                <h3>Educação</h3>
                <div className="lista-de-formacao">
                  {
                    infos.map(i => (
                      <li key={i.id}>
                        <h4>{i.instituicao}</h4>
                        <p>{i.curso}</p>
                      </li>
                    ))
                  }
                </div>
              </div>
            </>
    )
}

export default AsideDown