import { ReactComponent as Jane } from '../../images/janet.svg'
import { ReactComponent as Janet } from '../../images/janet2.svg'
import { ReactComponent as Aubrey } from '../../images/aubrey.svg'
import { ReactComponent as Jav } from '../../images/jav.svg'
import { ReactComponent as Read } from '../../images/read.svg'

var messages = [
    {
        messageId: 1,
        user: "Me",
        text: "Hi team 👋",
        time: "11:31 AM",
        seen: <Read></Read>
    },
    {
        messageId: 2,
        user: "Me",
        text: "Anyone on for lunch today",
        time: "11:31 AM",
        seen: <Read></Read>
    },
    {
        messageId: 3,
        user: "Jav",
        text: "I'm down! Any ideas??",
        time: "11:35 AM",
        svg: <Jav width="35px" height="35px" />,
        designation: "Engineering",
        online: false,
    },
    {
        messageId: 4,
        user: "Me",
        text: "I am down for whatever!",
        time: "11:36 AM",
        seen: <Read></Read>
    },
    {
        messageId: 5,
        user: "Aubrey",
        text: "I was thinking the cafe downtown",
        time: "11:45 AM",
        svg: <Aubrey width="35px" height="35px" />,
        designation: "Product",
        online: <Read></Read>
    },
    {
        messageId: 6,
        user: "Aubrey",
        text: "But limited vegan options @Janet!",
        time: "11:46 AM",
        svg: <Aubrey width="35px" height="35px" />,
        designation: "Product",
        online: <Read></Read>
    },
    {
        messageId: 7,
        user: "Me",
        text: "Agreed",
        time: "11:52 AM",
        seen: <Read></Read>
    },
    {
        messageId: 8,
        user: "Jane",
        text: "That works- I was actually planning to get a smoothie anyways 👍",
        time: "12:03 PM",
        svg: <Jane width="35px" height="35px" />,
        designation: "Engineering",
        online: false,
    },
    {
        messageId: 9,
        user: "Janet",
        text: "On for 12:30 then ?",
        time: "12:04 PM",
        svg: <Janet width="35px" height="35px" />,
        designation: "Product",
        online: <Read></Read>
    },
];

export default messages;