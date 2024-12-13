import React, {useState} from 'react';
import {Button, Text} from "@chakra-ui/react";

interface Props {
    children: string
}

function ExpandableText({children}: Props) {
    const [isExpandableText, setExpandableText] = useState(true);
    const limit = 300;

    if (!children) return null;

    if (children.length <= limit)
        return <Text>{children}</Text>

    const summary = isExpandableText ? children.substring(0, limit) + "..." : children;

    return (
        <>
            <Text>{summary}</Text>
            <Button
                size="xs"
                fontWeight="bold"
                colorScheme="yellow"
                marginLeft={1}
                onClick={() => setExpandableText(!isExpandableText)}>{isExpandableText ? "Show More" : "Show Less"}</Button>
        </>
    );
}

export default ExpandableText;