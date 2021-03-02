import { connect } from "react-redux"
import React from "react";

import { setAuthUserDataThunkCreator } from "./../../redux/profileReducer"

import UserProfile from "./UserProfile"
import { withRouter } from "react-router-dom";

class UsersProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setAuthUserDataThunkCreator(this.props.match.params.id)
  }

  render() {
    return <UserProfile {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  "profile": state.profilePage.profile
})


export default connect(mapStateToProps, { setAuthUserDataThunkCreator })(withRouter(UsersProfileContainer))