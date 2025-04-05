import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  Image,
  Switch,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const FormularioMusical = () => {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [artista, setArtista] = useState('');
  const [musica, setMusica] = useState('');
  const [instrumento, setInstrumento] = useState('');
  const [plataforma, setPlataforma] = useState('spotify');
  const [midia, setMidia] = useState('nenhum');
  const [freqMusica, setFreqMusica] = useState(0);
  const [freqShows, setFreqShows] = useState(0);
  const [notificacoes, setNotificacoes] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const limparFormulario = () => {
    setNome('');
    setGenero('');
    setArtista('');
    setMusica('');
    setInstrumento('');
    setPlataforma('spotify');
    setMidia('nenhum');
    setFreqMusica(0);
    setFreqShows(0);
    setNotificacoes(false);
    setNewsletter(false);
  };

  const enviarFormulario = () => {
    alert('Formulário enviado com sucesso!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Formulário Musical</Text>

      <Image
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/015/166/082/non_2x/headphone-neon-icon-png.png',
        }}
        style={styles.image}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#e3cbf7"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Gênero musical favorito"
        placeholderTextColor="#e3cbf7"
        value={genero}
        onChangeText={setGenero}
      />
      <TextInput
        style={styles.input}
        placeholder="Artista favorito"
        placeholderTextColor="#e3cbf7"
        value={artista}
        onChangeText={setArtista}
      />
      <TextInput
        style={styles.input}
        placeholder="Música favorita"
        placeholderTextColor="#e3cbf7"
        value={musica}
        onChangeText={setMusica}
      />
      <TextInput
        style={styles.input}
        placeholder="Instrumento que toca ou gostaria de tocar"
        placeholderTextColor="#e3cbf7"
        value={instrumento}
        onChangeText={setInstrumento}
      />

      <Image
        source={{
          uri: 'https://cdn.awsli.com.br/600x700/2521/2521573/produto/307361417/83ca54b114c0ef48d0f68521df3df326-a1657yuug2.jpg',
        }}
        style={styles.image2}
      />


      <Text style={styles.label}>Qual plataforma de música você utiliza?</Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={plataforma}
          onValueChange={setPlataforma}
          dropdownIconColor="#e3cbf7"
        >
          <Picker.Item label="Spotify" value="spotify" />
          <Picker.Item label="YouTube Music" value="youtube" />
          <Picker.Item label="Apple Music" value="apple" />
          <Picker.Item label="Deezer" value="deezer" />
          <Picker.Item label="Amazon Music" value="amazon" />
        </Picker>
      </View>

      
      <Image
        source={{
          uri: 'https://www.pngplay.com/wp-content/uploads/4/Vinyl-Record-Transparent-Free-PNG.png',
        }}
        style={styles.image3}
      />

      <Text style={styles.label}>Você coleciona alguma mídia física?</Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={midia}
          onValueChange={setMidia}
          dropdownIconColor="#e3cbf7"
        >
          <Picker.Item label="CD" value="cd" />
          <Picker.Item label="Vinil" value="vinil" />
          <Picker.Item label="Os dois" value="ambos" />
          <Picker.Item label="Não" value="nenhum" />
        </Picker>
      </View>

      <Image
        source={{
          uri: 'https://www.pngall.com/wp-content/uploads/13/CD-PNG-Picture.png',
        }}
        style={styles.image4}
      />

      <Text style={styles.label}>Frequência que você escuta música: {freqMusica}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={10}
        step={1}
        value={freqMusica}
        onValueChange={setFreqMusica}
        minimumTrackTintColor="#e3cbf7"
        maximumTrackTintColor="#37004b"
        thumbTintColor="#a63cf0"
      />

      <Text style={styles.label}>Frequência que vai em shows: {freqShows}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={10}
        step={1}
        value={freqShows}
        onValueChange={setFreqShows}
        minimumTrackTintColor="#e3cbf7"
        maximumTrackTintColor="#37004b"
        thumbTintColor="#a63cf0"
      />

      <Image
        source={{
          uri: 'https://projetosespeciais.com/wp-content/uploads/2019/02/dicas-para-montar-palcos.jpg',
        }}
        style={styles.image5}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Receber recomendações</Text>
        <Switch
          value={notificacoes}
          onValueChange={setNotificacoes}
          trackColor={{ false: '#37004b', true: '#a63cf0' }}
          thumbColor={notificacoes ? '#e3cbf7' : '#e3cbf7'}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.label}>Participar da newsletter</Text>
        <Switch
          value={newsletter}
          onValueChange={setNewsletter}
          trackColor={{ false: '#37004b', true: '#a63cf0' }}
          thumbColor={newsletter ? '#e3cbf7' : '#e3cbf7'}
        />
      </View>

      <Image
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/051/302/043/non_2x/neon-music-notes-3d-icon-isolated-on-the-transparent-background-free-png.png',
        }}
        style={styles.image}
      />

      <View style={styles.buttonContainer}>
        <Button title="Enviar" color="#a63cf0" onPress={enviarFormulario} />
        <View style={{ height: 10 }} />
        <Button title="Limpar" color="#37004b" onPress={limparFormulario} />
      </View>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#9404d6',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e3cbf7',
    marginBottom: 1,
    fontFamily: 'InterBlack',
  },
  input: {
    width: '100%',
    borderWidth: 3,
    borderColor: '#250136',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    color: '#e3cbf7',
    fontFamily: 'InterBlack',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    color: '#e3cbf7',
    fontFamily: 'InterBlack',
  },
  picker: {
    width: '100%',
    backgroundColor: '#e3cbf7',
    borderRadius: 10,
    marginBottom: 15,
    color: '#e3cbf7',
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 20,
  },
  switchContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 20,
  },
  image: {
    width: 130,
    height: 130,
    marginTop: 1,
  },

  image2: {
    width: 350,
    height: 110,
    marginTop: 10,
    marginBottom: 10
  },

  image3: {
    width: 300,
    height: 120,
    marginTop: 1,
    marginBottom: 1
  },

  image4: {
    width: 200,
    height: 110,
    marginTop: 1,
    marginBottom: 10
  },

  image5: {
    width: 350,
    height: 200,
    marginTop: 1,
    marginBottom: 10
  },
});

export default FormularioMusical;
