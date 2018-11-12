package main

import (
	"fmt"
	"log"
	"net/http"
)

func handleServer(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, r.URL.Path[1:])
}

func main() {
	fmt.Println("Please, contact me on port 4321!")
	http.HandleFunc("/", handleServer)
	log.Fatal(http.ListenAndServeTLS(":4321", "certA.crt", "privkeyA.pem", nil))
}
