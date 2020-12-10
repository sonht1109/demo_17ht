import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { Picker } from '@react-native-community/picker'

const Signup = ()=>{

    const [selectedItem, setSelectedItem] = useState("Vietnam")

    return(
        <View>
            <View style={{display: "flex", flexDirection: "row"}}>
                <Text>Sign up</Text>
                <Text style={{marginLeft: "auto"}}>Language</Text>
            </View>
            <View style={{width: "100%", display: "flex", flexDirection: "row"}}>
                <Picker
                style={{width: "30%"}}
                selectedValue={selectedItem}
                onValueChange={(val, idx) => {setSelectedItem(val); console.log(val);}}>
                    <Picker.Item label="Vietnam" value="vie"/>
                    <Picker.Item label="USA" value="usa"/>
                    <Picker.Item label="Thailand" value="tha"/>
                    <Picker.Item label="Singapore" value="sin"/>
                    <Picker.Item label="Russia" value="rus"/>
                </Picker>
                <TextInput
                style={styles.input}
                placeholder="Phone number"
                style={{width: "70%"}}/>
            </View>

            <TextInput
            style={styles.input}
            placeholder="Password" autoCompleteType="password" />

            <TextInput
            style={styles.input}
            placeholder="Code" />

            <Text>or Login</Text>

            <View style={{width: "100%"}}>
                <Button title="Sign up" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: "gray",
        borderWidth: 1,
        marginVertical: 10
    }
})

export default Signup