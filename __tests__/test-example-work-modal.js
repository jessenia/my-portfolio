import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work-modal';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

const myExample =[
  {
    'title': "Kahns Dyno Tuning And Rental",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet",
    'image': {
      'desc': "Dyno Tuning and Rental Booking Site",
      'src': "images/kahnsrentalservices.png",
      'comment': ""
    }
  };


describe("ExampleWorkModal component", () => {
  let component = shallow(<ExampleWorkModal example={myExample} open={false}/>);
  let anchors = component.find("a");
  let openComponent = shallow(<ExampleWorkModal example={myExample} open={true}/>);

  it("Should contain a single 'a' element", () => {
    expect (anchors.length).toEqual(1);
  });

  it("Should link to our project", () => {
    expect(anchors.node.props.href).toEqual(myExample.href);
  });

  it("Should have the modal class set correctly", () => {
    expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
    expect(component.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
  });
});
