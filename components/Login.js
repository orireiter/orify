import React from "react";
import { Alert, View, Text, Pressable, Linking } from "react-native";

import CONF from "../conf";
import { storeData } from "../utils/storageUtils";
import {
  getSpotifyRegisterUrl,
  fetchSpotifyTokens,
} from "../utils/spotifyUtils";

const handleUrlCallback = async ({ url }) => {
  let urlSplittedArray = url.split(`${CONF.SPOTIFY_REDIRECT_URI}/?code=`);
  let codeStr = urlSplittedArray[1];
  if (!codeStr) {
    Alert.alert("Error", "Something went wrong when returning from Spotify");
    return;
  }

  fetchSpotifyTokens(codeStr)
    .then((spotifyAccountDetails) =>
      storeData("spotifyAccount", spotifyAccountDetails)
    )
    .then(() => Linking.removeEventListener("url", handleUrlCallback))
    .catch((error) => Alert.alert("Error", error));

  // todo if success, redirect to homepage, otherwise alert error.
};

export default function Login() {
  Linking.addEventListener("url", handleUrlCallback);

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
