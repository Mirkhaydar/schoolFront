'use client'
import React from 'react';

// Создаем контекст
const MobXProviderContext = React.createContext<any>(null); // Можно типизировать

interface MobXProviderProps {
  children: React.ReactNode;
}

export const MobXProvider: React.FC<MobXProviderProps> = ({ children }) => {
  // Инициализируем глобальные сторы, если необходимо
  // const globalStore = useGlobalStore();

  return (
    // Оборачиваем приложение в провайдер
    <MobXProviderContext.Provider value={{ /* globalStore */ }}>
      {children}
    </MobXProviderContext.Provider>
  );
};