import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen({ navigation }) {
  const [darkMode, setDarkMode] = React.useState(true);
  const [notifications, setNotifications] = React.useState(true);
  const [biometrics, setBiometrics] = React.useState(true);

  return (
    <LinearGradient
      colors={['#0A0A0B', '#121215', '#0F0F11']}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
     
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation?.goBack?.()}>
            <Ionicons name="chevron-back" size={26} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Settings</Text>
          <View style={{ width: 26 }} /> 
        </View>

        
        <TouchableOpacity style={styles.profileCard} activeOpacity={0.8}>
          <LinearGradient
            colors={['#1A1A20', '#141418']}
            style={styles.profileGradient}
          >
            <Image
              source={require('../assets/profile-pic.jpg')} 
              style={styles.profileImage}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Emmanuel Kipchirchir</Text>
              <Text style={styles.profileEmail}>manuuchirchir50@gmail.com</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#666" />
          </LinearGradient>
        </TouchableOpacity>

        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General</Text>

          <SettingItem
            icon="moon-outline"
            label="Dark Mode"
            right={
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: '#333', true: '#20D561' }}
                thumbColor={darkMode ? '#fff' : '#aaa'}
              />
            }
          />

          <SettingItem
            icon="notifications-outline"
            label="Push Notifications"
            right={
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{ false: '#333', true: '#20D561' }}
                thumbColor={notifications ? '#fff' : '#aaa'}
              />
            }
          />

          <SettingItem
            icon="finger-print-outline"
            label="Biometric Login"
            right={
              <Switch
                value={biometrics}
                onValueChange={setBiometrics}
                trackColor={{ false: '#333', true: '#20D561' }}
                thumbColor={biometrics ? '#fff' : '#aaa'}
              />
            }
          />
        </View>

        {/* Security Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Security</Text>

          <SettingItem
            icon="lock-closed-outline"
            label="Change PIN / Password"
            onPress={() => console.log('Navigate to change PIN')}
          />

          <SettingItem
            icon="shield-checkmark-outline"
            label="Two-Factor Authentication"
            right={<Text style={styles.statusActive}>Enabled</Text>}
          />

          <SettingItem
            icon="key-outline"
            label="Trusted Devices"
            onPress={() => console.log('Navigate to trusted devices')}
          />
        </View>

        {/* Data & Support */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data & Support</Text>

          <SettingItem
            icon="document-text-outline"
            label="Export Transaction Data"
            onPress={() => console.log('Export data')}
          />

          <SettingItem
            icon="help-circle-outline"
            label="Help & FAQ"
            onPress={() => console.log('Navigate to help')}
          />

          <SettingItem
            icon="mail-outline"
            label="Contact Support"
            onPress={() => console.log('Contact support')}
          />
        </View>

        {/* Logout */}
        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.8}
          onPress={() => console.log('Logout pressed')}
        >
          <Ionicons name="log-out-outline" size={22} color="#F87171" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <View style={{ height: 60 }} />
      </ScrollView>
    </LinearGradient>
  );
}


function SettingItem({ icon, label, right, onPress }) {
  return (
    <TouchableOpacity
      style={styles.settingRow}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <View style={styles.settingIconContainer}>
        <Ionicons name={icon} size={22} color="#aaa" />
      </View>
      <Text style={styles.settingLabel}>{label}</Text>
      {right || <Ionicons name="chevron-forward" size={20} color="#444" />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 5,
    paddingBottom: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
  },

  profileCard: {
    marginHorizontal: 20,
    marginBottom: 28,
    borderRadius: 24,
    overflow: 'hidden',
  },
  profileGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#20D56180',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  profileName: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  profileEmail: {
    color: '#888',
    fontSize: 14,
    marginTop: 3,
  },

  section: {
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: '#777',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },

  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#141418',
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#1E1E24',
  },
  settingIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#1A1A20',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  settingLabel: {
    color: 'white',
    fontSize: 16,
    flex: 1,
  },
  statusActive: {
    color: '#20D561',
    fontWeight: '600',
    fontSize: 14,
  },

  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F0F0F',
    borderRadius: 16,
    padding: 18,
    marginHorizontal: 20,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#3F1A1A',
  },
  logoutText: {
    color: '#F87171',
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 12,
  },
});