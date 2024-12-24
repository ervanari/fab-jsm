import React, { useEffect, useState } from "react";

const ChatWidget = ( widgetData ) => {
    const [isFullscreen, setIsFullscreen] = useState(getFullscreenValue());
    console.log(`Fullscreen initial: ${widgetData}`);
    // Fungsi untuk mendapatkan nilai fullscreen
    function getFullscreenValue() {
        return window.innerWidth <= 544;
    }

    // Update fullscreen value saat ukuran layar berubah
    useEffect(() => {
        const handleResize = () => {
            const fullscreenValue = getFullscreenValue();
            if (isFullscreen !== fullscreenValue) {
                setIsFullscreen(fullscreenValue);
                console.log(`Fullscreen updated: ${fullscreenValue}`);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isFullscreen]);

    useEffect(() => {
        const jsmWidget = {
            id: widgetData?.id || "1ac079cf-3d8f-4ee7-8d8f-b96590807351",
            agent: widgetData?.agent || {
                name: "MediaCare",
                avatar: "https://cdn.freshbots.ai/assets/imgs/g3_icons/widget-avatar/avatar_10.png",
            },
            fullscreen: isFullscreen,
            disable_channel_response: widgetData?.disable_channel_response || true,
        };

        window.fcSettings = {
            token: "03c296a9-71a6-4cfb-9159-08d4e327222e",
            host: "https://wchat.freshchat.com",
            widgetUuid: jsmWidget.id,
            config: {
                cssNames: {
                    widget: "fc_frame",
                    expanded: "fc_expanded",
                },
                eagerLoad: true,
                fullscreen: jsmWidget.fullscreen,
                disableNotifications: true,
                agent: {
                    hideName: true,
                    hidePic: true,
                    hideBio: true,
                },
                headerProperty: {
                    appName: jsmWidget.agent?.name || "",
                    appLogo: jsmWidget.agent?.avatar || "",
                },
                content: {
                    headers: {
                        channel_response: {
                            offline: jsmWidget.disable_channel_response ? " " : "",
                            online: {
                                minutes: {
                                    one: jsmWidget.disable_channel_response ? " " : "",
                                    more: jsmWidget.disable_channel_response ? " " : "",
                                },
                                hours: {
                                    one: jsmWidget.disable_channel_response ? " " : "",
                                    more: jsmWidget.disable_channel_response ? " " : "",
                                },
                            },
                        },
                    },
                },
                widget: {
                    hidden: true,  // Ini menyembunyikan tombol widget
                },
            },
            onInit: () => {
                console.log("Widget Init");
                window.fcWidget.on("user:created", function (s) {
                    if (!s.success) {
                        let jsmWidgetFields = {};

                        if (jsmWidget?.form?.fields?.length > 0) {
                            const jsmWidgetAllowed = ["title", "name", "email", "phone"];
                            jsmWidget.form.fields.forEach((field) => {
                                if (field?.id && jsmWidgetAllowed.includes(field.id)) {
                                    if (field.type === "dropdown") {
                                        if (Array.isArray(field.options) && field.options.length > 0) {
                                            jsmWidgetFields[Object.keys(jsmWidgetFields).length] = {
                                                fieldId: field.id,
                                                type: "dropdown",
                                                label: (field.id),
                                                required: "yes",
                                                error: `Please select an option ${(field.id)}`,
                                                options: field.options,
                                            };
                                        }
                                    } else {
                                        jsmWidgetFields[Object.keys(jsmWidgetFields).length] = {
                                            fieldId: field.id,
                                            type: field.id,
                                            label: (field.id),
                                            required: "yes",
                                            error: `Please Enter a valid ${(field.id)}`,
                                        };
                                    }
                                }
                            });
                        }

                    }
                });
            },
            onLoad: () => {
                console.log("Widget Load");
                // Open the widget automatically
                window.fcWidget.open();  // Munculkan jendela chat otomatis

                window.fcWidget.on("widget:opened", () => {
                    console.log("Widget Open");
                });

                window.fcWidget.on("widget:closed", () => {
                    console.log("Widget Closed");
                });
            },
        };
    }, [widgetData, isFullscreen]);

    return (
        <div>
            <h1>Chat Widget</h1>
            <div id="chat-widget-container">
                {/* You can add more custom UI here */}
            </div>
        </div>
    );
};

export default ChatWidget;
