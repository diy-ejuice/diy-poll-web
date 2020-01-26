import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as Survey from 'survey-react';

export default class SurveyPage extends Component {
  constructor(props) {
    super(props);

    const json = `{
      "pages": [
       {
        "name": "page1",
        "elements": [
         {
          "type": "radiogroup",
          "name": "Squestion1",
          "title": "Pick your favorite flavor",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "MB Big Watermelon"
           },
           {
            "value": "item2",
            "text": "FLV Wild Melon"
           },
           {
            "value": "item3",
            "text": "Cap Double Watermelon"
           },
           {
            "value": "item4",
            "text": "DIYFS Maniacal Melon"
           },
           {
            "value": "item5",
            "text": "PUR Melon Patch"
           },
           {
            "value": "item6",
            "text": "INW Buttplug"
           },
           {
            "value": "item7",
            "text": "Something Else"
           }
          ]
         }
        ]
       }
      ],
      "cookieName": "survey1"
     }`;

    this.css = {
      radiogroup: {
        root: 'form-group',
        controlLabel: 'form-check-label',
        item: 'form-check',
        itemControl: 'form-check-input',
        error: {
          root: 'alert alert-danger'
        }
      },
      navigationButton: 'btn btn-success mt-2'
    };
    this.model = new Survey.Model(json);
    this.onComplete = this.onComplete.bind(this);
  }

  onComplete(model) {
    const { valuesHash, isCompleted } = model;

    if (!isCompleted || !valuesHash) {
      return;
    }

    const entries = Object.entries(valuesHash);

    // eslint-disable-next-line
    console.dir(entries);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Take Survey</h1>
            <Survey.Survey
              css={this.css}
              model={this.model}
              onComplete={this.onComplete}
            ></Survey.Survey>
          </Col>
        </Row>
      </Container>
    );
  }
}
