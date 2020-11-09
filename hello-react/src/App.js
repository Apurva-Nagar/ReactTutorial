import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import MessageState from "./Components/MessageState";
import Counter from "./Components/Counter";
import ParentComponent from "./Components/ParentComponent";
import ConditionalRender from "./Components/ConditionalRender";
import NameList from "./Components/NameList";
import Form from "./Components/Form";
import LifecycleA from "./Components/LifecycleA";
import Table from "./Components/Table";
import RefsDemo from "./Components/RefsDemo";
import PortalDemo from "./Components/PortalDemo";
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";

function App() {
  return (
    <div className="App">
      <PostForm />
      <hr />
      <PostList />
      <hr />
      <PortalDemo />
      <RefsDemo />
      <Table />
      <LifecycleA />
      <Form />
      <NameList />
      <ConditionalRender />
      <ParentComponent />
      <Counter />
      <MessageState />
      <Greet name="Apurva">
        <button>Say Hi!</button>
      </Greet>
      <Greet name="Shubhranshu" />
      <Greet name="Devesh" />
      <Welcome name="Gal Gadot" />
    </div>
  );
}

export default App;
