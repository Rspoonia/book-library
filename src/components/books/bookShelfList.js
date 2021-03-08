import React, { useEffect, useState } from "react"
import BookShelf from "./bookShelf"
import * as BooksAPI from "../repository/booksApi"

//TODO need to add search and add new books
export default function BookShelfList() {
  /**
   * for show loading state
   */
  const [isLaoding, setIsLaoding] = useState(true)
  /**
   * for store book information at home page
   */
  const [books, setBooks] = useState()
  // for get list of books for home page
  const bookDetailsFetcher = async () => {
    const res = await BooksAPI.getAll()
    setBooks([...res])
    setIsLaoding(false)
  }
  // for called an api at initial level
  useEffect(() => {
    bookDetailsFetcher()
  }, [])
  /**
   * filter book catagory of book
   */
  const currentlyReading =
    books?.filter((book) => book.shelf === "currentlyReading") || []
  const wantToRead = books?.filter((book) => book.shelf === "wantToRead") || []
  const read = books?.filter((book) => book.shelf === "read") || []

  //TODO: api call of get after put call
  const onShelfChange = (book, shelf) => {
    setIsLaoding(true)
    BooksAPI.update(book, shelf).then(() => bookDetailsFetcher())
  }

  return (
    <div className="list-books">
      {isLaoding ? (
        <div className="loader" />
      ) : (
        <>
          <div className="list-books-content">
            <div>
              <BookShelf
                shelfTitle="Currently Reading"
                bookList={currentlyReading}
                onShelfChange={onShelfChange}
              />
              <BookShelf
                shelfTitle="Want to Read"
                bookList={wantToRead}
                onShelfChange={onShelfChange}
              />
              <BookShelf
                shelfTitle="Read"
                bookList={read}
                onShelfChange={onShelfChange}
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}
