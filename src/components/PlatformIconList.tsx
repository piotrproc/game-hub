import {
    BsGlobe,
    FaAndroid,
    FaApple,
    FaLinux,
    FaPlaystation,
    FaWindows,
    FaXbox,
    MdPhoneIphone,
    SiNintendo
} from "react-icons/all";
import {HStack, Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";
import Platform from "../entities/Platform";

interface Prop {
    platforms: Platform[]
}

function PlatformIconList({platforms}: Prop) {

    const iconMap: { [key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    };

    return (
        <HStack marginY={1}>
            {platforms.map(platform => {
                return <Icon as={iconMap[platform.slug]} color="gray.500" key={platform.id}/>
            })}
        </HStack>
    );
}

export default PlatformIconList;