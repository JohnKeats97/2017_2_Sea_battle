"use strict";


import FirstGameScene from "./GameSceneFirst.js";
import WebSocketManager from "./WebSocket.js";
import GameController from "./GameController.js"

// TO DO - Работа с DOM через мэнэджер document.getID -> в мэнэджер и его дергать
// Все комментарии для GameScene (1 и 2)
// Кнопки [перезагрузки поля], чтобы поле и кнопки не бегали вверх/вниз, фон за полем
// убрать _
// Добавить кнопку назад в меню [прекратить игру]

function startFirstGameScene (e) {
    let fieldClass = e.data;
    fieldClass = JSON.parse(fieldClass);
    fieldClass = fieldClass.class;
    if ( fieldClass == "MsgYouInQueue" ){
        alert("Ожидание игрока");
    }
    else if ( fieldClass == "MsgLobbyCreated" ) {
        let firstScene = new FirstGameScene();
        firstScene.show();
    }
    else if ( fieldClass == "MsgPing") {
        let webSocketManager = new WebSocketManager();
        webSocketManager.pingSocket();
    }
    else {
        console.log("Ошибка");
    }
}

function startGame(message) {

    let gameContoller = new GameController();
    gameContoller.setGame(message);

    if (gameContoller.getGame()) {
        let webSocketManager = new WebSocketManager();
        webSocketManager.messageSocket(startFirstGameScene);
        webSocketManager.openSocket();
        webSocketManager.closeSocket();
    }
    else {
        let firstScene = new FirstGameScene();
        firstScene.show();
    }

    // let firstScene = new FirstGameScene();
    // firstScene.show();


    // let firstScene;
    // if (!(navigator.connection.rtt)) {
    //     // нет интернета
    //     firstScene = new FirstGameScene();
    //     firstScene.show();
    // }
    // else {
    //     // есть интернет
    //     firstScene = new FirstGameScene();
    //     firstScene.show();
    // }
}

export default startGame