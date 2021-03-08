import React, { lazy, Suspense, useState } from "react"

import "./App.css"
import SearchBook from "./components/books/searchBook"
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"

const BookShelfList = lazy(() => import("./components/books/bookShelfList"))

export default function BooksApp() {
  const [isDarkTheme, setTheme] = useState(false)
  const changeThemeHandler = (e) => {
    if (isDarkTheme) setTheme(false)
    else setTheme(true)
  }
  return (
    <div className={isDarkTheme ? "dark-theme app" : "app"}>
      <header className="list-books-title">
        <h1>Books Library</h1>
        <div className="theme-toggler">
          <Button variant="secondary" size="lg">
            Light Theme
            <div class="custom-control custom-switch">
              <input
                onClick={(e) => changeThemeHandler(e)}
                type="checkbox"
                className="custom-control-input"
                id="customSwitch1"
                value={isDarkTheme}
              />
              <label className="custom-control-label" for="customSwitch1" />
            </div>
          </Button>
        </div>
      </header>
      <Suspense fallback={() => <div className="loader" />}>
        <BookShelfList />
      </Suspense>
    </div>
  )
}
