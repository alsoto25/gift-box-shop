import React, { useState, useEffect } from 'react'
import styles from '../styles/pages/Shop.module.scss'

import PageWrapper from '../src/components/global/PageWrapper'
import ShopBreadcrumbs from '../src/components/shop/ShopBreadcrumbs'
import DynamicStep from '../src/components/shop/DynamicStep'
import Review from '../src/components/shop/Review'

// Testing imports
import { stepsResponse } from '../test/shopStepsResponse'

export default function Shop() {
    const [currentStep, setCurrentStep] = useState('')
    const [stepsData, setStepsData] = useState({ steps: [] })
    const [userChoices, setUserChoices] = useState({ steps: [] })
    const [stepsList, setStepsList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //Fetch/Axios Request API
        setTimeout(function () {
            setStepsData(stepsResponse)
        }, 300)
    }, [])

    useEffect(() => {
        if (stepsData.steps.length) {
            const initialStep = stepsData.steps.find((step) => step.isInitial)

            setLoading(false)
            setCurrentStep(initialStep.id)
            setStepsList([
                {
                    id: initialStep.id,
                    title: initialStep.title,
                    isComplete: false,
                },
            ])
        }
    }, [stepsData.steps.length])

    useEffect(() => {
        if (userChoices.steps.length) {
            setStepsList(
                stepsData.steps.reduce((acc, step) => {
                    const userStep = userChoices.steps.find((userStep) => userStep.id === step.id)
                    if (step.isInitial || step.isDefault || userStep) {
                        return [
                            ...acc,
                            {
                                id: step.id,
                                title: step.title,
                                isComplete: false,
                                amount: userStep && userStep.amount ? userStep.amount : -1,
                            },
                        ]
                    }

                    return acc
                }, []),
            )
        }
    }, [stepsData.steps.length, userChoices.steps.length])

    function validateStep(stepID) {
        let dropdownsToCheck = []
        stepsData.steps.map((step) => {
            if (step.id === stepID) {
                step.options.map((option) => {
                    option.dropdowns.map((dropdown) => {
                        dropdownsToCheck.push(dropdown.id)
                    })
                })
            }
        })
        let dropdowns = dropdownsToCheck.filter((dropdown) => userChoices[dropdown])
        if (dropdowns.length === dropdownsToCheck.length) return true
        return false
    }

    return (
        <PageWrapper>
            {!loading && (
                <div className={styles['shop-container']}>
                    <div className={styles['left-column']}>
                        <ShopBreadcrumbs
                            stepsList={stepsList}
                            currentStep={currentStep}
                            setCurrentStep={setCurrentStep}
                        />
                        {stepsData.steps.map((step) =>
                            step.isReview ? (
                                <Review
                                    isActive={currentStep === step.id}
                                    userChoices={userChoices}
                                    key={step.id}
                                />
                            ) : null,
                        )}
                    </div>
                    <div className={styles['right-column']}>
                        {stepsData
                            ? stepsData.steps.map((step) =>
                                  step.isReview ? null : (
                                      <DynamicStep
                                          key={step.id + 2}
                                          step={step}
                                          isActive={currentStep === step.id}
                                          userChoices={userChoices}
                                          setUserChoices={setUserChoices}
                                          stepsList={stepsList}
                                          currentStep={currentStep}
                                          setCurrentStep={setCurrentStep}
                                          setStepsList={setStepsList}
                                          validateStep={validateStep}
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
