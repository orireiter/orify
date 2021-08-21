import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, valueJson) => {
  try {
    const valueStr = JSON.stringify(valueJson);
    await AsyncStorage.setItem(key, valueStr);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
    throw e;
  }
};
