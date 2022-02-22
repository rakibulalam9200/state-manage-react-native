import React, {useReducer, useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';
import ColorCounter from "../Components/ColorCounter";


const inititalState = {};
const reducer = (state,action) =>{

}
const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer,{red: 0, green: 0, blue: 0});
    return (
        <View>
            <Text style={styles.textStyles}>This is Square Color Screen</Text>
            <ColorCounter color="Red"
                          //onChangeIncrease={()=> setColor('red',payloads)}
                          // onChangeDecrease={()=> setColor('red',-1 * payloads)}
            />
            <ColorCounter color="Green"
                         // onChangeIncrease={()=> setColor('green',payloads)}
                         // onChangeDecrease={()=> setColor('green', -1 * payloads)}
                />
            <ColorCounter color="Blue"
                         // onChangeIncrease={()=> setColor('blue',payloads)}
                         // onChangeDecrease={()=> setColor('blue',-1 * payloads)}
                />

            {/*<View style={{height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}></View>*/}
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
