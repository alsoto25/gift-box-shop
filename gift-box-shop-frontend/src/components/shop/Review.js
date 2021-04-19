import styles from '../../../styles/components/shop/Review.module.scss'

export default function Review({ isActive, userChoices }) {
    console.log(userChoices)
    return (
        <div
            className={`${styles['container-main']} ${
                isActive ? styles['container-main-active'] : ''
            }`}
        ></div>
    )
}
