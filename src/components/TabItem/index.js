// Write your code here
import {Component} from 'react'
import './index.css'
class TabItem extends Component {
  render() {
    const {tabsListDetails, changeTabId, isActive} = this.props
    const {tabId, displayText} = tabsListDetails
    const onTabChange = () => {
      changeTabId(tabId)
    }
    const classname = isActive ? 'active-tab-className' : ''
    return (
      <li className="tab-con">
        <button className={`button ${classname}`} onClick={onTabChange}>
          {displayText}
        </button>
      </li>
    )
  }
}
export default TabItem
