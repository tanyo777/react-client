import io from "socket.io-client";

import envConfig from "../config/envConfig";

const socket = io(envConfig.wsServerUrl, {
  auth: { secret: envConfig.reactClientsSecret },
});

export default socket;
