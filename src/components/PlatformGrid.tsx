import { List, ListItem } from '@chakra-ui/react';
import React from 'react';
import {Platform} from "../entities/Platform";

interface Props {
    platforms: Platform[]
}

function PlatformGrid({platforms}: Props) {

    return (
        <>
            <List>
                <ListItem color="grey">Platforms</ListItem>
                {platforms.map((platform, index) => <ListItem key={index}>{platform.name}</ListItem>)}
            </List>
        </>
    );
}

export default PlatformGrid;