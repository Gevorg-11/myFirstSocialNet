import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow, requestUsers,
    unfollow
} from "../../Redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getToggleFetching,
    getTotalUsersCount,
    getUsers
} from "../../Redux/usersSelectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   users={this.props.users}
                   toggleFetching={this.props.toggleFetching}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        toggleFetching: getToggleFetching(state)
    }
};

export default compose(connect(mapStateToProps,
    {follow, unfollow,requestUsers}))(UsersContainer);