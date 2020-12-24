import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import globalStyles from '../../styles'

const CustomButton = ({text, onHandlePress, active, style})=>{
    return(
        <View style={{marginTop: 30 }}>
            <TouchableOpacity
            disabled={!active}
            style={[globalStyles.button, {backgroundColor: active ? "#FAD939" : "#d1d1d1"}, style]}
            onPress={onHandlePress}>
                <Text
                style={{ fontWeight: "bold", textAlign: "center" }}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomButton