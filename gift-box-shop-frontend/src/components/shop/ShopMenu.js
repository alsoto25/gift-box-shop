import styles from '../../../styles/components/shop/ShopMenu.module.scss'

export default function ShopMenu({ stepsList, currentStep, setCurrentStep }) {
    function handleClick(option) {
        setCurrentStep(option)
    }

    return (
        <div className={styles['container-shop-menu']}>
            {stepsList.map((step, index) => (
                <button
                    className={step.id === currentStep ? styles['selected-option'] : ''}
                    key={step.id}
                    onClick={() => {
                        handleClick(step.id)
                    }}
                >
                    {index + 1}. {step.title}
                </button>
            ))}
        </div>
    )
}
