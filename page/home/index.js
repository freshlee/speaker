import React, { Component } from "react";
import { Row, Col, Tree, Radio, Button } from 'antd';
import "./index.css";
import { Level } from "chalk";
import {createBrowserHistory} from 'history'


const history = createBrowserHistory()
const TreeNode = Tree.TreeNode;
const RadioGroup = Radio.Group;

const treeData = [{
  title: '恒企知识库',
  key: '0-0',
  children: [{
    title: '基础会计课程',
    key: '0-0-0',
    children: [
      { title: '基础会计', key: '0-0-0-0' },
      { title: '成本会计', key: '0-0-0-1' },
      { title: '管理会计', key: '0-0-0-2' },
      { title: '工业企业会计', key: '0-0-0-3' },
      { title: '预算会计', key: '0-0-0-4' },
      { title: '财务会计', key: '0-0-0-5' }
    ],
  }, {
    title: 'CMA课程',
    key: '0-0-1',
    children: [
      { title: '财务报告、规划、绩效与控制', key: '0-0-1-0' },
      { title: '财务决策', key: '0-0-1-1' }
    ],
  }, {
    title: 'CPA课程',
    key: '0-0-2',
    children: [
      { title: '财务审计', key: '0-1-0-0' },
      { title: '财务风险管理', key: '0-1-0-1' },
      { title: '税法', key: '0-1-0-2' },
      { title: '公司战略与风险管理', key: '0-1-0-3' },
      { title: '会计法', key: '0-1-0-4' }
    ]
  }],
}];
let secondTree = []
const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};
export default class Home extends Component {
  state = {
    expandedKeys: ['0-0-0', '0-0-1'],
    autoExpandParent: true,
    checkedKeys: ['0-0-0'],
    selectedKeys: [],
    indexTree: ['0-0']
  }
  onChange (index, event) {
    this.state.indexTree[index] = event.target.value
    this.setState({
      indexTree: this.state.indexTree
    })
  }
  searchNode (Level) {
    let list = treeData
    for (let i = 0; i <= Level; i++) {
      if (list && i > 0) list = list.children
      list = list.find(item => item.key === this.state.indexTree[i])
      if (!list) return []
    }
    return list.children || []
  }
	render() {
		return (
			<div className="home">
        <div className="title">知识库系统 </div>
        <span className="title-name">请选择学科</span>
        <div className="wrap">
          <Row gutter={16}>
            <Col span={8}>
              <RadioGroup onChange={(event) => this.onChange.call(this, 0, event)} value={this.state.indexTree[0]}>
                {treeData.map((item, index) => {
                  return (<Radio style={radioStyle} value={item.key} key={index}>{item.title}</Radio>)
                })}
              </RadioGroup>
            </Col>
            <Col span={8}>
            <RadioGroup onChange={(event) => this.onChange.call(this, 1, event)} value={this.state.indexTree[1]}>
                {this.searchNode.call(this, 0).map((item, index) => {
                  return (
                    <div className="box" key={index}>
                      <Radio style={radioStyle} value={item.key}>{item.title}</Radio>
                      <div className={'hover ' +  (item.key === this.state.indexTree[1] ? 'active' : '')}>课程描述,课程详情介绍</div>
                    </div>)
                })}
              </RadioGroup>
            </Col>
            <Col span={8}>
            <RadioGroup onChange={(event) => this.onChange.call(this, 2, event)} value={this.state.indexTree[2]}>
                {this.searchNode.call(this, 1).map((item, index) => {
                  return (<Radio style={radioStyle} value={item.key} key={index}>{item.title}</Radio>)
                })}
              </RadioGroup>
            </Col>
          </Row>
          {this.state.indexTree[2] ? <div className="footer">
            <Button onClick={() => this.props.history.push({pathname: `/generate/word`,params:{type: 'word'}})}>一键生成Word文档</Button>
            <Button onClick={() => this.props.history.push({pathname: `/generate/ppt`,params:{type: 'ppt'}})}>一键生成PPT文档</Button>
            <Button onClick={() => this.props.history.push("/detail")}>一键生成教学视频</Button>
          </div> : ''}
        </div>
	    </div>
		);
	}
}