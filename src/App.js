import React from 'react';
// import logo from './logo.svg';
import {Route, Redirect} from 'react-router-dom';
import LangsContent from './LangsContent/LangsContent';
import HomeContent from './HomeContent/HomeContent';
import './App.css';

var langParamsArray = [
    {
        'language': 'eng',
        'h1': 'YouTube video',
        'history_title': 'Watch History',
        'placeholder': 'Search on YouTube',
        'isDefault': true,
        'votes': 'Votes'
    },
    {
        'language': 'ru',
        'h1': 'Видео с YouTube',
        'history_title': 'Смотреть Историю',
        'placeholder': 'Поиск на YouTube',
        'isDefault': false,
        'votes': 'Лайков'
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
        localStorage["lang"] = event.target.value;
        this.setState({
            activeLang: localStorage["lang"]
        });
    }

    localStorageChangeHandler = elem => {
        localStorage["lang"] = elem.target.getAttribute('data-value');
        this.setState({
            activeLang:localStorage["lang"]
        })
    }

    redirect = () =>  {
         if(localStorage["lang"] && localStorage["lang"] !== '') {
            if(this.state.activeLang === defaultLang) {
                if(window.location.href !== '/') {
                    return <Redirect to={"/"} />
                } else {
                    return <h2>Все норм</h2>
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
        return (
            <div className="App">
                <Route path="/langs" exact  render={() => <LangsContent  localStorageChange={this.localStorageChangeHandler}/>} />
                {this.renderRouteHome()}
                {this.redirect()}
            </div>
        );
    }
}

export default App;
