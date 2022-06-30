import React from "react";
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking } from 'react-native';

const colorGithub = '#010409';
const colorFontGithub ='#C9D1D9';
const colorDarkGithub ='#4F565E';
const imageProfileGithub = 'https://media-exp2.licdn.com/dms/image/C5603AQFjBHabz5KzHQ/profile-displayphoto-shrink_200_200/0/1517229533357?e=1661990400&v=beta&t=2ahxHw2t5HSr0_DsdwD-gbDfYKnxk6ZEqLfd1K8pufk';
const urlToMyGithub = 'https://github.com/Marx-Nascimento';


const App = () => {
    const handlePressGoToGithub = async () => { 
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub );
        if (res) {
            console.log('Link aprovado');
             console.log('Abrindo link....');
             await Linking.openURL(urlToMyGithub);
        }
    };
        return (
            <SafeAreaView style={style.container}>
             <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>

        <View style={style.content}> 
            <Image
             accessibilityLabel="Marx com fundo branco"
             style={style.avatar} 
             source= {{uri:imageProfileGithub}}/>
             <Text 
             accessibilityLabel= "Nome: Marx Nascimento" 
             style={[style.defaultText, style.name]}>Marx Nascimento</Text>
             <Text 
             accessibilityLabel= "Nickname: Marx Nascimento"
             style={[style.defaultText, style.nickname]}>Marx-Nascimento</Text>
             <Text 
             accessibilityLabel= "Descrição:Arquiteto e Urbanista || Estudante de Análise e Desenvolvimento de Sistemas"
             style={[style.defaultText, style.description]}>Arquiteto e Urbanista || Estudante de Análise e Desenvolvimento de Sistemas
             </Text>
             <Pressable onPress={handlePressGoToGithub}>
                <View style={style.button}>
                    <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
                </View>
             </Pressable>
        </View>
        </SafeAreaView>
      );
    };

    export default App;

    const style = StyleSheet.create({
        container: {
            backgroundColor: colorGithub,
            flex:1, //expandi para tela inteira 
            justifyContent: 'center',
            alignItems: 'center',
            //flexDirection: 'row',
        },
        content:{
            alignItems: 'center',
            padding: 20,
        },

        avatar:{
            height: 200,
            width: 200,
            borderRadius: 100,
            borderColor: 'white',
            borderWidth:2,
        },
        defaultText:{
            color: colorFontGithub,
        },
        name:{
            marginTop: 20,
            fontWeight: 'bold',
            fontSize: 24,
        },
        nickname: {
            fontSize: 18,
            color: colorDarkGithub,
        },
        description: {
            fontWeight:'bold',
            fontSize: 14,
        },
        button: {
            marginTop: 20, 
            backgroundColor: colorDarkGithub,
            borderRadius: 10,
            padding: 20,
        },
        textButton: {
            fontWeight:'bold',
            fontSize: 16,
        },
        
        });
