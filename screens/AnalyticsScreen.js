import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const mockAnalytics = {
  period: 'This Month',
  income: 28500,
  expenses: 14200,
  netSavings: 14300,
  change: 12.4, 
  categories: [
    { name: 'Food & Drinks', amount: 4200, percent: 29.6, color: '#F59E0B' },
    { name: 'Shopping', amount: 3800, percent: 26.8, color: '#EC4899' },
    { name: 'Subscriptions', amount: 1800, percent: 12.7, color: '#8B5CF6' },
    { name: 'Transport', amount: 1500, percent: 10.6, color: '#3B82F6' },
    { name: 'Bills', amount: 1200, percent: 8.5, color: '#10B981' },
    { name: 'Other', amount: 1700, percent: 12.0, color: '#6B7280' },
  ],
  topExpenses: [
    { title: 'Groceries (various) ', amount: 1850 },
    { title: 'New Shoes ', amount: 4200 },
    { title: 'Netflix + Spotify ', amount: 1100 },
  ],
  topIncome: [
    { title: 'Salary - January  ', amount: 22000 },
    { title: 'Freelance Project ', amount: 6500 },
  ],
};

export default function AnalyticsScreen() {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');

  const periods = ['This Month', 'Last 3 Months', 'This Year'];

  const renderCategorySegment = (item, index) => {
    const rotation = mockAnalytics.categories
      .slice(0, index)
      .reduce((sum, cat) => sum + cat.percent, 0);

    return (
      <View
        key={item.name}
        style={[
          styles.segment,
          {
            backgroundColor: item.color,
            transform: [{ rotate: `${rotation}deg` }],
          },
        ]}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <LinearGradient
        colors={['#0A0A0B', '#121215', '#0F0F11']}
        style={styles.container}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Analytics</Text>
            <View style={styles.periodSelector}>
              {periods.map(period => (
                <TouchableOpacity
                  key={period}
                  style={[
                    styles.periodButton,
                    selectedPeriod === period && styles.periodButtonActive,
                  ]}
                  onPress={() => setSelectedPeriod(period)}
                >
                  <Text
                    style={[
                      styles.periodText,
                      selectedPeriod === period && { color: '#20D561' },
                    ]}
                  >
                    {period}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Overview Card */}
          <LinearGradient
            colors={['#1A1A20', '#141418']}
            style={styles.overviewCard}
          >
            <View style={styles.overviewRow}>
              <View>
                <Text style={styles.overviewLabel}>Net Savings</Text>
                <Text style={styles.overviewValue}>
                  KES {mockAnalytics.netSavings.toLocaleString()}
                </Text>
              </View>
              <View style={[styles.changeBadge, mockAnalytics.change > 0 ? styles.changePositive : styles.changeNegative]}>
                <Ionicons
                  name={mockAnalytics.change > 0 ? 'trending-up' : 'trending-down'}
                  size={16}
                  color={mockAnalytics.change > 0 ? '#34D399' : '#F87171'}
                />
                <Text style={styles.changeText}>
                  {mockAnalytics.change > 0 ? '+' : ''}{mockAnalytics.change}%
                </Text>
              </View>
            </View>

            <View style={styles.incomeExpenseRow}>
              <View style={styles.flowItem}>
                <Text style={styles.flowLabel}>Income</Text>
                <Text style={[styles.flowValue, { color: '#34D399' }]}>
                  +KES {mockAnalytics.income.toLocaleString()}
                </Text>
              </View>
              <View style={styles.flowDivider} />
              <View style={styles.flowItem}>
                <Text style={styles.flowLabel}>Expenses</Text>
                <Text style={[styles.flowValue, { color: '#F87171' }]}>
                  -KES {mockAnalytics.expenses.toLocaleString()}
                </Text>
              </View>
            </View>
          </LinearGradient>

          {/* Category Breakdown */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Spending Breakdown</Text>

            <View style={styles.pieContainer}>
              <View style={styles.pieChart}>
                {mockAnalytics.categories.map(renderCategorySegment)}
                <View style={styles.pieCenter}>
                  <Text style={styles.pieCenterText}>100%</Text>
                </View>
              </View>

              <View style={styles.legend}>
                {mockAnalytics.categories.map(cat => (
                  <View key={cat.name} style={styles.legendItem}>
                    <View style={[styles.legendColor, { backgroundColor: cat.color }]} />
                    <Text style={styles.legendText}>
                      {cat.name} ({cat.percent.toFixed(1)}%)
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* Top Expenses & Income */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Top Expenses</Text>
            {mockAnalytics.topExpenses.map((item, i) => (
              <View key={i} style={styles.topItem}>
                <Text style={styles.topTitle}>{item.title}</Text>
                <Text style={[styles.topAmount, { color: '#F87171' }]}>
                  -KES {item.amount.toLocaleString()}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Top Income Sources</Text>
            {mockAnalytics.topIncome.map((item, i) => (
              <View key={i} style={styles.topItem}>
                <Text style={styles.topTitle}>{item.title}</Text>
                <Text style={[styles.topAmount, { color: '#34D399' }]}>
                  +KES {item.amount.toLocaleString()}
                </Text>
              </View>
            ))}
          </View>

          <View style={{ height: 100 }} />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
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
  periodSelector: {
    flexDirection: 'row',
    backgroundColor: '#141418',
    borderRadius: 20,
    padding: 4,
  },
  periodButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  periodButtonActive: {
    backgroundColor: '#20D56122',
  },
  periodText: {
    color: '#aaa',
    fontSize: 13,
    fontWeight: '600',
  },

  overviewCard: {
    marginHorizontal: 20,
    borderRadius: 28,
    padding: 24,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: '#222228',
  },
  overviewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  overviewLabel: {
    color: '#888',
    fontSize: 15,
    fontWeight: '500',
  },
  overviewValue: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 4,
  },
  changeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  changePositive: { backgroundColor: '#14532D' },
  changeNegative: { backgroundColor: '#7F1D1D' },
  changeText: {
    color: 'white',
    fontWeight: '700',
    marginLeft: 4,
    fontSize: 14,
  },
  incomeExpenseRow: {
    flexDirection: 'row',
    backgroundColor: '#0A0A0B',
    borderRadius: 16,
    padding: 16,
  },
  flowItem: { flex: 1, alignItems: 'center' },
  flowLabel: { color: '#999', fontSize: 13, marginBottom: 6 },
  flowValue: { fontSize: 18, fontWeight: '700' },
  flowDivider: {
    width: 1,
    backgroundColor: '#222',
    marginHorizontal: 20,
  },

  section: {
    marginBottom: 28,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },

  pieContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#141418',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#1E1E24',
  },
  pieChart: {
    width: 140,
    height: 140,
    borderRadius: 70,
    overflow: 'hidden',
    position: 'relative',
  },
  segment: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderWidth: 35,
    borderColor: 'transparent',
  },
  pieCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#0F0F11',
    transform: [{ translateX: -35 }, { translateY: -35 }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  pieCenterText: {
    color: '#aaa',
    fontSize: 16,
    fontWeight: '600',
  },
  legend: {
    flex: 1,
    marginLeft: 24,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  legendText: {
    color: '#ddd',
    fontSize: 14,
  },

  topItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#141418',
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#1E1E24',
  },
  topTitle: {
    color: 'white',
    fontSize: 16,
  },
  topAmount: {
    fontSize: 16,
    fontWeight: '700',
  },
});