'use client';

import React from "react"

import { AntdRegistry } from "@ant-design/nextjs-registry"

import { ReduxProvider } from "./redux-provider"

interface ProvidersProps {
  children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ReduxProvider>

    <AntdRegistry>
      {children}
    </AntdRegistry>
    </ReduxProvider>

  )
}

export default Providers
