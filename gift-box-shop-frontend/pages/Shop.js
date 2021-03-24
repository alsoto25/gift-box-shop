import React, { useState, useEffect } from 'react'
import styles from '../styles/pages/Shop.module.scss'

import PageWrapper from '../src/components/global/PageWrapper'
import ShopMenu from '../src/components/shop/ShopMenu'
import DynamicStep from '../src/components/shop/DynamicStep'
import Review from '../src/components/shop/Review'

// Testing imports
import { stepsResponse } from '../test/shopStepsResponse'

export default function Shop() {
    const [currentStep, setCurrentStep] = useState('')
    const [currentStepData, setCurrentStepData] = useState({})
    const [stepsData, setStepsData] = useState({})
    const [userChoices, setUserChoices] = useState({})
    const [stepsList, setStepsList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //Fetch/Axios Request API
        setTimeout(function () {
            setStepsData(stepsResponse)
        }, 300)
    }, [])

    useEffect(() => {
        if (stepsData.steps) {
            const initialStep = stepsData.steps.find((step) => step.isInitial)

            setLoading(false)
            setCurrentStep(initialStep.id)
            // setStepsList([
            //     {
            //         id: initialStep.id,
            //         title: initialStep.title,
            //     },
            // ])
            setStepsList(
                stepsData.steps.map((step) => ({
                    id: step.id,
                    title: step.title,
                    isUnlocked: false,
                })),
            )
        }
    }, [stepsData])

    return (
        <PageWrapper>
            {!loading && (
                <div className={styles['shop-container']}>
                    <div className={styles['left-column']}>
                        <ShopMenu
                            stepsList={stepsList}
                            currentStep={currentStep}
                            setCurrentStep={setCurrentStep}
                        />
                    </div>
                    <div className={styles['right-column']}>
                        {stepsData
                            ? stepsData.steps.map((step) =>
                                  step.isReview ? (
                                      <Review
                                          isActive={currentStep === step.id}
                                          userChoices={userChoices}
                                          key={step.id}
                                      />
                                  ) : (
                                      <DynamicStep
                                          step={step}
                                          isActive={currentStep === step.id}
                                          setCurrentStepData={setCurrentStepData}
                                          key={step.id}
                                      />
                                  ),
                              )
                            : 'Hi Stranger! we do not have data!'}
                    </div>
                </div>
            )}
        </PageWrapper>
    )
}
