"use strict";

import startGame from "../../Game/StartGame.js";
import GameScene from "../../Game/GameScene.js";
import WebSocketManager from "../../Game/WebSocket.js";

const MULTIPLAYER = 2;

class MultiplayerController
{
    constructor()
    {
        this.url = "/startGame/multiplayer";
    }

    show()
    {
        startGame(MULTIPLAYER);
    }

    hide()
    {
        let webSocket = new WebSocketManager();
        if (webSocket.getStateSocket()) {
            webSocket.closeSocket();
        }
        let gameScene = new GameScene();
        gameScene.hide();
    }

}

export default MultiplayerController;
