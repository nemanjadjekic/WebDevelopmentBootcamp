import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function app() {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  );
}

export default app;

//1. Create a new React app. DONE
//2. Create a App.jsx component. DONE
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>. DONE
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year. DONE

//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.
