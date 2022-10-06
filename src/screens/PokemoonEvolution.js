import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { deleteContact, fetchPokemonEvolution } from "../store/actions/Index";
import { useSelector, useDispatch } from "react-redux";
import { useFocusEffect } from "@react-navigation/core";

export default function PokemoonEvolution({ navigation, route }) {
  const { id } = route.params;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const pokemonEvolution = useSelector(
    (state) => state.pokemon.pokemonEvolution
  );

  useEffect(() => {
    dispatch(fetchPokemonEvolution(id))
      .then((resp) => {
        if (pokemonEvolution) {
          setLoading(false);
        } else {
          setLoading(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loadingg</Text>
      </View>
    );
  } else {
    return (
      <>
        <View
          style={{
            // Try setting `flexDirection` to `"row"`.
            flex: 1,
            flexDirection: "column",
            position: "relative",
          }}
        >
          <ImageBackground
            source={require("../../assets/background-pokemon.jpeg")}
            resizeMode="cover"
            style={{ flex: 1 }}
          >
            <View
              style={{
                flex: 2,
              }}
            >
              <Image
                style={{
                  height: "70%",
                  width: "50%",
                  marginTop: "auto",
                  marginLeft: "auto",
                  marginBottom: "auto",
                  marginRight: "auto",
                }}
                source={{
                  uri: pokemonEvolution.sprites.other["official-artwork"][
                    "front_default"
                  ],
                }}
              />
            </View>
            <View
              style={{
                flex: 4,
                backgroundColor: "white",
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
              }}
            >
              <View
                style={{
                  flex: 5,
                }}
              >
                <View
                  style={{
                    flex: 2,
                  }}
                >
                  <View
                    style={{
                      flex: 3,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 30,
                        fontWeight: "600",
                        marginBottom: "auto",
                        marginTop: "auto",
                        marginLeft: "3%",
                        letterSpacing: 2,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 30,
                          marginBottom: "auto",
                          marginTop: "auto",
                          marginLeft: "3%",
                          fontWeight: "300",
                        }}
                      >
                        0{pokemonEvolution.id}
                      </Text>{" "}
                      {pokemonEvolution.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 3,
                      marginLeft: "3%",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 10,
                        letterSpacing: 2,
                      }}
                    >
                      Weight : <Text> {pokemonEvolution.weight} hg</Text>
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        letterSpacing: 2,
                      }}
                    >
                      Height : <Text> {pokemonEvolution.height} dm</Text>
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        letterSpacing: 2,
                      }}
                    >
                      Main-Type :{" "}
                      <Text> {pokemonEvolution.abilities[0].ability.name}</Text>
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        letterSpacing: 2,
                      }}
                    >
                      Main-Ability :{" "}
                      <Text> {pokemonEvolution.types[0].type.name}</Text>
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 4,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 30,
                        fontWeight: "600",
                        marginBottom: "auto",
                        marginTop: "auto",
                        marginLeft: "3%",
                        letterSpacing: 2,
                      }}
                    >
                      Stats
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 5,
                      marginLeft: "10%",
                      marginRight: "10%",
                    }}
                  >
                    <View
                      style={{
                        height: 20,
                        width: "100%",
                        backgroundColor: "grey",
                        borderRadius: 10,
                        marginTop: "2%",
                      }}
                    >
                      <View
                        style={{
                          height: 20,
                          width: `${pokemonEvolution.stats[0].base_stat}%`,
                          backgroundColor: "black",
                          borderRadius: 10,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 10,
                            marginBottom: "auto",
                            marginTop: "auto",
                            marginLeft: "5%",
                          }}
                        >
                          {pokemonEvolution.stats[0].stat.name} :{" "}
                          {pokemonEvolution.stats[0].base_stat} / 100
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        height: 20,
                        width: "100%",
                        backgroundColor: "grey",
                        borderRadius: 10,
                        marginTop: "2%",
                      }}
                    >
                      <View
                        style={{
                          height: 20,
                          width: `${pokemonEvolution.stats[1].base_stat}%`,
                          backgroundColor: "black",
                          borderRadius: 10,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 10,
                            marginBottom: "auto",
                            marginTop: "auto",
                            marginLeft: "5%",
                          }}
                        >
                          {pokemonEvolution.stats[1].stat.name} :{" "}
                          {pokemonEvolution.stats[1].base_stat} / 100
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        height: 20,
                        width: "100%",
                        backgroundColor: "grey",
                        marginTop: "2%",
                        borderRadius: 10,
                      }}
                    >
                      <View
                        style={{
                          height: 20,
                          width: `${pokemonEvolution.stats[2].base_stat}%`,
                          backgroundColor: "black",
                          borderRadius: 10,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 10,
                            marginBottom: "auto",
                            marginTop: "auto",
                            marginLeft: "5%",
                          }}
                        >
                          {pokemonEvolution.stats[2].stat.name} :{" "}
                          {pokemonEvolution.stats[2].base_stat} / 100
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        height: 20,
                        width: "100%",
                        backgroundColor: "grey",
                        borderRadius: 10,
                        marginTop: "2%",
                      }}
                    >
                      <View
                        style={{
                          height: 20,
                          width: `${pokemonEvolution.stats[3].base_stat}%`,
                          backgroundColor: "black",
                          borderRadius: 10,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 10,
                            marginBottom: "auto",
                            marginTop: "auto",
                            marginLeft: "5%",
                          }}
                        >
                          {pokemonEvolution.stats[3].stat.name} :{" "}
                          {pokemonEvolution.stats[3].base_stat} / 100
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        height: 20,
                        width: "100%",
                        backgroundColor: "grey",
                        borderRadius: 10,
                        marginTop: "2%",
                      }}
                    >
                      <View
                        style={{
                          height: 20,
                          width: `${pokemonEvolution.stats[4].base_stat}%`,
                          backgroundColor: "black",
                          borderRadius: 10,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 10,
                            marginBottom: "auto",
                            marginTop: "auto",
                            marginLeft: "5%",
                          }}
                        >
                          {pokemonEvolution.stats[4].stat.name} :{" "}
                          {pokemonEvolution.stats[4].base_stat} / 100
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        height: 20,
                        width: "100%",
                        backgroundColor: "grey",
                        marginTop: "2%",
                        borderRadius: 10,
                      }}
                    >
                      <View
                        style={{
                          height: 20,
                          width: `${pokemonEvolution.stats[5].base_stat}%`,
                          backgroundColor: "black",
                          borderRadius: 10,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 10,
                            marginBottom: "auto",
                            marginTop: "auto",
                            marginLeft: "5%",
                          }}
                        >
                          {pokemonEvolution.stats[5].stat.name} :{" "}
                          {pokemonEvolution.stats[5].base_stat} / 100
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 60,
                    width: "90%",
                    backgroundColor: "black",
                    marginLeft: "auto",
                    marginRight: "auto",
                    borderRadius: 10,
                  }}
                  onPress={() => navigation.navigate("Pokemoon")}
                >
                  <Text
                    style={{
                      color: "white",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginBottom: "auto",
                      marginTop: "auto",
                      fontSize: 15,
                      letterSpacing: 7,
                      fontWeight: "500",
                    }}
                  >
                    Back Home
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            position: "absolute",
            top: 30,
            left: 10,
            backgroundColor: "purple",
            width: 70,
            height: 20,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              marginBottom: "auto",
              marginTop: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              color: "white",
              letterSpacing: 2,
              fontSize: 12,
            }}
          >
            {pokemonEvolution.types[0].type.name}
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 30,
            right: 10,
            backgroundColor: "purple",
            width: 90,
            height: 20,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              marginBottom: "auto",
              marginTop: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              color: "white",
              letterSpacing: 2,
              fontSize: 12,
            }}
          >
            {pokemonEvolution.abilities[0].ability.name}
          </Text>
        </View>
      </>
    );
  }
}
