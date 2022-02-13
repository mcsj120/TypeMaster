package main

import (
	service "backend/service"
	"log"
)

func main() {
	log.SetFlags(log.LstdFlags | log.Lshortfile)
	service.Server_Init()
}
