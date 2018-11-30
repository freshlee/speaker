import React, { Component } from "react";
import "./index.css";
function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); 
    return null; 
} 
export default class Detail extends Component {
    componentDidMount = () => {
        var timer = setTimeout(function(){
            document.getElementById('before').classList.add("on");
            document.getElementById('after').classList.add("on");
        },2000)
        console.log(this);
    }
    render() {
        console.log(this.props.location.pathname.split('/').pop())
        return (
            <div>
                <div id="before" className="amin-box">
                    <div className="bg0 pa">
                        <div className="bg1"></div>
                    </div>
                    <div className="hx-box pa">
                        <ul className="pr">
                            <li className="hx-k1 pa0">
                                <span></span>
                            </li>
                            <li className="hx-k2 pa0">
                                <span></span>
                            </li>
                            <li className="hx-k3 pa0">
                                <span></span>
                            </li>
                        </ul>

                    </div>
                    <p className="text">正在生成中...</p>
                </div>

                <div id="after" className="cg-box">
                    <div className="cg-img"></div>
                    <div className="text">{this.props.location.pathname.split('/').pop()}生成成功！<p><a href='../../doc/demo.pptx'>点击下载</a></p> </div>
                </div>
            </div>
        );
    }
}