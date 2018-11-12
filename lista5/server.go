package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func printHeader(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, r.Method, r.URL, r.Proto)
	fmt.Fprintln(w, "Host: ", r.Host)

	for k, v := range r.Header {
		fmt.Fprintf(w, "%s: ", k)

		for _, subs := range v {
			fmt.Fprintf(w, "%s ", subs)
		}
		fmt.Fprintf(w, "\n")
	}
}

func handleServer(w http.ResponseWriter, r *http.Request) {
	arg := os.Args[1]

	switch arg {
	case "-h":
		printHeader(w, r)
		break
	case "-f":
		http.ServeFile(w, r, r.URL.Path[1:])
		break
	default:
		log.Fatal("***Error: Invalid argument!")
		os.Exit(1)
	}
}

func main() {
	if len(os.Args) != 2 {
		log.Fatal("***Error: Invalid number of arguments")
		os.Exit(0)
	}

	fmt.Println("Please, contact me on port 4321!")
	http.HandleFunc("/", handleServer)
	log.Fatal(http.ListenAndServeTLS(":4321", "certA.crt", "privkeyA.pem", nil))
}
