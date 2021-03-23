import React, { useState, useEffect } from 'react'
import PageWrapper from '../src/components/global/PageWrapper'
import ShopMenu from '../src/components/shop/ShopMenu'
import styles from '../styles/pages/Shop.module.scss'
import useChoice from '../hooks/useChoice'

// Testing imports
import { stepsResponse } from '../test/shopStepsResponse'

export default function Shop() {
    const [currentStep, setCurrentStep] = useState('')
    const [stepsData, setStepsData] = useState({})
    const [userChoices, setUserChoices] = useState({})
    const [stepsList, setStepsList] = useState([])
    const [loading, setLoading] = useState(true)

    const mainComponent=()=>{
        switch (currentStep) {
            case stepsResponse.steps[0].id:
                return <BoxTypeChoice/>
            case stepsResponse.steps[1].id:
                return <PastryChoice/>
            case stepsResponse.steps[2].id:
                return <LiquorChoice/>
            case stepsResponse.steps[3].id:
                return <HomemadeSoapChoice/>
            case stepsResponse.steps[4].id:
                return <SkinProductsChoice/>
            case stepsResponse.steps[5].id:
                return <ExtrasChoice/>
            case stepsResponse.steps[6].id:
                return <ReviewChoice/>
            default:
                return "Sin datos";
          }
    }

    const [boxType,setBoxType,BoxTypeChoice]=useChoice(
        currentStep,
        stepsResponse.steps[0].options[0].title,
        stepsResponse.steps[0].options[0].dropdowns,
        stepsResponse.steps[0].options[0].description
        );

    const [pastry,setPastry,PastryChoice]=useChoice(
        currentStep,
        stepsResponse.steps[1].options[0].title,
        stepsResponse.steps[1].options[0].dropdowns,
        stepsResponse.steps[1].options[0].description
        );

    const [liquor,setLiquor,LiquorChoice]=useChoice(
        currentStep,
        stepsResponse.steps[2].options[0].title,
        stepsResponse.steps[2].options[0].dropdowns,
        stepsResponse.steps[2].options[0].description
        );

    const [homemadeSoap,setHomemadeSoap,HomemadeSoapChoice]=useChoice(
        currentStep,
        stepsResponse.steps[3].options[0].title,
        stepsResponse.steps[3].options[0].dropdowns,
        stepsResponse.steps[3].options[0].description
        );

    const [skinProducts,setSkinProducts,SkinProductsChoice]=useChoice(
        currentStep,
        stepsResponse.steps[4].options[0].title,
        stepsResponse.steps[4].options[0].dropdowns,
        stepsResponse.steps[4].options[0].description
        );

    const [extras,setExtras,ExtrasChoice]=useChoice(
        currentStep,
        stepsResponse.steps[5].options[0].title,
        stepsResponse.steps[5].options[0].dropdowns,
        stepsResponse.steps[5].options[0].description
        );

    const [review,setReview,ReviewChoice]=useChoice(
        currentStep,
        stepsResponse.steps[6].title
        );

        
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
                        {mainComponent()}
                    </div>
                </div>
            )}
        </PageWrapper>
    )
}
