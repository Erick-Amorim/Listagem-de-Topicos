import React from 'react'

const Topicos = ({ topicos }) => {
  return (
    <div className="topicos">
      <div className="content">
        <p>{topicos.descricao}</p>
        <p className='autor'>({topicos.autor})</p>
      </div>
      <div>
        {topicos.active ? (
          <>
            <button className='like'>Like</button>
            <button className='dislike'>Dislike</button>
          </>
        ) : (
          <>
            <button disabled>Like</button>
            <button disabled>Dislike</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Topicos
