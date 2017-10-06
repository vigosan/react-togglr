import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import Toggle from './Toggle';

describe('Toggle', () => {
  let wrapper;
  let on;
  let toggle;
  let onToggle = jest.fn();

  afterEach(function() {
    onToggle.mockReset();
  });

  describe('with no props', () => {
    beforeEach(() => {
      wrapper = mount(
        <Toggle
          onToggle={onToggle}
          render={({ on: tOn, toggle: tToggle }) => {
            on = tOn;
            toggle = tToggle;

            return null;
          }}
        />
      );
    });

    it('renders its children', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('starts off', () => {
      expect(on).toBe(false);
    });

    it('toggles on', () => {
      toggle();

      expect(on).toBe(true);
    });

    it('executes a callback when toggled', () => {
      toggle();

      expect(onToggle).toBeCalledWith({
        on: true
      });
    });
  });

  describe('passing defaultOn prop', () => {
    it('starts at given status', () => {
      mount(
        <Toggle
          defaultOn={true}
          render={({ on: tOn }) => {
            on = tOn;

            return null;
          }}
        />
      );

      expect(on).toBe(true);
    });
  });
});
