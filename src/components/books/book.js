import React, { useState } from "react"
import { ImageDetails } from "../modal"

const Book = ({ book, onShelfChange }) => {
  const [show, setShow] = useState(false)

  const onBookShelfChange = (e) => {
    const shelf = e.target.value
    onShelfChange(book, shelf)
  }

  return (
    <div className="book">
      {show && <ImageDetails show={show} setShow={setShow} book={book} />}
      <div className="book-top">
        <div
          onClick={() => setShow(true)}
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${book.imageLinks.thumbnail}")`,
          }}
        />
        <div className="book-shelf-changer">
          <select onChange={onBookShelfChange} defaultValue={book.shelf}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  )
}

export default Book
