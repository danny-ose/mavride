import React from 'react'

type ButtonProps = {
    type: 'button' | 'submit',
    title: string,
}

const Button = ({ type, title }: ButtonProps) => {
  return (
    <button type={type}>
        <label>{title}</label>
    </button>
  )
}

export default Button