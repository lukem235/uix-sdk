import { useState , useEffect} from 'react'
import { Extensible, useExtensions } from '@adobe/uix-host-react'
import { ExtensibleComponentBoundary } from "@adobe/uix-host-react";
import HostApp from './HostApp';

import './App.css'


function App() {
  const extension = {
    "id": "extensionId",
    "url": "http://localhost:3002#/register",
    // "extensionPoints": ["extensionNamespace"]
  };

  const provider = async () => ({
      [extension.id]: extension,
  });

  return (
    <>
      <div>
        <Extensible
          debug={true}
          extensionsProvider={provider}>
          <HostApp />
        </Extensible>
      </div>
    </>
  )
}

export default App