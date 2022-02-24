import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

const BoxPositioning = () => {
    return (
        <View>
            <Text style ={styles.textStyle}>
                The is Box Positioning
            </Text>

            <View style={styles.viewStyle}>
                <View style={{...styles.boxStyle,backgroundColor:'green'}}></View>
                <View style={{...styles.boxStyle,backgroundColor:'yellow'}}></View>
            </View>
            <View style={{...styles.boxStyle,backgroundColor:'blue',alignSelf:'center'}}></View>
        </View>


    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 20,
        textAlign:'center'
    },
    viewStyle:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    boxStyle:{
        height:100,
        width: 100,
        borderWidth: 1,
        marginHorizontal:10
    }
})

export default BoxPositioning;