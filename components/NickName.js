import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

export default class NickName extends React.Component{
    render(){
        return (
            <View style = {{justifyContent: 'flex-start'}}>
                <Text style = {style.title}>
                {this.props.children}</Text>
             </View>
        );
}}

 const style = StyleSheet.create({
    title:{
        fontSize: 25,
        fontStyle:'italic',
        fontWeight:'bold',
        textAlign: 'center',
        marginTop: 7
    }
})