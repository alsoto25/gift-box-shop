import React, { useState } from 'react'
import styles from '../../../styles/components/shop/DynamicStep.module.scss'

function DynamicDropdown({ dropdown, userChoices, handleChange }) {
    return (
        <select
            name={dropdown.id}
            onChange={handleChange}
            disabled={dropdown.dependencyId && !userChoices[dropdown.dependencyId]}
        >
            {dropdown.options.map((option) => {
                if (
                    option.id !== 'default' &&
                    dropdown.dependencyId &&
                    option.dependencies &&
                    !option.dependencies.includes(userChoices[dropdown.dependencyId])
                ) {
                    return null
                }

                return (
                    <option
                        value={option.id === 'default' ? '' : option.id}
                        disabled={option.disabled}
                        selected={option.selected}
                        key={option.id}
                    >
                        {option.title}
                        {option.price !== undefined ? ` (+$${option.price})` : ''}
                    </option>
                )
            })}
        </select>
    )
}

function ChoicesSection({ step, isActive, userChoices, currentOption, setCurrentOption }) {
    return (
        <div
            className={`${styles['choices-section']} ${
                isActive ? styles['choices-section-active'] : ''
            }`}
        >
            <div className={styles['choices-title']}>{step.title}</div>
            <div className={styles['choices-button-container']}>
                {step.options.map((option, index) => (
                    <button
                        className={`${styles['choice-button']}${
                            currentOption === index ? ` ${styles['choice-button-active']}` : ''
                        }`}
                        type="button"
                        onClick={function () {
                            setCurrentOption(index)
                        }}
                    >
                        <div className={styles['choice-button-title']}>{option.title}</div>
                        {option.dropdowns.map((dropdown) => {
                            console.log(dropdown)
                            return (
                                <div className={styles['choice-button-line']}>
                                    -{' '}
                                    <span className={styles['choice-button-line-title']}>
                                        {dropdown.name}
                                    </span>
                                    :{' '}
                                    {userChoices[dropdown.id]
                                        ? dropdown.options.find(
                                              (opt) => userChoices[dropdown.id] === opt.id,
                                          ).title
                                        : 'None'}
                                </div>
                            )
                        })}
                    </button>
                ))}
            </div>
            <button className={styles['choice-next-button']} type="button">
                Continue
            </button>
        </div>
    )
}

export default function DynamicStep({ step, isActive, userChoices, setUserChoices }) {
    const [currentOption, setCurrentOption] = useState(0)
    const { title, dropdowns, description } = step.options[currentOption]

    const handleChange = (e, dropdown) => {
        const steps =
            dropdown.id === 'box-contents-dropdown'
                ? dropdown.options.find((opt) => opt.id === e.target.value).steps
                : []

        setUserChoices({
            ...userChoices,
            [e.target.name]: e.target.value,
            steps,
        })
    }

    //Rest of components of MainShop
    return (
        <>
            <div
                className={`${styles['container-main']} ${
                    isActive ? styles['container-main-active'] : ''
                }`}
            >
                <img
                    src={'https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg'}
                />
                <div>
                    <h1>{title}</h1>
                    {dropdowns &&
                        dropdowns.map((dropdown) => (
                            <DynamicDropdown
                                key={dropdown.id}
                                dropdown={dropdown}
                                userChoices={userChoices}
                                handleChange={function (e) {
                                    handleChange(e, dropdown)
                                }}
                            />
                        ))}
                    <p>{description}</p>
                </div>
            </div>
            <ChoicesSection
                step={step}
                isActive={isActive}
                userChoices={userChoices}
                currentOption={currentOption}
                setCurrentOption={setCurrentOption}
            />
        </>
    )
}
