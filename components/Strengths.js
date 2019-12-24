import React from 'react';
import {Text,StyleSheet, View} from 'react-native';

export default class Strengths extends React.Component{
    
    render(){
        return (
            <View style = {style.ViewS}>
            <Text style = {{margin:8}}> 
            <Text style = {style.Strengths}> Strength: </Text> {this.props.strength} {"\n"}  
            <Text style= {style.Weakness}> Weakness:</Text> {this.props.Weakness}
            </Text> 
            
            </View>
        );
}}

const style = StyleSheet.create({
    Strengths: {
    fontWeight: 'bold',
    color: '#25A725',
    margin: 5
    },

    Weakness: {
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

