import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';

const mockData = {
  balance: 12500,
  currency: "KES",
  income: 3500,
  expenses: 1400,
  changePercent: 3.5,
  transactions: [
    { id: '1', title: "Groceries", category: "Shopping", type: "expense", amount: 650, date: "Today", time: "14:32" },
    { id: '2', title: "Salary - January", category: "Salary", type: "income", amount: 3000, date: "Yesterday", time: "09:15" },
    { id: '3', title: "Netflix", category: "Subscriptions", type: "expense", amount: 600, date: "Monday", time: "11:05" },
    { id: '4', title: "Coffee", category: "Food & Drinks", type: "expense", amount: 180, date: "Monday", time: "08:40" },
    { id: '5', title: "Rent", category: "Rent & Bills", type: "expense", amount: 18000, date: "Sunday", time: "20:40" },
  ],
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
    <LinearGradient
      colors={['#0a0a0bf4', '#121215', '#0f0f11f8']}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good afternoon,</Text>
            <Text style={styles.username}>Emmanuel 👋</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="notifications-outline" size={24} color="#aaa" />
              <View style={styles.notifBadge} />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.iconButton}  >
            <Image
                source={require('../assets/profile-pic.jpg')} 
                style={{
                width: 36,
                height: 36,
                borderRadius: 18,           
                borderWidth: 1.5,
                borderColor: '#20D56133',   
                }}
            />
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Balance Card */}
        <LinearGradient
          colors={['#1A1A20', '#141418']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.balanceCard}
        >
          <Text style={styles.balanceLabel}>Total Balance</Text>
          
          <Text style={styles.balanceValue}>
            {mockData.currency} {mockData.balance.toLocaleString()}
          </Text>

          <View style={styles.trendContainer}>
            <View style={[styles.trendBadge, { backgroundColor: '#20D56133' }]}>
              <Ionicons name="trending-up" size={16} color="#20D561" />
              <Text style={styles.trendText}>+{mockData.changePercent}%</Text>
            </View>
            <Text style={styles.trendPeriod}>This month </Text>
          </View>

          <View style={styles.incomeExpenseRow}>
            <View style={styles.flowItem}>
              <Text style={styles.flowLabel}>Income</Text>
              <Text style={[styles.flowValue, { color: '#34D399' }]}>
                +{mockData.currency} {mockData.income.toLocaleString()}
              </Text>
            </View>
            
            <View style={styles.flowDivider} />

            <View style={styles.flowItem}>
              <Text style={styles.flowLabel}>Expenses</Text>
              <Text style={[styles.flowValue, { color: '#F87171' }]}>
                -{mockData.currency} {mockData.expenses.toLocaleString()}
              </Text>
            </View>
          </View>
        </LinearGradient>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionBtn}>
            <View style={[styles.actionIcon, { backgroundColor: '#20D56133' }]}>
              <Ionicons name="add" size={28} color="#20D561" />
            </View>
            <Text style={styles.actionText}>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn}>
            <View style={[styles.actionIcon, { backgroundColor: '#6366F133' }]}>
              <Ionicons name="stats-chart" size={24} color="#6366F1" />
            </View>
            <Text style={styles.actionText}>Analytics</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn}>
            <View style={[styles.actionIcon, { backgroundColor: '#F59E0B33' }]}>
              <Ionicons name="wallet-outline" size={24} color="#F59E0B" />
            </View>
            <Text style={styles.actionText}>Wallets</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Transactions */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Activities</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.transactionsContainer}>
          {mockData.transactions.map(item => (
            <TouchableOpacity key={item.id} style={styles.transactionItem} activeOpacity={0.7}>
              <View style={styles.txLeft}>
                <View style={[
                  styles.categoryIcon,
                  { backgroundColor: item.type === 'income' ? '#14532D' : '#7F1D1D' }
                ]}>
                  <Ionicons 
                    name={item.type === 'income' ? "arrow-down" : "arrow-up"} 
                    size={18} 
                    color={item.type === 'income' ? "#34D399" : "#F87171"} 
                  />
                </View>

                <View>
                  <Text style={styles.txTitle}>{item.title}</Text>
                  <Text style={styles.txSubtitle}>{item.category} • {item.date}, {item.time}  </Text>
                </View>
              </View>

              <Text style={[
                styles.txAmount,
                { color: item.type === "income" ? '#34D399' : '#F87171' }
              ]}>
                {item.type === "income" ? '+' : '-'}
                {mockData.currency} {item.amount.toLocaleString()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 80 }} />
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
    paddingTop: 5,
    paddingHorizontal: 20,
    marginBottom: 28,
  },
  greeting: {
    color: '#aaa',
    fontSize: 14,
  },
  username: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconButton: {
    position: 'relative',
  },
  notifBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#EF4444',
    borderWidth: 1.5,
    borderColor: '#0A0A0B',
  },

  balanceCard: {
    marginHorizontal: 20,
    borderRadius: 28,
    padding: 28,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: '#222228',
  },
  balanceLabel: {
    color: '#888',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 6,
  },
  balanceValue: {
    color: 'white',
    fontSize: 26,
    fontWeight: '700',
    letterSpacing: -0.5,
    marginBottom: 12,
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  trendBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 8,
  },
  trendText: {
    color: '#20D561',
    fontWeight: '700',
    marginLeft: 4,
    fontSize: 14,
  },
  trendPeriod: {
    color: '#666',
    fontSize: 13,
  },
  incomeExpenseRow: {
    flexDirection: 'row',
    backgroundColor: '#0A0A0B',
    borderRadius: 16,
    padding: 16,
  },
  flowItem: {
    flex: 1,
    alignItems: 'center',
  },
  flowLabel: {
    color: '#999',
    fontSize: 13,
    marginBottom: 6,
  },
  flowValue: {
    fontSize: 18,
    fontWeight: '700',
  },
  flowDivider: {
    width: 1,
    backgroundColor: '#222',
    marginHorizontal: 20,
  },

  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  actionBtn: {
    alignItems: 'center',
    width: '30%',
  },
  actionIcon: {
    width: 64,
    height: 64,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    color: '#ddd',
    fontSize: 13,
    fontWeight: '600',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  seeAll: {
    color: '#20D561',
    fontWeight: '600',
    fontSize: 15,
  },

  transactionsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#141418',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1E1E24',
  },
  txLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  categoryIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  txTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 3,
  },
  txSubtitle: {
    color: '#777',
    fontSize: 13,
  },
  txAmount: {
    fontSize: 17,
    fontWeight: '700',
  },
});