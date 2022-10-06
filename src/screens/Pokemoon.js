import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PokemoonCard from "../components/PokemoonCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPokemons } from "../store/actions/Index";
import { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/core";

export default function Pokemoon({ navigation }) {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);

  const pokemon = useSelector((state) => state.pokemon.allPokemons);
  const renderItem = ({ item, index }) => {
    return <PokemoonCard pokemon={item} index={index} />;
  };

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchAllPokemons(offset));
    }, [])
  );

  return (
    <>
      <View
        style={{
          // Try setting `flexDirection` to `"row"`.
          flex: 1,
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <ImageBackground
          source={require("../../assets/background-pokemon.jpeg")}
          resizeMode="cover"
          style={{ flex: 1, justifyContent: "center" }}
        >
          <View style={{ flex: 0.5, flexDirection: "row" }}>
            <View
              style={{
                flex: 5,
              }}
            >
              <Text
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: "5%",
                  fontSize: 10,
                  fontWeight: "bold",
                }}
              >
                Showing Pokemon No. {offset === 0 ? offset + 1 : offset} -{" "}
                {offset + 20} from 1154 Pokemon
              </Text>
            </View>
          </View>
          <View style={{ flex: 4.5 }}>
            <FlatList
              data={pokemon}
              renderItem={renderItem}
              keyExtractor={(item) => item.name}
              horizontal={false}
              numColumns={4}
            />
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            {offset === 0 ? null : (
              <TouchableOpacity
                onPress={() => {
                  setOffset(offset - 20);
                  dispatch(fetchAllPokemons(offset));
                }}
                style={{
                  flex: 3,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                  }}
                >
                  Previous
                </Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              onPress={() => {
                setOffset(offset + 20);
                dispatch(fetchAllPokemons(offset));
              }}
              style={{
                flex: 3,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                }}
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}
