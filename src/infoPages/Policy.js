import React, { useState } from 'react'
import { Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import terms from './terms';
import globalStyles from '../../styles';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Title from '../components/Title';

const renderItem = ({item}) => {
    console.log(item);
    return (
        <View style={{ paddingVertical: 20 }}>
            <Text style={{ fontWeight: "bold", marginBottom: 16 }}
            onPress={()=>setAlert({
                ...customAlert, 
                visible: true
            })}>
                {item.id}. {item.title}
            </Text>
            <Text style={{ fontSize: 13, lineHeight: 20 }}>{item.content}</Text>
        </View>
    )
}

const Policy = () => {
    const navigation = useNavigation()
    return (
        <View style={[globalStyles.smallContainer, {position: "relative"}]}>
            <Title title="Personal information protection" style={{paddingHorizontal: 0}} />
            <FlatList
            data={terms} 
            keyExtractor={item => item.id}
            renderItem={renderItem} />

            <CustomButton
                active={true}
                text="Back to information basic"
                onHandlePress={() => navigation.navigate("Info")}
                style={{ marginTop: 0, marginBottom: 20, position: "absolute", bottom: 20 }}
            />

        </View>
    )
}

export default Policy