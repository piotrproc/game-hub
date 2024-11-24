import React from 'react';
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronBarDown} from "react-icons/all";

interface Props {
    onSortSelected: (sortOrder: string) => void,
    sortOrder: string
}

function SortSelector({onSortSelected, sortOrder}: Props) {

    const sortOrders = [
        {value: "", label: "Relevance"},
        {value: "-added", label: "Date added"},
        {value: "name", label: "Name"},
        {value: "-release", label: "Release date"},
        {value: "-metacritic", label: "Popularity"},
        {value: "-rating", label: "Average rating"}
    ];

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder)?.label || "Relevance";

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown/>}>
                Order by: {currentSortOrder}
            </MenuButton>
            <MenuList>
                {sortOrders.map((order, index) =>
                    <MenuItem onClick={() => onSortSelected(order.value)} key={index}
                              value={order.value}>{order.label}</MenuItem>)}
            </MenuList>
        </Menu>
    );
}

export default SortSelector;