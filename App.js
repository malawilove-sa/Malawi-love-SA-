import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>🇲🇼 Malawi Love SA ❤️</Text>
        <Text style={styles.tagline}>Malawian Products in South Africa</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Welcome to V9!</Text>
        <Text style={styles.text}>Your trusted Malawian shop in SA.</Text>
        <Text style={styles.text}>• Chambo Fish</Text>
        <Text style={styles.text}>• Thobwa & Mangos</Text>
        <Text style={styles.text}>• Zitenje & Crafts</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => Linking.openURL('https://wa.me/27700000000')}>
        <Text style={styles.btnText}>Order on WhatsApp</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Malawi Love SA - Durban, SA</Text>
        <Text style={styles.footerText}>V9.0.0 Blue Icon Edition</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f7ff' },
  header: { backgroundColor: '#0052CC', padding: 30, paddingTop: 60, alignItems: 'center' },
  logo: { fontSize: 28, fontWeight: 'bold', color: '#fff' },
  tagline: { color: '#fff', marginTop: 8, fontSize: 16 },
  card: { backgroundColor: '#fff', margin: 20, padding: 20, borderRadius: 15, elevation: 3 },
  cardTitle: { fontSize: 22, fontWeight: 'bold', color: '#0052CC', marginBottom: 10 },
  text: { fontSize: 16, marginTop: 5 },
  btn: { backgroundColor: '#25D366', marginHorizontal: 20, padding: 18, borderRadius: 12, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  footer: { alignItems: 'center', padding: 30 },
  footerText: { color: '#888' }
});
