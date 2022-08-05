import React, { useState, useEffect } from 'react'
import { api } from '../../services'

export const Fruits = () => {
  const [viewTable, setViewTable] = useState()

  useEffect(
    async () => {
      console.log(1111111, viewTable)
      const data = await api.getFruits()
      console.log(1111111, data)
      setViewTable(data)
    },
    []
  )

  return (
    <div>
      <h1>Fruits</h1>
      {(viewTable || []).map((e,i) => (
        <div key={i}>
          <span>{e.genus}</span>
          <span>{e.name}</span>
        </div>
      ))}
    </div>
  )
}
