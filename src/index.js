import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./context/UserContext";
import { BackgroundProvider } from "./context/BackgroundContext";
import { DdMenuProvider } from "./context/DdMenuContext";
import { ChangeStyleProvider } from "./context/ChangeStyleContext";
import { ThemeColorProvider } from "./context/ThemeColorContext";
import { OptionProvider } from "./context/OptionContext";
import { UserImageProvider } from "./context/UserImageContext";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <UserProvider>
        <UserImageProvider>
            <ThemeColorProvider>
                <DdMenuProvider>
                    <ChangeStyleProvider>
                        <BackgroundProvider>
                            <OptionProvider>
                                <App />
                            </OptionProvider>
                        </BackgroundProvider>
                    </ChangeStyleProvider>
                </DdMenuProvider>
            </ThemeColorProvider>
        </UserImageProvider>
    </UserProvider>
    // </React.StrictMode>
);
