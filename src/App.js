import React from 'react';
// import logo from './logo.svg';
import {Route, Redirect} from 'react-router-dom';
import LangsContent from './pages/LangsContent/LangsContent';
import HomeContent from './pages/HomeContent/HomeContent';
import './App.css';

var langParamsArray = [
    {
        'language': 'en',
        'player_title': 'Watch video',
        'history_title': 'Watch History',
        'placeholder': 'Search on YouTube',
        'isDefault': true,
        'votes': 'Votes',
        'delete': 'Delete',
        'views': 'Views'
    },
    {
        'language': 'ru',
        'player_title': 'Просмотр видео',
        'history_title': 'История просмотров',
        'placeholder': 'Поиск на YouTube',
        'isDefault': false,
        'votes': 'Лайков',
        'delete': 'Удалить',
        'views': 'Просмотров'

    }
];

var langs = langParamsArray.map(function (obj) {
    return obj.language;
});

var defaultObj = langParamsArray.filter(function (obj) {
    return obj.isDefault === true
});

var defaultLang = defaultObj[0].language;

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            activeLang: localStorage["lang"]
        }
    }
    //functions work with languages and redirect START
    selectChangeHandler = event => {
        localStorage["lang"] = event.target.getAttribute('data-value');
        this.setState({
            activeLang: localStorage["lang"]
        });
    }

    changeLangHandler = elem => {
        localStorage["lang"] = elem.currentTarget.getAttribute('data-value');
        this.setState({
            activeLang: localStorage["lang"]
        })
    }

    redirect = () =>  {
         if(localStorage["lang"] && localStorage["lang"] !== '') {
            if(this.state.activeLang === defaultLang) {
                if(window.location.href !== '/') {
                    return <Redirect to={"/"} />
                }
            } else {
                return <Redirect to={"/"+this.state.activeLang} />
            }
        } else {
            return <Redirect to={"/langs"} />
        }
    }

    renderRouteHome = () => {
        return langParamsArray.map((obj, index) => {

                if(obj.language === this.state.activeLang) {
                    var path = '/';
                    if(!obj.isDefault) {
                        path += obj.language;
                    }
                    return (
                        <Route key={index} path={path} exact  render={() => <HomeContent langs={langs} langParams={obj} selectChange={this.selectChangeHandler}/>} />
                    )
                } else {
                    return null;
                }
            }
        );
    }
    //functions work with languages and redirect END

    render() {
        //localStorage.clear();
        return (
            <div className="App">
                <Route path="/langs" exact  render={() => <LangsContent changeLang={this.changeLangHandler}/>} />
                {this.renderRouteHome()}
                {this.redirect()}
            </div>
        );
    }
}

export default App;
