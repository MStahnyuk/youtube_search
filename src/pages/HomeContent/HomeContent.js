import React from 'react';
import Select from '../../components/Select/Select';
import Player from '../../components/Player/Player';
import History from '../../components/History/History'
import Search from "../../components/Search/Search";

const API_KEY = "AIzaSyC9lF6ffpMxm_utTrNe3IJ41Y5z5dgI8A0";
const max_results = 5;

class HomeContent  extends React.Component {
    constructor(props) {
        super(props);
        let history_videos = [];
        let active_video_id = '';
        if(localStorage["history_videos"] && localStorage["history_videos"] !== '[]') {
            history_videos = JSON.parse(localStorage["history_videos"]);
            active_video_id = history_videos[0].id;
        }

        this.state = {
            string_search: '',
            result_videos: '',
            active_video_id: active_video_id,
            history_videos: history_videos,
        }
    }

    getVotes = async (video, index, array) => {
        const video_id  = await video.id.videoId;
        const api_url = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${video_id}&key=${API_KEY}`);
        const api_statistic = await api_url.json();
        video.votes = await api_statistic.items[0].statistics.likeCount;
        video.views = await api_statistic.items[0].statistics.viewCount;
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
            votes: event.currentTarget.getAttribute('video-votes'),
            views: event.currentTarget.getAttribute('video-views')
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

        this.setState({
            string_search: '',
            result_videos: '',
            active_video_id: active_video.id,
            history_videos: arrayVideos
        });
    }

    onClickDeleteHandler = (event) => {
        const delete_video_id = event.target.getAttribute('video-id');
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
        return (
            <div className={'homeContent'}>
                <div className="row_top">
                    <Search langParams = {this.props.langParams} onChange={this.onChangeInputHandler} result_videos={this.state.result_videos} string_search={this.state.string_search} onClick={this.clickResultsHandler}/>
                    <Select value={this.props.langParams.language} options={this.props.langs} onChange={this.props.selectChange}/>
                </div>
                <div className={'content'}>
                    <History history_videos={this.state.history_videos} onClickDelete={this.onClickDeleteHandler} onClickActive={this.onClickActiveHandler} langParams={this.props.langParams}/>
                    <Player video_id={this.state.active_video_id} langParams={this.props.langParams}/>
                </div>
            </div>
        );
    }
}

export default HomeContent;