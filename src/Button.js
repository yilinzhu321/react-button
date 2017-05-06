/**
 * Created by zhuyilin on 17/1/5.
 * @description
 */

import React, { Component, PropTypes } from 'react';
import '../button.css';
class Button extends Component {
    static PropTypes= {
        btnType: PropTypes.string,
        btnStatus: PropTypes.string,
        size: PropTypes.string,
        text: PropTypes.string,
        clickEvent: PropTypes.func,
    };
    // 数据初始化
    static defaultProps = {
        btnType: 'block',
        btnStatus: 'default',
        size: '',
        text: '',
    };
    componentWillMount(){
        const {
            btnType,
            btnStatus,
            size
            } = this.props;
        this.changeClassName(size, btnType, btnStatus);
    }

    constructor(props) {
        super(props);
        // state 本地数据只在当前页面有作用
        this.state = {
            // 自定义类
            btnTypeAndStatus: '',
            // btn
            btnSize: 'btn-default-block',
        };
    }
    changeClassName(size, btnType, btnStatus){
        const style = this.props.myStyle || ''
        this.setState({
            btnSize: `btn-${size}-block `,
            btnTypeAndStatus: `btn-${btnType}-${btnStatus} ${style}`
        })
    }

    render() {
        const {
            text,
            clickEvent,
            otitle,
            otype
            } = this.props;
        return (
            <button
                data-otitle={otitle}
                data-otype={otype}
                onTouchEnd={clickEvent}
                className={this.state.btnSize + this.state.btnTypeAndStatus }
            >{text}
            </button>
        );
    }
}
export default Button;