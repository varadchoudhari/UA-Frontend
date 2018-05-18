/**
 *
 * AddProject
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { Grid, Row,Col,Panel,Button,FormControl, Textarea
} from 'react-bootstrap';
import ContentWrapper from '../../components/Layout/ContentWrapper';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAddProject from './selectors';
import reducer from './reducer';
import saga from './saga';
import {makeSelectCurrentUser} from 'containers/App/selectors';
import {addProjectAction} from './actions';

export class AddProject extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      place: '',
      date: '',
      time: '',
      pgoals: '',
      pkeywords: '',
      userId:(this.props.currentUser && this.props.currentUser.user)?this.props.currentUser.user.id : '',
      show: false,
      // show:'alert alert-success',
    }
  }

  handleChange = (e) => {

    const {name, value} = e.target;
    this.setState({[name]: value});
    
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // userid = this
    this.props.addPro(
      {
        name: this.state.name, 
        description: this.state.description, 
        place: this.state.place,
        date: this.state.date,
        time: this.state.time,
        pgoals: this.state.pgoals,
        pkeywords: this.state.pkeywords,
        userId: this.state.userId});
      setTimeout(() => {
        this.setState(
          {
            'name':'',
            'description': '',
            'place': '',
            'date': '',
            'pgoals': '',
            'pkeywords': '',
            'time': '',
          }
        );
        
      }, 500);
      this.handleClick(true);
  }

  handleClick = (value) => {
    this.setState({
      show: value,
    });

  }

  renderFleshmsh = () => {
    return ( 
      <div className={(this.state.show == true ) ? 'show' : 'hide'} >
        <div className="alert alert-success">
         <span className="pull-right"  onClick={(e) => this.handleClick(false)} > X </span>
          Project Created
        </div>
      </div>

    )
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>AddProject</title>
          <meta name="description" content="Description of AddProject" />
        </Helmet>
        <ContentWrapper>
          <Row>
            <Col md={10} className="col-md-offset-1">
              <form method="post" action="#" data-parsley-validate="" onChange={this.handleChange} onSubmit={this.handleSubmit} noValidate>
                
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div className="panel-title">Create Project</div>
                  </div>
                  <div className="panel-body">
                    {this.renderFleshmsh()}
                  <Col md={12} >
                    <div className="form-group">
                      <label className="control-label">Project Name *</label>
                      <p style={{
                        color: 'red'
                      }}>
                        {/* {this.state.projectname} */}
                      </p>
                      <FormControl
                        id="name"
                        type="name"
                        name="name"
                        placeholder="Enter Project Name"
                        value={this.state.name}
                        required="required"
                        className="form-control"/>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="form-group">
                      <label className="control-label">Description</label>
                      <p style={{
                        color: 'red'
                      }}>
                        {/* {this.state.projectname} */}
                      </p>
                      <FormControl
                        id="description"
                        type="description"
                        name="description"
                        rows="5"
                        componentClass="textarea"
                        placeholder="Description"
                        value={this.state.description}
                        required="required"
                        className="form-control" />
                    </div>
                  </Col>
                  <Col md={12 }>
                    <div className="form-group">
                      <label className="control-label">Place</label>
                      <p style={{
                        color: 'red'
                      }}>
                        {/* {this.state.projectname} */}
                      </p>
                      <FormControl
                        id="place"
                        type="place"
                        name="place"
                        rows="5"
                        placeholder="place"
                        value={this.state.place}
                        className="form-control" />
                    </div>
                  </Col>
                  
                  <Col md={6}>
                    <div className="form-group">
                      <label className="control-label">Date</label>
                      <p style={{
                        color: 'red'
                      }}>
                        {/* {this.state.projectname} */}
                      </p>
                      <FormControl
                        id="date  "
                        type="date"
                        name="date"
                        rows="5"
                        placeholder="date"
                        value={this.state.date}
                        className="form-control" />
                    </div>
                  </Col>
                  

                    <Col md={6}>
                      <div className="form-group">
                        <label className="control-label">Time</label>
                        <p style={{
                          color: 'red'
                        }}>
                          {/* {this.state.projectname} */}
                        </p>
                        <FormControl
                          id="time"
                          type="timedate"
                          name="time"
                          rows="5"
                          placeholder="time"
                          value={this.state.time}
                          className="form-control" />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="form-group">
                        <label className="control-label">Project Goals</label>
                        <p style={{
                          color: 'red'
                        }}>
                          {/* {this.state.projectname} */}
                        </p>
                        <FormControl
                          id="pgoals"
                          type="pgoals"
                          name="pgoals"
                          rows="5"
                          componentClass="textarea"
                          placeholder="Project Goals"
                          value={this.state.pgoals}
                          required="required"
                          className="form-control" />
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="form-group">
                        <label className="control-label">Project Keywords</label>
                        <p style={{
                          color: 'red'
                        }}>
                          {/* {this.state.projectname} */}
                        </p>
                        <FormControl
                          id="pkeywords"
                          type="pkeywords"
                          name="pkeywords"
                          rows="5"
                          componentClass="textarea"
                          placeholder="Project Keywords"
                          value={this.state.pkeywords}
                          required="required"
                          className="form-control" />
                      </div>
                    </Col>  

                  </div>
                  <div className="panel-footer">
                    <div className="clearfix">

                      <div className="pull-right">
                        <div className="">
                          <button type="submit" disabled={!this.state.name} className="btn btn-success">Create Project</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END panel */} 
              </form>
            </Col>
          </Row>
        </ContentWrapper>
      </div>
    );
  }
}

AddProject.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addproject: makeSelectAddProject(),
  currentUser: makeSelectCurrentUser(),
});
 
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    addPro : (payload) => dispatch(addProjectAction(payload)),
    
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'addProject', reducer });
const withSaga = injectSaga({ key: 'addProject', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AddProject);