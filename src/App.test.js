import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({
  adapter : new EnzymeAdapter()
})

const setup = (props={},state=null) => {
  const wrapper = shallow(<App {...props} />);
  if(state) wrapper.setState(state);
  return wrapper;
}

const findByTestAttr = (wrapper,val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

test('renders without crashing', () => {
  const wrapper = setup();
  // throw new Error();
  // console.log(wrapper.debug());
  // expect(wrapper).toBeTruthy(); 
  const appComponent = findByTestAttr(wrapper,'component-app');
  expect(appComponent.length).toBe(1);
});

test('reanders display without errors',() => {
  const wrapper = setup();
  const display = findByTestAttr(wrapper,"component-app-counter-display");
  expect(display.length).toBe(1);
});

test('renders increment button without errors',() => {
  const wrapper = setup();
  const incrementButton = findByTestAttr(wrapper,"component-app-increment-button");
  expect(incrementButton.length).toBe(1);
});

test('counter starts at 0',() => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('clicking increment button increments counter display',() => {
  const counter = 7;
  const wrapper = setup(null,{ counter });
  const button = findByTestAttr(wrapper,'component-app-increment-button');
  button.simulate('click');
  const display = findByTestAttr(wrapper,'component-app-counter-display');
  expect(display.text()).toContain(counter + 1);
});
