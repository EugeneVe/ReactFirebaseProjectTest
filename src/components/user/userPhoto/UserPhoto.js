import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";
import DdMenuContext from "../../../context/DdMenuContext";
import "./UserPhoto.scss";

const UserPhoto = ({ onClick }) => {
    const { user } = useContext(UserContext);
    const { openDdMenu } = useContext(DdMenuContext);

    return (
        <div
            className="user-photo-wrapper"
            onClick={onClick}
        >
            <img
                src={user?.photoURL}
                alt="avatar"
                referrerPolicy="no-referrer"
            />
            <div className={`arrow-icon-style ${openDdMenu ? "rotate" : ""}`} />
        </div>
    );
};

export default UserPhoto;
