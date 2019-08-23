import { NativeUI } from "mendix/native";

NativeUI.registerJavaScriptAction("NanoflowCommons.SignIn", () => require("./NanoflowCommons.js").SignIn);
