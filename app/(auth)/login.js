import React, {  useState  }  from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    KeyboardAvoidView,
    Platform,
    ActivityIndicator,
} from 'react-native';
import { useAuth }  from '../ .. /contexts/AuthContext';
import { Link }  from 'expo-router';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [passaword, setPassaword] = useState('');
    const [loading, setLoading] = useState(false);
    const {  signIn } = useAuth();


    const handlelogin = async 
}aimport React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator,
} from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'expo-router';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { signIn } = useAuth();

    const handleLogin = async () => {
        if ( !email || !password) {
            Alert.alert('Erro', 'Preencha todos os campos');
            return;
        }

        setLoading(true);
        try {
            const result = await signIn(email,password)

            if (!result.success) {
                Alert.alert('Erro', result.message || 'Falha ao fazer login');
            }
        }catch (error) {
            Alert.alert('Erro', 'Falha ao fazer login');
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
        style={StyleSheet.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={StyleSheet.content}/>
            <Text style={StyleSheet.emoji}>🤣</Text>
            <Text style={StyleSheet.title}>Bem-vindo!</Text>
            <Text style={StyleSheet.subtitle}>Faça o login para continuar</Text>

            <TextInput
            style={StyleSheet.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            editable={!loading}
            />

            <TextInput
            style={StyleSheet.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            editable={!loading}
            />

            
        </KeyboardAvoidingView>
    )
}