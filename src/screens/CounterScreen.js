import React, {useReducer, useState} from 'react';

import {Text, View,StyleSheet,Button} from 'react-native';

const INIT_COUNT = 1;
const reducer = (state,action) =>{
    switch (action.type){
        case 'increment':
            return {...state, count: state.count + action.payload}
        case 'decrement':
            return state.count <= 0 ? state : {...state, count: state.count - action.payload}
        default:
            return state;
    }
}
const CounterScreen = () => {

    const [state,dispatch] = useReducer(reducer,{count:0})
    //const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button
            title = "Increase"
            onPress={
                ()=> {
                    //setCounter(counter + 1);
                    dispatch({type:'increment', payload:INIT_COUNT})
                }
            }/>

            <Button
                title = "Decrease"
                onPress={
                    ()=> {
                        //setCounter(counter - 1);
                        dispatch({type:'decrement',payload:  INIT_COUNT})
                    }
                }/>
            <Text>Current Count: {state.count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({})

export default CounterScreen;
