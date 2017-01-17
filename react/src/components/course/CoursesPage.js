import  React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseAction from '../../actions/courseAction';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  courseRow(course,index){
    return  <div key={index}>{course.title}</div>;
  }
  redirectToAddCoursePage(){
    browserHistory.push('/course/new');
  }
  render(){
    const courses = this.props.courses;
    return(
      <div>
          <h1>Courses</h1>
          <input type="submmit"
              value="Add course"
              className="btn btn-primary"
              onClick={this.redirectToAddCoursePage} />
          <CourseList courses={courses} ></CourseList>
      </div>
    );
  }
}
CoursesPage.propTypes = {
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
