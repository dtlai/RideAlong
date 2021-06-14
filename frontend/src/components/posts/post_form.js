import React from 'react';
import PostBox from './post_box';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: userId,
      title: "",
      description: "",
      carMake: "",
      startLocation: "",
      endLocation: "",
      capacity: 0,
      numPassengers: 1,
      price: 0,
      leaveDate: Date.now,
    }
  }
}