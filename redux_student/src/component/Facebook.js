import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import Student from './Student'

export default class Facebook extends Component {

    state = {
        auth: false,
        name: '',
        picture: ''
    };

    responseFacebook = response => {
        console.log(response);
        if(response.status !== 'unknown')
        this.setState({
            auth: true,
            name: response.name,
            picture: response.picture.data.url
        });   
    }
    responseLogout = response => {
        this.setState({
            auth: false,
        });   
    }

    componentClicked = () => {
        console.log('Facebook btn clicked');
    }

    render(){
        let facebookData;

        this.state.auth ?
        facebookData = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: 'SteelBlue',
                    padding: '20px',
                    color: 'GhostWhite'
                }}>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}!</h2>
                    <button class="btn btn-danger" onClick={this.responseLogout}>Log out</button>
                 
                    <Student/>
                </div>
            ) : 
            facebookData = (<FacebookLogin
                appId="208394517169861"
                autoLoad={true}
                fields="name,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);

        return (
            <>
                {facebookData}
            </>
        );
    }
}