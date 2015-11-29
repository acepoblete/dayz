/*global jest describe it expect */

jest.autoMockOff();

const moment = require('moment');
require('moment-range');

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

import EventComp   from '../src/event';
import Event       from '../src/data/event';
import EventLayout from '../src/data/event-layout';

const date = moment('2015-09-12');

const fakeLayout = {
    displayingAs(){ return 'week'; }
};

describe('Dayz', function() {

    it('renders a single-day event', function() {
        const eventModel = new Event({
            content: 'test',
            range: moment.range( date.clone().add(8, 'hours'), date.clone().add(10, 'hours'))
        });
        const layout = new EventLayout(fakeLayout,
                                       eventModel, moment.range(date, date.clone().add(1, 'day') ));
        const event  = TestUtils.renderIntoDocument( <EventComp layout={layout} /> );
        const div    = ReactDOM.findDOMNode(event);
        expect( div.style.top ).toEqual('33.33%' );
        expect( div.style.bottom ).toEqual('58.33%' );
        expect( div.classList.contains('event') ).toBe(true);
        expect( div.classList.contains('span-1') ).toBe(true);
    });

    it('renders a multi-day event', function() {
        const eventModel = new Event({
            content: 'test',
            range: moment.range( date.clone(), date.clone().add(3, 'days'))
        });
        const layout = new EventLayout(fakeLayout, eventModel,
                                       moment.range(date, date.clone().add(1, 'day')));
        const event  = TestUtils.renderIntoDocument( <EventComp layout={layout} /> );
        const div    = ReactDOM.findDOMNode(event);
        expect( eventModel.isSingleDay() ).toBe(false);
        expect( div.style.length ).toBe(0);
        expect( div.classList.contains('event') ).toBe(true);
        expect( div.classList.contains('span-1') ).toBe(true);
        expect( div.classList.contains('is-continued') ).toBe(true);
    });

});
