import React from 'react'

import styles from './Card.module.css'
const Card = (props) => {
    return (
        <div>
            <div className="card" id={styles.card}>
                <img src={props.src} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <a href="#" className="btn btn-primary">{props.btnText}</a>
                    </div>
            </div>
        </div>
    )
}

export default Card