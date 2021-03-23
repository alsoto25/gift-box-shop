import React, { useState, useEffect } from 'react'
import PageWrapper from '../src/components/global/PageWrapper'
import ShopMenu from '../src/components/shop/ShopMenu'

// Testing imports
import { stepsResponse } from '../test/shopStepsResponse'

export default function Shop() {
    const [stepsData, setStepsData] = useState({})
    const [userChoices, setUserChoices] = useState({})
    const [stepsList, setStepsList] = useState([])
    const [currentStep, setCurrentStep] = useState(0)

    useEffect(() => {
        //Fetch/Axios Request API
        setTimeout(function () {
            setStepsData(stepsResponse)
        }, 300)
    }, [])

    useEffect(() => {
        stepsData.steps &&
            setStepsList(
                stepsData.steps.map((step) => ({
                    id: step.id,
                    step: step.title,
                })),
            )
    }, [stepsData])

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
