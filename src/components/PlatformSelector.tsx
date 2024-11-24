import {Menu, MenuButton, MenuList, MenuItem, Button} from '@chakra-ui/react'
import {BsChevronBarDown} from "react-icons/all";
import usePlatforms, {Platform} from "../hooks/usePlatforms";

function PlatformSelector() {
    const {data, error} = usePlatforms();

    if (error)
        return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown/>}>Platforms</MenuButton>
            <MenuList>
                {data.map((platform) =>
                    <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
}

export default PlatformSelector;