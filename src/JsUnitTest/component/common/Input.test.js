import React from 'react';
import {shallow } from 'enzyme';
import AddtodoInput from '../../../component/common/Input';

describe("TodoInput" , () =>{
    it("should render my component", () => {
        const wrapper = shallow(<AddtodoInput />);
        expect(wrapper).toBeDefined();
    })
})

