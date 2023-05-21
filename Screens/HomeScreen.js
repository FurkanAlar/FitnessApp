import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useContext } from "react";
import FitnessCard from "../components/FitnessCard";
import { FitnessItems } from "../Context";

const HomeScreen = () => {
  const { minutes, calories, workout } = useContext(FitnessItems);
  return (
    <ScrollView style={{ marginTop: 15 }}>
      <View
        style={{
          backgroundColor: "#CD853F",
          padding: 10,
          height: 200,
          width: "100%",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          Home Work Out
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {workout}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              WorkOuts
            </Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {calories}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              KCAL
            </Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              {minutes}
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              MINS
            </Text>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "120%",
              height: 90,
              marginTop: 10,
              borderRadius: 17,
            }}
            source={{
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }}
          />
        </View>
      </View>

      <FitnessCard />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
