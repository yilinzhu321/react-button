
# [react-button]

# 简介
1. 只依赖 react/react-dom
2. 样式使用 css 编写, 兼容所有iphone5以上及所有Android常见浏览器

# 功能点
1. button类型改变: block or line or warning or block-warning 
2. button状态改变: default or disable or active
3. button大小改变: large or small or smaller
4. button埋点: 自定义方式
5. 点击button执行clickEvent方法：链接跳转 or 自定义方法
6. 新增button平铺且固定在底部样式：btn-full-screen
7. 自定义按钮样式：myStyle
8. 可控制button居中／居右

# 使用说明

1. 引入组件：
    import Button from 'Button.js';
2. 引入css：
    import 'Button.css';
3. js页面操作：

## 正常按钮或一个按钮平铺
```js
  clickEvent() {
      location.href='//www.baidu.com';
  }
    
  render() {
      <div className="btn-center"> //btn-center：居中；btn-right：居右 不写：居左
           <Button
               btnType="block" // or line or warning or block-warning
               btnStatus="active" // or disable or default
               size="small" // or small or smaller
               text="按钮"
               clickEvent={this.clickEvent.bind(this)}
               otitle="按钮-title" //埋点
               otype="按钮-type" // 埋点
               myStyle="btn-full-screen-one" //btn-full-screen-one：屏宽样式  
               //其他：myStyle="btn-full-screen-one style" || myStyle="style" style:自定义样式
           />
      </div>
  }
```

## 两个按钮平铺
```js
  clickEvent() {
      location.href='//www.baidu.com';
  }
    
  render() {
      <div className="btn-center"> //btn-center：居中；btn-right：居右 不写：居左
           <Button
               btnType="block" // or line or warning or block-warning
               btnStatus="active" // or disable or default
               size="small" // or small or smaller
               text="按钮"
               clickEvent={this.clickEvent.bind(this)}
               otitle="按钮-title" //埋点
               otype="按钮-type" // 埋点
               myStyle="btn-full-screen-two" // btn-full-screen-one：屏宽一半样式  
                                             // 其他：myStyle="btn-full-screen-two style" style:自定义样式
           />
            <Button
                btnType="block" // or line or warning or block-warning
                btnStatus="active" // or disable or default
                size="small" // or small or smaller
                text="按钮"
                clickEvent={this.clickEvent.bind(this)}
                otitle="按钮-title" //埋点
                otype="按钮-type" // 埋点
                myStyle="btn-full-screen-two right" //btn-full-screen-two：屏宽一半样式  
                                                    //其他：myStyle="btn-full-screen-two style" style:自定义样式
            />
           
           
      </div>
  }
```

# 参数说明：
<table>
<tr><td>参数</td> <td>说明</td>	<td>默认值</td>	<td>是否必须存在</td> <td>备注</td></tr>
<tr><td>btnType</td>	<td>按钮类型</td>	<td>块状按钮／线状按钮／删除按钮</td>	<td>是</td> <td>删除按钮：线状 type="warning" 块状 type="block-warning" 其他按钮：线状 type="line" 块状 type="block"</td></tr>
<tr><td>btnStatus</td>	<td>按钮状态</td>	<td>default</td>	<td>否</td> <td>default：正常；active：点击态；disable：不可点击态；不写：默认default；</td></tr>
<tr><td>size</td>	<td>按钮大小</td>	<td>smaller</td>	<td>否</td> <td>large：大；small：小；smaller：更小；不写：默认smaller；</td></tr>
<tr><td>text</td>	<td>按钮上自定义文字</td>	<td>无</td> <td>否</td><td>不写：按钮上文本为空</td></tr>	
<tr><td>clickEvent</td>	<td>点击按钮后执行方法</td>	<td>this.clickEvent.bind(this)</td> <td>否</td><td>不写：点击无反应</td></tr>	
<tr><td>otitle</td>	<td>埋点中data-otitle的值</td><td>无</td> <td>否</td><td>自定义埋点中data-otitle,不写：值为空</td></tr>	
<tr><td>otype</td>	<td>埋点中data-otype的值</td><td>无</td> <td>否</td><td>自定义埋点中data-otype,不写：值为空</td></tr>
<tr><td>myStyle</td><td>按钮自定义样式</td><td>无</td> <td>否</td><td>myStyle="btn-full-screen-one"：按钮平铺且固定再底部；第一个: myStyle="btn-full-screen-two",  第二个: myStyle="btn-full-screen-two right":两个按钮平铺且固定再底部；其他：自定义样式；不写：显示默认样式</td></tr>
</table>


# License
MIT
