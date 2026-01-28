import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';


const HelpScreen = () => {

    const socialMedia = [
        { name: 'Facebook', icon:'logo-facebook', url: 'https://www.facebook.com/walletoapp' },
        { name: 'Twitter', icon:"logo-twitter", url: 'https://www.twitter.com/walletoapp' },
        { name: 'Instagram', icon:"logo-instagram", url: 'https://www.instagram.com/walletoapp' },
    ]
    const FAQs =[
        { question: '1. How do I create an account?', answer: 'To create an account, click on the Sign Up button on the landing page and fill in the required details.' },
        { question: '2. How to reset my password?', answer: 'To reset your password, go to the login screen and click on Forgot Password. Follow the instructions sent to your email.' },
        { question: '3. How to add a new wallet?', answer: 'To add a new wallet, navigate to the Wallets tab and click on the Add Wallet button. Fill in the wallet details and save.' },
        { question: '4. How to track expenses?', answer: 'To track expenses, go to the Home screen and click on the Add Expense button. Enter the expense details and save.' },
    ]

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0A0A0B' }}>
    <LinearGradient
              colors={['#0a0a0bf4', '#121215', '#0f0f11f8']}
              style={styles.container}
            >
        <View style={styles.container}>
         <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation?.goBack?.()}>
                <Ionicons name="chevron-back" size={26} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Help & FAQs</Text>
            <View style={{ width: 26 }} /> 
         </View>
         <View style={styles.socialMediaContainer}>
            <Text style={styles.sectionTitle}>Social Media</Text>
            {socialMedia.map((social, index) => (
                <TouchableOpacity key={index} style={styles.socialButton}>
                    <Ionicons name={social.icon} size={24} color="white" style={{ marginRight: 10 }} />
                    <Text style={styles.socialButtonText}>{social.name}</Text>
                </TouchableOpacity>
            ))}
         </View>

         <View style={styles.FAQContainer}>
            <Text style ={styles.sectionTitle}>Frequently Asked Questions</Text>
            {FAQs.map((faq, index) => (
                <View key = {index} style={{marginBottom: 16}}>
                    <Text style={{color: "white", fontSize: 16, fontWeight: "700", marginBottom: 4}}>{faq.question}</Text>
                    <Text style={{color: "#CCCCCC", fontSize: 14}}>{faq.answer}</Text>
                </View>
            ))}
         </View>
        </View>
        </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        //backgroundColor: "#0A0A0B",
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
    socialMediaContainer : {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    sectionTitle : {
        color: "white",
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 12,
    },
    socialButton : {
        flexDirection: "row",
        backgroundColor: "#1E1E1E",
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginBottom: 12,
    },
    socialButtonText : {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 20,
    },
    FAQContainer : {
        
        paddingHorizontal: 20,
        marginTop: 30,
        marginBottom: 20,
        backgroundColor:"#1E1E1E",
        borderRadius: 12,
        padding: 20,
        marginHorizontal: 13,
    }

})

export default HelpScreen