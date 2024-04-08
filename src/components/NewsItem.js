import React from 'react'


const NewsItem = (props) => {
  return (
    <div className='row rowItem'>

<div className='col-lg-5'>
            <img className='img_news' src={props.item.image}/>
        </div>

        <div className='col-lg-7 news_cont'>
            <p className='leagueName'>{props.item.league}</p>
            <p className='news_title'>{props.item.title}</p>
        </div>

    </div>
  )
}

export default NewsItem