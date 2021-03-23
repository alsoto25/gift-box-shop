import React, { useState, useEffect } from 'react'
import PageWrapper from '../src/components/global/PageWrapper'
import ShopMenu from '../src/components/shop/ShopMenu'
import styles from '../styles/pages/Shop.module.scss'
import MainComponent from '../src/components/shop/MainComponent'

// Testing imports
import { stepsResponse } from '../test/shopStepsResponse'
import { loadComponents } from 'next/dist/next-server/server/load-components'

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
            setStepsData(stepsResponse);
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

    const currentMainComponent=(step)=>{
        if (currentStep===step.id){
            return <MainComponent step={step} setCurrentStepData={setCurrentStepData} key={step.id}/>
        }
    };

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
                        {stepsData?
                            stepsData.steps.map((step)=>(
                                //Load component by currentStep
                                currentMainComponent(step)
                            ))
                            :"Hi Stranger! we do not have data!"
                        }
                    </div>
                </div>
            )}
        </PageWrapper>
    )
}
