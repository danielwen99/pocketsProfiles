import React from 'react';
import {Text,StyleSheet, View} from 'react-native';

export default class Weakness extends React.Component{
    
    render(){
        return (
            <View style = {style.ViewS}>
            <Text style = {{margin:8}}> 
            <Text style = {style.Strengths}> Weakness: </Text> {this.props.s}  </Text> 
            </View>
        );
}}

const style = StyleSheet.create({
    Strengths: {
    fontWeight: 'bold',
    color: '#A42626',
    margin: 5
    },

    ViewS:{
        borderColor: '#000000',
        borderWidth: 2,
        marginLeft:10,
        marginRight:10
    }
})
