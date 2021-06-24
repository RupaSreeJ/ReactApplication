import React from 'react';
import {shallow } from 'enzyme';
import TodoButton from '../../../component/common/Button';
import sinon from "sinon";
describe("TodoButton" , () =>{
    it(" Testing Button click event",() => {
        const mockCallBack = sinon.spy();
        const button = shallow((<TodoButton onClick={mockCallBack}>ok</TodoButton>));
        button.find('button').simulate('click');
        expect(mockCallBack).toHaveProperty('callCount',1);
    });
});





















// it("should render my component", () => {
    //     const wrapper = shallow(<TodoButton />);
    //     expect(wrapper).toBeDefined();
    // })