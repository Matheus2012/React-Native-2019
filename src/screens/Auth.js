import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ImageBackground,
    TouchableOpacity,
    Alert
} from 'react-native'
import commonStyles from '../commonStyles'
import backgroundImage from '../../assets/imgs/imagem-tela-login.jpg'

export default class Auth extends Component {
    // Adiciononar mais campos ao state, vanStage = true se
    // o cadastro for de van, userStageNew = true se o cadastro for de usuario
    // Carregar dinâmicamente os campos do cadastro de van ao selecionar cadastro de van
    // checkbox
    state = {
        userStageNew: false,
        vanStage: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
    signinOrSignup = () => {
        if (this.state.userStageNew) {
            Alert.alert('Sucesso!', 'Criar conta')
        } else {
            Alert.alert('Sucesso!', 'Logar')
        }
    }
    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <Text style={styles.title}></Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}>
                        {this.state.userStageNew ? 'Crie a sua conta' : 'Informe seus dados'}
                    </Text>
                    {this.state.userStageNew &&
                        <TextInput placeholder='Nome' style={styles.input}
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })} />}
                    <TextInput placeholder='E-mail' style={styles.input}
                        value={this.state.email} onChangeText={email => this.setState({ email })} />
                    <TextInput placeholder='Senha' style={styles.input}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })} />
                    {this.state.stageNew &&
                        <TextInput placeholder='Confirmação'
                            style={styles.input} value={this.state.confirmPassword}
                            onChangeText={confirmPassword => this.setState({ confirmPassword })} />}
                    <TouchableOpacity onPress={this.signinOrSignup}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? 'Registrar-se' : 'Entrar'}
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity style={{ padding: 10 }}
                    onPress={() => this.setState({
                        stageNew: !this.state.stageNew
                    })}>
                    <Text style={styles.buttonText}>
                        {this.state.stageNew ? 'Já possuí uma conta?' : 'Crie uma conta'}
                    </Text>

                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontFamily:commonStyles.title.fontFamily,
        color:commonStyles.colors.secondary,
        fontSize:70,
        marginBottom:10,
    },
    subtitle:{
        fontFamily:'Lato',
        color:'#FFF',
        fontSize:20,
    },
    formContainer:{
        backgroundColor:'rgba(0,0,0,0.7)',
        padding:20,
        width:'90%',
        borderRadius:1
    },
    input:{
        marginTop:10,
        backgroundColor:'#FFF'
    },
    button:{
        backgroundColor:"#080",
        marginTop:10,
        padding:10,
        alignItems:'center'
    },
    buttonText:{
        fontFamily:'Lato',
        color:'#FFF',
        fontSize:20
    }
})