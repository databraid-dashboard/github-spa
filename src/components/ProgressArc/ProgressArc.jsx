/* eslint-disable react/no-string-refs,
react/sort-comp, class-methods-use-this, no-unused-expressions */

import React, { Component } from 'react';
import * as d3 from 'd3';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import injectWidgetId from '../../utils/utils';

class ProgressArc extends Component {
  componentDidMount() {
    this.drawArc();
  }

  componentDidUpdate() {
    this.redrawArc();
  }

  setContext() {
    return d3
      .select(this.refs.arc)
      .append('svg')
      .attr('height', '60px')
      .attr('width', '60px')
      .attr('id', 'd3-arc')
      .append('g')
      .attr('transform', 'translate(30,30)');
  }

  arc() {
    return d3.arc().innerRadius(20).outerRadius(30).startAngle(0);
  }

  setBackground(context) {
    return context
      .append('path')
      .datum({ endAngle: (Math.PI * 2) })
      .style('fill', '#e6e6e6')
      .attr('d', this.arc());
  }

  setForeground(context) {
    return context
      .append('path')
      .datum({ endAngle: 0 })
      .style('fill', '#756bb1')
      .attr('d', this.arc());
  }

  drawArc() {
    const context = this.setContext();
    this.setBackground(context);
    this.setForeground(context);
    this.updatePercent(context);
  }

  redrawArc() {
    const context = d3.select(`#${this.props.id}`);
    context.remove();
    this.drawArc();
  }

  updatePercent(context) {
    return this.setForeground(context)
      .transition()
      .duration(this.props.duration)
      .call(this.arcTween, (Math.PI * 2) * this.props.percentComplete, this.arc());
  }

  arcTween(transition, newAngle, arc) {
    transition.attrTween('d', (d) => {
      const interpolate = d3.interpolate(parseInt(d.endAngle, 10), newAngle);
      const newArc = d;
      return (t) => {
        newArc.endAngle = interpolate(t);
        return arc(newArc);
      };
    });
  }

  render() {
    return <div ref="arc" />;
  }
}

ProgressArc.propTypes = {
  id: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  percentComplete: PropTypes.number.isRequired,
};

ProgressArc.defaultProps = {
  id: 0,
  percentComplete: 0,
  duration: 2000,
};

export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const milestoneId = ownProps.milestoneId;
  const percentComplete =
    state.widgets.byId[id].milestones.milestonesById[milestoneId].percentComplete;

  return {
    percentComplete,
  };
};

export default injectWidgetId(connect(mapStateToProps)(ProgressArc));
