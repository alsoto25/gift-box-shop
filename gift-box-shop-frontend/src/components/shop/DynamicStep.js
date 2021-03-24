import React, { useState } from 'react'
import styles from '../../../styles/components/shop/DynamicStep.module.scss'

export default function DynamicStep({ step, isActive, setCurrentStepData }) {
    //State local
    const [dataSelected, setDataSelected] = useState({})
    const { title, dropdowns, description } = step.options[0]

    const handleChange = (e) => {
        setDataSelected({
            ...dataSelected,
            [e.target.name]: e.target.value,
        })

        //Set parent State
        setCurrentStepData(dataSelected)
    }

    //Rest of components of MainShop
    return (
        <div
            className={`${styles['container-main']} ${
                isActive ? styles['container-main-active'] : ''
            }`}
        >
            <img src={'https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg'} />
            <div>
                <h1>{title}</h1>
                {dropdowns
                    ? dropdowns.map((dropdown, i) => (
                          <select key={i} name={dropdown.name} onChange={handleChange}>
                              {dropdown.options.map((option, j) => (
                                  <option key={j}>{option.title}</option>
                              ))}
                          </select>
                      ))
                    : null}
                <p>{description}</p>
            </div>
        </div>
    )
}
