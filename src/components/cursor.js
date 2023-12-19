import React, { useEffect } from 'react'
import {gsap} from 'gsap'

export default function Cursor() {
    useEffect(() => {
        const cursor  = document.querySelector('.cursor')
        const cursorText = document.querySelector('.cursor-text') 
        const text = document.querySelectorAll('a, p, h1, h2, span')

        const onMouseMove = (e) => {
            const {clientX, clientY} = e
            gsap.to(cursor, {x: clientX, y: clientY})
        }

        document.addEventListener('mousemove', onMouseMove)
        text.forEach((el) => {
            el.addEventListener('mouseover', () => {
                    gsap.to(cursor, {scale: 4, })
                    cursor.style.display = 'block'

            })
            el.addEventListener('mouseleave', () => {
                gsap.to(cursor, {scale:1, })   
            })
        })
        })
    
  return (
    <div className='cursor'>
      <span className="cursor-text"></span>
    </div>
  )
}
