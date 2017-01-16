import  React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseAction from '../../actions/courseAction';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component{
  constructor(props, context) {
    super(props, context);
  }

  courseRow(course,index){
    return  <div key={index}>{course.title}</div>;
  }
  render(){
    return(
      <div>
          <h1> Courses </h1>
           {this.props.courses.map(this.courseRow)}
          <h2> Add Courses </h2>
      </div>
    );
  }
}
CoursesPage.PropTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  return{
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(courseAction, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
