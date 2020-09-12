import React from "react"
import BusinessPage from "./BusinessPage";

const { shallow, mount } = require("enzyme")
const Enzyme = require("enzyme")
const Adapter = require("enzyme-adapter-react-16");

Enzyme.configure({ adapter: new Adapter()}); 

describe('<BusinessPage /> component unit test', () => {
    it('should render correctly', () =>{
        const wrapper = shallow(<BusinessPage />);
        expect(wrapper).toMatchSnapshot();
    })})

    describe('<BusinessPage /> component unit test', () => {
      const mockfn = jest.fn();
      const state = {
          businessId: 1
      };
      it("should have businessid of 1", ()=>{
          const component = shallow(<BusinessPage {... state} />)
          expect(component).toHaveLength(1);
      })})
