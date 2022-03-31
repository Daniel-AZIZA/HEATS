import React from 'react'

export function DisplayImage (props) {
    return (
      <img src={props.src} alt={props.alt} className={props.class}/>
    )
}

export function DisplayIcon (props) {
    const [isDisplay, setDisplay] = [...props.array];
    return (
      <i className={props.IclassName} onClick={(props) => setDisplay(!isDisplay)}></i>
    )
}