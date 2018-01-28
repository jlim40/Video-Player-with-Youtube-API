import React from 'React';

const VideoListItem = ({video, onVideoSelect}) => {
  // new ES6 sintax
  // const video = props.video;
  // const onVideoSelect = props.onVideoSelect;

  console.log(video);
  console.log('hey');
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div classsName="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
