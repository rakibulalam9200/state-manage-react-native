import React from 'react';

import {Text, View,StyleSheet} from 'react-native';
import ImageDetails from "../Components/ImageDetails";

const ImageScreen = () => {
    return (
        <View>
            <Text style={styles.textStyles}>
                This is Image screen
            </Text>
                <ImageDetails title="Forest" imageSource= {require('../../assets/forest.jpg')} score = {9}/>
                <ImageDetails title="Beach" imageSource= {require('../../assets/beach.jpg')} score = {7}/>
                <ImageDetails title="Mountain" imageSource= {require('../../assets/mountain.jpg')} score = {6}/>
        </View>

    );
};

const styles = StyleSheet.create({
textStyles: {
    fontSize: 30,
    textAlign: 'center'
}
})
export default ImageScreen;
