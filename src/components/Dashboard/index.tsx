import React, { useEffect, useState } from "react";
import {
  FlatList,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import theme from "../../global/styles/theme";
import {
  GetMyTransactions,
  getMyTransactions,
} from "../../services/DigitalWalletAPI";

import { styles } from "./styles";
import { TabView, SceneMap } from "react-native-tab-view";

const Dashboard = () => {
  const [routes] = useState([
    { key: "first", title: "Tudo" },
    { key: "second", title: "Entrada" },
    { key: "third", title: "Saída" },
    { key: "fourth", title: "Futuro" },
  ]);

  const [index, setIndex] = useState<number>(0);
  const [transactions, setTransactions] = useState<GetMyTransactions[]>([]);
  const [input, setInput] = useState<GetMyTransactions[]>([]);
  const [output, setOutput] = useState<GetMyTransactions[]>([]);
  const [typeTransaction, setTypeTransaction] = useState();

  const emptyList = (text: string) => {
    return (
      <View style={styles.emptyList}>
        <Text style={styles.emptyText}>{text} =(</Text>
      </View>
    );
  };

  const AllRoute = () => (
    <FlatList
      data={transactions as [GetMyTransactions]}
      ListEmptyComponent={emptyList("Você não possui transações")}
      renderItem={renderItem}
    />
  );
  const InputRoute = () => (
    <FlatList
      data={input as [GetMyTransactions]}
      ListEmptyComponent={emptyList("Você não possui transações")}
      renderItem={renderItem}
    />
  );
  const OutputRoute = () => (
    <FlatList
      data={output as [GetMyTransactions]}
      ListEmptyComponent={emptyList("Você não possui transações")}
      renderItem={renderItem}
    />
  );

  const FutureRoute = () => emptyList("Você não possui transações");

  const renderScene = SceneMap({
    first: AllRoute,
    second: InputRoute,
    third: OutputRoute,
    fourth: FutureRoute,
  });

  const initialTransactions = async () => {
    try {
      const { data } = await getMyTransactions();
      setTransactions(data);
      const inputData = data.filter((item) => item.tipoLancamento === "C");
      setInput(inputData);
      const outputData = data.filter((item) => item.tipoLancamento === "D");
      setOutput(outputData);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem: ListRenderItem<GetMyTransactions> = ({ item, index }) => {
    return (
      <View style={styles.listContainer} key={index}>
        <View style={styles.listTextContent}>
          <View style={styles.listTextContainer}>
            <Text style={styles.listTitle}>{item.tipoTransacao}</Text>
            <Text style={styles.listSubtitle}>{item.nomePortador}</Text>
          </View>
          <View style={styles.listTextContainer}>
            <Text
              style={[
                styles.listTitle,
                {
                  color:
                    item.tipoLancamento === "D"
                      ? theme.colors.danger
                      : theme.colors.primary,
                },
              ]}
            >
              {item.tipoLancamento === "D" ? "-" : "+"}R$ {item.valorTransacao}
              ,00
            </Text>
            <Text style={styles.listSubtitle}>{item.dataTransacao}</Text>
          </View>
        </View>
        <Text>{item.tipoLancamento}</Text>
      </View>
    );
  };

  useEffect(() => {
    initialTransactions();
  }, []);

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={(props) => {
          const inputRange = props.navigationState.routes.map(
            (x: { key: string; title: string }, i: number) => i
          );
          return (
            <View style={styles.tabBar}>
              {props.navigationState.routes.map(
                (route: { key: string; title: string }, i: number) => {
                  const opacity = props.position.interpolate({
                    inputRange,
                    outputRange: inputRange.map((inputIndex: number) =>
                      inputIndex === i ? 2 : 0.5
                    ),
                  });
                  let obj;
                  if (props.navigationState.index === i) {
                    obj = {
                      borderBottomWidth: 4,
                      borderBottomColor: theme.colors.white,
                    };
                  }
                  return (
                    <TouchableOpacity
                      key={route.title}
                      style={{ ...styles.tabItem, ...obj }}
                      onPress={() => setIndex(i)}
                    >
                      <Text style={styles.tabTitle}>{route.title}</Text>
                    </TouchableOpacity>
                  );
                }
              )}
            </View>
          );
        }}
      />
    </>
  );
};

export default Dashboard;
