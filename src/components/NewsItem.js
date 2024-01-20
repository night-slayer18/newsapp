import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: '18rem'}}>
            <img src={imageUrl?imageUrl:"https://sportshub.cbsistatic.com/i/r/2024/01/03/de0c00f3-6314-46a9-9d68-b6b3ac107618/thumbnail/1200x675/c7ad9f72387eda303d22094cf578dd04/usatsi-lamar-jackson-ravens.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
