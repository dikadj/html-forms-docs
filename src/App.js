import React from "react"
import Helmet from "react-helmet"

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
    <Helmet>
      <title>HTML forms technical documentation</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
    </Helmet>
    <div className="container">
      {/* Start content here */}
      <nav id="navbar" className="py-3">
        <header className="d-flex flex-row justify-content-between">
          <h1 className="font-weight-bold">HTML forms</h1>
        </header>
        <ul className="nav d-flex flex-column flex-md-row"
          style={{
            background: "rgb(0,0,0)",
            color: "rgb(255,255,255)",
            // height: "0"
          }}
        >
          <li><a className="text-white nav-link" href="#prerequisites">Prerequisites</a></li>
          <li><a className="text-white nav-link" href="#basicGuides">Basic guides</a></li>
          <li><a className="text-white nav-link" href="#availableFormWidgets">Available form widgets</a></li>
          <li><a className="text-white nav-link" href="#reference">Reference</a></li>
        </ul>
      </nav>
      <main id="main-doc">
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
          <section id="prerequisites" className="main-section py-3">
            <header>
              <h2 className="font-weight-bold">Prerequisites</h2>
            </header>
            <p>
              Before we go further, you should at least have basic knowledge of <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
              HTML</a>. Also, even though you can have forms without any styling nor validation,
              it is preferable that you learn <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
              CSS</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
              Javascript</a> beforehand, as you won't be able to do much with forms without some of the advanced
              form features, CSS, and Javascript.
            </p>
          </section>
          <section id="basicGuides" className="main-section py-3">
            <header>
              <h2 className="font-weight-bold">Basic guides</h2>
            </header>
            <div>
              <div id="creatingAnHTMLForm">
                <h3>Creating an HTML form</h3>
                <p>
                  HTML Forms are one of the main points of interaction between a user
                  and a web site or application. They allow users to send data
                  to the web site. Most of the time that data is sent to the web server,
                  but the web page can also intercept it to use it on its own.
                  Here's an example of how you create an HTML form using <code>
                  &lt;form&gt;</code>, <code>&lt;label&gt;</code>, <code>
                  &lt;input&gt;</code>, and <code>&lt;button&gt;</code>:
                </p>
                <iframe title="Creating an HTML form" width="100%" height="310"
                  src="//jsfiddle.net/dikadj/c8op20ez/13/embedded/html,result/"
                  allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                </iframe>
                <p>
                  The <code>action</code> attribute corresponds to where the data will
                  be sent after the form submitted with the <code>
                  method</code> you choose to send them. In this case we're using "post" method.
                </p>
                <p>
                  <code>&lt;label&gt;</code> is not necessary for a form to work,
                  and many people tend to use <code>placeholder</code> attribute instead.
                  However, <code>placeholder</code> attribute's role is not for
                  representing a label of an input. It's even noted by <a href="https://www.w3.org/">
                  W3C</a> that it's purpose is for giving a hint to users of
                  the appropriate data should be filled in the input. So,
                  You may want to consider using <code>&lt;label&gt;</code> instead.
                </p>
              </div>

              <div id="theStructureOfAnHTMLForm">
                <h3>The structure of an HTML form</h3>
                <p>
                  The flexibility of HTML forms makes them one of the most complex
                  structures in HTML; you can build any kind of basic form using dedicated
                  form elements and attributes. Using correct structure when building
                  an HTML form will help ensure that the form is both usable and accessible.
                </p>
                <div id="theFormElement">
                  <h4>The <code>&lt;form&gt;</code> element</h4>
                  <p>
                    The <code>&lt;form&gt;</code> element formally defines a form and
                    attributes that determine the behavior of this form. Each time you
                    want to create an HTML form, you must start it by using this element,
                    putting all the contents inside. Many assistive technologies or browser
                    plugins can discover <code>&lt;form&gt;</code> elements and implement
                    special hooks to make them easier to use.
                  </p>
                </div>
                <div id="theFieldsetAndLegendElement">
                  <h4>The <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code> elements</h4>
                  <p>
                    The <code>&lt;fieldset&gt;</code> element is a convenient way to
                    create groups of widgets that share the same purpose, for styling
                    and semantic purposes. You can label a <code>&lt;fieldset&gt;
                    </code> by including a <code>&lt;legend&gt;</code> element just
                    below the opening <code>&lt;fieldset&gt;</code> tag. The text content
                    of the <code>&lt;legend&gt;</code> formally describes the purpose of
                    the <code>&lt;fieldset&gt;</code> it is included inside.
                    Here's an example of how you may use <code>&lt;fieldset&gt; </code>
                    with <code>&lt;legend&gt;</code>:
                  </p>
                  <iframe title="Using fieldset and legend" width="100%" height="400"
                    src="//jsfiddle.net/dikadj/2zyo7435/3/embedded/html,result/"
                    allowFullScreen="allowfullscreen" allowpaymentrequest="true"
                    frameBorder="0">
                  </iframe>
                  <p>
                    From the above example, a screen reader will speak
                    "Chocolate Milk Shake size small" for the first input,
                    "Chocolate Milk Shake size medium" for the second input, and
                    "Chocolate Milk Shake size large" for the last input,
                  </p>
                  <p>
                    The use case in this example is one of the most important.
                    Each time you have a set of radio buttons, you ought to nest them
                    inside a <code>&lt;fieldset&gt;</code> element. There are other
                    use cases, and in general the <code>&lt;fieldset&gt;</code> element
                    can also be used to section a form. Ideally long forms should be
                    split across multiple pages, but if a form is getting long but has
                    to be on a single page, putting the different related sections inside
                    different fieldsets can improve usability.
                  </p>
                </div>
                <div id="theLabelElement">
                  <h4>The <code>&lt;label&gt;</code> element</h4>
                  <p>
                    The <code>&lt;label&gt;</code> element is the formal way to
                    define a label for an HTML form widget. This is the most important
                    element if you want to build accessible forms — when implemented
                    properly, screenreaders will speak a form element's label along
                    with any related instructions. Here's an example of how you do it,
                    as we implemented in the previous example:
                  </p>
                  <iframe title="Using label element" width="100%" height="110"
                    src="//jsfiddle.net/dikadj/y2utjgL3/1/embedded/html,result/"
                    allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                  </iframe>
                  <p>
                    Note that a widget can be nested inside its <code>&lt;label&gt;</code> element,
                    like so:
                  </p>
                  <iframe title="Using nested label element" width="100%" height="125"
                    src="//jsfiddle.net/dikadj/50awfhv1/3/embedded/html,result/"
                    allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                  </iframe>
                  <p>
                    It is still considered best practice to set the for attribute
                    because some assistive technologies do not understand implicit
                    relationships between labels and widgets.
                  </p>
                  <div id="labelsAreClickableToo">
                    <h4><em>Labels are clickable, too!</em></h4>
                    <p>
                      Another advantage of properly set up labels is that you can
                      click the label to activate the corresponding widget, in all
                      browsers. This is useful for examples like text inputs, where
                      you can click the label as well as the input to focus it.
                    </p>
                  </div>
                  <div id="multipleLabels">
                    <h4><em>Multiple labels?</em></h4>
                    <p>
                      Strictly speaking, you can put multiple labels on a single widget,
                      but this is not a good idea as some assistive technologies can
                      have trouble handling them. In the case of multiple labels,
                      you should nest a widget and its labels inside
                      a single <code>&lt;label&gt;</code> element.
                      Let's consider this example:
                    </p>
                    <iframe title="Using multiple labels" width="100%" height="500"
                      src="//jsfiddle.net/dikadj/3ozcek40/1/embedded/html,result/"
                      allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="availableFormWidgets" className="main-section py-3">
            <header>
              <h2 className="font-weight-bold">Available form widgets</h2>
            </header>
            <p>
              Here we will focus on the form widgets built in to browsers,
              but because HTML forms remain quite limited and the quality of the
              implementations can be very different from one browser to another,
              web developers sometimes build their own form widgets.
            </p>
            <div className="table-responsive">
              <h3>Common attributes</h3>
              <p>
                Many of the elements used to define form widgets have some of
                their own attributes. However, there is a set of attributes common
                to all form elements that give you some control over those widgets.
                Here is a list of those common attributes:
              </p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Attribute&nbsp;name</th>
                    <th scope="col">Default&nbsp;value</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <code>autofocus</code>
                    </th>
                    <td>
                      (<em>false</em>)
                    </td>
                    <td>
                      This Boolean attribute lets you specify that the element
                      should automatically have input focus when the page loads,
                      unless the user overrides it, for example by typing in a
                      different control. Only one form-associated element in a
                      document can have this attribute specified.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code>disabled</code>
                    </th>
                    <td>
                      (<em>false</em>)
                    </td>
                    <td>
                      This Boolean attribute indicates that the user cannot interact
                      with the element. If this attribute is not specified,
                      the element inherits its setting from the containing element,
                      for example, <code>&lt;fieldset&gt;</code>; if there is no containing
                      element with the <code>disabled</code> attribute set, then the element is enabled.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code>form</code>
                    </th>
                    <td>
                    </td>
                    <td>
                      The form element that the widget is associated with. The value
                      of the attribute must be the <code>id</code> attribute of <code>
                      a &lt;form&gt;</code> element in the same document. In theory,
                      it lets you set a form widget outside of a <code>&lt;form&gt;
                      </code> element. In practice, however, there is no browser
                      which supports that feature.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code>name</code>
                    </th>
                    <td>
                    </td>
                    <td>
                      The name of the element; this is submitted with the form data.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <code>value</code>
                    </th>
                    <td>
                    </td>
                    <td>
                      The element's initial value.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="textInputFields">
              <h3>Text input fields</h3>
              <p>
                Text <code>&lt;input&gt;</code> fields are the most basic form widgets.
                They are a very convenient way to let the user enter any kind of data.
                However, some text fields can be specialized to achieve particular needs.
              </p>
              <p>
                All text fields share some common behaviors:
              </p>
              <ul>
                <li>
                  They can be marked as <code>readonly</code> (the user cannot modify
                  the input value) or even <code>disabled</code> (the input value is
                  never sent with the rest of the form data).
                </li>
                <li>
                  They can have a <code>placeholder</code>; this is text that appears
                  inside the text input box that describes the purpose of the box briefly.
                </li>
                <li>
                  They can be constrained in <code>size</code> (the physical size of the box)
                  and length (the maximum number of characters that can be entered into the box).
                </li>
                <li>
                  They can benefit from spell checking, if the browser supports it.
                </li>
              </ul>
              <div id="singleLineTextFields">
                <h4><em>Single line text fields</em></h4>
                <p>
                  A single line text field is created using an &lt;input&gt; element
                  whose type attribute value is set to text (also, if you don't provide
                  the type attribute, text is the default value). The value text for
                  this attribute is also the fallback value if the value you specify
                  for the type attribute is unknown by the browser (for example
                  if you specify <code>type="date"</code> and the browser doesn't
                  support native date pickers). Here is a basic single line text field example:
                </p>
                <iframe title="Using single line text fields" width="100%" height="110"
                  src="//jsfiddle.net/dikadj/hgxyjcat/1/embedded/html,result/"
                  allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                </iframe>
                <p>
                  Single line text fields have only one true constraint:
                  if you type text with line breaks, the browser removes
                  those line breaks before sending the data.
                </p>
                <div id="emailAddressField">
                  <h4>E-mail address field</h4>
                  <p>
                    This type of field is set with the value <code>email</code> for the type attribute:
                  </p>
                  <iframe title="Using email address fields" width="100%" height="110"
                    src="//jsfiddle.net/dikadj/rtfguj3n/1/embedded/html,result/"
                    allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                  </iframe>
                  <p>
                    When this type is used, the user is required to type a valid
                    e-mail address into the field; any other content causes the
                    browser to display an error when the form is submitted.
                    Note that this is client-side error validation, performed by the browser.
                  </p>
                  <p>
                    It's also possible to let the user type several e-mail addresses
                    into the same input (separated by commas) by including the <code>
                    multiple</code> attribute.
                  </p>
                  <p>
                    On some devices (especially on mobile), a different virtual keypad
                    might be presented that is more suitable for entering email addresses.
                  </p>
                </div>
                <div>
                  <h4>Password field</h4>
                  <p>
                    This type of field is set using the value <code>password</code> for
                    the type attribute:
                  </p>
                  <iframe title="Using password field" width="100%" height="110"
                    src="//jsfiddle.net/dikadj/5smLpjx2/1/embedded/html,result/"
                    allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                  </iframe>
                  <p>
                    It doesn't add any special constraints to the entered text,
                    but it does obscure the value entered into the field
                    (e.g. with dots or asterisks) so it can't be read by others.
                  </p>
                </div>
                <div>
                  <h4>Search field</h4>
                  <p>
                    This type of field is set by using the value <code>search</code> for the type attribute:
                  </p>
                  <iframe title="Using search field" width="100%" height="110"
                    src="//jsfiddle.net/dikadj/7a0k1ms8/embedded/html,result/"
                    allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                  </iframe>
                  <p>
                    The main difference between a text field and a search field is
                    how the browser styles it — often, search fields are rendered
                    with rounded corners, and/or given an "x" to press to clear
                    the entered value. However, there is another added feature
                    worth noting: their values can be automatically saved to be
                    auto completed across multiple pages on the same site.
                  </p>
                </div>
                <div>
                  <h4>Phone number field</h4>
                  <p>
                    This type of field is set using <code>tel</code> as the value of the type attribute:
                  </p>
                  <iframe title="Using phone number field" width="100%" height="110"
                    src="//jsfiddle.net/dikadj/r4mho58e/embedded/html,result/"
                    allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                  </iframe>
                  <p>
                    Due to the wide variety of phone number formats around the world,
                    this type of field does not enforce any constraints on the value
                    entered by a user (this can include letters, etc.). This is primarily
                    a semantic difference, although on some devices (especially on mobile),
                    a different virtual keypad might be presented that is more suitable
                    for entering phone numbers.
                  </p>
                </div>
                <div>
                  <h4>URL field</h4>
                  <p>
                    This type of field is set using the value url for the type attribute:
                  </p>
                  <iframe title="Using URL field" width="100%" height="110"
                    src="//jsfiddle.net/dikadj/n8s3kt21/embedded/html,result/"
                    allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                  </iframe>
                  <p>
                    It adds special validation constraints to the field, with the
                    browser reporting an error if invalid URLs are entered.
                  </p>
                </div>
              </div>
              <div id="multiLineTextFields">
                <h4><em>Multi-line text fields</em></h4>
                <p>
                  A multi-line text field is specified using a <code>&lt;textarea&gt;
                  </code> element, rather than using the <code>&lt;input&gt;</code> element.
                </p>
                <iframe title="Using textarea field" width="100%" height="110"
                  src="//jsfiddle.net/dikadj/7m94nfxs/embedded/html,result/"
                  allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                </iframe>
                <p>
                  The main difference between a textarea and a regular single line
                  text field is that users are allowed to type text that includes
                  hard line breaks (i.e. pressing enter/return).
                </p>
                <p>
                  <code>&lt;textarea&gt;</code> also accepts a few extra attributes
                  to control its rendering across several lines
                  (in addition to several others):
                </p>
                <table className="table table-bordered">
                  <caption>
                    Attributes for the <code>&lt;textarea&gt;</code> element
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">
                        Attribute&nbsp;name
                      </th>
                      <th scope="col">
                        Default&nbsp;value
                      </th>
                      <th scope="col">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <code>cols</code>
                      </th>
                      <td>
                        20
                      </td>
                      <td>
                        The visible width of the text control, in average character widths.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <code>rows</code>
                      </th>
                      <td></td>
                      <td>
                        The number of visible text lines for the control.
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <code>wrap</code>
                      </th>
                      <td>
                        soft
                      </td>
                      <td>
                        Indicates how the control wraps text. Possible values are: <code>
                        hard</code> or <code>soft</code>.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  Note that the <code>&lt;textarea&gt;</code> element is written
                  a bit differently from the <code>&lt;input&gt;</code> element.
                  The <code>&lt;input&gt;</code> element is an empty element,
                  which means that it cannot contain any child elements.
                  On the other hand, the <code>&lt;textarea&gt;</code> element
                  is a regular element that can contain text content children.
                </p>
              </div>
            </div>
            <div className="border-bottom border-dark py-2 my-2">
              <h3>Drop-down content</h3>
              <p>
                Drop-down widgets are a simple way to let users select one of
                many options without taking up much space in the user interface.
                HTML has two forms of drop down content: the <strong>select box
                </strong>, and <strong>autocomplete box</strong>.
              </p>
              <div>
                <h4><em>Select box</em></h4>
                <p>
                  A select box is created with a <code>&lt;select&gt;</code> element
                  with one or more <code>&lt;option&gt;</code> elements as its
                  children, each of which specifies one of its possible values.
                </p>
                <iframe title="Using select box" width="100%" height="160"
                  src="//jsfiddle.net/dikadj/uztcm8k4/embedded/html,result/"
                  allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                </iframe>
                <p>
                  If required, the default value for the select box can be set
                  using the <code>selected</code> attribute on the desired <code>
                  &lt;option&gt;</code> element — this option is then preselected
                  when the page loads. The <code>&lt;option&gt;</code> elements
                  can also be nested inside <code>&lt;optgroup&gt;</code> elements
                  to create visually associated groups of values:
                </p>
                <iframe title="Using optgroup and selected" width="100%" height="290"
                  src="//jsfiddle.net/dikadj/tnjfrh57/1/embedded/html,result/"
                  allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                </iframe>
              </div>
              <div>
                <h4><em>Multiple choice select box</em></h4>
                <p>
                  By default, a select box only lets the user select a single value.
                  By adding the <code>multiple</code> attribute to the <code>&lt;select&gt;
                  </code> element, you can allow users to select several values,
                  by using the default mechanism provided by the operating system
                  (e.g. holding down <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> and clicking multiple values).
                </p>
                <iframe title="Using multiple choice select box" width="100%" height="160"
                  src="//jsfiddle.net/dikadj/ydwpkex4/embedded/html,result/"
                  allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                </iframe>
              </div>
              <div>
                <h4><em>Autocomplete box</em></h4>
                <p>
                  You can provide suggested, automatically-completed values for
                  form widgets using the <code>&lt;datalist&gt;</code> element
                  with some child <code>&lt;option&gt;</code> elements to specify
                  the values to display.
                </p>
                <iframe title="Using autocomplete box" width="100%" height="305"
                  src="//jsfiddle.net/dikadj/5jysep1o/embedded/html,result/"
                  allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                </iframe>
                <p>
                  The  <code>&lt;datalist&gt;</code> element is a very recent
                  addition to HTML forms, so browser support is a bit more
                  limited than what we saw earlier. To handle this, here is a
                  little trick to provide a nice fallback for those browsers:
                </p>
                <iframe title="Using autocomplete box fallback" width="100%" height="375"
                  src="//jsfiddle.net/dikadj/62zpbar0/embedded/html,result/"
                  allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                </iframe>
              </div>
            </div>
            <div className="border-bottom border-dark py-2 my-2">
              <h3>Checkable items</h3>
              <p>
                Checkable items are widgets whose state you can change by clicking on them.
                There are two kinds of checkable item: the <strong>check box</strong> and
                the <strong>radio button</strong>. Both use the <code>checked</code> attribute
                to indicate whether the widget is checked by default or not.
              </p>
              <p>
                For maximum usability/accessibility, you are advised to surround
                each list of related items in a <code>&lt;fieldset&gt;</code>,
                with a <code>&lt;legend&gt;</code> providing an overall description
                of the list.  Each individual pair of <code>&lt;label&gt;</code>/
                <code>&lt;input&gt;</code> elements should be contained in its
                own list item (or similar). This is shown in the examples.
              </p>
              <div>
                <h4><em>Check box</em></h4>
                <p>
                  A check box is created using the <code>&lt;input&gt;</code> element
                  with its <code>type</code> attribute set to the value <code>checkbox</code>.
                </p>
                <iframe title="Using check box" width="100%" height="125"
                  src="//jsfiddle.net/dikadj/m6t85j0w/2/embedded/html,result/"
                  allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                </iframe>
              </div>
              <div>
                <h4><em>Radio button</em></h4>
                <p>
                  A radio button is created using the <code>&lt;input&gt;</code> element
                  with its <code>type</code> attribute set to the value <code>radio</code>.
                </p>
                <iframe title="Using radio button" width="100%" height="125"
                  src="//jsfiddle.net/dikadj/nbwa9cLy/embedded/html,result/"
                  allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                </iframe>
                <p>
                  Several radio buttons can be tied together. If they share the
                  same value for their name attribute, they will be considered
                  to be in the same group of buttons.
                </p>
                <iframe title="Using radio button group" width="100%" height="395"
                  src="//jsfiddle.net/dikadj/b5nym9v1/2/embedded/html,result/"
                  allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                </iframe>
              </div>
            </div>
            <div className="border-bottom border-dark py-2 my-2">
              <h3>Buttons</h3>
              <p>
                Within HTML forms, there are three kinds of button:
              </p>
              <span><strong>Submit</strong></span>
              <p className="pl-3">
                Sends the form data to the server. For <code>&lt;button&gt;
                </code> elements, omitting the <code>type</code> attribute
                (or an invalid value of <code>type</code>) results in a submit button.
              </p>
              <span><strong>Reset</strong></span>
              <p className="pl-3">
                Resets all form widgets to their default values.
              </p>
              <span><strong>Anonymous</strong></span>
              <p className="pl-3">
                Buttons that have no automatic effect but can be customized using JavaScript code.
              </p>
              <p>
                A button is created using a <code>&lt;button&gt;</code> element
                or an <code>&lt;input&gt;</code> element. It's the value of the
                type attribute that specifies what kind of button is displayed:
              </p>
              <div>
                <h4><em>submit</em></h4>
                <iframe title="Using submit button" width="100%" height="175"
                  src="//jsfiddle.net/dikadj/601w3Lfk/1/embedded/html,result/"
                  allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                </iframe>
              </div>
              <div>
                <h4><em>reset</em></h4>
                <iframe title="Using reset button" width="100%" height="175"
                  src="//jsfiddle.net/dikadj/kr491Lhq/embedded/html,result/"
                  allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                </iframe>
              </div>
              <div>
                <h4><em>anonymous</em></h4>
                <iframe title="Using anonymous button" width="100%" height="175"
                  src="//jsfiddle.net/dikadj/vrncd68L/embedded/html,result/"
                  allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                </iframe>
              </div>
            </div>
            <div className="border-bottom border-dark py-2 my-2">
              <h3>Advanced form widgets</h3>
              <p>
                This section covers widgets that let users input complex or unusual
                data, including exact or approximate numbers, dates and times, or colors.
              </p>
              <div>
                <h4><em>Numbers</em></h4>
                <p>
                  Widgets for numbers are created with the <code>&lt;input&gt;
                  </code> element, with its <code>type</code> attribute set to the
                  value <code>number</code>. This control looks like a text field
                  but allows only floating-point numbers, and usually provides some
                  buttons to increase or decrease the value of the widget.
                </p>
                <p>
                  You can also constrain the value by setting the <code>min
                  </code> and <code>max</code> attributes and specify the
                  amount by which the increase and decrease buttons change
                  the widget's value by setting the <code>step</code> attribute.
                  Here's an example:
                </p>
                <iframe title="Using number input" width="100%" height="110"
                  src="//jsfiddle.net/dikadj/7bnxyoak/embedded/html,result/"
                  allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                </iframe>
              </div>
              <div>
                <h4><em>Sliders</em></h4>
                <p>
                  Another way to pick a number is to use a slider. Visually speaking,
                  sliders are less accurate than text fields, therefore they are
                  used to pick a number whose exact value is not necessarily important.
                </p>
                <p>
                  A slider is created by using the <code>&lt;input&gt;</code> with
                  its <code>type</code> attribute set to the value <code>range
                  </code>. It's important to properly configure your slider;
                  to that end, it's highly recommended that you set the <code>min
                  </code>, <code>max</code>, and <code>step</code> attributes.
                  Here's an example:
                </p>
                <iframe title="Using range/slider input" width="100%" height="110"
                  src="//jsfiddle.net/dikadj/1u27jgdt/embedded/html,result/"
                  allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                </iframe>
                <p>
                  One problem with sliders is that they don't offer any kind of
                  visual feedback as to what the current value is. You need to
                  add this yourself with JavaScript, but this is relatively easy
                  to do. Here's an example on how you create a display of the
                  current value in a <code>&lt;span&gt;</code> tag:
                </p>
                <iframe title="Using range/slider input with visual" width="100%" height="215"
                src="//jsfiddle.net/dikadj/swonhfp7/embedded/js,html,result/"
                allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                </iframe>
              </div>
              <div>
                <h4><em>Date and time picker</em></h4>
                <p>
                  A date and time control is created using the <code>&lt;input&gt;
                  </code> element and an appropriate value for the type attribute,
                  depending on whether you wish to collect dates, times, or both.
                </p>
                <div>
                  <span><strong>datetime-local</strong></span>
                  <p className="pl-3">
                    This creates a widget to display and pick a date with time,
                    but without any specific time zone information.
                  </p>
                  <iframe title="Using datetime-local input" width="100%" height="110"
                    src="//jsfiddle.net/dikadj/suh597xm/embedded/html,result/"
                    allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                  </iframe>
                </div>
                <div>
                  <span><strong>month</strong></span>
                  <p className="pl-3">
                    This creates a widget to display and pick a month with a year.
                  </p>
                  <iframe title="Using month input" width="100%" height="110"
                    src="//jsfiddle.net/dikadj/1c4znqp9/embedded/html,result/"
                    allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                  </iframe>
                </div>
                <div>
                  <span><strong>time</strong></span>
                  <p className="pl-3">
                    This creates a widget to display and pick a time value.
                  </p>
                  <iframe title="Using time input" width="100%" height="110"
                    src="//jsfiddle.net/dikadj/hpvwg0e1/embedded/html,result/"
                    allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                  </iframe>
                </div>
                <div>
                  <span><strong>week</strong></span>
                  <p className="pl-3">
                    This creates a widget to display and pick a week number and its year.
                  </p>
                  <iframe title="Using week input" width="100%" height="110"
                    src="//jsfiddle.net/dikadj/r86d4m2g/embedded/html,result/"
                    allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                  </iframe>
                </div>
                <p>
                  All date and time control can be constrained using the <code>min
                  </code> and <code>max</code> attributes.
                </p>
                <iframe title="Using date and time min max" width="100%" height="125"
                  src="//jsfiddle.net/dikadj/sh74cpLx/embedded/html,result/"
                  allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                </iframe>
              </div>
              <div>
                <h4><em>Color picker</em></h4>
                <p>
                  Colors are always a bit difficult to handle. There are many ways
                  to express them: RGB values (decimal or hexadecimal), HSL values,
                  keywords, etc. The color widget lets users pick a color in both
                  textual and visual ways.
                </p>
                <p>
                  A color widget is created using the <code>&lt;input&gt;</code> element
                  with its <code>type</code> attribute set to the value <code>color</code>.
                </p>
                <iframe title="Using color input" width="100%" height="110"
                  src="//jsfiddle.net/dikadj/qzwLov18/embedded/html,result/"
                  allowFullScreen="allowfullscreen" allowpaymentrequest="true" frameBorder="0">
                </iframe>
              </div>
            </div>
            <div className="border-bottom border-dark py-2 my-2">
              <h3>Other widget</h3>
              <p>
                There are a few other widgets that cannot be easily classified
                due to their very specific behaviors, but which are still very useful.
              </p>
              <div>
                <h4><em>File picker</em></h4>
                <p>
                  HTML forms are able to send files to a server.
                  The file picker widget is how the user can choose one or more files to send.
                </p>
                <p>
                  To create a file picker widget, you use the <code>&lt;input&gt;
                  </code> element with its <code>type</code> attribute set to
                  <code>file</code>. The types of files that are accepted can
                  be constrained using the <code>accept</code> attribute.
                  In addition, if you want to let the user pick more than one
                  file, you can do so by adding the <code>multiple</code> attribute.
                </p>
                <iframe title="Using file picker" width="100%" height="110"
                  src="//jsfiddle.net/dikadj/vdu5rn0e/2/embedded/html,result/"
                  allowFullScreen="allowfullscreen" allowPaymentRequest frameBorder="0">
                </iframe>
              </div>
              <div>
                <h4><em>Hidden content</em></h4>
                <p>
                  It's sometimes convenient for technical reasons to have pieces
                  of data that are sent with a form but not displayed to the user.
                  To do this, you can add an invisible element in your form. Use an
                  <code> &lt;input&gt;</code> with its <code>type</code> attribute
                  set to the value <code>hidden</code>.
                </p>
                <p>
                  If you create such an element, it's required to set its <code>
                  name</code> and <code>value</code> attributes:
                </p>
                <iframe title="Using hidden content" width="100%" height="110"
                  src="//jsfiddle.net/dikadj/tgy1vxeh/1/embedded/html,result/"
                  allowFullScreen="allowfullscreen" allowPaymentRequest frameBorder="0">
                </iframe>
              </div>
              <div>
                <h4><em>Image button</em></h4>
                <p>
                  The <strong>image button</strong> control is one which is displayed
                  exactly like an <code>&lt;img&gt;</code> element, except that when
                  the user clicks on it, it behaves like a submit button (see above).
                </p>
                <p>
                  An image button is created using an <code>&lt;input&gt;</code> element
                  with its <code>type</code> attribute set to the value image. This element
                  supports exactly the same set of attributes as the <code>&lt;img&gt;</code>
                  element, plus all the attributes supported by other form buttons.
                </p>
                <iframe title="Using image button" width="100%" height="110"
                  src="//jsfiddle.net/dikadj/ova0bfr8/1/embedded/html,result/"
                  allowFullScreen="allowfullscreen" allowPaymentRequest frameBorder="0">
                </iframe>
              </div>
              <div>
                <h4><em>Meters and progress bars</em></h4>
                <p>
                  Meters and progress bars are visual representations of numeric values.
                </p>
                <div>
                  <h5>Progress</h5>
                  <p>
                    A progress bar represents a value that changes over time up to a
                    maximum value specified by the <code>max</code> attribute. Such
                    a bar is created using a <code>&lt;progress&gt;</code> element.
                  </p>
                  <iframe title="Using progress bar" width="100%" height="110"
                    src="//jsfiddle.net/dikadj/qg17wr4y/1/embedded/html,result/"
                    allowFullScreen="allowfullscreen" allowPaymentRequest frameBorder="0">
                  </iframe>
                </div>
                <div>
                  <h5>Meter</h5>
                  <p>
                    A meter bar represents a fixed value in a range delimited by a min
                    and a max value. This value is visualy rendered as a bar, and to
                    know how this bar looks.
                  </p>
                  <iframe title="Using meter bar" width="100%" height="110"
                    src="//jsfiddle.net/dikadj/zmaLb8x9/1/embedded/html,result/"
                    allowFullScreen="allowfullscreen" allowPaymentRequest frameBorder="0">
                  </iframe>
                </div>
              </div>
            </div>
          </section>
          <section id="reference" className="main-section py-3">
            <header>
              <h2 className="font-weight-bold">Reference</h2>
            </header>
            <ul>
              <li>
                Check out full documentation on {" "}
                <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms"
                target="_blank" rel="noopener noreferrer"> HTML forms on MDN site</a>,
                including Validating and Submitting Form Data, Styling Guides,
                and some Advanced Features available in HTML forms specification.
              </li>
              <li>
                You might also want to check out all {" "}
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" target="_blank" rel="noopener noreferrer">
                attributes</a> you can use and {" "}
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" target="_blank" rel="noopener noreferrer">
                browser compatibility</a> for HTML forms.
              </li>
              <li>
                Also a number of useful {" "}
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Forms" target="_blank" rel="noopener noreferrer">
                HTML elements</a> you can use alongside HTML forms.
              </li>
            </ul>
          </section>
        </div>
      </main>
      {/* End content here */}
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
  </div>
)

export default App
