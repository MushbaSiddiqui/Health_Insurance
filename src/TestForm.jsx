import React from 'react';

function FormToSheet() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://script.google.com/macros/s/AKfycbySldogKlOzGFkZt_-SKzG6IgjleBYF3s99_oGhXaAulpG9G3wHZ5wSOfvmbNOQNHTFdQ/exec";
    
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${e.target.name.value}&Email=${e.target.email.value}`
    }).then(res => res.text()).then(data => {
      alert(data);
    }).catch(error => console.log(error));
  };

  return (
    <div>
      <h1>React to Sheet</h1>
      <form onSubmit={handleSubmit}>
        <input name='name' placeholder='Name' /> <br/>
        <input name='email' placeholder='Email' /> <br/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default FormToSheet;
