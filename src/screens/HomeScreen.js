import React from 'react';

import {Text, View, StyleSheet, Button,TouchableOpacity} from 'react-native';

//import {TouchableOpacity} from "react-native-web";

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.textStyle}>
                This is Home screen
            </Text>
            <Button
                onPress={()=>navigation.navigate('Component')}
                title="Go to Component Demo">
            </Button>

            <Button
                onPress={()=>navigation.navigate('ListView')}
                title={"Go to ListView Demo"}
            />

            <Button
                onPress={()=>navigation.navigate('Image')}
                title={"Go to ImageScreen Demo"}
            />
            <Button
                onPress={()=>navigation.navigate('Counter')}
                title={"Go to CounterScreen Demo"}
            />
            <Button
                onPress={()=>navigation.navigate('Color')}
                title={"Go to ColorScreen Demo"}
            />

            <Button
                onPress={()=>navigation.navigate('SquareColor')}
                title={"Go to Square Color Demo"}
            />
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
        fontSize: 30
    },
    listViewTouch:{
        fontSize: 25,
        textAlign: "center"
    }
})

export default HomeScreen;
