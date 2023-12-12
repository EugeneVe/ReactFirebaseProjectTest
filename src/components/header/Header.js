import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import DdMenuContext from "../../context/DdMenuContext";
import Auth from "../auth/Auth";
import UserPhoto from "../user/userPhoto/UserPhoto";
import "./Header.scss";

const Header = () => {
    const { user } = useContext(UserContext);
    const { openDdMenu, setOpenDdMenu } = useContext(DdMenuContext);

    return (
        <div className="header-wrapper">
            {user ? (
                <>
                    <UserPhoto onClick={() => setOpenDdMenu(!openDdMenu)} />
                </>
            ) : (
                <Auth />
            )}
        </div>
    );
};

export default Header;
