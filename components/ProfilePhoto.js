import React from 'react';
import {Image,StyleSheet, View} from 'react-native';

export default class ProfilePhoto extends React.Component{
    render(){

        return (
            <View style = {style.viewS}>
                <Image style = {style.pp} 
                source= {this.props.pic}/>
            </View>
        );
}}

const style = StyleSheet.create({
    pp:{
        width: 300, 
        height: 300,
        margin: 10
    },

    viewS:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderWidth:2,
        borderColor: '#000000'
    }
})