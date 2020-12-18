import React from 'react'
import { Text } from 'react-native'

const Title = ({title, style}) => {
    return (
        <Text style={[{ fontSize: 22, fontWeight: 'bold', marginBottom: 5, paddingHorizontal: 20 }, style]}>
            {title}
        </Text>
    )
}

export default Title