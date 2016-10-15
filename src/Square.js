var React = require('react');
var PropTypes = React.PropTypes;

var Square = React.createClass({
  propTypes: {
    black: PropTypes.bool
  },

  render: function () {
    var black = this.props.black;
    var fill = black ? 'black' : 'white';
    var stroke = black ? 'white' : 'black';

    return (
      <div style={{
        backgroundColor: fill,
        color: stroke,
        width: '120px',
        height: '120px'
      }}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Square;

