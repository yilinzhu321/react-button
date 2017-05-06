'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp; /**
                    * Created by zhuyilin on 17/1/5.
                    * @description
                    */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../button.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(Button, _Component);
    (0, _createClass3.default)(Button, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props = this.props;
            var btnType = _props.btnType;
            var btnStatus = _props.btnStatus;
            var size = _props.size;

            this.changeClassName(size, btnType, btnStatus);
        }
        // 数据初始化

    }]);

    function Button(props) {
        (0, _classCallCheck3.default)(this, Button);

        // state 本地数据只在当前页面有作用

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Button).call(this, props));

        _this.state = {
            // 自定义类
            btnTypeAndStatus: '',
            // btn
            btnSize: 'btn-default-block'
        };
        return _this;
    }

    (0, _createClass3.default)(Button, [{
        key: 'changeClassName',
        value: function changeClassName(size, btnType, btnStatus) {
            var style = this.props.myStyle || '';
            this.setState({
                btnSize: 'btn-' + size + '-block ',
                btnTypeAndStatus: 'btn-' + btnType + '-' + btnStatus + ' ' + style
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var text = _props2.text;
            var clickEvent = _props2.clickEvent;
            var otitle = _props2.otitle;
            var otype = _props2.otype;

            return _react2.default.createElement(
                'button',
                {
                    'data-otitle': otitle,
                    'data-otype': otype,
                    onTouchEnd: clickEvent,
                    className: this.state.btnSize + this.state.btnTypeAndStatus
                },
                text
            );
        }
    }]);
    return Button;
}(_react.Component), _class.PropTypes = {
    btnType: _react.PropTypes.string,
    btnStatus: _react.PropTypes.string,
    size: _react.PropTypes.string,
    text: _react.PropTypes.string,
    clickEvent: _react.PropTypes.func
}, _class.defaultProps = {
    btnType: 'block',
    btnStatus: 'default',
    size: '',
    text: ''
}, _temp);
exports.default = Button;
