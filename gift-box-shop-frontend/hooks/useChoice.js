import React,{useState} from 'react';
import styles from '../styles/components/shop/MainComponent.module.scss';

const useChoice = (currentStep,title,dropdowns,textContent='Sin texto') => {

    const [stepSeleted,setStepSeleted]=useState(currentStep);

    const Choice=()=>( 
        <div className={styles.containerMain}>
            <img src={'https://ohnatural.co.nz/wp-content/uploads/2019/12/gift-packaging-2.jpg'}/>
            <div>
                <h1>{title}</h1>
                {dropdowns?
                    dropdowns.map((dropdown,i)=>(
                        <select key={i}>
                                {dropdown.options.map((option,j)=>(
                                    <option key={j}>{option.title}</option>
                                ))}
                        </select>
                        ))
                    :null
                }
                <p>{textContent}</p>
            </div>
        </div>
     );

     return [stepSeleted,setStepSeleted,Choice];
}
 
export default useChoice;