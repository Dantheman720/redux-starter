import React from 'react';
import ReactDOM from 'react-dom'
import App from "./components/App";

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)

const Index = () => (
  <div>
    <h1>Index!</h1>
  </div>
)
export default Index;