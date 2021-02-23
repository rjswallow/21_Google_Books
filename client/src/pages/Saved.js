import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import {List, ListItem} from "../components/List"

function Saved() {
  const [book, setBook] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
}, [])
// Loads all books and sets them to books
function loadBooks() {
    API.getBooks()
        .then(res =>
            setBook(res.data)
        )
        .catch(err => console.log(err));
};
// Deletes a book from the database with a given id, then reloads books from the db
function deleteBook(id) {
    API.deleteBook(id)
        .then(res => loadBooks())
        .catch(err => console.log(err));
}

  return (
    <Container fluid>
      

      <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Books On My List</h1>
          </Jumbotron>
          {book.length ? (
            <List>
              {book.map(book => (
                
                
                <ListItem key={book._id}>
                  
                    <strong>
                      {book.title} by {book.authors}
                    </strong>
                    <h3>Description</h3>
                    <p>{book.description}</p>
                    <img src={book.image}></img>
                    <a className="btn btn-primary" href={book.link}> View </a>
                    <button className="btn btn-primary" onClick={() => deleteBook(book._id)}>Delete</button>
                  
                  {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
                </ListItem>
              )
              )}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>

    </Container>
  );
}


export default Saved;
