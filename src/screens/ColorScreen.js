import React, {useState} from 'react';

import {Button, FlatList, Text, View} from 'react-native';

const ColorScreen = () => {
    const [colors,setColors] = useState([]);
    console.log(colors)
    return (
        <View>
            <Button  title="Add a Color"
                     onPress={()=>{
                         setColors([...colors,randomColor()])
                     }}
            />
            <FlatList
               style = {{width: '100%'}}
                horizontal={false}
                numColumns={3}
                data={colors}
               keyExtractor={item => item}
                renderItem={({index})=>{
                    return <View key={index}   style = {{height: 100,width:'31.5%', backgroundColor: randomColor(), margin:'1%'}}></View>
                }}
            >
            </FlatList>

        </View>
    );
};

const randomColor =() =>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

export default ColorScreen;
