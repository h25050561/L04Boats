import React from 'react';
import {Text, View, Image} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Boat = ({name, desc, picture}) => {
    return (
        <View>
            <FontAwesome6 name="sailboat" size={25} color="gray">
                <Text>{name}</Text>
            </FontAwesome6>
            <Text style={{color:"gray"}}>{desc}</Text>
            <Image source={picture} style={{width:400, height:400}} />
            <View style={{width:'100%', height:20}}/>
        </View>
    )
}

export default Boat;