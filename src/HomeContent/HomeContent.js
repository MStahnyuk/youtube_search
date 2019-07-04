import React from 'react';
import Select from '../components/Select/Select';
import SearchInput from '../components/SearchInput/SearchInput';
import SearchResult from '../components/SearchResult/SearchResult';
class HomeContent  extends React.Component {

    //function work with video START
    onChangeInputHandler = (event) =>{
        console.log(event.target.value);
        this.searchByKeyword();
    }

    //function work with video END

    render() {
        return (
            <div className={'homeContent'}>
                <div className="langs">
                    <Select value = {this.props.langParams.language} options={this.props.langs} onChange={this.props.selectChange} />
                </div>
                <div>
                    <h2>{this.props.langParams.h1}</h2>
                    <div className="search">
                        <SearchInput placeholder={this.props.langParams.placeholder} onChange={this.onChangeInputHandler}/>
                        <SearchResult />
                    </div>

                    <div>
                        <div className="left_sidebar">
                            <div className="sideber_item">Video 1</div>
                            <div className="sideber_item">Video 2</div>
                            <div className="sideber_item">Video 3</div>
                            <div className="sideber_item">Video 4</div>
                            <div className="sideber_item">Video 5</div>
                        </div>
                        <div className="player">
                            <h1>Главное видео</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeContent;