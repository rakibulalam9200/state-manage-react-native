import React, {useState} from 'react';

import {Text, View, StyleSheet,TextInput} from 'react-native';
//import {TextInput} from "react-native-web";

const TextScreen = () => {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    return (
        <View>
            <Text style ={styles.textStyle}>
                This is Text Screen
            </Text>
            <Text>
                Enter Your Name:
            </Text>
            <TextInput
                style={styles.inputStyle}
                autoCapitalize = "none"
                autoCorrect = {false}
                value = {name}
                onChangeText ={(newName)=>setName(newName)}
            />


            <Text>
                Enter Your Password:
            </Text>
            <TextInput
                secureTextEntry={true}
                style={styles.inputStyle}
                autoCapitalize = "none"
                autoCorrect = {false}
                value = {password}
                onChangeText ={(newPassword)=>setPassword(newPassword)}
            />

            <Text>My name is: {name}</Text>
            {
                password.length > 5 ? <Text></Text> : <Text>Password Must be Longer than 5 Character</Text>
            }

        </View>

    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 20,
        textAlign: "center"
    },
    inputStyle:{
        margin: 15,
        borderColor:'black',
        borderWidth: 1,
        paddingLeft: 5,
        paddingRight: 5,
    }
})

export default TextScreen;