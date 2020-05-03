import React, { createContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./Notes";

function app() {
  return (
    <div>
      <Header />
      {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default app;
