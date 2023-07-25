const envConfig = {
  wsServerUrl: process.env.REACT_APP_WS_SERVER_URL as string,
  reactClientsSecret: process.env.REACT_APP_SECRET_KEY_REACT_CLIENTS,
};

export default envConfig;
