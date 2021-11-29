package handler

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	_ "github.com/lib/pg"
)

type User struct {
	Username string
	Password string
}

func Handler(w http.ResponseWriter, r *http.Request) {
	connStr := os.Getenv("DATABASE_URL")
	db, err := sql.Open("postgres", connStr)

	if err != nil {
		log.Fatal(err)
	}

	var u User

	err = json.NewDecoder(r.Body).Decode(&u)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	fmt.Println(u)
	rows, err := db.Query("SELECT website.authenticate_user($1, $2)", u.Username, u.Password)
	fmt.Println(rows)
}
