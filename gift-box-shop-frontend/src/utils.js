import React, { useState, useEffect, createContext, useReducer, useContext } from 'react'
import axios from 'axios'

export const useGetData = (url, startState = {}) => {
    const [data, setData] = useState(startState)
    const [error, setError] = useState(false)

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                if (res.request.statusText == 'OK') {
                    setData(res.data[Object.keys(res.data)[0]])
                } else if (res.request.statusText == 'INTERNAL_SERVER_ERROR') {
                    setError(true)
                }
            })
            .catch(() => {
                setError(true)
            })
    }, [])

    return [data, error]
}

// Shop Context
const ShopContext = createContext()
export const ShopProvider = (props) => {
    const [cache, dispatch] = useReducer(ShopReducer, {
        userChoices: { steps: [] },
        stepsList: [],
        currentStep: '',
    })

    return <ShopContext.Provider value={[cache, dispatch]} {...props} />
}

const ShopReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_STEP': {
            return { ...state, currentStep: action.data }
        }
        case 'SET_USER_CHOICES': {
            return { ...state, userChoices: action.data }
        }
        case 'SET_STEPS_LIST': {
            return { ...state, stepsList: action.data }
        }
        case 'UPDATE_USER_CHOICES': {
            return { ...state, userChoices: { ...state.userChoices, [action.choice]: action.data } }
        }
        case 'SET_INITIAL_STATE': {
            return {
                ...state,
                currentStep: action.currentStep,
                userChoices: { steps: [] },
                stepsList: action.stepsList,
            }
        }
        case 'UPDATE_STEPS': {
            return {
                ...state,
                currentStep: action.currentStep,
                stepsList: action.stepsList,
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export const useShopReducer = () => {
    const context = useContext(ShopContext)
    if (!context) {
        throw new Error('useShopReducer must be used within a ShopProvider')
    }
    return context
}
