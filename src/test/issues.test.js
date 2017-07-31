import React from 'react';
import renderer from 'react-test-renderer';
import { withRouter, Route } from "react-router-dom";
import { shallow, render, mount } from 'enzyme';
import toJson, {shallowToJson} from 'enzyme-to-json';
import {Message} from '../components/message';
