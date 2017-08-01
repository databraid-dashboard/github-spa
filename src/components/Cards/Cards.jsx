import React from 'react';
import './Cards.css'
import { List, Label } from 'semantic-ui-react';

const Cards = () => (
  <List.Item>
      <List.Content>
        <List.Header>#1 Git Issue One</List.Header><Label.Group tag><div className="us tiny label"><Label>question</Label></div></Label.Group>
        <List.Description>Assigned To: Jenny</List.Description>
      </List.Content>
    </List.Item>
)

export default Cards;
