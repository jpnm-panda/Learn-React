import React, {useContext} from 'react'
import AppContext from '../../context/AppContext'


const C = () => {
  const { dispatchProvided } = useContext(AppContext)
  return (
      <div>
      <h1>C</h1>
      <button onClick={()=> dispatchProvided('add_1')}>Add_1</button>
     </div>
  )
}

export default C
