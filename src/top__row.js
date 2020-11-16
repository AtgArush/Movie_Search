import React from 'react'
import "./top__row.css"
import {Link} from "react-router-dom"

function top__row({Icon, channelName}) {
    return (
        <div className="top__row">
            <div>
                <Icon className = "top__row__icon"/>
            </div>
        <Link to = "/">
            <div className="top__row__text">
                {channelName}
            </div>
        </Link>
      </div>
    )
}

export default top__row
