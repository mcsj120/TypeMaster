package main

import (
	"fmt"
	"log"
	"net/http"
	"strings"

	"github.com/gorilla/websocket"
)

var wsupgrader websocket.Upgrader

func Server_Init() {
	wsupgrader = websocket.Upgrader{
		ReadBufferSize:  1024,
		WriteBufferSize: 1024,
		CheckOrigin: func(r *http.Request) bool {
			return true
		},
	}
	server()
}

func server() {
	port := 8080
	http.HandleFunc("/", handler)
	http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
}

func handler(w http.ResponseWriter, r *http.Request) {
	conn, err := wsupgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Print(err)
		return
	}
	defer conn.Close()
	fmt.Println("Upgraded and connected")
	message := []byte("Hello")
	conn.WriteMessage(websocket.TextMessage, message)
	task := getTask(RandomString())
	for {
		messageType, p, err := conn.ReadMessage()
		if err != nil {
			log.Println(err)
			return
		}
		stringMessage := string(p)
		var returnMessage string = handleMessage(stringMessage, task)

		if err := conn.WriteMessage(messageType, []byte(returnMessage)); err != nil {
			log.Println(err)
			return
		}
		if returnMessage == "complete" {
			conn.Close()
		}
	}
}

func handleMessage(message string, task *Task) string {
	currString := task.passage[task.position]
	if strings.Trim(message, " ") == currString {
		task.position = task.position + 1
		if task.position == len(task.passage) {
			return "complete"
		}
		return "true"
	}
	return "false"
}
