import React from 'react'
import { Image, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import globalStyles from '../../../styles';
import messages from './messages';

const renderItem = ({ item }) => {
    return (
        <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={require('../../../assets/img/mess.png')} />
                <Text style={{ flexGrow: 1, marginLeft: 10, fontWeight: "700" }}>{item.title}</Text>
                {
                    item.isRead === false &&
                    <Image source={require('../../../assets/img/isRead.png')} />
                }
            </View>
            <Text style={{fontSize: 13, color: "#acacac"}}>{item.detail}</Text>
            <View style={{flexDirection: "row"}}>
                <Text>{item.day}</Text>
                <Text style={{marginLeft: 10}}>{item.time}</Text>
            </View>
        </View>
    )
}

const Message = () => {
    return (
        <View style={globalStyles.smallContainer}>
            <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: 20}}>Messages</Text>
            <FlatList
                data={messages}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Message