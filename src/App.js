import React, { Component } from 'react'
import './App.css';
import { Button, FormControl ,InputLabel,Input } from '@material-ui/core';
import Todo from './components/Todo'
import db from './firebase'
import firebase from 'firebase'

class App extends Component {
  constructor(){
    super();
    this.state =({
      name :'Mahima',
      todos : [],
      input :''
    });
  }

componentDidMount() {  
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{   
  this.setState({ todos:snapshot.docs.map(doc=>({id:doc.id ,todo:doc.data().todo}))   
  })   }    
  )
}

handleChange = (e) => {
  this.setState({ input :e.target.value })
}
addTodo = (e) => {
  e.preventDefault();
  db.collection('todos').add({    
    todo :this.state.input,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })

  this.setState({
    todos :[...this.state.todos,this.state.input],
    input :''
  })
}

  render() {
    return (
      <div>
        <h1>Todoist App of {this.state.name}</h1>
        <form>
          <FormControl>
            <InputLabel>INPUT TODO'S</InputLabel>
            <Input type = 'text'  value = { this.state.input } onChange = {this.handleChange} />
          </FormControl>

        <Button disabled={!this.state.input} type = 'button' onClick ={ this.addTodo } variant="contained" color="primary">
          Add Task
        </Button>

        <ul>
          {this.state.todos.map((todo, key)=>  
            <Todo key={key} todo = {todo}/>
          )
          }
        </ul>
        </form>      
      </div>
    )
  }
}

export default App