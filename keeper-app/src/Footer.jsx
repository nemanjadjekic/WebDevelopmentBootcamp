import React from "react";

function footer() {
  var objDate = new Date();
  var year = objDate.getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default footer;
