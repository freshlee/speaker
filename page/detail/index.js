import React, { Component } from "react";
import { Row, Col, Tree, Radio, Table, Button } from 'antd';
import Esn_img from 'esn_img'  //这个是js文件
import 'esn_img/dist/styles.css'
import "./index.css";
const dataSource = [];
const columns = [{
  title: '页码',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '预览',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '配音',
  dataIndex: 'address',
  key: 'address',
}];
let PreComponent = null
export default class Detail extends Component {
  state = {
    url: '',
    Esn_img: null
  }
  preview (url) {
    this.setState({
      url
    })
    document.getElementsByClassName('ztao_tupian')[0].style.display = 'block'
  }
  close (url) {
    console.log('sadasd', this.refs.refCb)
    document.getElementsByClassName('ztao_tupian')[0].style.display = 'none'
  }
  refCb(Esn_img){
    PreComponent = Esn_img
    console.log(PreComponent)
    document.getElementsByClassName('ztao_tupian')[0].style.display = 'none'
  }
	render() {
    for (let i = 0; i < 100; i++) {
      dataSource.push({
        key: i,
        name: `P${i + 1}`,
        age: (<div className="preview"><img onClick={() => this.preview.call(this, `../../img/fake0${i % 5 + 1}.png`)} src={`../../img/fake0${i % 5 + 1}.png`}></img></div>),
        address: `科大讯飞合成语音0${i + 1}.mp3`
      })
    }
		return (
      <div>
        <div className="title">一键生成教学视频 <Button size="large" ghost>生成</Button> </div>
        <div className="detail-wrap">
        <div className="detail-title">
          <img src="../../img/lecture.png" className="icon-lecture"/>
          <span>课程讲解.PPT</span>
          <div className="table-wrap"></div>
          <Table dataSource={dataSource} columns={columns} pagination={{pageSize: 7}} />
        </div>
        <Esn_img pic={[this.state.url]} 
          describe={['ccc','sdsds','dww']} ref={this.refCb} close={this.close.bind(this)} left_done={()=>{alert('这是第一张')} }
          right_done={()=>{alert('没有了')}}/> 
	    </div>
      </div>
		);
	}
}