import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });


const myWork = [
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
  }
]

describe('ExampleWork component', () => {
    let component = shallow(<ExampleWork work={myWork}/>);

    it("Should be a 'span' element", () => {
     expect(component.type()).toEqual('span');

  });

  it("Should contain as many children as there are work examples", () => {
   expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);

});

it("Should allow the modal to open and close", () => {
  component.instance().openModal();
  expect(component.instance().state.modelOpen).toBe(true);

  component.instance().closeModal();
  expect(component.instance().state.modelOpen).toBe(false);

});

});

describe('ExampleWorkBubble component', () => {
  let mockOpenModalFn = jest.fn();

  let component = shallow(<ExampleWorkBubble example={myWork[1]}  openModal={mockOpenModalFn}/>);

  let images = component.fine("img");

  it("Should be a single 'img' element", () => {
    expect(images.length).toEqual(1);
  });

  it("Should have the image source set correctly", () => {
   expect(images.node.props.src).toEqual(myWork[1].image.src);
  });

  it("Should call the openModel handler when clicked", () => {
    component.find(".section__exampleWrapper").simulate('click');
    expect(mockOpenModalFn).toHaveBeenCalled();
  });

});
