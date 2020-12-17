import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import terms from './terms';
import globalStyles from '../../styles';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const renderItem = (item, index) => {
    return (
        <View style={{ paddingVertical: 20 }} key={index}>
            <Text style={{ fontWeight: "bold", marginBottom: 16 }}>{item.id}. {item.title}</Text>
            <Text style={{ fontSize: 13, lineHeight: 20 }}>{item.content}</Text>
        </View>
    )
}

const Policy = () => {
    const navigation = useNavigation()
    return (
        <ScrollView style={[globalStyles.smallContainer]}>
            <Text style={{ fontWeight: '700', fontSize: 22 }}>
                Personal information protection
            </Text>
            {/* <FlatList
                nestedScrollEnabled={true}
                data={terms}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
            /> */}
            {terms.map((item, index)=>{
                return renderItem(item, index)
            })}
            <CustomButton
                active={true}
                text="Back to information basic"
                onHanlePress={() => navigation.navigate("Info")}
                style={{ marginTop: 0, marginBottom: 20 }}
            />

        </ScrollView>
    )
}

export default Policy