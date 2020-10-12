import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from './App';
import Table from './components/Table';

Enzyme.configure({ adapter: new Adapter() });

describe('With React Testing Library', () => {
  const mockStore = configureStore();
  let store;

  it('renders heading text', () => {
    store = mockStore(0);
    const { getByText } = render(<Provider store={store}><App /></Provider>);
    const textElement = getByText(/A Todo list App/i);
    expect(textElement).toBeInTheDocument();
  });

  it('renders Child component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Table)).toHaveLength(1);
  });
  
})

