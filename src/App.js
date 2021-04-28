import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializedApp} from "./Redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
class App extends Component {
    componentDidMount() {
        this.props.initializedApp()
    }
    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className="App">
                <HeaderContainer/>
                <NavBar/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/messages' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    initialized: state.app.initialized
})
export default compose(withRouter,connect(mapStateToProps,{initializedApp}))(App);
