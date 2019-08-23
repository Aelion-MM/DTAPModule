import { NativeUI, startApp, t } from "mendix/native";
import { navigationStyle } from "../../theme/styles.js";

import "./javascript-actions";

NativeUI.registerNanoflows(require("./nanoflows").default);
NativeUI.registerPage("DTAP.Example_Native", require("./DTAP.Example_Native"));
NativeUI.registerPage("Core.Login_Native", require("./Core.Login_Native"), { "header": "header" });

NativeUI.setDefaultStyling(navigationStyle);

startApp({
    cacheBust: "637021636523543430",
    resourcesMap: {
        "metamodel.json": () => ({})
    },
    tabs: [],
    languages: 
[
    "en_US"
]
});
