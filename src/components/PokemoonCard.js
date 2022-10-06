import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function QontactCard({ pokemon, index }) {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        style={{
          marginBottom: 5,
          flexDirection: "row",
          flex: 1,
        }}
        onPress={() =>
          navigation.navigate("DetailPokemoon", {
            name: pokemon.name,
            id: pokemon.id,
          })
        }
      >
        <View
          style={{
            backgroundColor: "white",
            marginBottom: 5,
            marginLeft: "auto",
            marginRight: "auto",
            width: 80,
            height: 100,
            backgroundColor: "#EEEEEE",
            flexDirection: "column",
            borderRadius: 10,
          }}
        >
          <Image
            style={{
              width: 70,
              height: 70,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            source={{
              uri: pokemon.sprites.other["official-artwork"]["front_default"],
            }}
          />
          <Text
            style={{
              textAlign: "center",
              fontSize: 8,
              color: "black",
            }}
          >
            {pokemon.name}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
