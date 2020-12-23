import React from 'react'
import { Text, View } from 'react-native'
import globalStyles from '../../../styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';

const MessDetail = () => {
    const route = useRoute()
    const { item } = route.params
    const navi = useNavigation()
    return (
        <View style={globalStyles.smallContainer}>

            <Text style={{ fontWeight: "700" }}>
                {item.title}
            </Text>

            <View style={{ flexDirection: "row", paddingVertical: 5 }}>
                <Text style={{ fontSize: 12, color: "#828282" }}>{item.day}</Text>
                <Text style={{ marginLeft: 10, fontSize: 12, color: "#828282" }}>{item.time}</Text>
            </View>

            <View style={{ height: 0.5, backgroundColor: "#bdbdbd", marginVertical: 20 }}></View>

            <Text style={{lineHeight: 20, fontSize: 13, color: "#acacac"}}>
                {item.detail}
            </Text>

            <CustomButton active={true} text="OK" onHandlePress={()=>{
                navi.goBack()
            }}/>

        </View>
    )
}

export default MessDetail