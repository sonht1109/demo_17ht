import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import globalStyles from '../../../styles';
import messages from './messages';
import { useNavigation } from '@react-navigation/native';
import Title from '../../components/Title';

const renderItem = ({ item }, navigation, mess, setMess) => {
    return (
        <TouchableOpacity
        onPress={()=>{
            let temp = mess;
            temp[item.id - 1].isRead = true;
            setMess([...temp])
            navigation.navigate("MessDetail", {item})
        }}
        >
            <View style={{ paddingVertical: 15 }}>
                <View style={{ flexDirection: "row" }}>
                    <Image source={require('../../../assets/img/mess.png')} width={15} height={15} style={{marginTop: 2}} />
                    <View style={{ marginLeft: 10, flex: 1 }}>
                        <Text style={{ fontWeight: "700" }}>
                            {item.title}
                        </Text>
                        <Text
                        style={{ fontSize: 13, color: "#acacac", marginTop: 8, marginBottom: 15 }} numberOfLines={2} ellipsizeMode="tail">
                            {item.detail}
                        </Text>
                    </View>
                    {
                        item.isRead === false &&
                        <Image source={require('../../../assets/img/isRead.png')} width={6} height={6} style={{marginTop: 2}}/>
                    }
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 12, color: "#828282" }}>{item.day}</Text>
                    <Text style={{ marginLeft: 10, fontSize: 12, color: "#828282" }}>{item.time}</Text>
                </View>

            </View>
            <View style={{ height: 0.5, backgroundColor: "#e0e0e0" }}></View>
        </TouchableOpacity>
    )
}

const Message = () => {
    const navigation = useNavigation()
    const [mess, setMess] = useState(messages)
    return (
        <View style={[globalStyles.smallContainer, { paddingHorizontal: 0, paddingBottom: 60 }]}>
            <Title title="Message" />
            <FlatList
                style={{ paddingHorizontal: 20 }}
                data={mess}
                keyExtractor={item => item.id ? item.id.toString() : Math.random().toString()}
                renderItem={({item}) => renderItem({item}, navigation, mess, setMess)}
            />
        </View>
    )
}

export default Message