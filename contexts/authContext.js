import React, { useContext, useState, useEffect } from "react";
import { Linking, Alert, View, Text } from "react-native";

import { storeData, getData } from "../utils/storageUtils";
import { fetchSpotifyTokens } from "../utils/spotifyUtils";
import CONF from "../conf";

export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!userData) {
      getData("spotifyAccount")
        .then((accountData) => {
          setUserData(accountData);
        })
        .then(() => setIsLoading(false));
    }
  });

  useEffect(() => {
    if (!userData) {
      const subscription = Linking.addEventListener("url", handleUrlCallback);

      return () => {
        subscription.remove();
      };
    }
  }, [userData]);

  const handleUrlCallback = async ({ url }) => {
    let urlSplittedArray = url.split(`${CONF.SPOTIFY_REDIRECT_URI}/?code=`);
    let codeStr = urlSplittedArray[1];
    if (!codeStr) {
      Alert.alert("Error", "Something went wrong when returning from Spotify");
      return;
    }

    fetchSpotifyTokens(codeStr)
      .then((spotifyAccountDetails) => {
        storeData("spotifyAccount", spotifyAccountDetails);
        setUserData(spotifyAccountDetails);
      })
      .catch((error) => Alert.alert("Error", error));
    // todo if success, redirect to homepage, otherwise alert error.
  };

  const authContext = {
    userData,
  };

  if (isLoading) {
    return (
      <View>
        <Text>Loading Loading Loading Loading Loading Loading Loading</Text>
        <Text>Loading Loading Loading Loading Loading Loading Loading</Text>
        <Text>Loading Loading Loading Loading Loading Loading Loading</Text>
        <Text>Loading Loading Loading Loading Loading Loading Loading</Text>
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
}
