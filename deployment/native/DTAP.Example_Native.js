import { createElement } from "react";
const React = { createElement };

import { AttributeProperty } from "mendix/AttributeProperty";
import { DynamicTextProperty } from "mendix/DynamicTextProperty";
import { NanoflowObjectProperty } from "mendix/NanoflowObjectProperty";

import { Container } from "mendix/Container";
import { DataView } from "mendix/DataView";
import { DatePicker } from "mendix/DatePicker";
import { DropDown } from "mendix/DropDown";
import { TextBox } from "mendix/TextBox";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent } from "./Atlas_UI_Resources.NativePhone_FullPage.js";

import * as styles from "../../theme/styles.js";

const { $Container, $DataView, $DropDown, $TextBox, $DatePicker } = asPluginWidgets({ Container, DataView, DropDown, TextBox, DatePicker });

const main = () => [
    <$Container key="0_0"
        $widgetId="0_0"
        name="container3"
        style={[ styles.Container, styles.spacingInnerTopLarge, styles.spacingInnerBottomLarge, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium, styles.flexMain, styles.justifyContentSpaceBetween ]}
        content={[
            <$Container key="0_1"
                $widgetId="0_1"
                name="container2"
                style={[ styles.Container ]}
                content={[
                    <$DataView key="0_2"
                        $widgetId="0_2"
                        name="dataView1"
                        style={[ styles.DataView ]}
                        object={NanoflowObjectProperty({
                            source: { "nanoflow": "DTAP.DS_DTAPInformation_Native" },
                            argMap: {},
                            friendlyId: "DTAP.Example_Native.dataView1"
                        })}
                        content={[
                            <$DropDown key="0_3"
                                $widgetId="0_3"
                                name="dropDown2"
                                style={[ styles.DropDown, styles.DropDownVertical ]}
                                onEnter={undefined}
                                onLeave={undefined}
                                formOrientation={"vertical"}
                                labelWidth={0}
                                inputValue={AttributeProperty({
                                    scope: "0_2",
                                    path: "",
                                    entity: "DTAP.DTAPInformationStored",
                                    attribute: "DTAPLevel",
                                    friendlyId: "DTAP.Example_Native.dropDown2",
                                    onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                                    validation: null
                                })}
                                label={DynamicTextProperty({
                                    template: { "elements": t( [ [ "DTAP level" ] ] ), "friendlyId": "DTAP.Example_Native.dropDown2" }
                                })}
                                emptyOptionCaption={DynamicTextProperty({
                                    template: { "elements": t( [ [ "" ] ] ) }
                                })}
                                readOnlyStyle={"text"}
                                inline={false} />,
                            <$DropDown key="0_4"
                                $widgetId="0_4"
                                name="dropDown1"
                                style={[ styles.DropDown, styles.DropDownVertical ]}
                                onEnter={undefined}
                                onLeave={undefined}
                                formOrientation={"vertical"}
                                labelWidth={0}
                                inputValue={AttributeProperty({
                                    scope: "0_2",
                                    path: "",
                                    entity: "DTAP.DTAPInformationStored",
                                    attribute: "CurrentEnvironment",
                                    friendlyId: "DTAP.Example_Native.dropDown1",
                                    onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                                    validation: null
                                })}
                                label={DynamicTextProperty({
                                    template: { "elements": t( [ [ "Current environment" ] ] ), "friendlyId": "DTAP.Example_Native.dropDown1" }
                                })}
                                emptyOptionCaption={DynamicTextProperty({
                                    template: { "elements": t( [ [ "" ] ] ) }
                                })}
                                readOnlyStyle={"text"}
                                inline={false} />,
                            <$TextBox key="0_5"
                                $widgetId="0_5"
                                name="textBox2"
                                style={[ styles.TextBox, styles.TextBoxVertical ]}
                                onEnter={undefined}
                                onLeave={undefined}
                                formOrientation={"vertical"}
                                labelWidth={0}
                                inputValue={AttributeProperty({
                                    scope: "0_2",
                                    path: "",
                                    entity: "DTAP.DTAPInformationStored",
                                    attribute: "DTAPLevelAsInteger",
                                    friendlyId: "DTAP.Example_Native.textBox2",
                                    onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                                    validation: null,
                                    formatting: {
                                        numberFormat: {
                                            groupDigits: false
                                        }
                                    }
                                })}
                                isPassword={false}
                                placeholder={DynamicTextProperty({
                                    template: { "elements": t( [ [ "" ] ] ) }
                                })}
                                label={DynamicTextProperty({
                                    template: { "elements": t( [ [ "DTAP level as integer" ] ] ), "friendlyId": "DTAP.Example_Native.textBox2" }
                                })}
                                maxLength={undefined}
                                keyboardType={"number-pad"} />,
                            <$TextBox key="0_6"
                                $widgetId="0_6"
                                name="textBox3"
                                style={[ styles.TextBox, styles.TextBoxVertical ]}
                                onEnter={undefined}
                                onLeave={undefined}
                                formOrientation={"vertical"}
                                labelWidth={0}
                                inputValue={AttributeProperty({
                                    scope: "0_2",
                                    path: "",
                                    entity: "DTAP.DTAPInformationStored",
                                    attribute: "ApplicationURL",
                                    friendlyId: "DTAP.Example_Native.textBox3",
                                    onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                                    validation: null,
                                    formatting: { }
                                })}
                                isPassword={false}
                                placeholder={DynamicTextProperty({
                                    template: { "elements": t( [ [ "" ] ] ) }
                                })}
                                label={DynamicTextProperty({
                                    template: { "elements": t( [ [ "Application URL" ] ] ), "friendlyId": "DTAP.Example_Native.textBox3" }
                                })}
                                maxLength={400}
                                keyboardType={"default"} />,
                            <$DatePicker key="0_7"
                                $widgetId="0_7"
                                name="datePicker1"
                                style={[ styles.DatePicker, styles.DatePickerVertical ]}
                                onEnter={undefined}
                                onLeave={undefined}
                                formOrientation={"vertical"}
                                labelWidth={0}
                                mode={"date"}
                                inputValue={AttributeProperty({
                                    scope: "0_2",
                                    path: "",
                                    entity: "DTAP.DTAPInformationStored",
                                    attribute: "LastUpdatedOn",
                                    friendlyId: "DTAP.Example_Native.datePicker1",
                                    onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                                    validation: null,
                                    formatting: {
                                        dateFormat: t([
                                            {
                                                type: "date"
                                            }
                                        ])
                                    }
                                })}
                                placeholder={DynamicTextProperty({
                                    template: { "elements": t( [ [ "" ] ] ) }
                                })}
                                label={DynamicTextProperty({
                                    template: { "elements": t( [ [ "Last updated on" ] ] ), "friendlyId": "DTAP.Example_Native.datePicker1" }
                                })}
                                inline={false} />,
                            <$TextBox key="0_8"
                                $widgetId="0_8"
                                name="textBox4"
                                style={[ styles.TextBox, styles.TextBoxVertical ]}
                                onEnter={undefined}
                                onLeave={undefined}
                                formOrientation={"vertical"}
                                labelWidth={0}
                                inputValue={AttributeProperty({
                                    scope: "0_2",
                                    path: "",
                                    entity: "DTAP.DTAPInformationStored",
                                    attribute: "MendixVersion",
                                    friendlyId: "DTAP.Example_Native.textBox4",
                                    onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                                    validation: null,
                                    formatting: { }
                                })}
                                isPassword={false}
                                placeholder={DynamicTextProperty({
                                    template: { "elements": t( [ [ "" ] ] ) }
                                })}
                                label={DynamicTextProperty({
                                    template: { "elements": t( [ [ "Mendix version" ] ] ), "friendlyId": "DTAP.Example_Native.textBox4" }
                                })}
                                maxLength={200}
                                keyboardType={"default"} />,
                            <$TextBox key="0_9"
                                $widgetId="0_9"
                                name="textBox1"
                                style={[ styles.TextBox, styles.TextBoxVertical ]}
                                onEnter={undefined}
                                onLeave={undefined}
                                formOrientation={"vertical"}
                                labelWidth={0}
                                inputValue={AttributeProperty({
                                    scope: "0_2",
                                    path: "",
                                    entity: "DTAP.DTAPInformationStored",
                                    attribute: "ModelVersion",
                                    friendlyId: "DTAP.Example_Native.textBox1",
                                    onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                                    validation: null,
                                    formatting: { }
                                })}
                                isPassword={false}
                                placeholder={DynamicTextProperty({
                                    template: { "elements": t( [ [ "" ] ] ) }
                                })}
                                label={DynamicTextProperty({
                                    template: { "elements": t( [ [ "Model version" ] ] ), "friendlyId": "DTAP.Example_Native.textBox1" }
                                })}
                                maxLength={200}
                                keyboardType={"default"} />
                        ]} />
                ]} />
        ]} />
];

export const $$title = "Page Title";

export const $$style = [];

export const $$page = () => mainContent(main);
