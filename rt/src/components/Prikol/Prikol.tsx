import React, { useEffect, useState } from 'react'
import '../Prikol/Prikol.css'

const Prikol: React.FC = () => {
  const [prikol, setPrikol] = useState<number>(0)

  useEffect(() => {
    let count = 0
    const interval = setInterval(() => {
      count++
      setPrikol(count)
      if (count >= 100) {
        clearInterval(interval)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <section>
      <div>
        <p className="prikol">{prikol}</p>
      </div>
    </section>
  )
}

export default Prikol
