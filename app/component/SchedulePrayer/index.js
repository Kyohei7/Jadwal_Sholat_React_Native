import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'


const SchedulePrayer = (props) => {
    return (
        <View style={styles.mainContainer}>
          <View style={styles.cardContainer}>
            <View style={styles.locationContainer}>
              <Image
                source={require("../../images/location.png")}
                style={styles.locationImage}
              />
              <Text style={styles.locationText}>{props.location}</Text>
            </View>
            {props.prayers?.map((item, index) => {
              return (
                <View key={index} style={styles.prayItem}>
                  <Text style={styles.titleItem}>{item.title}</Text>
                  <Text style={styles.timeItem}>{item.time}</Text>
                  <View style={styles.horizontalSeparator} />
                  <TouchableOpacity>
                    <Image
                      source={require("../../images/bell.png")}
                      style={styles.locationImage}
                    />
                  </TouchableOpacity>
                </View>
              )
            })}
          </View>
        </View>
      )
    }
     
    const styles = StyleSheet.create({
      mainContainer: {
        marginHorizontal: 32,
        padding: 16,
        borderRadius: 16,
        backgroundColor: "#fbf6f0",
        elevation: 6,
      },
      cardContainer: {},
      locationContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
      locationImage: {
        height: 16,
        width: 16,
      },
      locationText: {
        fontWeight: "bold",
        marginLeft: 8,
        color: "#16a596",
      },
      prayItem: {
        flexDirection: "row",
        marginTop: 24,
        marginHorizontal: 8,
        alignItems: "center",
      },
      titleItem: {
        fontSize: 25,
        flex: 1,
        color: "#16a596"
      },
      timeItem: {
        fontSize: 25,
        color: "#16a596"
      },
      horizontalSeparator: {
        marginHorizontal: 8,
      },
    })

    export default SchedulePrayer