import React, { Component } from 'react';
import * as d3 from 'd3';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ProgressArc extends Component {
  componentDidMount() {
    this.drawArc();
  }

  componentDidUpdate() {
    this.redrawArc();
  }

  drawArc(){
    const context = this.setContext();
    this.setBackground(context);
    this.setForeground(context);
    this.updatePercent(context);
  }

  redrawArc(){
    const context = d3.select(`#${this.props.id}`);
    context.remove();
    this.drawArc();
  }

  setContext() {
    return d3.select(this.refs.arc).append('svg')
    .attr('height', '60px')
    .attr('width', '60px')
    .attr('id','d3-arc')
    .append('g')
    .attr('transform',`translate(30,30)`)
  }

  setBackground(context) {
    return context.append('path')
    .datum({endAngle:this.tau})
    .style('fill','#e6e6e6')
    .attr('d',this.arc());
  }

  setForeground(context) {
    return context.append('path')
    .datum({endAngle:0})
    .style('fill','#756bb1')
    .attr('d',this.arc());
  }

  tau = Math.PI * 2;

  arc() {
    return d3.arc()
    .innerRadius(20)
    .outerRadius(30)
    .startAngle(0)
  }

  updatePercent(context) {
    return this.setForeground(context).transition()
    .duration(this.props.duration)
    .call(this.arcTween, this.tau*this.props.percentComplete, this.arc());
  }

  arcTween(transition, newAngle, arc) {
    transition.attrTween('d', (d)=> {
      const interpolate = d3.interpolate(d.endAngle, newAngle);
      const newArc = d;
      return (t) => {
        newArc.endAngle = interpolate(t);
        return arc(newArc);
      };
    });
  }

  render() {
    return (
      <div ref='arc'></div>
    )
  }
}

const mapStateToProps = state => {
  percentComplete: state.milestones.percentComplete
}

export default connect(
  mapStateToProps
)(ProgressArc);
