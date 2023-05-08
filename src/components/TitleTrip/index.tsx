import React from 'react';

import { Box } from '../Spacing';
import { Title } from 'react-native-paper';

const TitleTrip: React.FC = () => {
    return (
        <>
            <Box ml={20} mt={20}
                mb={20}>
                <Title>
                    Trips mais visitadas
                </Title>
            </Box>
        </>
    );
}

export default TitleTrip;