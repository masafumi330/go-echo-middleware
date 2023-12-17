package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	// CORS middleware
	// e.Use(middleware.CORS())

	e.GET("/hello", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{"message": "Hello World"})
	})
	e.Logger.Fatal(e.Start(":1323"))
}
