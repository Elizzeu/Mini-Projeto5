import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';



interface Atividade {
  nome: string;
  responsavel: string;
  data: string;
  descricao: string;
}

const DetalhesAtividade = ({ route }: any) => {
    const navigation = useNavigation();
  const { atividade } = route.params; // Recebe os dados da atividade da Listagem

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{atividade.nome}</Text>
      <Text style={styles.text}>Responsável: {atividade.responsavel}</Text>
      <Text style={styles.text}>Data: {atividade.data}</Text>
      <Text style={styles.text}>Descrição: {atividade.descricao}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default DetalhesAtividade;