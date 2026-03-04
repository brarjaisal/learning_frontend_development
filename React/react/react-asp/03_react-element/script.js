// const h2 = React.createElement('h2', {className: 'subheading'}, 'Hello React!')

// behind the scenes, React.createElement creates an object that looks like this:
// const h2 = {
//     $$typeof: Symbol.for('react.element'),
//     type: 'h2',
//     ref: null,
//     props: {
//         className: 'subheading',
//         children: 'Hello React!'
//     }
// }

// const root = ReactDOM.createRoot(document.querySelector('#root'))

// root.render(h2)

// render uses following steps:
// 1. create element
// 2. create root
// 3. render element to root

// const h2 = document.createElement('h2')
// h2.innerText = 'Hello JS!'

// document.querySelector('#root').append(h2)

// console.dir(h2)

// React.createElement(type, props, children)
// type: string or function
// props: object with attributes and event handlers
// children: string or array of elements

// React.createElement can be nested to create complex UI structures: 
const container = React.createElement(
  "div",
  { className: "container", id: "container" },
  [
    React.createElement("section", { key: 1 }, [
      React.createElement(
        "p",
        { key: 1 },
        "The library for web and native user interfaces",
      ),
      React.createElement("img", {
        key: 2,
        style: {
          width: 200,
          backgroundColor: "teal",
          borderRadius: 8,
          padding: 16,
        },
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      }),
    ]),
    React.createElement("section", { key: 2 }, [
      React.createElement("form", { key: 1 }, [
        React.createElement("div", { className: "input-group", key: 1 }, [
          React.createElement(
            "label",
            { key: 1, htmlFor: "username" },
            "Username",
          ),
          React.createElement("input", { key: 2, id: "username" }),
        ]),
        React.createElement("div", { className: "input-group", key: 2 }, [
          React.createElement(
            "label",
            { key: 1, htmlFor: "password" },
            "Password",
          ),
          React.createElement("input", {
            key: 2,
            id: "password",
            type: "password",
          }),
        ]),
      ]),
    ]),
  ],
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(container);
