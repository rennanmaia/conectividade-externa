import { StatusBar } from 'expo-status-bar';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { styles } from './style';
import axios from 'axios';

export function Product({product}) {
  return (
    <View style={styles.card}>
      <Text style={styles.card_title}>{product.nome}</Text>
      <Text style={styles.card_text}>Id: {product.id}</Text>
      <Text style={styles.card_text}>Descrição {product.descricao}</Text>
      <Text style={styles.card_text}>Preço {product.preco}</Text>
      <Text style={styles.card_text}>Categoria {product.categoria_id}</Text>
    </View>
  );
}
  