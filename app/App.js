import React, { useEffect, useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native'
import Header from './component/Header'
import SchedulePrayer from './component/SchedulePrayer'

// const prayerData = [
//   {
//     title: "Fajr",
//     time: "04:25 (WIB)",
//   },
//   {
//     title: "Sunrise",
//     time: "05:25 (WIB)",
//   },
//   {
//     title: "Dhuhr",
//     time: "11:28 (WIB)",
//   },
//   {
//     title: "Asr",
//     time: "15:01 (WIB)",
//   },
//   {
//     title: "Maghrib",
//     time: "17:50 (WIB)",
//   },
//   {
//     title: "Isha",
//     time: "18:51 (WIB)",
//   },
// ]

const App = () => {

  const [shalatSchedule, setShalatSchedule] = useState(undefined)

  useEffect(() => {
    fetchJadwalShalat()
  }, [])

  const fetchJadwalShalat = async () => {
    try {
      const apiName = "http://api.aladhan.com/v1/hijriCalendarByCity?city=Jakarta&country=Indonesia"
      let response = await fetch(apiName)
      let responseJson = await response.json()
      if(responseJson) {
        var timings = []
        Object.entries(responseJson.data[0].timings).forEach(([key, value]) => {
          timings.push({
            title: key,
            time: value,
          })
        })
        setShalatSchedule(timings)
        console.log("Shalat Timings ->", timings)
      }
    } catch (error) {
      console.log("Error : ", error)
    }
  }

  return(
    <ScrollView style={styles.mainContainer} >
      <StatusBar backgroundColor={"#9ad3bc"} />
      <Header title={"Assalamualaikum, Rizki"} time={"14.30"} />
      <View style={styles.prayerCardContainer} >
        <SchedulePrayer location={"Jakarta Selatan"} prayers={shalatSchedule} />
      </View>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#e8e8e8",
    flexGrow: 1
  },
  prayerCardContainer: {
    top: -48,
  },
})