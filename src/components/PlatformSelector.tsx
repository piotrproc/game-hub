import {Button, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react'
import {BsChevronBarDown} from "react-icons/all";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

function PlatformSelector() {
    const selectedPlatformId = useGameQueryStore(s=>s.gameQuery.platformId);
    const setSelectedPlatformId = useGameQueryStore(s=> s.setPlatformId);
    const {data: platforms, error} = usePlatforms();
    const selectedPlatform = usePlatform(selectedPlatformId);

    if (error)
        return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown/>}>
                {selectedPlatform?.name || "Platforms"}
            </MenuButton>
            <MenuList>
                {platforms?.results.map((platform) =>
                    <MenuItem onClick={() => setSelectedPlatformId(platform.id)} key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
}

export default PlatformSelector;