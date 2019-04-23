import React from "react"

// const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// const testCamel = " b don't wanna know"
// // helpers
// const strToCamelCase = (str) => {
//   let arr
//   // string to camel capital case
//   arr = str.trim().split("")
//   arr[0] = arr[0].toLowerCase()
//   // capitalize each first letter
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i-1] === " ") {
//       arr[i] = arr[i].toUpperCase()
//     }
//   }
//   // remove all characters except alphabet
//   return arr.map(char => (
//     alphabet.includes(char) || alphabet.map(c=>c.toUpperCase()).includes(char) ?
//       char :
//       ""
//     )
//   ).join("")
//   // remove all whitespaces
//   .replace(/\s+/g, '')
// }

const App = () => (
  <div>
    <header>
      <h1>HTML forms</h1>
    </header>
    <nav>
      <ul>
        <li>Prerequisites</li>
        <li>Basic guides</li>
        <li>Available form widgets</li>
        <li>Validating and submitting form data</li>
        <li>Advanced guides</li>
        <li>Form styling guides</li>
        <li>Reference</li>
      </ul>
    </nav>
    <main>
      {/* later: jumbotron */}
      <div id="intro">
        <p>
          HTML forms are a very powerful tool for interacting with users; however,
          for historical and technical reasons, it's not always obvious how to use them
          to their full potential. In this guide, we'll cover brief of all aspects of HTML forms,
          from structure to styling, from data handling to custom widgets.
        </p>
      </div>
      {/* content */}
      <div>

      </div>
      <div id="prerequisites">
        <h2>Prerequisites</h2>
        <p>
          Before we go further, you should at least have basic knowledge of [HTML](link).
          Also, even though you can have forms without any styling nor validation,
          it is preferable for you to learn [CSS](link) and [Javascript](link) beforehand,
          as you won't be able to do much with forms without some of the advanced
          form features, CSS, and Javascript.
        </p>
      </div>
      <div id="basicGuides">
        <h2>Basic guides</h2>
        <div>
          <h3>Creating an HTML form</h3>
          <p>...</p>
          <h3>The structure of an HTML form</h3>
          <p>...</p>
        </div>
      </div>
      <div id="availableFormWidgets">
        <h2>Available form widgets</h2>
        <p>...</p>
      </div>
      <div id="validatingAndSubmittingFormData">
        <h2>Validating and submitting form data</h2>
        <div>
          <h3>Sendng form data</h3>
          <p>...</p>
          <h3>Form data validation</h3>
          <p>...</p>
        </div>
      </div>
      <div id="advancedGuides">
        <h2>Advanced guides</h2>
        <div>
          <h3>Building a custom form widgets</h3>
          <p>...</p>
          <h3>Sending forms through Javascript</h3>
          <p>...</p>
          <h3>HTML forms in legacy browsers</h3>
          <p>...</p>
        </div>
      </div>
      <div id="formStylingGuides">
        <h2>Form styling guides</h2>
        <div>
          <h3>Styling HTML forms</h3>
          <p>...</p>
          <h3>Advanced styling for HTML forms</h3>
          <p>...</p>
          <h3>Property compatibility table for form widgets</h3>
          <p>...</p>
        </div>
      </div>
      <div id="">
        <h2>Reference</h2>
        <p>
          Check out full documentation on {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms" target="_blank" rel="noopener noreferrer">
          HTML forms on MDN site</a>. You might also want to check out all {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" target="_blank" rel="noopener noreferrer">
          attributes</a> you can use and {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" target="_blank" rel="noopener noreferrer">
          browser compatibility</a> for HTML forms. Also a number of useful {" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Forms" target="_blank" rel="noopener noreferrer">
          HTML elements</a> you can use alongside HTML forms.
        </p>
      </div>
    </main>

  </div>
)

export default App
