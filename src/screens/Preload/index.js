import React, { useEffect} from 'react'
import { Text, View } from 'react-native'
import { Container, LoadingIcon } from './styles'
//import BarberLogo from '../../assets/barber.svg'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'


export default () => {
    const navigation = useNavigation() 

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token')
            //se token for diferente de nulo, se tiver conteudo
            if(token !== null) {
                //validar o token, se tiver ele salvo e logado

            } else {
                //se n tiver, manda pra pagina de login
                navigation.navigate('SignIn')
            }
               }
        checkToken()
    }, [])

    return (
        <Container>
        <Text>LOGO</Text>
        <LoadingIcon size="large" color="#FFF" />
        </Container>
    )
   
        
      
    
}
