import React from 'react'
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler'
import terms from './terms';
import globalStyles from '../../styles';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Title from '../components/Title';

const renderItem = ({ item }) => {
    return (
        <View style={{ marginVertical: 20 }}>
            <Text style={{ fontWeight: "bold", marginBottom: 16 }}>
                {item.id}. {item.title}
            </Text>
            <Text style={{ fontSize: 13, lineHeight: 20 }}>{item.content}</Text>
        </View>
    )
}

const Policy = () => {
    const navigation = useNavigation()
    return (
        <View style={[globalStyles.smallContainer, { paddingHorizontal: 0 }]}>
            <Title title="Personal information protection" style={{ paddingHorizontal: 20 }} />

            <View style={{ marginBottom: 180 }}>
                <FlatList
                    data={terms}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                    style={{ paddingHorizontal: 20 }}
                />
                <View style={{paddingHorizontal: 20}}>                                                                              
                <CustomButton
                    active={true}
                    text="Back to information basic"
                    wrapStyle={{marginTop: 10}}
                    onHandlePress={() => navigation.navigate("Info")}
                    style={{ marginTop: 0 }} />
                </View>                                                 
            </View>

        </View>
    )
}

export default Policy