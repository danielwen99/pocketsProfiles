import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

export default class Title extends React.Component{
    render(){
        return (
            <View style = {style.viewS}>
                <Text style = {style.title}>
                {this.props.title} {'\n'} <Text style = {style.nickName}> {this.props.nickName} </Text>    
                </Text>     
             </View>
        );
}}

 const style = StyleSheet.create({
    title:{
        fontSize: 35,
        fontWeight:'bold',
        textAlign: 'center',
        marginTop: 3
    },

    nickName:{
        fontSize: 25,
        fontStyle:'italic',
        fontWeight:'bold',
        textAlign: 'center',
        marginTop: 1,
        marginBottom:3
    },

    viewS:{
        marginTop: 10,
        marginLeft:10,
        marginRight:10,
        borderWidth:2,
        borderColor: '#000000'
    }
})