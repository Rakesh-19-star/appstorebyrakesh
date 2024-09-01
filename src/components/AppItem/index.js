// Write your code here
import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {appsListDetails} = this.props
    const {appId, appName, imageUrl} = appsListDetails
    return (
      <li className="projects-con">
        <div className="card-con">
          <img src={imageUrl} className="app-img" />
          <p>{appName}</p>
        </div>
      </li>
    )
  }
}
export default AppItem
