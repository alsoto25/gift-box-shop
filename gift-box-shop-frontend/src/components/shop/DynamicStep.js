import React, { useState } from 'react'
import styles from '../../../styles/components/shop/DynamicStep.module.scss'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
})

function DynamicDropdown({ dropdown, userChoices, handleChange }) {
    return (
        <select
            name={dropdown.id}
            onChange={handleChange}
            disabled={dropdown.dependencyId && !userChoices[dropdown.dependencyId]}
            value={userChoices[dropdown.id] ? userChoices[dropdown.id] : null}
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

function ChoicesSection({
    step,
    isActive,
    userChoices,
    currentOption,
    setCurrentOption,
    setHaveSuboption,
    stepsList,
    currentStep,
    setCurrentStep,
    setStepsList,
    validateStep,
    currentSuboption,
    setUserChoices,
}) {
    //Falta validar subOptions y dependencias
    function handleClick() {
        console.clear()
        console.log(currentSuboption)
        stepsList.map((step, index) => {
            if (step.id === currentStep) {
                if (index + 1 <= stepsList.length - 1) {
                    if (validateStep(currentStep)) {
                        let newStepsList = [...stepsList]
                        newStepsList[index].isComplete = true
                        setStepsList(newStepsList)
                        setCurrentStep(stepsList[index + 1].id)
                        window.scrollTo(0, 0)
                        setUserChoices({
                            ...userChoices,
                            currentSuboption,
                        })
                    } else {
                        Toast.fire({
                            icon: 'error',
                            title: 'Seleccione TODOS los campos para continuar',
                        })
                    }
                } else {
                    Toast.fire({
                        icon: 'error',
                        title: 'Seleccione para continuar',
                    })
                }
            }
        })
    }

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
                            setHaveSuboption(false)
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
            <button className={styles['choice-next-button']} type="button" onClick={handleClick}>
                Continue
            </button>
        </div>
    )
}

function DynamicSuboption({ userChoices, setUserChoices, suboptionData, setCurrentSuboption }) {
    const { suboptions } = suboptionData

    function handleChange(e) {
        setCurrentSuboption({
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div className={styles['suboptions']}>
            <h2>{suboptions.name}</h2>
            <div>
                {suboptions.options.map((option) => (
                    <label for={option.name} style={{ background: option.hex }}>
                        <input
                            type="radio"
                            name={suboptionData.id}
                            id={option.name}
                            value={option.name}
                            defaultChecked={option.default}
                            onChange={handleChange}
                        />
                    </label>
                ))}
            </div>
        </div>
    )
}

export default function DynamicStep({
    step,
    isActive,
    userChoices,
    setUserChoices,
    stepsList,
    currentStep,
    setCurrentStep,
    setStepsList,
    validateStep,
}) {
    const [currentOption, setCurrentOption] = useState(0)
    const [currentSuboption, setCurrentSuboption] = useState({})
    const { title, dropdowns, description } = step.options[currentOption]
    const [steps, setSteps] = useState([])
    let [haveSuboption, setHaveSuboption] = useState(false)
    let [suboptionData, setSuboptionData] = useState({})

    const handleChange = (e, dropdown) => {
        setHaveSuboption(false)
        const steps =
            dropdown.id === 'box-contents-dropdown'
                ? dropdown.options.find((opt) => opt.id === e.target.value).steps
                : []

        console.log(steps)

        if (dropdown.id === 'box-design-dropdown') {
            setSuboptionData(dropdown.options.filter((opt) => opt.id === e.target.value)[0])
            suboptionData ? setHaveSuboption(true) : null
        }

        setUserChoices({
            ...userChoices,
            [e.target.name]: e.target.value,
            steps,
        })
    }

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
                    {haveSuboption ? (
                        <DynamicSuboption
                            suboptionData={suboptionData}
                            userChoices={userChoices}
                            setUserChoices={setUserChoices}
                            setCurrentSuboption={setCurrentSuboption}
                        />
                    ) : null}
                    <p>{description}</p>
                </div>
            </div>
            <ChoicesSection
                step={step}
                isActive={isActive}
                userChoices={userChoices}
                currentOption={currentOption}
                setCurrentOption={setCurrentOption}
                setHaveSuboption={setHaveSuboption}
                stepsList={stepsList}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                setStepsList={setStepsList}
                validateStep={validateStep}
                currentSuboption={currentSuboption}
                setUserChoices={setUserChoices}
            />
        </>
    )
}
