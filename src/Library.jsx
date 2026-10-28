// This hook is necessary for our components to have an internal sense of state
import { useState } from "react";

import { useEffect } from "react";

import { useSortable } from "@dnd-kit/react/sortable";

let initialBooks = [
  { title: "Crafting Interpreters", author: "Robert Nystrom", color: "blue" },
  { title: "How to Bake Pi", author: "Eugenia Cheng", color: "orange" },
  {
    title: "Live Coding: A User's Manual",
    author:
      "Alan Blackwell, Emma Cocker, Geoff Cox, Alex McLean and Thor Magnusson",
    color: "red",
  },
  {
    title: "Networks of New York",
    author: "Ingrid Burrington",
    color: "darkblue",
  },
];

let initialLibrary = localStorage.getItem("library");

if (initialLibrary != null) {
  initialLibrary = JSON.parse(initialLibrary);
} else {
  initialLibrary = initialBooks;
}

// This is our Library component which is exported for use in main.jsx
export function Library() {
  // This state field holds the set of books in our library
  let [books, setBooks] = useState(initialLibrary);

  // This works, but is not the best approach, because it might cause
  // bugs if this function had side effects
  // localStorage.setItem("library", JSON.stringify(books));

  // However, it's better for code that does things like sounds, animations,
  // connections to the internet, etc to be wrapped in this useEffect() function
  useEffect(() => {
    localStorage.setItem("library", JSON.stringify(books));
  }, [books]);

  return (
    <section>
      <h1>My Library</h1>
      <NewBook
        onCreated={(book) => {
          setBooks([...books, book]);
        }}
      />
      <ul className="books">
        {books.map((book, i) => (
          <Book
            id={book.title}
            index={i}
            key={book.title}
            color={book.color}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
    </section>
  );
}

// This component contains the form for adding a new book
// to our library
function NewBook({ onCreated }) {
  // State variable for the title being entered
  let [title, setTitle] = useState("");

  // State variable for our book color picker
  let [color, setColor] = useState("#302828");

  // When the "+" button is clicked, the title and color state variables
  // are reset and then the "onCreated" function is called with a new book
  // object
  function submit() {
    setTitle("");
    setColor("#302828");
    onCreated({ title, author: "", color });
  }

  return (
    <div className="new-book" style={{ borderColor: color }}>
      {/* Our input fields each feed into a specific state field */}
      <input value={title} onInput={(event) => setTitle(event.target.value)} />
      <input
        value={color}
        onInput={(event) => setColor(event.target.value)}
        type="color"
      ></input>
      {/* The "+" button calls the submit function */}
      <button onClick={submit} disabled={title == ""}>
        +
      </button>
    </div>
  );
}

/*
Props for Sortable behavior:
- id: Unique to the book (title)
- index: Position in the list for the book (0, 1, 2...)
*/
function Book({ id, index, color, title }) {
  // Attach the sortable behavior to the books in the stack
  // The ref is a variable we can attach to a JSX tag
  let { ref } = useSortable({ id, index });

  return (
    <li ref={ref} style={{ background: color }}>
      {title}{" "}
    </li>
  );
}
