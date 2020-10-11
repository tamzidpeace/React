import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

function formateDate(date) {
     return date.toLocaleDateString();
}

function userInfo(props) {
     return (
          <div className="UserInfo">
               
          </div>
     );
}

function Comment(props) {
     console.log(props);
     return (
          <div className="Comment">
          <img src={props.author.avatarUrl}
                    alt={props.author.name}
               />
               <p> {props.text} </p>
               <p> {formateDate(props.date)} </p>                             
          </div>
     );
}


const comment = {
     date: new Date(),
     text: 'I hope you enjoy learning React',
     author: {
          name: 'Hello Kitty',
          avatarUrl: 'https://placekitten.com/g/64/64',
     },
}



ReactDOM.render( <Comment
     date = {comment.date}
     text = {comment.text}
     author = {comment.author}
     />, 
     document.getElementById('root'));
registerServiceWorker();
