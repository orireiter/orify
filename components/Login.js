import React from "react";
import { View, Text, Pressable, Linking } from "react-native";

import { getSpotifyRegisterUrl } from "../utils/spotifyUtils";

export default function Login() {
  const spotifyRegisterUrl = getSpotifyRegisterUrl();

  return (
    <View>
      <View>
        <Text />
      </View>
      <View>
        <Text>orify</Text>
      </View>
      <View>
        <Pressable onPressIn={() => Linking.openURL(spotifyRegisterUrl)}>
          <Text>Link Your Spotify Account</Text>
        </Pressable>
      </View>
    </View>
  );
}
