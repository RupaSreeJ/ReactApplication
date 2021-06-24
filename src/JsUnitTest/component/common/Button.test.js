import React from 'react';
import {shallow } from 'enzyme';
import TodoButton from '../../../component/common/Button';
import sinon from "sinon";
describe("TodoButton" , () =>{
    it(" Testing Button click event",() => {
        const buttonClick = sinon.spy();
        const button = shallow((<TodoButton onClick={buttonClick}>ok</TodoButton>));
        button.find('button').simulate('click');
        expect(buttonClick.calledOnce).toBe(true);
    });
});





















// it("should render my component", () => {
    //     const wrapper = shallow(<TodoButton />);
    //     expect(wrapper).toBeDefined();
    // })
