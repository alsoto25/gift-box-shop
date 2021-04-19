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
//Falta eliminar viejo suboption cuando elige otro !!!
function DynamicSuboption({ suboptionData, setCurrentSuboption }) {
    const [currentFileName, setCurrentFileName] = useState('')
    const { suboptions } = suboptionData

    function handleChange(e) {
        if (suboptionData.fileUploader) {
            setCurrentFileName(e.target.value)
        }
        setCurrentSuboption({ [e.target.name]: e.target.value })
    }
    return (
        <>
            {!suboptions && suboptionData.fileUploader ? (
                <label for="file-upload" className={styles['upload']}>
                    <input
                        type="file"
                        id="file-upload"
                        name={suboptionData.id}
                        onChange={handleChange}
                    />
                    <img src="data:image/png;base64,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AIAGKQAA0CAFAAAapAAAQIMUAABokAIAAA1SAACgQQoAADRIAQCABikAANAgBQAAGqQAAECDFAAAaJACAAANUgAAoEEKAAA0SAEAgAYpAADQIAUAABqkAABAgxQAAGiQAgAADVIAAKBBCgAANEgBAIAGKQAA0CAFAAAapAAAQIMUAABokAIAAA1SAACgQQoAADRIAQCABikAANAgBQAAGqQAAECDFAAAaJACAAANUgAAoEEKAAA0SAEAgAYpAADQIAUAABqkAABAgxQAAGiQAgAADVIAAKBBCgAANEgBAIAGKQAA0CAFAAAapAAAQIMUAABokAIAAA1SAACgQQoAADRIAQCABikAANAgBQAAGqQAAECDFAAAaJACAAANUgAAoEEKAAA0SAEAgAYpAADQIAUAABqkAABAgxQAAGiQAgAADVIAAKBBCgAANEgBAIAGKQAA0CAFAAAapAAAQIMUAABokAIAAA1SAACgQQoAADRIAQCABikAANAgBQAAGqQAAECDFAAAaJACAAANUgAAoEEKAAA0SAEAgAYpAADQIAUAABqkAABAgxQAAGiQAgAADVIAAKBBCgAANEgBAIAGKQAA0CAFAAAapAAAQIMUAABokAIAAA1SAACgQQoAADRIAQCABikAANAgBQAAGqQAAECDFAAAaJACAAANUgAAoEEKAAA0SAEAgAYpAADQIAUAABqkAABAgxQAAGiQAgAADVIAAKBBCgAANEgBAIAGKQAA0CAFAAAapAAAQIMUAABokAIAAA1SAACgQQoAADRIAQCABikAANAgBQAAGqQAAECDFAAAaJACACzVEUlekOQ9SS5I8vUkX0ry4SS/neTUJNurXR3QUwCgDdvTnb2/ne4s/lK6s/mCdGf1C9Kd3Zt2bJK/yMY2hR1Jfj3JoVt5QWBLFACYt0PTnbU7srH1+hfpzvIN256uVeza4Ausz1VJHr+F4YDNUwBgvh6f7owdumZ3pTvTD9jXC9wnyV9v4gXW544kL97yqMBQCgDM04vTna1bWbt/ne6M360Dk1y4xRdYn3+7lLGBjVIAYH6eneWt3wvTnfV3c84SX+TOJLcmOXE58wMboADAvJyU7ixd5ho+564vcsqSX6DP55JsW9adAPZKAYD52Jbk8ymzjk/uX2QtyScLvcidSZ6x1FsC7IkCAPPxjJRbx59Md/bnmIIv0r8Q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" />
                    {'Upload Your file'}
                    {currentFileName !== '' ? (
                        <div>
                            <span>Current File: </span>
                            <p>{currentFileName}</p>
                        </div>
                    ) : null}
                </label>
            ) : (
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
            )}
        </>
    )
}

function ChoicesSection({
    step,
    isActive,
    userChoices,
    setUserChoices,
    currentOption,
    setCurrentOption,
    setHaveSuboption,
    stepsList,
    currentStep,
    setCurrentStep,
    setStepsList,
    validateStep,
    currentSuboption,
    tempSuboption,
    setTempSuboption,
}) {
    //Falta validar subOptions y dependencias
    function handleClick() {
        console.clear()
        stepsList.map((step, index) => {
            if (step.id === currentStep) {
                if (index + 1 <= stepsList.length - 1) {
                    if (validateStep(currentStep)) {
                        let newStepsList = [...stepsList]
                        newStepsList[index].isComplete = true
                        setStepsList(newStepsList)
                        setCurrentStep(stepsList[index + 1].id)
                        window.scrollTo(0, 0)

                        console.log(userChoices)
                        console.log(tempSuboption)

                        if (tempSuboption !== {}) {
                            for (var tempKey in tempSuboption) {
                                let copy = { ...userChoices }
                                console.log(copy)
                                delete copy[tempKey]
                                console.log(copy)
                                setUserChoices(copy)
                                break
                            }
                        }

                        for (var currentKey in currentSuboption) {
                            setUserChoices({
                                ...userChoices,
                                [currentKey]: currentSuboption[currentKey],
                            })
                            setTempSuboption({ ...currentSuboption })
                            break
                        }
                        console.log(userChoices)
                    } else {
                        Toast.fire({
                            icon: 'error',
                            title: 'Seleccione TODOS los campos para continuar',
                        })
                    }
                } else {
                    Toast.fire({
                        icon: 'error',
                        title: 'Seleccione los campos para continuar',
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
                            //console.log(dropdown)
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
    const [tempSuboption, setTempSuboption] = useState({})
    const { title, dropdowns, description } = step.options[currentOption]
    let [haveSuboption, setHaveSuboption] = useState(false)
    let [suboptionData, setSuboptionData] = useState({})

    const handleChange = (e, dropdown) => {
        const steps =
            dropdown.id === 'box-contents-dropdown'
                ? dropdown.options.find((opt) => opt.id === e.target.value).steps
                : []

        if (dropdown.id === 'box-design-dropdown' || dropdown.id === 'extra-dropdown') {
            setSuboptionData(dropdown.options.filter((opt) => opt.id === e.target.value)[0])
            suboptionData ? setHaveSuboption(true) : setHaveSuboption(false)
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
                            setCurrentSuboption={setCurrentSuboption}
                        />
                    ) : null}
                    <p>{description}</p>
                </div>
            </div>
            <ChoicesSection
                step={step}
                isActive={isActive}
                stepsList={stepsList}
                setStepsList={setStepsList}
                validateStep={validateStep}
                userChoices={userChoices}
                setUserChoices={setUserChoices}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                currentOption={currentOption}
                setHaveSuboption={setHaveSuboption}
                currentSuboption={currentSuboption}
                setCurrentOption={setCurrentOption}
                tempSuboption={tempSuboption}
                setTempSuboption={setTempSuboption}
            />
        </>
    )
}
