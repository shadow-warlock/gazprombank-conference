import React, { Component } from 'react'
import ConferenceProgram from './ConferenceProgram/ConferenceProgram'
import Broadcast from './Broadcast/Broadcast'
import Chat from './Chat/Chat'
import Poll from './Poll/Poll'
import Logo from '../Logo/Logo'
import axios from 'axios'
import { API, AXIOS_CONFIG, SERVER } from '../../const/const'
import Websocket from 'react-websocket'
import './ConferencePage.css'
import { CONFERENCE_ITEMS } from '../../const/mockData'
import Footer from './Footer/Footer'
import Timer from '../../Utils/Timer'
import LogoutButton from '../LogoutButton/LogoutButton'

export default class ConferencePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      conference: null,
      failWS1: false,
    }
    this.timer = new Timer()
  }

  componentDidMount () {
    let self = this
    axios.get(API.CONFERENCE, AXIOS_CONFIG).then(
      res => {
        this.messagesSort(res.data.chat.messages)
        self.setState({
          conference: res.data,
        })
      },
    ).catch(e => {
      console.error(e)
    })
  }

  render () {
    if (this.state.conference === null) {
      return 'Loading'
    }
    return (
      <div className={'conference'}>
        <div className={'conference_title padding_side'}>
          <div><Logo/></div>
          <LogoutButton/>
        </div>
        <div
          className={'padding_side flex_right font_size_very_big color_blue bold conference_theme'}>
          <p className={'bg_yellow'}>Онлайн-конференция</p>
          <br/>
          <p className={'uppercase'}><span
            className={'bg_blue color_white'}>Актуальные вопросы и изменения</span> законодательства<br/>
            Российской Федерации в области валютного регулирования<br/>
            и валютного контроля</p>
          <div className={'materials_and_time'}>
            <div
              onClick={() => {window.open('/assets/materials.zip', '_blank')}}>
              Материалы конференции
            </div>
            <div>2 июня 2020 года 10:00</div>
          </div>
        </div>
        <div className={'broadcast_chat_container padding_side'}>
          <Broadcast url={this.state.conference.url}/>
          <Chat user={this.props.user} chat={this.state.conference.chat}/>
        </div>
        <div className={'padding_side'}>
          <ConferenceProgram items={CONFERENCE_ITEMS}/>
        </div>
        <div className={'padding_side'}>
          {this.state.conference.poll &&
          <Poll timer={this.timer} user={this.props.user}
                addAnswer={this.addAnswer.bind(this)}
                poll={this.state.conference.poll}/>}
        </div>
        <div className={'padding_side'}>
          <Footer/>
        </div>
        <Websocket url={this.state.failWS1 ? SERVER.WS2 : SERVER.WS1}
                   debug={true}
                   onClose={() => {
                     this.state.failWS1
                       ? console.log('Вебсокет не работает')
                       : this.setState({ failWS1: true })
                   }}
                   onMessage={this.handleData.bind(this)}/>
      </div>
    )
  }

  addAnswer (answer) {
    let conf = Object.assign({}, this.state.conference)
    for (let id in conf.poll.questions) {
      if (conf.poll.questions[id].id === answer.question.id) {
        conf.poll.questions[id].answers.push(answer)
      }
    }
    this.setState({
      conference: conf,
    })
  }

  messagesSort (messages) {
    messages.sort((a, b) => {
      return a.time > b.time ? -1 : 1
    })
  }

  handleData (json) {
    let data = JSON.parse(json)
    let conf = Object.assign({}, this.state.conference)
    let messageIndex
    switch (data.type) {
      case 'message':
        conf.chat.messages.unshift(data.data)
        break
      case 'delete message':
        conf.chat.messages = conf.chat.messages.filter((message) => {
          return message.id !== data.data.messageId
        })
        break
      case 'like':
        messageIndex = conf.chat.messages.findIndex((message) => {
          return message.id === data.data.message.id
        })
        conf.chat.messages[messageIndex].likes.push(data.data)
        break
      case 'delete like':
        messageIndex = conf.chat.messages.findIndex((message) => {
          return message.id === data.data.messageId
        })
        conf.chat.messages[messageIndex].likes = conf.chat.messages[messageIndex].likes.filter(
          (like) => {
            return like.id !== data.data.likeId
          })
        break
      case 'poll':
        conf.poll = data.data
        console.log(data.data)
        if (this.state.conference.poll) {
          this.timer.start(() => {
              this.setState({ conference: conf })
            },
            15)
        }
        else {
          this.setState({ conference: conf })
        }
        return
      default:
        console.log(data)
    }
    this.setState({
      conference: conf,
    });
  }
}
