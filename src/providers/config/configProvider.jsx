import React, { useState, useEffect } from 'react';
import ConfigContext from './configContext';

export default function ConfigProvider({ children }) {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    async function fetchConfig() {
      const res = await fetch('/repository/app.json');
      const data = await res.json();
      setConfig(data);
    }
    fetchConfig();
  }, []);

  if (!config) {
    return <div>Cargando configuración...</div>;
  }

  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
}
