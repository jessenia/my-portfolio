import React from 'react';
import ExampleWorkModal from '../js/example-work-modal';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const myExample =
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
  let component = shallow(<ExampleWorkModal example={myExample}
        open={false} />);
  let openComponent = shallow(<ExampleWorkModal example={myExample}
        open={true} />);

  let anchors = component.find("a");



  it("Should contain a single 'a' element", () => {
    expect (anchors.length).toEqual(1);
  });

  it("Should link to our project", () => {
    expect(anchors.getElement().props.href).toEqual(myExample.href);
  });

  it("Should have the modal class set correctly", () => {
    expect(component.find(".background--skyBlue").hasClass("modal--closed"));
    expect(openComponent.find(".background--skyBlue").hasClass("modal--open"));
  });
});
