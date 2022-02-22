import React from 'react';

import {Button, Text, View} from 'react-native';

const ColorCounter = ({color,onChangeIncrease,onChangeDecrease}) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`}  onPress={()=> onChangeIncrease()}/>
            <Button title={`Decrease ${color}`} onPress={()=> onChangeDecrease()}/>

        </View>
    );
};

export default ColorCounter;
