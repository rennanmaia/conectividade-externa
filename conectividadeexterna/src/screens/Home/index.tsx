import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Product } from '../../components/Product';
import { styles } from './style';
import axios from 'axios';

  export function Home() {

    const [ produtos, setProdutos ] = useState(true);
  

    const getProdutos = async () => {
      try {
        const response = await fetch(
          'http://172.31.255.7:3000/produtos',
        );
        const json = await response.json();
        console.log(json);
        setProdutos(json);
      } catch (error) {
        console.error(error);
      }
    };

  getProdutos();

  return (
    <View style={styles.container}>
      <Text>Listagem de produtos</Text>

      <ScrollView style={styles.product_list}>
        {produtos.map((item, index) => {
            return (
                <View key={index}>
                    <Product product={item} />
                </View>
            );
        })}
      </ScrollView>      
    </View>
  );
}