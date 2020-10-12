import React from 'react';
import { Provider } from 'react-redux';
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers/rootReducer";
import configureStore from 'redux-mock-store';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddTask from '../AddTask';
import Table from '../Table';

Enzyme.configure({ adapter: new Adapter() });

describe('test Table Component', () => {
    const expected = [{taskName: "sddds"}];
    const mockStore = configureStore();
    let store;

    it('matches even if received contains additional elements', () => {
        expect([{taskName: "sddds"}]).toEqual(expect.arrayContaining(expected));
    });

    it('does not match if received does not contain expected elements', () => {
        expect([{taskName: "welcome user"}]).not.toEqual(expect.arrayContaining(expected));
    });

    it("Should capture content correctly onChange", () => {
        store = mockStore(0);
        const tasks = useSelector((state: AppState) => state.task);
        const wrapper = mount(<Provider store={store}><AddTask /></Provider>);
        const content = wrapper.find("input").at(0);
        content.value = "MCD";
        content.simulate("change", { target: {value: 'MCD'}});
        
    });
});