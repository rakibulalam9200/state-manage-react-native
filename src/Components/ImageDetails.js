import React, {useState} from 'react';

import {Text, View, Image} from 'react-native';

const ImageDetails = ({title,imageSource,score}) => {
    return (
        <View style={{display: 'flex',alignItems:'center',paddingTop: 20}}>
            <Image source={imageSource}/>
            <Text>{title}</Text>
            <Text>Image score - {score}</Text>
        </View>
    );
};

export default ImageDetails;
