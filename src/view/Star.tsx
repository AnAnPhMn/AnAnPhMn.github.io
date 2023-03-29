import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

interface Props {
  navigation: any;
}

const Star: React.FC<Props> = ({ navigation }) => {
  const [countdown, setCountdown] = useState<number>(30);
  const timeId = useRef<NodeJS.Timeout>();
  useEffect(() => {
    timeId.current = setInterval(() => {
      setCountdown((prevState) => prevState - 1);
    }, 1000);
  }, []);
  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timeId.current);
      navigation.navigate("Loading");
    }
  }, [countdown]);

  return (
    <View style={{ height: 900, backgroundColor: "#EAF0F8" }}>
      <View style={{ justifyContent: "center" }}>
        <Image style={styles.Aqua} source={require("../images/aquafina.png")} />
        <Image
          style={styles.chairong}
          source={require("../images/chairong.png")}
        />

        <ImageBackground
          style={styles.bgxoay}
          source={require("../images/bgxoay2.png")}
        />

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Huongdan");
            }}
          >
            <Image
              style={{ width: 150, height: 18, marginTop: 65, marginLeft: 30 }}
              source={require("../images/huongdan.png")}
            />
          </TouchableOpacity>

          <Image
            style={{ width: 80, height: 65, marginLeft: 120, marginTop: 50 }}
            source={require("../images/tramtaisinhvuong.png")}
          />
        </View>

        <Image
          style={{ width: 280, height: 280, alignSelf: "center" }}
          source={require("../images/boxthanhhang.png")}
        />
        <Image
          style={{ width: 250, height: 33, alignSelf: "center" }}
          source={require("../images/chainhuarong.png")}
        />

        <View
          style={{ flexDirection: "row", marginTop: 15, alignSelf: "center" }}
        >
          <Text
            style={{ color: "#707172", fontWeight: "bold", paddingRight: 5 }}
          >
            Tự động kết thúc sau:
          </Text>
          <Text style={{ color: "red", fontWeight: "bold", paddingRight: 5 }}>
            {countdown}
          </Text>
          <Text style={{ color: "red", fontWeight: "bold", paddingRight: 5 }}>
            GIÂY NỮA
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Welcome");
          }}
        >
          <Image
            style={styles.btnKetthuc}
            source={require("../images/end.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Aqua: {
    width: 132,
    height: 43,
    marginTop: 50,
    alignSelf: "center",
  },
  chairong: {
    width: 330,
    height: 23,
    marginTop: 15,
    alignSelf: "center",
  },
  bgxoay: {
    position: "absolute",
    width: 380,
    height: 430,
    alignSelf: "center",
    marginTop: 50,
    backgroundColor: "white",
    borderRadius: 15,
  },

  btnKetthuc: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 20,
  },
});
export default Star;
