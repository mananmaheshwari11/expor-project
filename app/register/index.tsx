import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

type RegisterScreenProps = {
    navigation: StackNavigationProp<any>; // Define the navigation prop type
};

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validateEmail = (email: string) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSignUp = () => {
        if (!validateEmail(email)) {
            Alert.alert('Invalid Email', 'Please enter a valid email address.');
            return;
        }

        if (password.length < 6) {
            Alert.alert('Weak Password', 'Password must be at least 6 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Password Mismatch', 'Passwords do not match.');
            return;
        }

        // Proceed with signup logic
        Alert.alert('Success', 'Account created successfully!');
        // Here you can implement the actual signup logic (e.g., API call)
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Create an account so you can explore all the existing jobs</Text>

            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                placeholder="Confirm Password"
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Text style={styles.loginText}>Already have an account? Log in</Text>
            </TouchableOpacity>

            <View style={styles.socialButtons}>
                <TouchableOpacity style={styles.socialButton}>
                    <Ionicons name="logo-google" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <FontAwesome5 name="facebook" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <MaterialCommunityIcons name="apple" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1F41BB',
        marginBottom: 10
    },
    subtitle: {
        fontSize: 16,
        color: '#1F41BB',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        height: 40,
        width: '100%',
        marginVertical: 8,
        borderWidth: 1,
        padding: 10,
        borderColor: '#1F41BB',
        borderRadius: 5
    },
    button: {
        backgroundColor: '#1F41BB',
        borderRadius: 5,
        padding: 10,
        width: '100%',
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
    loginText: {
        fontSize: 16,
        color: '#1F41BB',
        marginTop: 20,
        textAlign: 'center'
    },
    socialButtons: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-around',
        width: '100%'
    },
    socialButton: {
        padding: 10
    }
});

export default RegisterScreen;