import React from 'react'
import { useState, useEffect } from 'react'

const Fetch = () => {
    const [usuarios, setUsuarios] = useState ([]);

    useEffect( ()=>{
        fetch()
    }, [])

  return (
    <div>Fetch</div>
  )
}

export default Fetch