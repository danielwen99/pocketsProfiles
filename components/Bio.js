import React from 'react';
import {Text,StyleSheet, View} from 'react-native';

export default class Bio extends React.Component{
    
    render(){
        return (
            <View style = {style.ViewS}>
            <Text style = {style.Bio}> <Text style= {{fontWeight:'bold'}}> Bio:</Text> {this.props.children} </Text>
            </View>
        );
}}

const style = StyleSheet.create({
    Bio:{ 
        fontSize:15,
        textAlign:'center',
        margin:10
    },

    ViewS: {
        justifyContent: 'center', 
        alignItems: 'justify',
        borderColor:'#000000',
        borderWidth:2,
        margin: 10

    }

})