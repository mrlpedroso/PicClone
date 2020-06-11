import styled from 'styled-components/native'
import {StatusBar} from 'react-native';


export const Wrapper = styled.SafeAreaView`
    background: #000;
    flex: 1;
    padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px
`

export const Header = styled.View`
    height: 50px;
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
`

export const BalanceContainer = styled.View``;

export const BalanceTittle = styled.Text`
    color: rgba(255,255,255,0.8);
    font-size: 14px;
    text-align: center;
`;

export const Balance = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 20px;
`;

export const Container = styled.ScrollView``;