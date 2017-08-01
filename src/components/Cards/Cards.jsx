import React from 'react';
import './Cards.css'
import { List, Label } from 'semantic-ui-react';

const Cards = () => (
  <List.Item textAlign='center'>
      <List.Content className="ui center aligned">
        <List.Header>#1 Git Issue One</List.Header><Label.Group tag><div className="us tiny label"><Label>question</Label></div></Label.Group>
        <List.Description>Assignees: Jenny</List.Description>
      </List.Content>
    </List.Item>
)

export default Cards;
