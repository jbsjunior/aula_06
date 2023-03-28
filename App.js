import React from 'react'; //biblioteca base do react estrutura do react pra funcionar app
import {View, StyleSheet} from 'react-native'; //importando biblioteca de componentes react-native 
import BotaoProps from './/components/BotaoProps.js';

const App =() =>{

  const handlePress =() =>{

    console.log ('Botão pressionado!');
  };

    //classe container sendo chamada, estilo
  return (

      <View style={styles.container}> 

        <BotaoProps 
        label="Oi" 
        corFundo={"green"} 
        acao={handlePress}/>
        <br/>
    <BotaoProps 
        label="Hi" 
        corFundo={"red"} 
        acao={handlePress}/>

      </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;