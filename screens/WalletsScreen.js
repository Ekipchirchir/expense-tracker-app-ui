import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const mockWallets = [
  {
    id: '1',
    name: 'Main Wallet',
    balance: 12500,
    currency: 'KES',
    type: 'cash',
    color: '#20D561',
    icon: 'wallet-outline',
    recent: 'Salary + KES 3,000',
  },
  {
    id: '2',
    name: 'Savings',
    balance: 48000,
    currency: 'KES',
    type: 'savings',
    color: '#6366F1',
    icon: 'save-sharp',
    recent: 'Transferred + KES 10,000',
  },
  {
    id: '3',
    name: 'Travel Fund',
    balance: 15200,
    currency: 'KES',
    type: 'goal',
    color: '#F59E0B',
    icon: 'airplane-outline',
    recent: 'Flight booking - KES 4,500',
  },
  {
    id: '4',
    name: 'Emergency',
    balance: 25000,
    currency: 'KES',
    type: 'emergency',
    color: '#EF4444',
    icon: 'shield-checkmark-outline',
    recent: 'No activity',
  },
];

export default function WalletsScreen() {
  const totalBalance = mockWallets.reduce((sum, w) => sum + w.balance, 0);

  const renderWalletCard = ({ item }) => (
    <TouchableOpacity 
      style={styles.walletCard}
      activeOpacity={0.85}
      onPress={() => console.log(`Open wallet: ${item.name}`)}
    >
      <LinearGradient
        colors={['#1A1A20', '#141418']}
        style={styles.walletGradient}
      >
        <View style={styles.walletHeader}>
          <View style={[styles.walletIconContainer, { backgroundColor: `${item.color}33` }]}>
            <Ionicons name={item.icon} size={28} color={item.color} />
          </View>
          <View style={styles.walletInfo}>
            <Text style={styles.walletName}>{item.name}</Text>
            <Text style={styles.walletType}>
              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
            </Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={20} color="#777" />
          </TouchableOpacity>
        </View>

        <Text style={[styles.walletBalance, { color: item.color }]}>
          {item.currency} {item.balance.toLocaleString()}
        </Text>

        <Text style={styles.walletRecent}>{item.recent}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <LinearGradient
        colors={['#0A0A0B', '#121215', '#0F0F11']}
        style={styles.container}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Wallets</Text>
            <TouchableOpacity style={styles.addButton}>
              <Ionicons name="add" size={24} color="#20D561" />
            </TouchableOpacity>
          </View>

          {/* Total Overview Card */}
          <LinearGradient
            colors={['#1E293B', '#0F172A']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.totalCard}
          >
            <Text style={styles.totalLabel}>Net Worth</Text>
            <Text style={styles.totalBalance}>
              KES {totalBalance.toLocaleString()}
            </Text>
            <View style={styles.totalStats}>
              <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: '#34D399' }]}>+KES 8,200</Text>
                <Text style={styles.statLabel}>This month </Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: '#F87171' }]}>-KES 2,300</Text>
                <Text style={styles.statLabel}>Expenses</Text>
              </View>
            </View>
          </LinearGradient>

          {/* Wallets List */}
          <Text style={styles.sectionTitle}>Your Wallets</Text>

          <FlatList
            data={mockWallets}
            renderItem={renderWalletCard}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            contentContainerStyle={styles.walletsList}
          />

          {/* Add New Wallet Prompt */}
          <TouchableOpacity 
            style={styles.addNewCard}
            activeOpacity={0.8}
          >
            <View style={styles.addNewIcon}>
              <Ionicons name="add-circle-outline" size={32} color="#20D561" />
            </View>
            <View>
              <Text style={styles.addNewTitle}>Create New Wallet</Text>
              <Text style={styles.addNewSubtitle}>Savings goal, travel, business, etc.</Text>
            </View>
          </TouchableOpacity>

          <View style={{ height: 100 }} />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 26,
    fontWeight: '700',
  },
  addButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#20D56122',
    justifyContent: 'center',
    alignItems: 'center',
  },

  totalCard: {
    marginHorizontal: 20,
    borderRadius: 28,
    padding: 28,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#334155',
  },
  totalLabel: {
    color: '#94A3B8',
    fontSize: 15,
    fontWeight: '500',
  },
  totalBalance: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 12,
  },
  totalStats: {
    flexDirection: 'row',
    backgroundColor: '#0F172A',
    borderRadius: 16,
    padding: 16,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
  },
  statLabel: {
    color: '#64748B',
    fontSize: 13,
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#334155',
    marginHorizontal: 20,
  },

  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 20,
    marginBottom: 16,
  },

  walletsList: {
    paddingHorizontal: 20,
  },
  walletCard: {
    marginBottom: 16,
    borderRadius: 20,
    overflow: 'hidden',
  },
  walletGradient: {
    padding: 20,
  },
  walletHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  walletIconContainer: {
    width: 52,
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  walletInfo: {
    flex: 1,
  },
  walletName: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  walletType: {
    color: '#94A3B8',
    fontSize: 13,
    marginTop: 2,
  },
  walletBalance: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  walletRecent: {
    color: '#64748B',
    fontSize: 14,
  },

  addNewCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#141418',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#1E293B',
    borderStyle: 'dashed',
  },
  addNewIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#20D56122',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  addNewTitle: {
    color: '#20D561',
    fontSize: 18,
    fontWeight: '600',
  },
  addNewSubtitle: {
    color: '#64748B',
    fontSize: 13,
    marginTop: 2,
  },
});