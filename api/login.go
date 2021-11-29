package handler

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"

	_ "github.com/lib/pg"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	connStr := os.Getenv("DATABASE_URL")
	db, err := sql.Open("postgres", connStr)

	if err != nil {
		log.Fatal(err)
	}

	formData := r.Body
	fmt.Println(formData)
	rows, err := db.Query("SELECT website.authenticate_user($1, $2)", username, password)
	fmt.Println(rows)
}
