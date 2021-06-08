// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// function UsernameForm() {

//   const userNameInput = React.useRef("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`You entered: ${userNameInput}`);
//   }


//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username:</label>
//         <input type="text" ref={userNameInput}/>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }



function DisplayError({message}) {
  return (
    <div role="alert" style={{color: 'red'}}>
      {message}
  </div>
  )
}

function UsernameForm() {

  const [username, setUsername] = React.useState("");
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const isValid = username.toLowerCase() === username;
    setError(!isValid ? "Username must be lower case" : null); 
  }, [username])
 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You entered: ${username}`);
  }

  const handleChange = (e) => {
    setUsername(e.target.value); 
  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={handleChange}/>
        {error && <DisplayError message={error} />}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  return <UsernameForm />
}

export default App
