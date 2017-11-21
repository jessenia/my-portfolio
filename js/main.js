import React from 'react';
import ReactDom from 'react-dom';
import ExampleWork from './example-work';

const myWork =[
  {
    'title': "Kahns Dyno Tuning And Rental",
    'image': {
      'desc': "Dyno Tuning and Rental Booking Site",
      'src': "images/kahnsrentalservices.png",
      'comment': ""
    }
  },
  {
    'title': "Work Example",
    'image': {
      'desc': "example screenshot of a project involving chemistry",
      'src': "images/example2.png",
      'comment': `“Chemistry” by Surian Soosay is licensed under CC BY 2.0
           https://www.flickr.com/photos/ssoosay/4097410999`
    }
  },
  {
    'title': "Work Example",
    'image': {
      'desc': "example screenshot of a project involving cats",
      'src': "images/example3.png",
      'comment': `“Chemistry” by Surian Soosay is licensed under CC BY 2.0
           https://www.flickr.com/photos/ssoosay/4097410999`
    }
  }
]

ReactDom.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
