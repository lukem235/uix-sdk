import { useState , useEffect} from 'react'
import { useExtensions, GuestUIFrame } from '@adobe/uix-host-react'

import './App.css'


export default function Component() {
  const [extensionMsg, setExtensionMsg] = useState('');

  const { extensions = {} } = useExtensions(() => ({
        requires: {
            extensionNamespace: ["getMessage", "setMessage"]
        },
        provides: {
            hostNamespace: {
                getHostInfo: () => {
                    return `Message from the host to guest!`;
                },
            },
        }
  }));

  const apiInteraction = () => {
    const extension = extensions[0];
    console.log('extension', extension);
    if (extension) {
      extension.apis.extensionNamespace.getMessage().then(info => {
        setExtensionMsg(info);
      });

      extension.apis.extensionNamespace.setMessage().then(info => {
        console.log(info);
      });
    }
  };

  return (
    <>
      <div>
          <button onClick={() => apiInteraction()}>
            Extenstion click
          </button>
          <p>{extensionMsg}</p>
          {extensions[0] && (
            <GuestUIFrame key={Math.random()} guestId={extensions[0].id} src={extensions[0].url.href}/>
          )}
      </div>
    </>
  )
}
