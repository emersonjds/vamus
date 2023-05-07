import React from 'react';
import { View } from 'react-native';
import { Box } from '../../components/Spacing';
import { Text, Title } from 'react-native-paper';
import { ScreenContainer } from 'react-native-screens';
import { Container } from '../../components/Spacing';

// import { Container } from './styles';

const Notification: React.FC = () => {
    return (
        <>
            <Container>

                <Title>Notificações</Title>
                <Text>
                    Emerson
                </Text>


            </Container>
        </>
    );
}

export default Notification;