import React from "react"

import { AntdRegistry } from "@ant-design/nextjs-registry"

import { MobXProvider } from "./mobx-provider"

interface ProvidersProps {
  children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <AntdRegistry>
      <MobXProvider>
        {children}
      </MobXProvider>
    </AntdRegistry>
  )
}

export default Providers
