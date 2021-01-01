import React, { useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useContext } from 'react/cjs/react.development';
import globalStyles from '../../../styles';
import Title from '../../components/Title';
import locales from '../../locales'
import {LocaleContext} from '../../common/context'

const mapLocaleList = (chosen, locale, setLocale)=>{
    return(
        locales.map((item, index) => {
            return (
                <TouchableWithoutFeedback key={index} onPress={()=>{
                    setLocale(item.key)
                }}>
                    <View
                        style={{ flexDirection: "row", alignItems: "center", paddingVertical: 20 }}>
                        <Text
                        style={[{ flexGrow: 1 }, locale === item.key && styles.chosen]}>
                            {item.name}
                        </Text>
                        <Text style={{ marginRight: 15, color: "#F2C94C" }}>
                            {locale === item.key ? chosen : ""}
                        </Text>
                        <Image source={require('../../../assets/img/icon/right_arrow.png')} />
                    </View>
                    {
                        index !== locales.length - 1 &&
                        <View style={{height: 0.5, backgroundColor: "#e0e0e0"}}></View>
                    }
                </TouchableWithoutFeedback>
            )
        })
    )
}

const Language = ()=>{
    // const [locale, setLocale] = useState("en")
    const {localeValue, locale, setLocale} = useContext(LocaleContext)
    const {Language, chosen} = localeValue.info

    return(
        <View style={globalStyles.smallContainer}>
            <Title title={Language} style={{paddingHorizontal: 0, marginBottom: 15}} />
            {mapLocaleList(chosen, locale, setLocale)}
        </View>
    )
}

const styles = StyleSheet.create({
    chosen: {
        fontWeight: "bold"
    }
})

export default Language;