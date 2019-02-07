

// Start of pattern https://reactjs.org/docs/state-and-lifecycle.html


function Clock(props) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  function tick() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('root')
    );
  }
  
  setInterval(tick, 1000);


//   End of pattern




// start https://reactjs.org/docs/lists-and-keys.html
function Blog(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }
  
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('root')
  );

//   End



class MyClass extends Component {
  constructor() {
    super();
    this.state = { clicks: 0 };
  }
  handler = () => {
    this.setState(({ clicks }) => ({ clicks: clicks + 1 }));
  }
  render() {
    const { clicks } = this.state;
    return(
      <button onClick={this.handler}>
        {`You've clicked me ${clicks} times`}
      </button>
    );
  }
}


vs. 


class MyClass extends Component {
  constructor() {
    super();
    this.state = { clicks: 0 };
    this.handler = this.handler.bind(this); //this bind because we didn't use an arrow function below
  }
  // non arrow function requires the bind above
  handler() {
    this.setState(({ clicks }) => ({ clicks: clicks + 1 }));
  }
  render() {
    const { clicks } = this.state;
    return(
      <button onClick={this.handler}>
        {`You've clicked me ${clicks} times`}
      </button>
    );
  }
}