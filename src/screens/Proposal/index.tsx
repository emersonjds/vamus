import React, { useEffect, useState } from 'react';
import { Box, Container } from '../../components/Spacing';
import { Button, Divider, Text, TextInput } from 'react-native-paper';
import { Alert, ScrollView } from 'react-native';
import { Switch } from 'react-native-paper';
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { marginBottom } from 'styled-system';
import { useDispatch } from 'react-redux';
import { addNewTrip } from '../../redux/slices/tripSlice';
import { AntDesign } from '@expo/vector-icons';
import uuid from 'react-native-uuid';



const Proposal: React.FC = () => {
  const [packageName, setPackageName] = useState('Espanha para Autistas');

  const [date, setDate] = useState(new Date());

  const [checked, setChecked] = React.useState(false);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [isSwitchOn2, setIsSwitchOn2] = React.useState(false);
  const [expanded, setExpanded] = React.useState(true);
  const [stars, setStars] = useState(3);
  const [valueTrip, setValueTrip] = useState(1500);
  const navigate = useNavigation();
  const [tripPeople, setTripPeople] = useState(20)


  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2);
  const handlePress = () => setExpanded(!expanded);

  const dispatch = useDispatch();

  let destiny = {
    id: uuid.v4(),
    title: 'Role de Rodas - Holanda',
    uri: 'https://www.eurodicas.com.br/wp-content/uploads/2019/10/melhores-cidades-para-morar-na-holanda.jpg',
    views: 300,
    pp: 'R$ 1.650,00',
    onPress: () => { },
    country: 'Holanda',
    icon: <AntDesign name="flag" size={24} color="black" />,
  }




  useEffect(() => {
    if (packageName) {
      console.log(packageName)
    }

  }, [packageName])

  return (
    <>
      <Container
        style={{
          marginTop: 0
        }}
      >
        <Text>
          Aqui voce adiciona os dados para criar seu pacote compartilhado
        </Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
        >


          <Box mt={10}>
            <Divider />
          </Box>

          <TextInput
            label="Nome do Pacote"
            onChangeText={setPackageName}
            value={packageName}
          />
          <Box
            mt={10}
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box
              width="45%"
            >
              <Text>Data de Ida</Text>
              <TextInput
                label="Data de Ida"
                value={date.toDateString()}
              />
            </Box>

            <Box
              width="45%"
            >
              <Text>Data de Volta
              </Text>
              <TextInput
                label="Data de Ida"
                value={date.toDateString()}
              />
            </Box>
          </Box>

          <Box
            mt={10}
          >
            <Text>Possui necessidades especiais?</Text>
            <Box
              flexDirection="row"
              alignItems="center"
            >
              <Switch value={isSwitchOn} onValueChange={onToggleSwitch}
                style={{
                  transform: [{ scaleX: .8 }, { scaleY: .8 }]
                }}
              />
              <Text
                style={{
                  marginLeft: 10
                }}
              >
                {isSwitchOn ? 'Sim' : 'Não'}
              </Text>
            </Box>
          </Box>

          {
            isSwitchOn && (
              <Box>
                <List.Section title="Selecione as especialidades">
                  <List.Accordion
                    title="Autismo"
                  >
                    <List.Item title="Sensibilidade ao som" />
                    <List.Item title="Fobial Social" />
                  </List.Accordion>
                  <List.Accordion
                    title="Mobilidade"
                  >
                    <List.Item title="Cadeira de Rodas" />
                    <List.Item title="Deficiencia Auditiva" />
                    <List.Item title="Deficiencia Visual" />
                  </List.Accordion>
                </List.Section>
              </Box>
            )
          }


          <Box>
            <Text
              style={{
                marginTop: 10
              }}
            >
              Selecione a quantidade de estrelas do hotel
            </Text>
            <Box>
              <TextInput
                style={{
                  marginTop: 10
                }}
                label="Escolha entre 1 e 5 estrelas"
                value={stars.toString()}
              />
            </Box>
          </Box>



          <Box
            mt={10}
          >
            <Text>Deseja locar carros ?! </Text>
            <Box
              flexDirection="row"
              alignItems="center"
            >
              <Switch value={isSwitchOn2} onValueChange={onToggleSwitch2}
                style={{
                  transform: [{ scaleX: .8 }, { scaleY: .8 }]
                }}
              />
              <Text
                style={{
                  marginLeft: 10
                }}
              >
                {isSwitchOn2 ? 'Sim' : 'Não'}
              </Text>
            </Box>

            {
              isSwitchOn2 && (
                <Box>
                  <List.Section title="Selecione o tipo de veiculo">
                    <List.Accordion
                      title="SUV"
                    >
                      <List.Item title="Renegade" />
                      <List.Item title="C4 Cactus" />
                    </List.Accordion>
                    <List.Accordion
                      title="Popular"
                    >
                      <List.Item title="Fiat Uno" />
                      <List.Item title="HB20" />
                    </List.Accordion>
                  </List.Section>
                </Box>
              )
            }
          </Box>


          <Box>
            <Text
              style={{
                marginTop: 20,
              }}
            >
              Quanto está disposto a gastar nessa viagem ?
            </Text>
            <Box>
              <TextInput
                style={{
                  marginTop: 10
                }}
                label="Valor máximo que deseja gastar"
                onChange={setValueTrip}
                value={valueTrip.toString()}
              />
            </Box>
          </Box>

          <Box>
            <Text
              style={{
                marginTop: 20,
              }}
            >
              Lembre-se, essa trip sera criado para até 20 pessoas
            </Text>
            <Box>
              <TextInput
                style={{
                  marginTop: 10
                }}
                label="Quantidade de pessoas desta trip"
                onChange={setTripPeople}
                value={tripPeople.toString()}
              />
            </Box>
          </Box>

          <Button
            style={{
              backgroundColor: '#F2C94C',
              marginTop: 30
            }}

            onPress={() => {
              dispatch(addNewTrip(destiny))

              setTimeout(() => {
                Alert.alert(
                  "PACOTE CRIADO COM SUCESSO",
                  "OBBBAAAAA, VAMOS ENCONTRAR OUTROS VIAJANTES PARA COMPARTILHAR ESSA EXPERIENCIA COM VOCE",
                  [
                    {
                      text: "OK",
                      onPress: () => navigate.navigate('HomeScreen')
                    }
                  ]
                )
              }, 2000)
            }}
          >
            Criar Pacote
          </Button>
        </ScrollView>
      </Container>
    </>
  );
}

export default Proposal;