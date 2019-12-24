import React from 'react';
import { StyleSheet,View,Button,Image,Text,TouchableOpacity } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Title from './components/Title.js';
import ProfilePhoto from './components/ProfilePhoto.js';
import Bio from './components/Bio.js';
import Strengths from './components/Strengths.js';

class Home extends React.Component{
  render(){
    return(
      
  <View>
    <Text style = {styles.homePage}> Pockets DevTeam</Text>
    
    <View style = {{marginTop: 200, marginBottom: 100, flex: 1, alignItems:'center', flexDirection:'row', flexWrap:`wrap`}}> 
    
      <TouchableOpacity style = {{}} onPress = {() => this.navigation.navigate(`Seb`)}>
        <Image style = {styles.icon} source = {require('./photos/Seb.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => this.navigation.navigate(`Wil`)}>
        <Image style = {styles.icon} source = {require('./photos/Wil.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => this.navigation.navigate(`Jono`)}>
        <Image style = {styles.icon} source = {require('./photos/Jono.jpg')} />
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => this.navigation.navigate(`Daniel`)}>
        <Image style = {styles.icon} source = {require('./photos/Daniel.png')} />
      </TouchableOpacity>
    </View>
  </View>
  )
}}

class Seb extends React.Component{
  
  static navigationOptions = ({ navigation }) => {
    return {
  headerTitle:'Pockets DevTeam',
  headerRight: () => (
    <Button 
     onPress={() => navigation.navigate('Jono')}
      title="Home"
      color="#000000"
    />
  ),
  }};

  render(){
  pic1 = require('./photos/Seb.png');
  titleVar = 'Sebastien Bailouni'
  nickNameVar = 'A Good Boy'
  strengthvar = '7am runs';
  weaknessVar = 'Being awake past 11.30PM';

  return (
    <View style={styles.container2}>
    <Title title = {titleVar} nickName = {nickNameVar}> </Title>
    <ProfilePhoto pic = {pic1}/>
    <Bio> A man with many years of wisdom on his behalf, Jonathan Vran(kool) also known as "Mr Deloitte" is a character of much delusion and mystery. 
    From an outsider perspective Jono seems to be a normal high- achieving university student, however greatly unknown to many around him,
    Jono regurlarly partakes in SPACE-X missions known as "HASH TIME" travelling to and from the moon. Some theorise his great marks are due to  
    knowledge gained from these "HASH TIME" missions however this theory is still to be confirmed. </Bio>
    <Strengths strength={strengthvar} Weakness = {weaknessVar}> </Strengths>
    </View>
   );
  }
}

class Jono extends React.Component{

  static navigationOptions = { title:'Jono'
  };

  render(){
  pic1 = require('./photos/Jono.jpg');
  titleVar = 'Jono Vrankul'
  nickNameVar = 'Mr. Deloitte'
  strengthvar = 'Intergalactic travel';
  weaknessVar = 'Nans first target for reinforcment';

  return (
    <View style={styles.container2}>
    <Title title = {titleVar} nickName = {nickNameVar}> </Title>
    <ProfilePhoto pic = {pic1}/>
    <Bio> A man with many years of wisdom on his behalf, Jonathan Vran(kool) also known as "Mr Deloitte" is a character of much delusion and mystery. 
    From an outsider perspective Jono seems to be a normal high- achieving university student, however greatly unknown to many around him,
    Jono regurlarly partakes in SPACE-X missions known as "HASH TIME" travelling to and from the moon. Some theorise his great marks are due to  
    knowledge gained from these "HASH TIME" missions however this theory is still to be confirmed. </Bio>
    <Strengths strength={strengthvar} Weakness = {weaknessVar}> </Strengths>
    </View>
   );
  }
}

class Wil extends React.Component{

  static navigationOptions = {
    drawerLabel: 'Wil',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./photos/Wil.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render(){
  pic1 = require('./photos/Wil.png');
  titleVar = 'William Johnson'
  nickNameVar = 'Dorito Johnson'
  strengthvar = 'Leading Blorkism';
  weaknessVar = 'FIFA';

  return (
    <View style={styles.container2}>
    <Title title = {titleVar} nickName = {nickNameVar}> </Title>
    <ProfilePhoto pic = {pic1}/>
    <Bio> One of the early influences in the Blork community, Dorito Johnson is a man of many skills and talents. Among programming, making music, 
    being a good boyfriend and sucking at FIFA, Dorito finds time to be heavily involved in fighting Glick with machine learning. 
    {"\n"} {"\n"} References to Blorkism and Glick can be found on 'robothouse.club' </Bio>
    <Strengths strength={strengthvar} Weakness = {weaknessVar}> </Strengths>
    <Button title="Go to Jono"
    onPress={() => this.props.navigation.navigate('Jono')}/> 
    </View>
   );
  }}

  const AppNavigator = createStackNavigator({
    Home,
    Jono,
    Wil,
    Seb,
    
  },
  {initialRouteName: 'Home',}
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({


  container2: {
    flex: 1,
    alignContent:'center',
    marginTop: 10,
    marginBottom:20,
    borderWidth:1,
    backgroundColor: '#F9F2F2'
  },

  icon: {
    margin:20,
    width: 170,
    height: 180,
  },

  homePage: {
    fontSize: 35,
        fontWeight:'bold',
        textAlign: 'center',
        marginTop: 20
  }

});
