import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import list from './list'
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const renderItem = ({ item }, chosenList, setChosenList) => {
  return (
    <View style={styles.box}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          if (chosenList.indexOf(item) !== -1) {
            chosenList.splice(chosenList.indexOf(item), 1)
          }
          else {
            chosenList.push(item)
          }
          setChosenList([...chosenList])
        }}>
        <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
          <Text style={[{fontWeight: "bold", color: "#828282"}, chosenList.includes(item) && { color: "black" }]}>{item.currency} </Text>
          <Text style={{ color: "#828282", fontSize: 11 }}> / {item.city}</Text>
          <Icon
            name={"checkmark-circle"}
            size={15}
            style={{ marginLeft: "auto" }}
            color={chosenList.includes(item) ? "#FAD939" : "#D1D1D1"}
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text style={styles.buyIn}>
            {item.buyIn}
          </Text>
          <Text style={styles.sellOut}>
            {item.sellOut}
          </Text>
        </View>
        <Text style={styles.rate}>{item.rate}</Text>
      </TouchableOpacity>
    </View>
  )
}

const renderChosenList = (chosenList = [])=>{
  return chosenList.map((item, index)=>{
    return(
      <View key={index}>

        <View style={{flexDirection: "row", paddingVertical: 12}}>
          <Text style={{flex: 0.25}}>
            <Text style={{fontWeight: "bold"}}>{item?.currency}</Text>
            <Text style={{color: "#828282"}}> / {item?.city}</Text>
          </Text>
          <View style={{flex: 0.25}}>
            <Text style={{color: "#219653", fontWeight: "bold"}}>{item?.buyIn}</Text>
            <Text style={{color: "#828282", fontSize: 11}}>{item?.rate}</Text>
          </View>
          <Text style={{flex: 0.25, color: "#D04749", fontWeight: "bold"}}>
            {item?.sellOut}
          </Text>
          <TouchableOpacity style={{flex: 0.25}}>
            <Text style={{textAlign: "center", backgroundColor: "#FAD939", paddingVertical: 5}}>
              Order
            </Text>
          </TouchableOpacity>
        </View>

        {
          index !== chosenList.length - 1 && 
          <View style={{height: 0.5, backgroundColor: "#e0e0e0"}} />
        }
      </View>
    )
  })
}

//main
const FollowList = ({keyword}) => {
  const [chosenList, setChosenList] = useState([])
  const [showChooseList, setShowChooseList] = useState(false)
  const navi = useNavigation()

  const searchList = showChooseList && 
  list.filter(item => item.currency.toLowerCase().includes(keyword.toLowerCase()))


  return (
    <View >
      {
        showChooseList &&
          <FlatList
            data={searchList}
            renderItem={({ item }) => renderItem({ item }, chosenList, setChosenList)}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={{ padding: 10, maxWidth: "100%" }}
            ListFooterComponent={
              <View style={{ marginHorizontal: 20 }}>
                <CustomButton text="Confirm" active={chosenList.length > 0} onHandlePress={() => setShowChooseList(false)} wrapStyle={{marginTop: 10}} />
              </View>
            }
          />
      }
      {
        !showChooseList &&
        <ScrollView style={{ paddingHorizontal: 20 }}>
          <View style={{ flexDirection: "row", marginVertical: 8, alignItems: "center" }}>
            <Text style={styles.columnTitle}>Type</Text>
            <Text style={styles.columnTitle}>Buy in</Text>
            <Text style={styles.columnTitle}>Sell out</Text>
            <Icon name="create-outline" size={18} color="#FAD939" style={{ flex: 0.25, textAlign: "right" }}
            onPress={()=>navi.navigate("EditFollowList")}/>
          </View>
          {renderChosenList(chosenList)}
          <TouchableOpacity onPress={()=>setShowChooseList(true)}>
            <View style={{flexDirection: "row", marginTop: 16, alignItems: "center", justifyContent: 'center'}}>
              <Icon name="add-circle" size={20} style={{marginRight: 10, color: "#FAD939"}} />
              <Text style={{color: "#FAD939"}}>Add Follow List</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F3F3F3",
    padding: 14,
    flex: 1,
    margin: 10,
  },
  active: {
    color: "#FAD939",
  },
  columnTitle: {
    flex: 0.25, fontSize: 11,
    color: "#828282"
  },
  city: {
    color: "#828282", fontSize: 11
  },
  buyIn: { 
    color: "#219653", marginRight: 15, fontSize: 11, fontWeight: "bold"
  },
  sellOut: {
    color: "#D04749", fontSize: 11, fontWeight: "bold" 
  },
  rate: {
    color: "#828282", fontSize: 9
  }
})

export default FollowList