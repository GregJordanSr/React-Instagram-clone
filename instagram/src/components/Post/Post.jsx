import React, { Component } from 'react';
import "./Post.css";


class Post extends Component {
    render() {
        return <article className="Post" ref="Post">
            <header>
                <div className="Post-user">
                    <div className="Post-user-thumb">
                        <img src="https://www.laravelnigeria.com/img/chris.jpg" alt="Chris" className="src" />
                    </div>
                    <div className="Post-user-nickname">
                        <span>Chris</span>
                    </div>
                </div>
            </header>
            <div className="Post-image">
                <div className="Post-image-bg">
                    <img src="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" alt="Icon Living" className="scr"/>
                </div>
            </div>
            <div className="Post-caption">
                <strong>Chris</strong> Moving the community:
            </div>

        </article>
    }
} 
export default Post;