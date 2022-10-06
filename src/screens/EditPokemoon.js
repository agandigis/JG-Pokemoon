import react from "react";
import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { createContact } from "../store/actions/Index";
import { fetchSingleContact } from "../store/actions/Index";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { updateContact } from "../store/actions/Index";

export default function EditQontact({ navigation, route }) {
  const { id } = route.params;
  const [formUpdate, setFormUpdate] = useState({});
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const singleContact = useSelector((state) => state.contact.singleContact);

  useEffect(() => {
    dispatch(fetchSingleContact(id))
      .then((resp) => {
        setFormUpdate(resp);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "<<<<ERROR");
      });
  }, [id]);

  const onChange = (text, name) => {
    const newUpdate = {
      age: formUpdate.age,
      firstName: formUpdate.firstName,
      lastName: formUpdate.lastName,
      photo: formUpdate.photo,
    };

    newUpdate[name] = text;
    setFormUpdate(newUpdate);
  };

  const onSubmit = (e) => {
    dispatch(updateContact(formUpdate, id))
      .then((resp) => {
        navigation.navigate("Qontact");
      })
      .catch((err) => console.log("error"));
  };

  return !loading ? (
    <>
      <View style={{ flex: 1 }}>
        <TextInput
          style={{
            height: 50,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            backgroundColor: "white",
            // borderRadius: 10,
            borderColor: "#b6b6b6",
          }}
          onChangeText={(text) => onChange(text, "firstName")}
          value={formUpdate.firstName}
          placeholder="First Name"
        />
        <TextInput
          style={{
            height: 50,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            backgroundColor: "white",
            // borderRadius: 10,
            borderColor: "#b6b6b6",
          }}
          onChangeText={(text) => onChange(text, "lastName")}
          value={formUpdate.lastName}
          placeholder="Last Name"
        />
        <TextInput
          style={{
            height: 50,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            backgroundColor: "white",
            borderColor: "#b6b6b6",
          }}
          keyboardType="numeric"
          onChangeText={(text) => onChange(text, "age")}
          value={formUpdate.age.toString()}
          placeholder="age"
        />
        <TextInput
          style={{
            height: 50,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            backgroundColor: "white",
            // borderRadius: 10,
            borderColor: "#b6b6b6",
          }}
          onChangeText={(text) => onChange(text, "photo")}
          value={formUpdate.photo}
          placeholder="photo"
        />
        <TouchableOpacity
          onPress={(e) => {
            onSubmit(e);
          }}
        >
          <View
            style={{
              height: 50,
              width: 320,
              borderRadius: 12,
              backgroundColor: "rgb(252,114,73)",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 15,
            }}
          >
            <Text
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: 18,
                lineHeight: 28,
                letterSpacing: 2,
                fontWeight: "bold",
                color: "rgb(255, 255, 255)",
              }}
            >
              Save Changes
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  ) : (
    <>
      <Text>Loading</Text>
    </>
  );
}
