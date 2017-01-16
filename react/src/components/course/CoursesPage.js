import  React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseAction from '../../actions/courseAction';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';

class CoursesPage extends React.Component{
  constructor(props, context) {
    super(props, context);
  }

  courseRow(course,index){
    return  <div key={index}>{course.title}</div>;
  }
  render(){
    const courses = this.props.courses;
    return(
      <div>
          <CourseList courses={courses} ></CourseList>
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
