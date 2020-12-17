import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import globalStyles from '../../styles'

const CustomButton = ({text, onHanlePress, active, style})=>{
    return(
        <TouchableOpacity
        style={[globalStyles.button, {backgroundColor: active ? "#FAD939" : "#d1d1d1"}, style]}
        onPress={onHanlePress}>
            <Text
            style={{ fontWeight: "bold", textAlign: "center" }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton