import React from 'react';
///* global gapi */

// console.log(gapi);
//
// var MyAPI = "AIzaSyD3TOhK_fjvDI3HC56mbqjWvAeaUND2S8M";
//
// var Myclient_id="youtubesearch-245616";
//
// function start() {
//     // 2. Initialize the JavaScript client library.
//     gapi.client.init({
//         'apiKey': 'AIzaSyD3TOhK_fjvDI3HC56mbqjWvAeaUND2S8M',
//         // Your API key will be automatically added to the Discovery Document URLs.
//         'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
//         // clientId and scope are optional if auth is not required.
//         'clientId': 'youtubesearch-245616',
//         'scope': 'profile',
//     }).then(function() {
//         // 3. Initialize and make the API request.
//         return gapi.client.people.people.get({
//             'resourceName': 'people/me',
//             'requestMask.includeField': 'person.names'
//         });
//     }).then(function(response) {
//         console.log(response.result);
//     }, function(reason) {
//         console.log('Error: ' + reason.result.error.message);
//     });
// };
// // 1. Load the JavaScript client library.
// gapi.load('client', start);






// function authenticate() {
//     console.log('22222');
//     return gapi.auth2.getAuthInstance()
//         .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
//         .then(function() { console.log("Sign-in successful"); },
//             function(err) { console.error("Error signing in", err); });
// }
// function loadClient() {
//     gapi.client.setApiKey("AIzaSyD3TOhK_fjvDI3HC56mbqjWvAeaUND2S8M");
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//         .then(function() { console.log("GAPI client loaded for API"); },
//             function(err) { console.error("Error loading GAPI client for API", err); });
// }
// // Make sure the client is loaded and sign-in is complete before calling this method.
// function execute() {
//     return gapi.client.youtube.search.list({
//         "part": "snippet",
//         "maxResults": 25,
//         "q": "surfing"
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//             },
//             function(err) { console.error("Execute error", err); });
// }
// gapi.load("client:auth2", function() {
//     gapi.auth2.init({client_id: "youtubesearch-245616"});
// });

class SearchInput extends React.Component {
    render() {
        return (
            <div className="search_input">
                <input placeholder={this.props.placeholder} onChange={this.props.onChange} type="text"/>
                {/*<button onClick={authenticate().then(loadClient)}>authorize and load</button>*/}
                {/*<button onClick={execute()}>execute</button>*/}
            </div>
        );
    }
}

export default SearchInput;