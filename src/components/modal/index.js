import React, { useState } from "react"
import { Modal, Button, Image } from "react-bootstrap"

/**
 * for show book details
 * @param {show} for status of modal
 *
 */
export function ImageDetails({ show, setShow, book }) {
  /**
   *
   * @returns for close book detail modal
   */
  const handleClose = () => setShow(false)
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton />
        <Modal.Body>
          <Image src={book.imageLinks.thumbnail} />
          <div>{book.title}</div>
          <div className="book-authors">{book.authors}</div>
          <p>{book.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
