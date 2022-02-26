import React, {useContext} from 'react'
import AppContext from '../../context/AppContext'


const C = () => {
  const value = useContext(AppContext)
  return (
      <div>
          <h1>C</h1>
          {value}
     </div>
  )
}

export default C
