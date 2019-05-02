import React from 'react';
import './PostHeader.css';

class PostHeader extends React.Component{
    render () {
        return (
            <nav className="Nav">
                <div className="Nav-menus">
                    <div className="Nav-brand">
                        <a href="/" className="Nav-brand-logo">
                            Instagram
                        </a>
                    </div>
                </div>
            </nav>
        )
    };
}

export default PostHeader;
