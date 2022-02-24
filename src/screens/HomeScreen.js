import React from 'react';

import {Text, View, StyleSheet, Button,TouchableOpacity} from 'react-native';

//import {TouchableOpacity} from "react-native-web";

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.textStyle}>
                This is Home screen
            </Text>
            <View style ={styles.buttonStyle}>
                <Button
                    onPress={()=>navigation.navigate('Component')}
                    title="Go to Component Demo">
                </Button>
            </View>

            <View style ={styles.buttonStyle}>
                <Button style ={styles.buttonStyle}
                        onPress={()=>navigation.navigate('ListView')}
                        title={"Go to ListView Demo"}
                />
            </View>

            <View style ={styles.buttonStyle}>
                <Button style ={styles.buttonStyle}
                        onPress={()=>navigation.navigate('Image')}
                        title={"Go to ImageScreen Demo"}
                />
            </View>

            <View style ={styles.buttonStyle}>
                <Button style ={styles.buttonStyle}
                        onPress={()=>navigation.navigate('Counter')}
                        title={"Go to CounterScreen Demo"}
                />
            </View>

            <View style ={styles.buttonStyle}>
                <Button style ={styles.buttonStyle}
                        onPress={()=>navigation.navigate('Color')}
                        title={"Go to ColorScreen Demo"}
                />
            </View>


            <View style ={styles.buttonStyle}>
                <Button style ={styles.buttonStyle}
                        onPress={()=>navigation.navigate('SquareColor')}
                        title={"Go to Square Color Demo"}
                />
            </View>

            <View style ={styles.buttonStyle}>
                <Button style ={styles.buttonStyle}
                        onPress={()=>navigation.navigate('Text')}
                        title={"Go to Text Demo"}
                />
            </View>

            <View style ={styles.buttonStyle}>
                <Button style ={styles.buttonStyle}
                        onPress={()=>navigation.navigate('BoxModel')}
                        title={"Go to Box Model Demo"}
                />
            </View>

            <View style ={styles.buttonStyle}>
                <Button style ={styles.buttonStyle}
                        onPress={()=>navigation.navigate('BoxPosition')}
                        title={"Go to Box Positioning Demo"}
                />
            </View>

            {/*<TouchableOpacity onPress={()=> navigation.navigate('ListView')}>*/}
            {/*    <Text style={styles.listViewTouch}>Go to ListView Demo</Text>*/}
            {/*    <Text style={styles.listViewTouch}>Go to ListView Demo</Text>*/}
            {/*    <Text style={styles.listViewTouch}>Go to ListView Demo</Text>*/}
            {/*</TouchableOpacity>*/}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30,
        textAlign:'center'
    },
    listViewTouch:{
        fontSize: 25,
        textAlign: "center"
    },
    buttonStyle:{
        marginBottom: 10
    }
})

export default HomeScreen;
