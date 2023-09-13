import React from 'react';
import { ScrollView, View, StyleSheet} from 'react-native';
import { Text, Button, AppBar, TextInput, HStack } from "@react-native-material/core";
import Strapi from 'strapi-sdk-js';
import axios from 'axios';


const strapi = new Strapi({url:"https://sci01-ter-jne.ufca.edu.br/cppgi/api/avaliacoes/2370/1/TODAS"});

export default function App() {
  const [dados, setDados] = React.useState([]);

  return (
    <View>
      <Button
        title="Pegar dados"
        style = {{marginTop: 40}}
        onPress={ async () => {
          const {data} = await axios.get("https://sci01-ter-jne.ufca.edu.br/cppgi/api/avaliacoes/2370/1/TODAS");
          setDados(data);
        }}
      />
      <ScrollView>
        {dados.map(item => {
          return <Text key={item.id} style={styles.textWithOutline}>{item.titulo}</Text>;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWithOutline: {
    margin: 10,
    fontWeight: 'bold',
    color: 'white', // Cor do texto
    textShadowColor: 'black', // Cor do contorno
    textShadowOffset: { width: 2, height: 2 }, // Deslocamento do contorno (x, y)
    textShadowRadius: 5, // Raio do contorno
  }
})
