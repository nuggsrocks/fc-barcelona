import React, { useEffect, useRef } from 'react'
import animate from 'animate'

export const View = ({ children }) => {

  const ref = useRef()
  useEffect(() => {
    animate.fadeIn(ref.current, 500)
  })

  return (
    <section ref={ref} style={{opacity: '0'}}>
      {children}
    </section>
  )
}
