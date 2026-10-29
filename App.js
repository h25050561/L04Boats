import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import Boat from './Components/Boat'


const Intro = () => {
    return (
        <View>
            <View style={{backgroundColor:'gray', width:'100%', height:'25'}} />
            <View style={{backgroundColor:'#94D4FF', width:'100%', height:'50'}}>
                <Text style={{color:'white', fontSize:30, fontWeight:'bold', textAlign:'center', marginTop:5}}>
                    GetABoat - For Sale
                </Text>

            </View>
        </View>
    )
}

const App = () => {
  return (
      <View>
          <Intro />
          <ScrollView>
              <View style={{width:'100%', height:'20'}} />
              <Boat name='Sea Ray 500 Sundancer'
                    desc='Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.'
                    picture={require('./img/sea_ray.jpg')}/>
              <Boat name='Four Winns Horizon 180'
                    desc='A sporty look and refined details truly set the Horizon 180 above all others.'
                    picture={require('./img/four_winns.jpg')}/>
              <Boat name='Flipper 640 ST'
                    desc='A modern take on the classic, traditional hardtop and perfect for a family picnic.'
                    picture={require('./img/flipper.jpg')}/>
              <Boat name='Princess V48'
                    desc='There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.'
                    picture={require('./img/princess.jpg')}/>
              <Boat name='Bayliner 175 Bowrider'
                    desc='Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.'
                    picture={require('./img/bayliner.jpg')}/>
              <Boat name='Fairline Targa 47'
                    desc='Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.'
                    picture={require('./img/fairline.jpg')}/>
          </ScrollView>
      </View>

  )
}

export default App;