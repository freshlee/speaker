import React, { Component } from "react";
import { Row, Col, Tree, Radio, Button } from 'antd';
import "./index.css";
import { Level } from "chalk";
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

  onExpand = (expandedKeys) => {
    console.log('onExpand', expandedKeys);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  }

  onCheck = (checkedKeys) => {
    console.log('onCheck', checkedKeys);
    this.setState({ checkedKeys });
  }

  onSelect = (selectedKeys, info) => {
    console.log('onSelect', info);
    this.setState({ selectedKeys });
  }
  renderTreeNodes = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    });
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
			<div className="wrap">
        <Row gutter={16}>
          <Col span={8}>
            <RadioGroup onChange={(event) => this.onChange.call(this, 0, event)} value={this.state.indexTree[0]}>
              {treeData.map((item) => {
                return (<Radio style={radioStyle} value={item.key} key={item.key}>{item.title}</Radio>)
              })}
            </RadioGroup>
          </Col>
          <Col span={8}>
          <RadioGroup onChange={(event) => this.onChange.call(this, 1, event)} value={this.state.indexTree[1]}>
              {this.searchNode.call(this, 0).map((item) => {
                return (
                  <div className="box">
                    <Radio style={radioStyle} value={item.key} key={item.key}>{item.title}</Radio>
                    <div className={'hover ' +  (item.key === this.state.indexTree[1] ? 'active' : '')}>课程描述,课程详情介绍</div>
                  </div>)
              })}
            </RadioGroup>
          </Col>
          <Col span={8}>
          <RadioGroup onChange={(event) => this.onChange.call(this, 2, event)} value={this.state.indexTree[2]}>
              {this.searchNode.call(this, 1).map((item) => {
                return (<Radio style={radioStyle} value={item.key} key={item.key}>{item.title}</Radio>)
              })}
            </RadioGroup>
          </Col>
        </Row>
        <div className="footer">
        <Button>一键生成Word文档</Button>
        <Button>一键生成PPT文档</Button>
        <Button>一键生成教学视频</Button>
      </div>
	    </div>
		);
	}
}