import logo from './logo.svg';
// import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import CustomNavbar from './components/NavBar';
import CustomHome from './components/Home';




/**
 * Note: A coomponent on a nutshell are functions
 * 
 * Note: We can output string and number but not booleans and object
 * 
 * Note: App is the root of our component
 * 
 * Note: when we talk about the state of the component. We juest mean the data being used in that component at
 * that point in time. That state could be an arrat of values, booleans, strings, objects or any data that 
 * our component uses.
 */

const user = {
  name: "Jane Doe",
  imgUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imgSize: 90
};

function App() {
  return (
      <Content/>
  );
}

function Content() {
  return (
    <div className="App">
      <Container>
        <CustomNavbar />
        <div className="content">
            <CustomHome/>
        </div>
      </Container>
    </div>
  );
}

/**
 * Profile function
 */
function Profile() {
  return (
    <div>
      <img
        className="avatar"
        src={user.imgUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imgSize,
          height: user.imgSize
        }}
      />
      <h1>{user.name}</h1>
    </div>
  );
}

function InfoList() {
  return (
    <div>
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </div>
  );
}

function Header(){
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Profile />
      <InfoList />
      {/* <p>
        Edit <code>src/App.js</code> and save to reload.
      </p> */}
      {/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
    </header>
  );
}

// function NavScrollExample() {
//   return (
//       <Navbar expand="lg" className="bg-body-tertiary">
//         <Container fluid>
//           <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="me-auto my-2 my-lg-0"
//               style={{ maxHeight: '100px' }}
//               navbarScroll
//             >
//               <Nav.Link href="#action1">Home</Nav.Link>
//               <Nav.Link href="#action2">Link</Nav.Link>
//               <NavDropdown title="Link" id="navbarScrollingDropdown">
//                 <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action4">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action5">
//                   Something else here
//                 </NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link href="#" disabled>
//                 Link
//               </Nav.Link>
//             </Nav>
//             <Form className="d-flex">
//               <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//               />
//               <Button variant="outline-success">Search</Button>
//             </Form>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//   );
// }

export default App;
