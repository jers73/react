import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SimpleComponent from './SimpleComponent';

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <h1>Hello World</h1>
                    <SimpleComponent/>
                </div>
            </MuiThemeProvider>
        );
    }
}