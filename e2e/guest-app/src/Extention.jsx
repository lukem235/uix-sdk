import React, {useEffect, useState} from 'react';
import {register} from "@adobe/uix-guest";

export default function Extension() {
    const [text, setText] = useState('');
    useEffect(() => {
            const init = async () => {
                const guestServer = await register({
                    id: "extensionId",
                    methods: {
                        extensionNamespace: {
                            getMessage: async () => {
                                const hostInfo = await guestServer.host.hostNamespace.getHostInfo();
                                return `Message: "${hostInfo}"`;
                            },
                            setMessage: async () => {
                                setText('--- test test test ----');
                                return `confirmation from setMessage`;
                            }
                        }
                    }
                });
            };
            init();
        }, []
    );

    return (
        <>
            <p>Guest app</p>
            <p>{text}</p>
        </>
    );
};