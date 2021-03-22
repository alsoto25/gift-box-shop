import styles from '../../styles/components/ShopMenu.module.scss'

export default function ShopMenu({ stepsList, currentStep, setCurrentStep }) {
    function handleClick(option) {
        setCurrentStep(option)
    }

    return (
        <div className={styles.containerShopMenu}>
            {stepsList.map((step) => (
                <button
                    className={step.id === currentStep ? styles.selectedOption : ''}
                    key={step.id}
                    onClick={() => {
                        handleClick(step.id)
                    }}
                >
                    {step.id}. {step.title}
                </button>
            ))}
        </div>
    )
}
