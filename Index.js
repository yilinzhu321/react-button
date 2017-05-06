/**
 * Created by zhuyilin on 16/12/7.
 * @description
 */

import React, { Component, PropTypes } from 'react';
import './src/Button.css'
import Btn from './src/es5/Button.js'

class Index extends Component {
    // 做验证，判断数据类型
    static PropTypes = {
    };
    // 数据初始化
    static defaultProps = {
    };

    constructor(props) {
        super(props);
    }

    clickEvent() {
        location.href='//www.baidu.com';
    }

    render() {
        return (
            <section>
                <div className="btn-right">
                    <Btn
                        btnType="block" // or block
                        btnStatus="default"
                        size="small"
                        text="button"
                        clickEvent={this.clickEvent.bind(this)}
                        otitle="我的-title"
                        otype="我的-type"
                        myStyle="btn-full-screen" //className
                    />
                </div>
            </section>
        );
    }
}
export default Index;
