import React, { useState } from "react"
import { Link } from "react-router-dom"
import * as BooksAPI from "../repository/booksApi"
import Book from "./book"

export default function SearchBook({ onShelfChange, books }) {
  const [searchResults, setSearchResults] = useState([])
  /**
   *
   * @param {*} e
   * @returns if query is empty then it would be set null array
   */
  const search = async (e) => {
    const query = e.target.value
    if (!query) {
      setSearchResults({
        searchResults: [],
      })
      return
    }
    const res = await BooksAPI.search(query, 20)
    setSearchResults([...res])
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={search}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults?.map((book) => (
            <li key={book.id}>
              <Book book={book} onShelfChange={onShelfChange} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
