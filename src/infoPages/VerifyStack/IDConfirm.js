import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import Title from '../../components/Title'
import globalStyles from '../../../styles';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const cards = [
    {
        key: "ID",
        name: "Identity card photo",
        activeIcon: require('../../../assets/img/IDphoto.png'),
        nonActiveIcon: require('../../../assets/img/IDphoto2.png')
    },
    {
        key: "Passport",
        name: "Passport photo",
        activeIcon: require('../../../assets/img/IDphoto.png'),
        nonActiveIcon: require('../../../assets/img/IDphoto2.png')
    },
    {
        key: "Driver",
        name: "Driver license",
        activeIcon: require('../../../assets/img/IDphoto.png'),
        nonActiveIcon: require('../../../assets/img/IDphoto2.png')
    }
]

const colors = {
    active: "#FAD939",
    nonActive: "#E4E4E4"
}

const customCheck = () => {
    return (
        <>
            <Image
            source={require('../../../assets/img/triangle.png')}
            style={{position: "absolute", top: 0, right: 0}}
            />
            <Image
            style={{position: "absolute", top: 4, right: 3}}
                source={require('../../../assets/img/check.png')}>
            </Image>
        </>
    )
}

const mapBox = (chosenCard, setChosenCard) => {
    return cards.map(item => {
        return (
            <View key={item.key} style={{marginTop: 18}}>
                <TouchableWithoutFeedback
                    style={[styles.cardBox,
                    chosenCard === item.key ? styles.activeBorder : styles.nonActiveBorder]}
                    onPress={() => setChosenCard(item.key)}
                >
                    {chosenCard === item.key && customCheck()}
                    <Image
                        source={item.key === chosenCard ? item.activeIcon : item.nonActiveIcon}
                        style={{ marginRight: 18 }}
                    />
                    <Text style={item.key === chosenCard ? styles.activeText : styles.nonActiveText}>{item.name}</Text>
                </TouchableWithoutFeedback>
            </View>
        )
    })
}

const IDConfirm = () => {
    const [chosenCard, setChosenCard] = useState("")
    const navi = useNavigation()
    return (
        <ScrollView style={globalStyles.smallContainer}>
            <Title
                title="Select your user type to login"
                style={{ paddingHorizontal: 0, marginBottom: 40 }} />
            <Text>Choose the verification type</Text>
            <View>
                {mapBox(chosenCard, setChosenCard)}
            </View>
            <CustomButton text="Next" active={chosenCard !== ""} onHandlePress={
                ()=>{
                    if(chosenCard !== ""){
                        navi.navigate("Camera")
                    }
                }
            } />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardBox: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        borderWidth: 1
    },
    activeText: {
        color: "black",
        fontWeight: "700",
    },
    nonActiveText: {
        color: "#828282"
    },
    activeBorder: {
        borderColor: colors.active
    },
    nonActiveBorder: {
        borderColor: colors.nonActive
    },
    customCheck: {
        position: "absolute", top: 0, right: 0,
        borderColor: colors.active,
        backgroundColor: "transparent",
        borderTopWidth: 0,
        borderLeftColor: "transparent",
        borderBottomColor: "transparent"
    }
})

export default IDConfirm