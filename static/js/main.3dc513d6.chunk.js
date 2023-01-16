(this["webpackJsonptrivia-react-redux"]=this["webpackJsonptrivia-react-redux"]||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/trivia.466d153e.png"},32:function(e,t,a){e.exports=a(50)},40:function(e,t,a){},42:function(e,t){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a.n(o),i=a(8),s=a(19),u=a(3),l=(a(40),a(4)),p=a(5),m=a(7),d=a(6),y=a(20),b=a.n(y),f=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.playerName,a=e.playerScore,n=e.playerEmail;return r.a.createElement("header",null,r.a.createElement("img",{className:"icon-header","data-testid":"header-profile-picture",src:"https://www.gravatar.com/avatar/".concat(b()(n).toString()),alt:"ProfileAVATAR"}),r.a.createElement("p",{"data-testid":"header-player-name"},"Player:"," ",t),r.a.createElement("p",null,"Score:"," ",r.a.createElement("span",{"data-testid":"header-score"},"".concat(a))))}}]),a}(r.a.Component);f.defaultProps={playerScore:0};var h=Object(i.b)((function(e){return{playerName:e.login.playerName,playerScore:e.player.score,playerEmail:e.login.playerEmail}}))(f),v=a(13),E=a.n(v),O=a(15),g=a(31),S=function(e){return{type:"SHOW_TIMER",payload:e}},j=function(e){return{type:"TIME_OVER",payload:e}},k=function(e){return{type:"SHOW_BUTTON",payload:e}},A=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).playAgainClick=function(){var t=e.props,a=t.history,n=t.resetScore,r=t.resetAssertions;(0,t.showTimerAction)(30),n(),r(),a.push("/")},e.rankingButtonClick=function(){var t=e.props,a=t.history,n=t.resetScore,r=t.resetAssertions;(0,t.showTimerAction)(30),n(),r(),a.push("/ranking")},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.totalPoints,a=e.getScore;return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement("p",{className:"score"},"Score:"," ",r.a.createElement("span",{"data-testid":"feedback-total-score"},a)),t<3?r.a.createElement("p",{"data-testid":"feedback-text"},"Could be better..."):r.a.createElement("p",{"data-testid":"feedback-text"},"Well Done!"),r.a.createElement("p",null,"Hits:"," ",r.a.createElement("span",{"data-testid":"feedback-total-question"},t)),r.a.createElement("button",{type:"button",onClick:this.playAgainClick,"data-testid":"btn-play-again"},"Play Again"),r.a.createElement("button",{type:"button","data-testid":"btn-ranking",onClick:this.rankingButtonClick},"Ranking"))}}]),a}(r.a.Component),w=Object(i.b)((function(e){return{getScore:e.player.score,totalPoints:e.player.assertions}}),(function(e){return{resetScore:function(t){return e({type:"RESET_SCORE"})},resetAssertions:function(t){return e({type:"RESET_ASSERTIONS"})},showTimerAction:function(t){return e(S(t))}}}))(A),C=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).goHomeButton=function(){e.props.history.push("/")},e}return Object(p.a)(a,[{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("ranking")).sort((function(e,t){return t.score-e.score}));return r.a.createElement("div",null,r.a.createElement("h1",{"data-testid":"ranking-title"},"Ranking"),e.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("img",{src:"https://www.gravatar.com/avatar/".concat(b()(e.picture).toString()),alt:"GravatarImage"}),r.a.createElement("p",{"data-testid":"player-name-".concat(t)},e.name),r.a.createElement("p",{"data-testid":"player-score-".concat(t)},e.score))})),r.a.createElement("button",{type:"button","data-testid":"btn-go-home",onClick:this.goHomeButton},"Go Home!"))}}]),a}(r.a.Component),T=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).alternate=function(t){for(var a=e.props.question.correct_answer,n=0;n<t.length;n+=1)t[n].innerText===a?t[n].classList.add("question-correct"):t[n].classList.add("question-incorrect")},e.validationAnswer=function(t){var a=e.props,n=a.question,r=a.timer,o=a.sumScoreAction,c=a.score,i=a.sumPoints,s=0;"correct-answer"===t.id&&("easy"===n.difficulty&&(s+=1,o(10+1*r+c),i(s)),"medium"===n.difficulty&&(s+=1,o(10+2*r+c),i(s)),"hard"===n.difficulty&&(s+=1,o(10+3*r+c),i(s)))},e.handleClick=function(t){var a=t.target,n=e.props,r=n.reciveButton,o=n.timeOverAction,c=document.querySelectorAll(".button");e.alternate(c),r(!0),e.validationAnswer(a),o(!0)},e}return Object(p.a)(a,[{key:"componentDidUpdate",value:function(){var e=this;if(0===this.props.timer){var t=document.querySelectorAll(".button");setTimeout((function(){return e.alternate(t)}),1e3)}}},{key:"render",value:function(){var e=this,t=this.props,a=t.question,n=t.randomArray,o=t.timeOverStore,c=0;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{"data-testid":"question-category"},a.category),r.a.createElement("br",null),r.a.createElement("div",{"data-testid":"question-text"},a.question),r.a.createElement("br",null),r.a.createElement("div",{"data-testid":"answer-options"},n.map((function(t){return t===a.correct_answer?r.a.createElement("button",{"data-testid":"correct-answer",id:"correct-answer",type:"button",key:"correct_answer",className:"button",onClick:e.handleClick,disabled:o},t):(c+=1,r.a.createElement("button",{"data-testid":"wrong-answer-".concat(c-1),type:"button",key:c,className:"button",onClick:e.handleClick,disabled:o},t))}))))}}]),a}(r.a.Component);T.defaultProps={score:0};var I=Object(i.b)((function(e){return{timeOverStore:e.game.timeOver,showButton:e.game.showButton,score:e.player.score,timer:e.game.timer}}),(function(e){return{reciveButton:function(t){return e(k(t))},sumScoreAction:function(t){return e(function(e){return{type:"SUM_SCORE",payload:e}}(t))},sumPoints:function(){return e({type:"SUM_TOTAL_POINTS"})},timeOverAction:function(t){return e(j(t))}}}))(T),N=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.timer;return r.a.createElement("p",{"data-testid":"timer",className:"timer"},"Timer:"," ",e)}}]),a}(r.a.Component),_=Object(i.b)((function(e){return{timer:e.game.timer}}))(N),q=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).componentDidMount=function(){(0,e.props.fetchAPI)("https://opentdb.com/api.php?amount=5&token=".concat(localStorage.getItem("token"))),e.timeToAnswer()},e.saveInLocalStorage=function(){var t=e.props,a=t.player,n=t.login,r=localStorage.getItem("ranking"),o={name:n.playerName,score:a.score,picture:n.playerEmail};if(null===r)localStorage.setItem("ranking",JSON.stringify([o]));else{var c=JSON.parse([r]);c.push(o),localStorage.setItem("ranking",JSON.stringify(c))}},e.resetClass=function(){for(var e=document.querySelectorAll(".button"),t=0;t<e.length;t+=1)e[t].className="button"},e.timeToAnswer=function(){var t=e.props,a=t.showTimerAction,n=t.timeOverAction,r=t.reciveButton,o=t.history,c=setInterval((function(){var t=e.props.timer;return o.location.pathname.includes("feedback")?clearInterval(c):t>0?a(t-=1):(n(!0),a(0),void r(!0))}),1e3);return c},e.onClickChange=function(){var t=e.props,a=t.history,n=t.showTimerAction,r=t.timeOverAction,o=t.reciveButton,c=e.state.indexQuestions;e.setState((function(e){return{indexQuestions:e.indexQuestions+1}})),4===c&&(e.saveInLocalStorage(),a.push("/feedback")),n(30),r(!1),o(!1),e.resetClass()},e.state={indexQuestions:0},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state.indexQuestions,t=this.props,a=t.questions,n=t.requestAPI,o=t.requestState,c=t.randomArray,i=t.showButton;return 3===o?r.a.createElement(u.a,{to:"/"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement(_,null),!n&&r.a.createElement(I,{question:a[e],randomArray:c[e]}),i?r.a.createElement("button",{id:"buttonNext",type:"button","data-testid":"btn-next",onClick:this.onClickChange},"Next"):"")}}]),a}(r.a.Component);q.defaultProps={questions:[],requestAPI:!0,requestState:0,randomArray:[]};var R=Object(i.b)((function(e){return{questions:e.game.questions,requestAPI:e.game.requestAPI,requestState:e.game.requestState,randomArray:e.game.randomArray,showButton:e.game.showButton,player:e.player,login:e.login,timer:e.game.timer}}),(function(e){return{fetchAPI:function(t){return e(function(e){return function(){var t=Object(O.a)(E.a.mark((function t(a){var n,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"REQUEST_API"}),t.prev=1,t.next=4,fetch(e);case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,a({type:"REQUEST_SUCSSES",questions:(o=r).results,requestState:o.response_code,randomArray:o.results.map((function(e){return[e.correct_answer].concat(Object(g.a)(e.incorrect_answers)).sort((function(){return Math.random()-.5}))}))}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),a({type:"REQUEST_ERROR"});case 14:case"end":return t.stop()}var o}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()}(t))},reciveButton:function(t){return e(k(t))},showTimerAction:function(t){return e(S(t))},timeOverAction:function(t){return e(j(t))}}}))(q),x=a(21),P=function(){var e=Object(O.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api_token.php?command=request");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleInputChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(x.a)({},n,r),(function(){var t=e.state,a=t.playerName,n=t.playerEmail;e.setState({isButtonDisabled:0===a.length||!/\S+@\S+\.\S+/.test(n)})}))},e.handleClick=Object(O.a)(E.a.mark((function t(){var a,n,r,o,c,i,s,u;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props,n=a.history,r=a.sendPlayerInfoToStore,o=e.state,c=o.playerName,i=o.playerEmail,t.next=4,P();case 4:return s=t.sent,u=s.token,r(c,i),t.next=9,localStorage.setItem("token",u);case 9:n.push("/game");case 10:case"end":return t.stop()}}),t)}))),e.state={playerName:"",playerEmail:"",isButtonDisabled:!0},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state,t=e.playerName,a=e.playerEmail,n=e.isButtonDisabled,o=this.props.history;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"input-player-name"},"Player:",r.a.createElement("input",{type:"text","data-testid":"input-player-name",id:"input-player-name",name:"playerName",placeholder:"Insira o nome do jogador",onChange:this.handleInputChange,value:t})),r.a.createElement("label",{htmlFor:"input-gravatar-email"},"E-mail:",r.a.createElement("input",{type:"email","data-testid":"input-gravatar-email",id:"input-gravatar-email",name:"playerEmail",placeholder:"Insira o e-mail do jogador",onChange:this.handleInputChange,value:a})),r.a.createElement("button",{type:"button","data-testid":"btn-play",disabled:n,onClick:this.handleClick},"Play")),r.a.createElement("button",{type:"button","data-testid":"btn-settings",onClick:function(){o.push("/settings")}},"Configura\xe7\xf5es"))}}]),a}(r.a.Component),U=Object(i.b)(null,(function(e){return{sendPlayerInfoToStore:function(t,a){return e(function(e,t){return{type:"PLAYER_INFO_TO_STORE",playerName:e,playerEmail:t}}(t,a))}}}))(B),M=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",{"data-testid":"settings-title"},"Em desenvolvimento!")}}]),a}(r.a.Component),Q=a(28),H=a.n(Q);function L(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:H.a,className:"App-logo",alt:"logo"})),r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,component:U}),r.a.createElement(u.b,{path:"/game",component:R}),r.a.createElement(u.b,{path:"/settings",component:M}),r.a.createElement(u.b,{path:"/feedback",component:w}),r.a.createElement(u.b,{path:"/ranking",component:C})))}a(49);var D=a(16),F=a(29),J=a(30),W=a(2),V={token:"",playerName:"",playerEmail:""},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_TOKEN_SUCCESS":return Object(W.a)(Object(W.a)({},e),{},{token:t.token});case"PLAYER_INFO_TO_STORE":return Object(W.a)(Object(W.a)({},e),{},{playerName:t.playerName,playerEmail:t.playerEmail});default:return e}},Y={player:{score:0},timer:30,timeOver:!1,showButton:!1,endGame:!1},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_API":return Object(W.a)(Object(W.a)({},e),{},{requestAPI:!0});case"REQUEST_SUCSSES":return Object(W.a)(Object(W.a)({},e),{},{questions:t.questions,player:{score:0},randomArray:t.randomArray,requestAPI:!1,requestState:t.requestState});case"SHOW_TIMER":return Object(W.a)(Object(W.a)({},e),{},{timer:t.payload});case"TIME_OVER":return Object(W.a)(Object(W.a)({},e),{},{timeOver:t.payload});case"SHOW_BUTTON":return Object(W.a)(Object(W.a)({},e),{},{showButton:t.payload});default:return e}},z={score:0,assertions:0},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUM_SCORE":return Object(W.a)(Object(W.a)({},e),{},{score:t.payload});case"SUM_TOTAL_POINTS":return Object(W.a)(Object(W.a)({},e),{},{assertions:e.assertions+1});case"RESET_SCORE":return Object(W.a)(Object(W.a)({},e),{},{score:0});case"RESET_ASSERTIONS":return Object(W.a)(Object(W.a)({},e),{},{assertions:0});default:return Object(W.a)({},e)}},Z=Object(D.combineReducers)({login:G,game:K,player:X}),$=Object(D.createStore)(Z,Object(F.composeWithDevTools)(Object(D.applyMiddleware)(J.a)));window.Cypress&&(window.store=$);var ee=$;c.a.render(r.a.createElement(i.a,{store:ee},r.a.createElement(s.a,null,r.a.createElement(L,null))),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.3dc513d6.chunk.js.map