import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

const BoxModelScreen = () => {
    return (
        <View>
            <View style={styles.viewStyle}>
                <Text style ={styles.textStyle}>
                    This is Box Model Screen
                </Text>
                <Text style={styles.boxStyle}>Box</Text>
            </View>
            <Text style ={styles.textStyle}>
                This is FlexBox Model Screen
            </Text>
            <View style={styles.flexBoxStyle}>
                <Text style={{...styles.flexTextStyle,flex:1}}>Child #1</Text>
                <Text style={{...styles.flexTextStyle,flex:1,position:'absolute',top: 0,bottom: 0, left: 0,right: 0}}>Child #2</Text>
                <Text style={{...styles.flexTextStyle,flex:1}}>Child #3</Text>
            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 20,
        textAlign:'center'
    },
    viewStyle:{
        borderWidth: 1,
        borderColor: 'black',
        margin: 5
    },
    boxStyle:{
        borderWidth: 1,
        borderColor: 'blue',
        marginHorizontal: 5,
        marginVertical: 10,
        textAlign: "center"
    },
    flexBoxStyle:{
        borderWidth: 1,
        borderColor: 'blue',
        margin: 5,
        height: 200
    },
    flexTextStyle:{
        borderWidth: 3,
        borderColor: 'green'
    }
})

export default BoxModelScreen;