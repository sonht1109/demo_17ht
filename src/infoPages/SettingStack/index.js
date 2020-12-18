import React from 'react'
import { Image, Text, View } from 'react-native'
import settingList from './settingList';
import Title from '../../components/Title';
import globalStyles from '../../../styles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const mapSettingList = (navi)=>{
    return(
        settingList.map((item, index) => {
            return (
                <TouchableOpacity key={index} onPress={()=> navi.navigate(item.name)}>
                    <View
                        style={{ flexDirection: "row", alignItems: "center", paddingVertical: 20 }}>
                        <Text style={{ flexGrow: 1 }}>{item.name}</Text>
                        <Text style={{ marginRight: 15, color: "#F2C94C" }}>{item.detail}</Text>
                        <Image source={require('../../../assets/img/icon/right_arrow.png')} />
                    </View>
                    {
                        index !== settingList.length - 1 &&
                        <View style={{height: 0.5, backgroundColor: "#e0e0e0"}}></View>
                    }
                </TouchableOpacity>
            )
        })
    )
}

const Settings = () => {
    const navi = useNavigation()
    return (
        <View style={[globalStyles.smallContainer, { paddingHorizontal: 0 }]}>
            <Title title="Settings" style={{marginBottom: 15}} />
            <ScrollView style={{ paddingHorizontal: 20 }}>
                {mapSettingList(navi)}
            </ScrollView>
        </View>
    )
}

export default Settings