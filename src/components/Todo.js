import React,{Component} from 'react'
import { List, ListItem,ListItemText ,Avatar,Input, Modal} from '@material-ui/core';
import db from '../firebase'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


class Todo extends Component {
  constructor(props){
    super(props);
    this.state =({
      open :false,
      input :this.props.todo.todo
    })
  }

  handleOpen = (e) => { 
    e.preventDefault();
    this.setState({open:true})};

  handleClose = () => { this.setState({open:false})};

  handleChange = (e) => {
    this.setState({ input :e.target.value })
  }

  updateTodo = (e) => {
    e.preventDefault();
    db.collection('todos').doc(this.props.todo.id).set({
      todo : this.state.input
    },{merge :true });
  }

  render(){
    return (
      <div>
        <Modal open = {this.state.open} onClose = {this.handleClose} >
         
        <div className ='w3-modal-content w3-animate-bottom'>
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
          <header className="w3-container w3-teal"> 
            <span onClick = {this.handleClose} 
            className="w3-button w3-display-topright">&times;</span>
            <h2>Edit Task</h2>
          </header>
          
          <Input type = 'text'  value = { this.state.input } onChange = {this.handleChange} />
          <button className='class-modal-button' onClick = { this.updateTodo}>save</button>
        </div>
    
        </Modal>

        <List>
          <ListItem>
              <Avatar/>
            <ListItemText primary = {this.props.todo.todo} secondary= 'deadline'></ListItemText>
          </ListItem>
          <EditIcon onClick = {this.handleOpen}>Edit</EditIcon>
          < DeleteIcon onClick ={ (e)=> db.collection('todos').doc(this.props.todo.id).delete() }
          >Delete</ DeleteIcon>     
        </List>
      </div>
    )
  }
}

export default Todo
