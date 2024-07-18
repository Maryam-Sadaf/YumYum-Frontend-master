import { FaHome, FaFileContract, FaSignOutAlt, FaQuestionCircle, FaUtensils, FaShoppingCart, FaUser } from 'react-icons/fa';
export const sidebarMenu = [
    {
        name: "QFC",
        routes: [
            {
                path: ".",
                name: "Dashboard",
                icon: <FaHome />,
            },
            
            {
                path: "menu",
                name: "Menu",
                icon: <FaUtensils />,
            },
            {
                path: "terms&conditions",
                name: "Terms & Conditions",
                icon: <FaFileContract />,
            },
            {
                path: "profile",
                name: "Profile",
                icon: <FaUser />, // Use the FaUser icon
            },
            {
                path: "orders",
                name: "Orders",
                icon: <FaShoppingCart />, // Use the FaShoppingCart icon
            },
            {
                path: "helpcenter",
                name: "Help Center",
                icon: <FaQuestionCircle />,
            },
            {
                path: "logout",
                name: "Logout",
                icon: <FaSignOutAlt />,
            },
        ]
    },
];
