import  {shallow} from "enzyme";

import Addtodo from '../../component/Addtodo';
describe('<Addtodo/>', ()=> {
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
           addtodo: fn=>fn
    }
it('renders  components', () => {
        const wrapper = shallow(<Addtodo {...props}/>);
        expect(wrapper.contains(<Addtodo/>)).toEqual(false);

    });
    
 it('should call handleChange method', () =>
 {
     const value = {
         target:{
             value:"Create item"
         }
     }
     const wrapper = shallow(<Addtodo/>);
   wrapper.instance().handleChange(value);
   expect(wrapper.state('content')).toEqual("Create item");
 });   
 it('should call submitData method', () =>
 {
     const value = {
         preventDefault: fn => fn
     }
     const wrapper = shallow(<Addtodo {...props}/>);
     wrapper.instance().submitData(value);
     expect(wrapper.state('content')).toEqual("");
   
 });   

});