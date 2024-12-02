import {Menu, MenuButton, MenuList, MenuItem, Button} from '@chakra-ui/react'
import {BsChevronBarDown} from "react-icons/all";
import usePlatforms, {Platform} from "../hooks/usePlatforms";

interface Props {
    onSelectPlatform: (platform: Platform) => void,
    selectedPlatformId?: number
}

function PlatformSelector({onSelectPlatform, selectedPlatformId}: Props) {
    const {data: platforms, error} = usePlatforms();
    const selectedPlatform = platforms?.results.find(p => p.id === selectedPlatformId);

    if (error)
        return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown/>}>
                {selectedPlatform?.name || "Platforms"}
            </MenuButton>
            <MenuList>
                {platforms?.results.map((platform) =>
                    <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
}

export default PlatformSelector;