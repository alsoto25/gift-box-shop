import React, { useState, useEffect } from 'react'
import styles from '/public/styles/pages/Shop.module.scss'

import PageWrapper from '../src/components/global/PageWrapper'
import ShopBreadcrumbs from '../src/components/shop/ShopBreadcrumbs'
import DynamicStep from '../src/components/shop/DynamicStep'
import Review from '../src/components/shop/Review'
import Checkout from '../src/components/shop/Checkout'

// Testing imports
import { stepsResponse } from '../test/shopStepsResponse'
import { useGetData, useShopReducer, ShopProvider } from '../src/utils'

const ShopContent = () => {
    const [stepsData, error] = useGetData('http://localhost:3001/shopSteps/getStepsInfo', {
        steps: [],
    })
    const [{ currentStep, userChoices, stepsList }, dispatch] = useShopReducer()

    useEffect(() => {
        if (stepsData.steps.length) {
            const initialStep = stepsData.steps.find((step) => step.isInitial)

            dispatch({
                type: 'SET_INITIAL_STATE',
                currentStep: initialStep.id,
                stepsList: [
                    {
                        id: initialStep.id,
                        title: initialStep.title,
                        isComplete: false,
                        options: initialStep.options,
                        isInitial: initialStep.isInitial,
                        isDefault: initialStep.isDefault,
                        isReview: initialStep.isReview,
                    },
                ],
            })
        }
    }, [stepsData.steps.length])

    useEffect(() => {
        if (userChoices.steps.length) {
            dispatch({
                type: 'SET_STEPS_LIST',
                data: stepsData.steps.reduce((acc, step) => {
                    const userStep = userChoices.steps.find((userStep) => userStep.id === step.id)
                    if (step.isInitial || step.isDefault || userStep) {
                        return [
                            ...acc,
                            {
                                id: step.id,
                                title: step.title,
                                isComplete: false,
                                amount: userStep && userStep.amount ? userStep.amount : -1,
                                options: step.options,
                                isInitial: step.isInitial,
                                isDefault: step.isDefault,
                                isReview: step.isReview,
                                isCheckout: false,
                            },
                        ]
                    }

                    return acc
                }, []),
            })
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
        <>
            {error && <div>Error!</div>}
            {!error && (
                <div className={styles['shop-container']}>
                    <div className={styles['left-column']}>
                        <ShopBreadcrumbs />
                        {stepsList.map((step) =>
                            step.isReview ? (
                                <Review
                                    isActive={currentStep === step.id}
                                    stepsData={stepsData}
                                    key={step.id}
                                />
                            ) : null,
                        )}
                    </div>
                    <div className={styles['right-column']}>
                        {stepsList
                            ? stepsList.map((step) =>
                                  step.isReview ? null : (
                                      <DynamicStep
                                          key={step.id + 2}
                                          step={step}
                                          isActive={currentStep === step.id}
                                          validateStep={validateStep}
                                      />
                                  ),
                              )
                            : null}

                        <Checkout isActive={currentStep === 'checkout'} />
                    </div>
                </div>
            )}
        </>
    )
}

export default function Shop() {
    return (
        <PageWrapper>
            <ShopProvider>
                <ShopContent />
            </ShopProvider>
        </PageWrapper>
    )
}
