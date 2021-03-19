import styles from '../../styles/components/ShopMenu.module.scss';

export default function ShopMenu({stepsList}) {
    return (
        <div className={styles.containerShopMenu}>
            {stepsList.map(step=>(
                <p className={step.check? styles.selectedOption:''} key={step.title.split('.')[0]}>{step.title}</p> 
            ))}
        </div>
    );
}