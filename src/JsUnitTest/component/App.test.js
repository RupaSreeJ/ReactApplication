import React from 'react';
import {shallow } from 'enzyme';
import App from '../../component/App';

describe("App" , () =>{
    let props ={
        Content : {
            heading:"TODO APP",
            add:"Add",
            edit:"Edit",
            delete:"Delete",
            cancel:"Cancel",
            ok:"Ok",
            placeholder:"Enter Your Text",
            modelHeadMsg:"Modify Text Below"
           },
           todos: fn=>fn,
    }
    it('renders App component', () => {
        const wrapper = shallow(<App {...props}/>);
         expect(wrapper.contains(<App/>)).toEqual(false);
    });
it("should render addtodo function ", () => {
    const value = {
        todos: fn => fn,
    }
    const wrapper = shallow(<App {...props} />);
     wrapper.instance().addtodo(value);
    expect(wrapper.exists()).toBe(true);
    
});
});