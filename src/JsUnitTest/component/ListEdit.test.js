import React from 'react';
import {shallow } from 'enzyme';
import ListEdit from '../../component/ListEdit';

describe("ListEdit" , () =>{
    let props= {
        data:[{key: undefined, name: "red12"}],
        Content : {
            heading:"TODO APP",
            add:"Add",
            edit:"Edit",
            delete:"Delete",
            cancel:"Cancel",
            ok:"Ok",
            placeholder:"Enter Your Text",
            modelHeadMsg:"Modify Text Below"
           }
    }
 it("should render my component", () => {
        const wrapper = shallow(<ListEdit {...props} />);
        expect(wrapper.contains(<ListEdit/>)).toEqual(false);
        
    });
    it('should call deleteItem method', () =>
 {
     const value = {
         
         target:{value:[]}
     }
     const wrapper = shallow(<ListEdit {...props}/>);
     wrapper.instance().deleteItem(value);
     expect(wrapper.state('data')).toEqual([]);
 });
 it('should call deleteItem method for if statement', () =>
 {
    const value = {
         target:{value:[]}
     }
     const wrapper = shallow(<ListEdit {...props}/>);
     wrapper.setState({key:"red",data:[{key:"blue"}]
    })
    wrapper.instance().deleteItem(value);
    expect(wrapper.state('data')).toEqual([{key:"blue"}]);
 });
 it('should call saveModalDetails method(it contain newdata)', () =>
 {
     const value = {
         target:{value:[]}
     }
     const wrapper = shallow(<ListEdit {...props}/>);
     wrapper.instance().saveModalDetails(value);
     expect(wrapper.state('data')).toEqual([{key: undefined, name: "red12"}]);
     wrapper.setState({data:[{key:0}]
    })
     wrapper.instance().saveModalDetails(value);
   expect(wrapper.state('key')).toBe(0);
});
it('should call replaceModalItem method', () =>
 {
     const value = {target:{value:"item"}}
     const wrapper = shallow(<ListEdit {...props}/>);
     wrapper.instance().replaceModalItem(value);
     expect(wrapper.state('requiredItem')).toEqual(value);
     });
 it('renders todobutton  for onclick using  replaceModalItem', () => {
    const wrapper = shallow(<ListEdit {...props} />);
    const input=wrapper.find(`[id="edit"]`).simulate('click', {target: {requiredItem: "Hello Added"}});
   // expect(wrapper.find('#edit').exists()).toBe(true)
   expect(input.exists()).toBe(true);
   });
   it('renders todobutton  for delete(onclick) using  deleteItem', () => {
    const wrapper = shallow(<ListEdit {...props} />);
    const input=wrapper.find(`[id="delete"]`).simulate('click', { target: { data: "Hello Added" } });
    expect(input.exists()).toBe(true);
    //expect(wrapper.find('#delete').exists()).toBe(false)
});

})