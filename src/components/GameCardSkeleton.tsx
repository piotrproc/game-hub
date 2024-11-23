import React from 'react';
import {Card, Skeleton, CardBody, SkeletonText} from '@chakra-ui/react'

function GameCardSkeleton() {
    return (
        <Card>
            <Skeleton height="200px"/>
            <CardBody>
                <SkeletonText/>
            </CardBody>
        </Card>
    );
}

export default GameCardSkeleton;