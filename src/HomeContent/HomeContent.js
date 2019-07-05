import React from 'react';
import Select from '../components/Select/Select';
import SearchInput from '../components/Search/SearchInput/SearchInput';
import SearchResult from '../components/Search/SearchResult/SearchResult';
import Search from "../components/Search/Search";

const API_KEY = "AIzaSyCsrhf7F21bK63ASWOtaRyhoce9m6TIs0Q";
const max_results = 5;



class HomeContent  extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            string_search: '',
            result_videos: ''
        }
    }

    getVotes = async (video, index, array) => {
        const video_id  = await video.id.videoId;
        const api_url = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${video_id}&key=${API_KEY}`);
        const api_statistic = await api_url.json();
        video.votes = await api_statistic.items[0].statistics.likeCount;
        await this.setState({
            result_videos: array
        });
    }



    //function work with video START
    onChangeInputHandler = async (event) => {
        const search_string = await event.target.value;
        const api_url = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${search_string}&eventType=live&part=snippet&type=video&maxResults=${max_results}&key=${API_KEY}`);
        const api_serult = await api_url.json();
        const arrayVotes = await [];

        await api_serult.items.forEach( (item, index, array) => {
             this.getVotes(item, index, array);
        });

        await console.log("api_serult.items", api_serult.items);

        await this.setState({
            string_search: search_string,
            result_videos: api_serult.items
        });
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
                    <Search langParams = {this.props.langParams} onChange={this.onChangeInputHandler} result_videos={this.state.result_videos} string_search={this.state.string_search}/>
                    <div>
                        <div className="left_sidebar">
                            <h2>Watch History</h2>
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