import {List, ListItem} from '@chakra-ui/react';
import {Publisher} from "../entities/Game";

interface Props {
    publishers: Publisher[]
}

function PublishersGrid({publishers}: Props) {

    return (
        <>
            <List>
                <ListItem color="grey">Publishers</ListItem>
                {publishers.map((publisher, index) => <ListItem key={index}>{publisher.name}</ListItem>)}
            </List>
        </>
    );
}

export default PublishersGrid;