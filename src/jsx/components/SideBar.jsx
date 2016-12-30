import React from 'react';


const SideBar = (props)=>{
    let data = props.data;
    return(
        <div className="c-sidebar">
            <div className="c-sidebar__top">
                <div className="c-sidebar__pic">
                    <div className="c-sidebar-pic__top"></div>
                    <div className="c-sidebar-pic__bottom"></div>
                </div>
                <div className="c-sidebar__copy">     
                    <div className="c-sidebar__name t-sidebar-name">{data.name}</div>
                    <div className="c-sidebar__title t-sidebar-copy">{data.title}</div>
                    <a href={"mailto:"+data.email} className="c-sidebar__email t-sidebar-copy">{data.email}</a>
                    <div className="c-sidebar__about">
                        <div className="c-about__title t-about-title">About</div>
                        <div className="c-about__copy t-about-copy">{data.about}<br /><br /><a className="c-about__copy-link" href={data.website} target="_blank">{data.work}</a></div>
                    </div>
                </div>
                <div className="c-sidebar__slice"></div>
            </div>
            <div className="c-sidebar__bottom">
                <div className="c-sidebar__shareables">
                    <div className="c-shareables__title  t-sidebar-title">Follow!</div>
                    <a href="https://www.linkedin.com/in/john-munn-bbab434b?trk=nav_responsive_tab_profile" target="_blank"><div className="o-sidebar-icon"><i className="fa fa-linkedin t-sidebar-icon" aria-hidden="true"></i></div></a>
                    <a href="https://github.com/Tawe" target="_blank"><div className="o-sidebar-icon"><i className="fa fa-github-alt t-sidebar-icon" aria-hidden="true"></i></div></a>
                    <a href="https://codepen.io/Tawe/" target="_blank"><div className="o-sidebar-icon"><i className="fa fa-codepen t-sidebar-icon" aria-hidden="true"></i></div></a>
                </div>
            </div>
        </div>
    );
}   
export default SideBar;