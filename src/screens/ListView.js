import React from 'react';

import {FlatList, Text, View,StyleSheet} from 'react-native';

const ListView = () => {
    const friends = [
        {name: "Friends #1", age: 23},
        {name: "Friends #2", age: 20},
        {name: "Friends #3", age: 15},
        {name: "Friends #4", age: 12},
        {name: "Friends #5", age: 42},
        {name: "Friends #6", age: 33},
        {name: "Friends #7", age: 29},
        {name: "Friends #8", age: 22},
        {name: "Friends #9", age: 19},
        {name: "Friends #10", age: 29},
    ]
    return (
        <FlatList
            keyExtractor={(friend)=> friend.name}
            data ={friends}
            renderItem={({item,index}) =>{
                return <Text style={index === friends.length -1? styles.lastItemStyle : styles.itemStyle}>{item.name}</Text>
            }}
        >
        </FlatList>
    );
};

const styles = StyleSheet.create({
    itemStyle:{
        padding: 10,
        borderWidth: 2,
        borderColor: 'blue',
        borderBottomWidth: 0,

    },lastItemStyle: {
        padding: 10,
        borderWidth: 2,
        borderColor: 'blue'
    }
})

export default ListView;


