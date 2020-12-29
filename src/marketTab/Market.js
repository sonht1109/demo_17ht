import React, { useCallback, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
import globalStyles from '../../styles';
import FollowList from './followListStack/index';

const menu = [
    {
        id: 1,
        name: "Follow list"
    },
    {
        id: 2,
        name: "Market"
    },
    {
        id: 3,
        name: "Town"
    }
]

//main
const Market = () => {
    const [tab, setTab] = useState(1)
    const [keyword, setKey] = useState('')

    const renderSearchBar = useCallback(() => {
        return (
            <View style={styles.search}>
                <Icon name="search-outline" size={12} color="#828282" />
                <TextInput
                    placeholder="Search currency ..."
                    style={styles.input}
                    onChangeText={(text) => setKey(text)}
                    value={keyword}
                />
            </View>
        )
    }, [keyword])

    const renderMenu = useCallback(() => {
        return (
            <>
                <View style={styles.menu} >
                    {
                        menu.map(item => {
                            return (
                                <Text
                                    style={[styles.menuItem, tab === item.id && styles.menuItemActive]}
                                    key={item.id}
                                    onPress={() => setTab(item.id)}>
                                    {item.name}
                                </Text>
                            )
                        })
                    }
                </View>
                <View style={{ backgroundColor: "#e0e0e0", height: 0.5, marginTop: 10, marginHorizontal: 20}}/>
            </>
        )
    }, [tab])

    return (
        <View style={[globalStyles.smallContainer, { paddingVertical: 20, paddingHorizontal: 0 }]}>
            {renderSearchBar()}
            {renderMenu(tab, setTab)}
            {
                tab === 1 &&
                <View style={{ marginBottom: 220 }}>
                    <FollowList keyword={keyword} />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#F8F8F8",
        paddingHorizontal: 20,
        marginBottom: 20,
        marginHorizontal: 20
    },
    input: {
        borderColor: "transparent",
        backgroundColor: "transparent",
        color: "#828282",
        marginLeft: 20,
        flexGrow: 1
    },
    menu: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: "auto",
        marginHorizontal: 20
    },
    menuItem: {
        paddingVertical: 7,
        paddingHorizontal: 10,
        color: "#828282"
    },
    menuItemActive: {
        color: "#F2C94C",
        backgroundColor: "#F8F8F8",
    }
})

export default Market