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
          "title": "Pick your favorite flavor",
          "isRequired": true,
          "choices": [
           {
            "value": "MB Big Watermelon",
            "text": "MB Big Watermelon"
           },
           {
            "value": "FLV Wild Melon",
            "text": "FLV Wild Melon"
           },
           {
            "value": "Cap Double Watermelon",
            "text": "Cap Double Watermelon"
           },
           {
            "value": "DIYFS Maniacal Melon",
            "text": "DIYFS Maniacal Melon"
           },
           {
            "value": "PUR Melon Patch",
            "text": "PUR Melon Patch"
           },
           {
            "value": "Something Else",
            "text": "Something Else"
           }
          ]
         }
        ]
       }
      ],
      "cookieName": "fotw-2020-01-26"
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
