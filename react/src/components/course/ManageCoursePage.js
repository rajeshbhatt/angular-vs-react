import React , {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from './../../actions/courseAction';
import CourseForm from './CourseForm';

class  ManageCoursePage extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state ={
        course :Object.assign({},this.props.course),
        errors: {}
      };
      this.updateCourseState = this.updateCourseState.bind(this);
      this.saveCourse = this.saveCourse.bind(this);
  }

  // componentWillReceiveProps(nextProps){
  //   if(this.props.course.id!== nextProps.course.id){
  //     this.setState({course: Object.assign({}, nextProps.course)});
  //   }
  // }
  updateCourseState(event){
    const field= event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  saveCourse(event){
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.context.router.push('/courses');
  }
  render(){
    return(
      <CourseForm
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        errors ={this.state.errors}
        course={this.state.course}
      />
    );
  }
}
ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes ={
  router: PropTypes.object
}
function getCourseById(courses, id){
  const course = courses.filter(course => course.id === id);
  if(course.length>0) return course[0];
  return null;

}
function mapStatetoProps(state, ownProps){
  let course ={id: '', watchHref: '',title:'',authorId:'',length:'',category: ''};
  const courseId = ownProps.params.id;
  if(courseId & state.courses.length>1){
    course = getCourseById(state.courses, courseId);
  }
  const authorFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName  + ' ' + author.lastName
    };
  });
  return {
    course: course,
    authors: authorFormattedForDropdown
  };
}
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseAction, dispatch)
  };
}
export default connect(mapStatetoProps, mapDispatchToProps)(ManageCoursePage);