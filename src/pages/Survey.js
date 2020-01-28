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
          "title": "Pick your favorite Cherry flavor",
          "isRequired": true,
          "choices": [
            {
             "value": "TFA Cherry Extract",
             "text": "TFA Cherry Extract"
            },
            {
             "value": "WF Black Cherry Jelly Bean",
             "text": "WF Black Cherry Jelly Bean"
            },
            {
             "value": "FLV Black Cherry",
             "text": "FLV Black Cherry"
            },
            {
             "value": "INW Black Cherry For Pipe",
             "text": "INW Black Cherry For Pipe"
            },
            {
             "value": "INW Cherries",
             "text": "INW Cherries"
            },
            {
             "value": "FA Cherry",
             "text": "FA Cherry"
            },
            {
             "value": "FA Black Cherry",
             "text": "FA Black Cherry"
            },
            {
             "value": "TFA Black Cherry",
             "text": "TFA Black Cherry"
            },
            {
             "value": "FW Cherry Crush",
             "text": "FW Cherry Crush"
            },
            {
             "value": "FW Cherry Berry",
             "text": "FW Cherry Berry"
            },
            {
             "value": "MB Red Cherry",
             "text": "MB Red Cherry"
            },
            {
             "value": "FLV Cherry Filling",
             "text": "FLV Cherry Filling"
            },
            {
             "value": "FLV Cherry Blossom",
             "text": "FLV Cherry Blossom"
            },
            {
             "value": "TFA Cherry Blossom",
             "text": "TFA Cherry Blossom"
            },
            {
             "value": "CAP Tart Cherry",
             "text": "CAP Tart Cherry"
            },
            {
             "value": "TFA Maraschino Cherry",
             "text": "TFA Maraschino Cherry"
            },
            {
             "value": "FLV Rainier Cherry",
             "text": "FLV Rainier Cherry"
            },
            {
             "value": "FLV Cherry Filling",
             "text": "FLV Cherry Filling"
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
      "cookieName": "fotw-2020-01-28"
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
