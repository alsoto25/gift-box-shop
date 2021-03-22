import React, { useState, useEffect } from 'react'
import PageWrapper from '../src/components/global/PageWrapper'
import ShopMenu from '../src/components/shop/ShopMenu'

export default function Shop() {
    const [stepsData, setStepsData] = useState({})
    const [userChoices, setUserChoices] = useState({})
    const [stepsList, setStepsList] = useState([])
    const [currentStep, setCurrentStep] = useState('1')

    useEffect(() => {
        //Fetch/Axios Request API
        setStepsList([
            { id: '1', title: 'Box Type' },
            { id: '2', title: 'Pastry' },
            { id: '3', title: 'Skin Products' },
            { id: '4', title: 'Extras' },
            { id: '5', title: 'Review' },
        ])
    }, [])

    return (
        <PageWrapper>
            <ShopMenu
                stepsList={stepsList}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
            ></ShopMenu>
        </PageWrapper>
    )
}
