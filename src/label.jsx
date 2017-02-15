const React = require('react');
const moment = require('moment');

const Label = React.createClass({

    propTypes: {
        day: React.PropTypes.object.isRequired
    },

    render() {

        let className = 'label';
        if (this.props.day.format('YYYYMMDD') === moment().format('YYYYMMDD')) {
            className = 'label current';
        }

        return (
            <div className={className} >{this.props.day.format('D')}</div>
        );
    }

});

module.exports = Label;
