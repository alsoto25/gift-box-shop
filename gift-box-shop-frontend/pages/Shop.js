import React,{useState,useEffect} from 'react';
import Head from 'next/head'
import PageWrapper from '../src/components/PageWrapper'
import ShopMenu from '../src/components/ShopMenu';

export default function Shop() {

    const [stepsList,setStepsList]=useState([]);  

    useEffect(()=>{

        //Fetch/Axios Request API
        setStepsList(
            [
                {title:'1. Box Type',check:false},
                {title:'2. Pastry',check:false},
                {title:'3. Skin Products',check:true},
                {title:'4. Extras',check:false},
                {title:'5. Review',check:false}
            ]
        );

    },[])

    return (
        <PageWrapper>
            <ShopMenu stepsList={stepsList}></ShopMenu>
        </PageWrapper>
    );
}
