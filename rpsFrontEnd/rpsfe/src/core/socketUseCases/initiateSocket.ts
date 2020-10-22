import io from "socket.io-client";
import { Socket } from "../SocketClient/socket";

export const initiateSocket: () => void = () => {
  Socket.socket = io(Socket.SERVERADRESS);
};
