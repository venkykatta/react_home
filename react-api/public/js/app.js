'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      friends: [],
      name: '',
      id: '',
      notes: ''
    };
    _this.create = _this.create.bind(_this);
    _this.update = _this.update.bind(_this);
    _this.delete = _this.delete.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // get all entities - GET
    }
  }, {
    key: 'create',
    value: function create(e) {
      // add entity - POST
      e.preventDefault();
    }
  }, {
    key: 'update',
    value: function update(e) {
      // update entity - PUT
      e.preventDefault();
    }
  }, {
    key: 'delete',
    value: function _delete(e) {
      // delete entity - DELETE
      e.preventDefault();
    }
  }, {
    key: 'handleChange',
    value: function handleChange(changeObject) {
      this.setState(changeObject);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'row justify-content-center' },
          React.createElement(
            'div',
            { className: 'col-md-8' },
            React.createElement(
              'h1',
              { className: 'display-4 text-center' },
              'Make An API Call in React'
            ),
            React.createElement(
              'form',
              { className: 'd-flex flex-column' },
              React.createElement(
                'legend',
                { className: 'text-center' },
                'Add-Update-Delete Friend'
              ),
              React.createElement(
                'label',
                { htmlFor: 'name' },
                'Friend Name:',
                React.createElement('input', {
                  name: 'name',
                  id: 'name',
                  type: 'text',
                  className: 'form-control',
                  value: this.state.name,
                  onChange: function onChange(e) {
                    return _this2.handleChange({ name: e.target.value });
                  },
                  placeholder: 'Name of the friend',
                  required: true
                })
              ),
              React.createElement(
                'label',
                { htmlFor: 'notes' },
                'Friend notes:',
                React.createElement('input', {
                  name: 'notes',
                  id: 'notes',
                  type: 'test',
                  className: 'form-control',
                  value: this.state.notes,
                  onChange: function onChange(e) {
                    return _this2.handleChange({ notes: e.target.value });
                  },
                  placeholder: 'Friend\'s notes',
                  required: true
                })
              ),
              React.createElement(
                'label',
                { htmlFor: 'id' },
                'Friend ID:',
                React.createElement('input', {
                  name: 'id',
                  id: 'id',
                  type: 'text',
                  className: 'form-control',
                  value: this.state.id,
                  onChange: function onChange(e) {
                    return _this2.handleChange({ id: e.target.value });
                  },
                  placeholder: 'Friend id'
                })
              ),
              React.createElement(
                'button',
                { className: 'btn btn-primary', type: 'button', onClick: function onClick(e) {
                    return _this2.create(e);
                  } },
                'Add'
              ),
              React.createElement(
                'button',
                { className: 'btn btn-info', type: 'button', onClick: function onClick(e) {
                    return _this2.update(e);
                  } },
                'Update'
              ),
              React.createElement(
                'button',
                { className: 'btn btn-danger', type: 'button', onClick: function onClick(e) {
                    return _this2.delete(e);
                  } },
                'Delete'
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

var domContainer = document.querySelector('#App');
ReactDOM.render(React.createElement(App, null), domContainer);