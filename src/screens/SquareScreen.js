import React, {useReducer, useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import ColorCounter from "../Components/ColorCounter";


const COLOR_INCREMENT = 15;
const reducer = (state,action) =>{
    switch(action.type){
        case 'change_red':
            return  state.red + action.payload > 255 || state.red + action.payload < 0 ? state : {...state, red: state.red + action.payload};
        case 'change_green':
            return  state.green + action.payload > 255 || state.green + action.payload < 0 ? state : {...state, green: state.green + action.payload}
        case 'change_blue':
            return  state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : {...state, blue: state.blue + action.payload}
        default:
        return state;

    }
}
const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer,{red: 0, green: 0, blue: 0});
    const {red,green,blue} = state;
    return (
        <View>
            <Text style={styles.textStyles}>This is Square Color Screen</Text>
            <ColorCounter color="Red"
                          onChangeIncrease={()=> dispatch({type:'change_red',payload: COLOR_INCREMENT})}
                          onChangeDecrease={()=> dispatch({type:'change_red',payload: -1 * COLOR_INCREMENT})}
            />
            <ColorCounter color="Green"
                          onChangeIncrease={()=> dispatch({type:'change_green',payload: COLOR_INCREMENT})}
                          onChangeDecrease={()=> dispatch({type:'change_green',payload: -1 * COLOR_INCREMENT})}
                />
            <ColorCounter color="Blue"
                         onChangeIncrease={()=> dispatch({type:'change_blue',payload: COLOR_INCREMENT})}
                         onChangeDecrease={()=> dispatch({type:'change_blue',payload: -1 * COLOR_INCREMENT})}
                />

                <View style={{height: 150, width: 150, marginTop:20,backgroundColor: `rgb(${red},${green},${blue})`}}></View>

        </View>
    );
};

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 30,
        textAlign: 'center'
    }
})
export default SquareScreen;
