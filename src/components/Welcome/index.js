import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  subs = () => {
    const {isSubscribed} = this.state
    let text
    if (isSubscribed) {
      this.setState({isSubscribed: false})
      text = 'Subscribed'
      console.log(text)
    } else {
      this.setState({isSubscribed: true})
      text = 'Subscribe'
      console.log(text)
    }
    return text
  }

  render() {
    const {isSubscribed} = this.state
    console.log(isSubscribed)
    let text
    if (isSubscribed) {
      text = 'Subscribe'
    } else {
      text = 'Subscribed'
    }
    return (
      <div className="main-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you!Happy Learning</p>
        <button className="button" type="button" onClick={this.subs}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
