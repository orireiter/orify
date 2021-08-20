import React from "react";
import { View, Text, Pressable, Linking } from "react-native";
import CONF from "../conf";

const SPOTIFY_REGISTER_URL = `${CONF.SPOTIFY_AUTH_URL}?client_id=${CONF.SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${CONF.SPOTIFY_REDIRECT_URI}&scope=${CONF.SPOTIFY_RELEVANT_AUTH_SCOPE}`;

export default function Login() {
  Linking.addEventListener("url", ({ url }) => {
    console.log(url);
  });

  return (
    <View>
      <View>
        <Text />
      </View>
      <View>
        <Text>orify</Text>
        <Text>ori</Text>
      </View>
      <View>
        <Pressable onPressIn={() => Linking.openURL(SPOTIFY_REGISTER_URL)}>
          <Text>Link Your Spotify Account</Text>
        </Pressable>
      </View>
    </View>
  );
}
