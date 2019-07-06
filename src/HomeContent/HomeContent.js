import React from 'react';
import Select from '../components/Select/Select';
import Player from '../components/Player/Player';
import History from '../components/History/History'
// import SearchInput from '../components/Search/SearchInput/SearchInput';
// import SearchResult from '../components/Search/SearchResult/SearchResult';
import Search from "../components/Search/Search";

//const API_KEY = "AIzaSyD3TOhK_fjvDI3HC56mbqjWvAeaUND2S8M"; //API_KEY 1
const API_KEY = "AIzaSyDMQ0y1wTNoWGAyqYl0eZgyWx5HVRNDtT0"; //API_KEY 2
//const API_KEY = "AIzaSyCsrhf7F21bK63ASWOtaRyhoce9m6TIs0Q"; //API_KEY 3
const max_results = 2;



class HomeContent  extends React.Component {

    constructor(props) {
        super(props);
        let history_videos = [];
        if(localStorage["history_videos"]) {
            history_videos = JSON.parse(localStorage["history_videos"]);
        }

        this.state = {
            string_search: '',
            result_videos: '',
            active_video_id: '',
            history_videos: history_videos,
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
        const api_url = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${search_string}&eventType=completed&part=snippet&type=video&maxResults=${max_results}&key=${API_KEY}`);
        const api_serult = await api_url.json();

        await api_serult.items.forEach( (item, index, array) => {
             this.getVotes(item, index, array);
        });

        await this.setState({
            string_search: search_string,
            result_videos: api_serult.items
        });
    };

    clickResultsHandler = event => {
        const active_video = {
            id: event.currentTarget.getAttribute('video-id'),
            title: event.currentTarget.getAttribute('video-title'),
            img: event.currentTarget.getAttribute('video-img'),
            votes: event.currentTarget.getAttribute('video-votes')
        };

        //localStorage.clear();
        let  arrayVideos = [];
        if(localStorage["history_videos"]) {
            arrayVideos = JSON.parse(localStorage["history_videos"]);
        }

        let isDuplication = false;
        arrayVideos.forEach(function (elem) {
            if (elem.id === active_video.id) {
                isDuplication = true;
            }
        });

        if(!isDuplication) {
            arrayVideos.unshift(active_video);
            if(arrayVideos.length > 5){
                arrayVideos.pop();
            }
        }

        localStorage["history_videos"] = JSON.stringify(arrayVideos);

        console.log(arrayVideos);

        this.setState({
            string_search: '',
            result_videos: '',
            active_video_id: active_video.id,
            history_videos: arrayVideos
        });
    }

    onClickDeleteHandler = (event) => {
        const delete_video_id = event.target.getAttribute('video-id');
        console.log(delete_video_id);
        const history_videos = JSON.parse(localStorage["history_videos"]);
        history_videos.forEach( (video, index, history_videos) => {
            if(video.id === delete_video_id) {
                history_videos.splice(index, 1);
                localStorage["history_videos"] = JSON.stringify(history_videos);;
                this.setState({
                    history_videos: history_videos
                });
            }
        });
    }

    onClickActiveHandler= (event) => {
        this.setState({
            active_video_id: event.currentTarget.getAttribute('video-id')
        });
    }



    //function work with video END

    render() {
        //localStorage.clear();
        return (
            <div className={'homeContent'}>
                <div className="langs">
                    <Select value = {this.props.langParams.language} options={this.props.langs} onChange={this.props.selectChange} />
                </div>
                <div>
                    <h2>{this.props.langParams.h1 + ' 5.0'}</h2>
                    <Search langParams = {this.props.langParams} onChange={this.onChangeInputHandler} result_videos={this.state.result_videos} string_search={this.state.string_search} onClick={this.clickResultsHandler}/>
                    <div>
                        <History history_videos={this.state.history_videos} onClickDelete={this.onClickDeleteHandler} onClickActive={this.onClickActiveHandler} langParams={this.props.langParams}/>
                        <Player video_id={this.state.active_video_id}/>

                    </div>
                </div>

                {/*<h1 style={{color: 'red', fontSize: '40px'}}>{this.props.langParams.notice}</h1>*/}
            </div>
        );
    }
}

export default HomeContent;