import { ActivityIndicator, FlatList, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderWithNotifications } from "./components/HeaderWithNotifications";
import { useHomeController } from "./Home.controller";
import { getWP } from "../../utils/dimensions";
import { UserItem } from "../../components";

const Home = () => {
  const { users, loading, handleGoToDetail } = useHomeController();

  return (
    <View style={styles.container}>
      <HeaderWithNotifications />
      <View style={styles.userListContainer}>
        {loading === "loading" && <ActivityIndicator />}
        {users && (
          <FlatList
            data={users}
            renderItem={({ item }) => (
              <UserItem user={item} handleGoToDetail={handleGoToDetail} />
            )}
            keyExtractor={(item) => String(item.contactId)}
          />
        )}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { backgroundColor: "#FFF", flex: 1 },
  userListContainer: {
    paddingTop: getWP(4),
  },
});
