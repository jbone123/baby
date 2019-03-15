import React , {Component} from 'react'
import ReactDOM from 'react-dom';
import { userInfo } from 'os';


function formatDate(date){
    console.log(typeof(new Date()),'qqqqqqqqqq')
    const dat=new Date().toString()
    const dat2=new Date()
    console.log(dat,'2222',dat2,)
    return date.toLocaleString()
    // return date
    //Objects are not valid as a React child
    //对象作为react子元素无效
    // return date
}
function UserInfo(props){
    return(
        <div className="UserInfo">
          <Avatar user={props.user} /> 
          <div className="UserInfo-name">
            {props.user.name}
          </div>
        </div>
    )
}
function Avatar(props){
    return (
        <div>
            <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
            style={{width:50,height:50}}
          />
        </div>
    )
}
function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author}/>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
          {/* {{key: 'value'}} */}
        </div>
      </div>
    );
  }

  let data={
      author:{
        name:'jbone',
        avatarUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552550071907&di=54e80de3f24ba6b75f0a470f70dd16b5&imgtype=0&src=http%3A%2F%2Fwww.pptbz.com%2Fpptpic%2FUploadFiles_6909%2F201203%2F2012031220134655.jpg',
      },
      text:'我爱你百度',
      date:new Date()
  }

  ReactDOM.render(<Comment {...data} />,document.getElementById('root'));