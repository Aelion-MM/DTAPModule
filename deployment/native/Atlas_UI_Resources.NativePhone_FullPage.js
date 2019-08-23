import { createElement } from "react";
const React = { createElement };

import { DynamicTextProperty } from "mendix/DynamicTextProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { NanoflowObjectProperty } from "mendix/NanoflowObjectProperty";

import { ConditionalVisibilityWrapper } from "mendix/ConditionalVisibilityWrapper";
import { Container } from "mendix/Container";
import { DataView } from "mendix/DataView";
import { Placeholder } from "mendix/Placeholder";
import { Text } from "mendix/Text";
import { asPluginWidgets, t } from "mendix/native";

import * as styles from "../../theme/styles.js";

const { $Placeholder, $Container, $DataView, $ConditionalVisibilityWrapper, $Text } = asPluginWidgets({ Placeholder, Container, DataView, ConditionalVisibilityWrapper, Text });

export const mainContent = (main) => [
    <$Placeholder key="0_0"
        $widgetId="0_0"
        name="Main"
        content={main()} />,
    <$Container key="0_1"
        $widgetId="0_1"
        name="container4"
        style={[ styles.Container, styles.dtapinformationNativePhone ]}
        content={[
            <$DataView key="0_2"
                $widgetId="0_2"
                name="dataView2"
                style={[ styles.DataView ]}
                object={NanoflowObjectProperty({
                    source: { "nanoflow": "DTAP.DS_DTAPInformation_Native" },
                    argMap: {},
                    friendlyId: "Atlas_UI_Resources.NativePhone_FullPage.dataView2"
                })}
                content={[
                    <$ConditionalVisibilityWrapper key="0_3"
                        $widgetId="0_3"
                        name=""
                        visible={ExpressionProperty({
                            scope: "0_2",
                            expression: { "type": "variable", "variable": "currentObject", "path": "ShowEnvironmentInformation" }
                        })}
                        needsNamedUser={false}
                        contents={[
                            <$Container key="0_4"
                                $widgetId="0_4"
                                name="container5"
                                style={[ styles.Container ]}
                                content={[
                                    <$ConditionalVisibilityWrapper key="0_5"
                                        $widgetId="0_5"
                                        name=""
                                        visible={ExpressionProperty({
                                            scope: "0_2",
                                            expression: { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "CurrentEnvironment" }, { "type": "literal", "value": "Development" } ] }
                                        })}
                                        needsNamedUser={false}
                                        contents={[
                                            <$Container key="0_6"
                                                $widgetId="0_6"
                                                name="container7"
                                                style={[ styles.Container, styles.badgeSuccess, styles.spacingInner ]}
                                                content={[
                                                    <$Text key="0_7"
                                                        $widgetId="0_7"
                                                        name="text11"
                                                        style={[ styles.Text, styles.textBold ]}
                                                        text={DynamicTextProperty({
                                                            template: { "elements": t( [ [ "Information: " ] ] ), "friendlyId": "Atlas_UI_Resources.NativePhone_FullPage.text11" }
                                                        })} />,
                                                    <$Text key="0_8"
                                                        $widgetId="0_8"
                                                        name="text12"
                                                        style={[ styles.Text, styles.textBold ]}
                                                        text={DynamicTextProperty({
                                                            template: { "elements": t( [ [ "You are working on the Development-Environment" ] ] ), "friendlyId": "Atlas_UI_Resources.NativePhone_FullPage.text12" }
                                                        })} />
                                                ]} />
                                        ]} />,
                                    <$ConditionalVisibilityWrapper key="0_9"
                                        $widgetId="0_9"
                                        name=""
                                        visible={ExpressionProperty({
                                            scope: "0_2",
                                            expression: { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "CurrentEnvironment" }, { "type": "literal", "value": "Test" } ] }
                                        })}
                                        needsNamedUser={false}
                                        contents={[
                                            <$Container key="0_10"
                                                $widgetId="0_10"
                                                name="container1"
                                                style={[ styles.Container, styles.badgePrimary, styles.spacingInner ]}
                                                content={[
                                                    <$Text key="0_11"
                                                        $widgetId="0_11"
                                                        name="text3"
                                                        style={[ styles.Text, styles.textBold ]}
                                                        text={DynamicTextProperty({
                                                            template: { "elements": t( [ [ "Information: " ] ] ), "friendlyId": "Atlas_UI_Resources.NativePhone_FullPage.text3" }
                                                        })} />,
                                                    <$Text key="0_12"
                                                        $widgetId="0_12"
                                                        name="text4"
                                                        style={[ styles.Text, styles.textBold ]}
                                                        text={DynamicTextProperty({
                                                            scope: "0_2",
                                                            template: { "elements": t( [ [ "You are working on the Test-Environment | Version: ", 1, " (", 2, ")" ] ] ), "friendlyId": "Atlas_UI_Resources.NativePhone_FullPage.text4", "parameters": { "1": "DTAP.DTAPInformationStored/ModelVersion", "2": "DTAP.DTAPInformationStored/LastUpdatedOn" }, "formats": { "1": t( [ {} ] ), "2": t( [ { "type": "datetime" } ] ) } }
                                                        })} />
                                                ]} />
                                        ]} />,
                                    <$ConditionalVisibilityWrapper key="0_13"
                                        $widgetId="0_13"
                                        name=""
                                        visible={ExpressionProperty({
                                            scope: "0_2",
                                            expression: { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "CurrentEnvironment" }, { "type": "literal", "value": "Acceptance" } ] }
                                        })}
                                        needsNamedUser={false}
                                        contents={[
                                            <$Container key="0_14"
                                                $widgetId="0_14"
                                                name="container2"
                                                style={[ styles.Container, styles.badgePrimary, styles.spacingInner ]}
                                                content={[
                                                    <$Text key="0_15"
                                                        $widgetId="0_15"
                                                        name="text6"
                                                        style={[ styles.Text, styles.textBold ]}
                                                        text={DynamicTextProperty({
                                                            template: { "elements": t( [ [ "Information: " ] ] ), "friendlyId": "Atlas_UI_Resources.NativePhone_FullPage.text6" }
                                                        })} />,
                                                    <$Text key="0_16"
                                                        $widgetId="0_16"
                                                        name="text7"
                                                        style={[ styles.Text, styles.textBold ]}
                                                        text={DynamicTextProperty({
                                                            scope: "0_2",
                                                            template: { "elements": t( [ [ "You are working on the Acceptance-Environment | Version: ", 1, " (", 2, ")" ] ] ), "friendlyId": "Atlas_UI_Resources.NativePhone_FullPage.text7", "parameters": { "1": "DTAP.DTAPInformationStored/ModelVersion", "2": "DTAP.DTAPInformationStored/LastUpdatedOn" }, "formats": { "1": t( [ {} ] ), "2": t( [ { "type": "datetime" } ] ) } }
                                                        })} />
                                                ]} />
                                        ]} />,
                                    <$ConditionalVisibilityWrapper key="0_17"
                                        $widgetId="0_17"
                                        name=""
                                        visible={ExpressionProperty({
                                            scope: "0_2",
                                            expression: { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "CurrentEnvironment" }, { "type": "literal", "value": "Performance" } ] }
                                        })}
                                        needsNamedUser={false}
                                        contents={[
                                            <$Container key="0_18"
                                                $widgetId="0_18"
                                                name="container9"
                                                style={[ styles.Container, styles.badgeWarning, styles.spacingInner ]}
                                                content={[
                                                    <$Text key="0_19"
                                                        $widgetId="0_19"
                                                        name="text16"
                                                        style={[ styles.Text, styles.textBold ]}
                                                        text={DynamicTextProperty({
                                                            template: { "elements": t( [ [ "Information: " ] ] ), "friendlyId": "Atlas_UI_Resources.NativePhone_FullPage.text16" }
                                                        })} />,
                                                    <$Text key="0_20"
                                                        $widgetId="0_20"
                                                        name="text17"
                                                        style={[ styles.Text, styles.textBold ]}
                                                        text={DynamicTextProperty({
                                                            scope: "0_2",
                                                            template: { "elements": t( [ [ "You are working on the Performance-Environment | Version: ", 1, " (", 2, ")" ] ] ), "friendlyId": "Atlas_UI_Resources.NativePhone_FullPage.text17", "parameters": { "1": "DTAP.DTAPInformationStored/ModelVersion", "2": "DTAP.DTAPInformationStored/LastUpdatedOn" }, "formats": { "1": t( [ {} ] ), "2": t( [ { "type": "date" } ] ) } }
                                                        })} />
                                                ]} />
                                        ]} />,
                                    <$ConditionalVisibilityWrapper key="0_21"
                                        $widgetId="0_21"
                                        name=""
                                        visible={ExpressionProperty({
                                            scope: "0_2",
                                            expression: { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "CurrentEnvironment" }, { "type": "literal", "value": "Reporting" } ] }
                                        })}
                                        needsNamedUser={false}
                                        contents={[
                                            <$Container key="0_22"
                                                $widgetId="0_22"
                                                name="container6"
                                                style={[ styles.Container, styles.badgeDanger, styles.spacingInner ]}
                                                content={[
                                                    <$Text key="0_23"
                                                        $widgetId="0_23"
                                                        name="text10"
                                                        style={[ styles.Text, styles.textBold ]}
                                                        text={DynamicTextProperty({
                                                            template: { "elements": t( [ [ "Information: " ] ] ), "friendlyId": "Atlas_UI_Resources.NativePhone_FullPage.text10" }
                                                        })} />,
                                                    <$Text key="0_24"
                                                        $widgetId="0_24"
                                                        name="text15"
                                                        style={[ styles.Text, styles.textBold ]}
                                                        text={DynamicTextProperty({
                                                            scope: "0_2",
                                                            template: { "elements": t( [ [ "You are working on the Reporting-Environment | Version: ", 1, " (", 2, ")" ] ] ), "friendlyId": "Atlas_UI_Resources.NativePhone_FullPage.text15", "parameters": { "1": "DTAP.DTAPInformationStored/ModelVersion", "2": "DTAP.DTAPInformationStored/LastUpdatedOn" }, "formats": { "1": t( [ {} ] ), "2": t( [ { "type": "datetime" } ] ) } }
                                                        })} />
                                                ]} />
                                        ]} />,
                                    <$ConditionalVisibilityWrapper key="0_25"
                                        $widgetId="0_25"
                                        name=""
                                        visible={ExpressionProperty({
                                            scope: "0_2",
                                            expression: { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "CurrentEnvironment" }, { "type": "literal", "value": "Production" } ] }
                                        })}
                                        needsNamedUser={false}
                                        contents={[
                                            <$Container key="0_26"
                                                $widgetId="0_26"
                                                name="container3"
                                                style={[ styles.Container, styles.badgeDanger, styles.spacingInner ]}
                                                content={[
                                                    <$Text key="0_27"
                                                        $widgetId="0_27"
                                                        name="text9"
                                                        style={[ styles.Text, styles.textBold ]}
                                                        text={DynamicTextProperty({
                                                            template: { "elements": t( [ [ "Information: " ] ] ), "friendlyId": "Atlas_UI_Resources.NativePhone_FullPage.text9" }
                                                        })} />,
                                                    <$Text key="0_28"
                                                        $widgetId="0_28"
                                                        name="text8"
                                                        style={[ styles.Text, styles.textBold ]}
                                                        text={DynamicTextProperty({
                                                            scope: "0_2",
                                                            template: { "elements": t( [ [ "You are working on the Production-Environment | Version: ", 1, " (", 2, ")" ] ] ), "friendlyId": "Atlas_UI_Resources.NativePhone_FullPage.text8", "parameters": { "1": "DTAP.DTAPInformationStored/ModelVersion", "2": "DTAP.DTAPInformationStored/LastUpdatedOn" }, "formats": { "1": t( [ {} ] ), "2": t( [ { "type": "datetime" } ] ) } }
                                                        })} />
                                                ]} />
                                        ]} />,
                                    <$ConditionalVisibilityWrapper key="0_29"
                                        $widgetId="0_29"
                                        name=""
                                        visible={ExpressionProperty({
                                            scope: "0_2",
                                            expression: { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "CurrentEnvironment" }, { "type": "literal", "value": "Other" } ] }
                                        })}
                                        needsNamedUser={false}
                                        contents={[
                                            <$Container key="0_30"
                                                $widgetId="0_30"
                                                name="container8"
                                                style={[ styles.Container, styles.badgeWarning, styles.spacingInner ]}
                                                content={[
                                                    <$Text key="0_31"
                                                        $widgetId="0_31"
                                                        name="text13"
                                                        style={[ styles.Text, styles.textBold ]}
                                                        text={DynamicTextProperty({
                                                            template: { "elements": t( [ [ "Information: " ] ] ), "friendlyId": "Atlas_UI_Resources.NativePhone_FullPage.text13" }
                                                        })} />,
                                                    <$Text key="0_32"
                                                        $widgetId="0_32"
                                                        name="text14"
                                                        style={[ styles.Text, styles.textBold ]}
                                                        text={DynamicTextProperty({
                                                            scope: "0_2",
                                                            template: { "elements": t( [ [ "You are working on the Other-Environment | Version: ", 1, " (", 2, ")" ] ] ), "friendlyId": "Atlas_UI_Resources.NativePhone_FullPage.text14", "parameters": { "1": "DTAP.DTAPInformationStored/ModelVersion", "2": "DTAP.DTAPInformationStored/LastUpdatedOn" }, "formats": { "1": t( [ {} ] ), "2": t( [ { "type": "datetime" } ] ) } }
                                                        })} />
                                                ]} />
                                        ]} />
                                ]} />
                        ]} />
                ]} />
        ]} />
];

