import styles from '../../../styles/components/shop/ShopBreadcrumbs.module.scss'
import Swal from 'sweetalert2'
import { useShopReducer } from '../../utils'

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

export default function ShopBreadcrumbs() {
    const [{ stepsList, currentStep }, dispatch] = useShopReducer()

    function handleClick(option, index) {
        stepsList.find((step, i) => step.id === currentStep && index <= i)
            ? dispatch({ type: 'SET_CURRENT_STEP', data: option })
            : Toast.fire({
                  icon: 'error',
                  title: 'Please Click on Continue',
              })
    }

    return (
        <div className={styles['container-shop-menu']}>
            {stepsList.map((step, index) => (
                <button
                    className={step.id === currentStep ? styles['selected-option'] : ''}
                    key={step.id}
                    onClick={() => {
                        handleClick(step.id, index)
                    }}
                >
                    {index + 1}. {step.title}
                </button>
            ))}
        </div>
    )
}
