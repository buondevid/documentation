import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { HeadingWithTopMargin, SubHeading } from '../components/styles/typography'
import ApiMenu from '../components/ApiMenu'
import styled from 'styled-components'
import SyntaxHighlighterWithCopy from '../components/SyntaxHighlighterWithCopy'

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0 20px 100px 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 300px minmax(0, 1fr);
  }
`

const code = `import React from "react";
import useForm from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "bill",
      lastName: "luo",
      email: "bluebill1049@hotmail.com"
    }
  });
  const onSubmit = data => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} />
      <input name="lastName" ref={register} />
      <input name="email" ref={register} />

      <button type="submit">Submit</button>
    </form>
  );
}`

const shareRef = `import React, { useRef } from "react";
import useForm from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  const firstNameRef = useRef();
  const onSubmit = data => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={(e) => {
        register(e);
        firstNameRef.current = e; // you can still assign to your own ref
      }} />
      <input name="lastName" ref={(e) => {
        // register's first argument is ref, and second is validation rules
        register(e, { required: true });
      }} />

      <button>Submit</button>
    </form>
  );
}`

const links = [
  'Performance of React Hook Form',
    'Does it work with Class Component?',
    'How to reset the form?',
    'How to initialize form values?',
    'How to share ref usage?'
];

const goToSection = () => {}

const Faq = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="FAQ" />

      <HeadingWithTopMargin>FAQs</HeadingWithTopMargin>
      <SubHeading>frequently asked question.</SubHeading>

      <Wrapper>
        <aside>
          <ApiMenu isStatic links={links} goToSection={goToSection} />
        </aside>

        <main>
          <h2>Performance of React Hook Form</h2>
          <p>
            Performance is one of the primary goals for building this custom hook. It relies on uncontrolled component,
            hence the reason why the register function occurred at the ref. This approach will reduce the amount of
            re-rendering which occurred by user typing or value changing. The components mount to the page is much
            quicker too because they are not controlled. For mounting speed, I have completed a quick comparison test
            which you can refer to by this repo link.
          </p>

          <hr />

          <h2>Does it work with Class Component?</h2>

          <p>No.</p>

          <blockquote>
            You can’t use Hooks inside of a class component, but you can definitely mix classes and function components
            with Hooks in a single tree. Whether a component is a class or a function that uses Hooks is an
            implementation detail of that component. In the longer term, we expect Hooks to be the primary way people
            write React components.
          </blockquote>

          <hr />

          <h2>How to reset the form?</h2>
          <p>There are two types of form clear.</p>
          <ul>
            <li>
              <b>HTMLFormElement.reset()</b>
              <p>
                This method does the same thing as clicking the form's reset button, and only clear
                input/select/checkbox value.
              </p>
            </li>
            <li>
              <b>
                React hook form API: <code>reset()</code>
              </b>
              <p>
                React hook form <code>reset</code> will reset all fields value, but also clear all <code>errors</code>{' '}
                within the form.
              </p>
            </li>
          </ul>

          <hr />

          <h2>How to initialize form values?</h2>

          <p>
            React hook form relies on uncontrolled component. With an uncontrolled component, you can specify a{' '}
            <code>defaultValue</code> or <code>defaultChecked</code> to individual field. However, the hook itself does
            provider an easier way to initialise all input values.
            <SyntaxHighlighterWithCopy rawData={code} />
          </p>

          <hr />

          <h2>How to share ref usage?</h2>

          <p>
            React hook form need <code>ref</code> to collect input value, however you may want to use <code>ref</code> for
            other purpose (eg. scroll into the view). The following example will show you how
          </p>

          <SyntaxHighlighterWithCopy rawData={shareRef} />
          <hr />
        </main>
      </Wrapper>
    </Layout>
  )
}
export default Faq
