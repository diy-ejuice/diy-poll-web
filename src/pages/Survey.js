import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Survey from 'survey-react';

import { actions as appActions } from 'reducers/application';

export class SurveyPage extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      submitSurvey: PropTypes.func.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);

    const json = `{
      "pages": [
       {
        "name": "page1",
        "elements": [
         {
          "type": "radiogroup",
          "name": "favoriteFlavor",
          "title": "Pick your favorite Banana flavor",
          "isRequired": true,
          "choices": [
            {
              "value": "TFA Banana Ripe",
              "text": "TFA Banana Ripe"
            },
            {
              "value": "TFA Bananas Foster",
              "text": "TFA Bananas Foster"
            },
            {
              "value": "TFA Banana Bread",
              "text": "TFA Banana Bread"
            },
            {
              "value": "TFA Banana Cream",
              "text": "TFA Banana Cream"
            },
            {
              "value": "LA Banana Cream",
              "text": "LA Banana Cream"
            },
            {
              "value": "FA Banana",
              "text": "FA Banana"
            },
            {
              "value": "HS Banana",
              "text": "HS Banana"
            },
            {
              "value": "FLV Banana",
              "text": "FLV Banana"
            },
            {
              "value": "CAP Banana",
              "text": "CAP Banana"
            },
            {
              "value": "PUR Banana",
              "text": "PUR Banana"
            },
            {
              "value": "VT Banana Custard",
              "text": "VT Banana Custard"
            },
            {
              "value": "WF Banana Puree",
              "text": "WF Banana Puree"
            },
            {
              "value":"Something Else",
              "text":"Something Else"
            }
           ]
         }
        ]
       }
      ],
      "cookieName": "fotw-2020-02-04"
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
    const { actions } = this.props;
    const { isCompleted, cookieName, valuesHash } = model;

    if (!isCompleted || !valuesHash) {
      return;
    }

    actions.submitSurvey(cookieName, valuesHash);
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
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
});

export default connect(null, mapDispatchToProps)(SurveyPage);
