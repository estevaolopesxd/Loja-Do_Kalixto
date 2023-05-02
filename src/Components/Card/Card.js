import React, { useState } from 'react'

import styles from './Card.module.css'
const Card = (props) => {
    const [hover, setHover] = useState(false)

    const btn = document.getElementById("btn")
    const card = document.getElementById("card")


    const handleMouseEnter = () => {
        setHover(true)
    }


    const handleMouseLeave = () => {
        // e.target
        // btn.classList.remove("d-flex")
        setHover(false)
    }

    return (
        <div>
            <div className="card" id={styles.card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                <img src={props.src} className="card-img-top" alt="..." />
                <div className="card-body" >
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className={ hover ? 'btn text-danger' : 'd-none' } id='btn'><i class="fa-sharp fa-solid fa-heart fa-2xl"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Card