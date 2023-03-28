import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BotaoProps = ({ label, corFundo, acao })=>{
    const botaoStyle = {
        backgroundColor: corFundo,
        padding:10,
        borderRadius: 5,
    };

    return(
        <TouchableOpacity onPress={acao} style={botaoStyle}>
            <text>{label}</text>
        </TouchableOpacity>
    );
};

export default BotaoProps;