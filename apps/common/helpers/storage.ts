import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppStorage = {
    setStorage: async(name: string, value: string) => {
        try {
            await AsyncStorage.setItem(name, value)
        } catch (error) {
            console.log("An error occurs, Can't set data");
        }
    },
    getStorage: async (name: string) => {
        try {
            const value = await AsyncStorage.getItem(name)
            console.log("Get success");
            return value
        } catch (error) {
            console.log("An error occurs, Can't get data");
        }
    },
    removeStorage: async (name: string) => {
        try {
            await AsyncStorage.removeItem(name)
            console.log("Remove success ");
        } catch (error) {
            console.log("An error occurs, Can't delete data");
        }
    }
}

