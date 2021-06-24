import  {shallow} from "enzyme";
import sinon from 'sinon';
import Modal from '../../component/modal';

describe('<modal/>', ()=> {
    let props ={
        //data:[{key: undefined, name: "red12"}],
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
           saveModalDetails:fn=> fn,
           //handleSave:fn => fn
    }
    it('renders modal component', () => {
        const wrapper = shallow(<Modal {...props}/>);
        expect(wrapper.contains(<Modal/>)).toEqual(false);

    });
    it('should call titleHandler method', () =>
 {
     const value = {
         target:{value:"item"}
     }
     const wrapper = shallow(<Modal/>);
     wrapper.instance().titleHandler(value);
    expect(wrapper.state('title')).toEqual("item");
     
 }); 
 it('should call handleSave method', () =>
{
    const item = {
         target:{key: "id",name: "value"
          }
      }
      const saveModalDetails=sinon.spy();
    const wrapper = shallow(<Modal {...props} saveModalDetails={saveModalDetails}/>);
     wrapper.instance().handleSave(item);
    expect(saveModalDetails).toHaveProperty('callCount',1);
    });
    it('renders todobutton onClick for handlesave metohd ', () => {
        const wrapper = shallow(<Modal {...props} />);
        const type=wrapper.find(`[id="ok"]`).simulate('click', {target: {key: "id",name: "value"}});
        expect(type.exists()).toBe(true);
        //expect(wrapper.find('#ok').exists()).toBe(true)
        });
    it('renders inputfield for onchange used titleHandler', () => {
        const wrapper = shallow(<Modal {...props}/> );
        const type= wrapper.find(`[id="edititem"]`).simulate('change', {target: {title: "Hello Added"}});
        expect(type.exists()).toBe(true);
       // expect(wrapper.find('#edititem').exists()).toBe(true)
      });

});