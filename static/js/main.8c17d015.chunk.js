(this["webpackJsonpreact-wouldyourather"]=this["webpackJsonpreact-wouldyourather"]||[]).push([[0],{31:function(e,t,n){e.exports=n(42)},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"RECEIVE_QUESTIONS",(function(){return O})),n.d(a,"ADD_QUESTION",(function(){return E})),n.d(a,"ANSWER_QUESTION",(function(){return j})),n.d(a,"receiveQuestions",(function(){return g})),n.d(a,"addQuestion",(function(){return w})),n.d(a,"handleAddQuestion",(function(){return y})),n.d(a,"answerQuestion",(function(){return q})),n.d(a,"handleAnswerQuestion",(function(){return x}));var o=n(0),r=n.n(o),s=n(18),i=n.n(s),c=n(3),u=n(14);function l(e){return{type:"SET_AUTHED_USER",id:e}}var m=n(4),d=n(1);var p=n(29),h={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"sarahedo.png",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"tylermcginnis.png",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"johndoe.png",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},v={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function b(e){return new Promise((function(t,n){var a=e.author,o=function(e){var t=e.optionOneText,n=e.optionTwoText,a=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:a,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout((function(){v=Object(d.a)(Object(d.a)({},v),{},Object(m.a)({},o.id,o)),h=Object(d.a)(Object(d.a)({},h),{},Object(m.a)({},a,Object(d.a)(Object(d.a)({},h[a]),{},{questions:h[a].questions.concat([o.id])}))),t(o)}),1e3)}))}function f(e){return function(e){var t=e.authedUser,n=e.qid,a=e.answer;return new Promise((function(e,o){setTimeout((function(){h=Object(d.a)(Object(d.a)({},h),{},Object(m.a)({},t,Object(d.a)(Object(d.a)({},h[t]),{},{answers:Object(d.a)(Object(d.a)({},h[t].answers),{},Object(m.a)({},n,a))}))),v=Object(d.a)(Object(d.a)({},v),{},Object(m.a)({},n,Object(d.a)(Object(d.a)({},v[n]),{},Object(m.a)({},a,Object(d.a)(Object(d.a)({},v[n][a]),{},{votes:v[n][a].votes.concat([t])}))))),e()}),500)}))}(e)}var O="RECEIVE_QUESTIONS",E="ADD_QUESTION",j="ANSWER_QUESTION";function g(e){return{type:O,questions:e}}function w(e){return{type:E,question:e}}function y(e,t){return function(n,a){var o,r=a().authedUser;return(o={optionOneText:e,optionTwoText:t,author:r},b(o)).then((function(e){n(w(e))}))}}function q(e,t,n){return{type:j,authedUser:e,qid:t,answer:n}}function x(e,t){return function(n,a){var o=a().authedUser;return f({authedUser:o,qid:e.id,answer:t}).then((function(){n(q(o,e,t))}))}}var N=Object(u.c)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTHED_USER":return t.id;case"CLEAR_AUTHED_USER":return null;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_USERS":return Object(d.a)(Object(d.a)({},e),t.users);case E:return Object(d.a)(Object(d.a)({},e),{},Object(m.a)({},t.question.author,Object(d.a)(Object(d.a)({},e[t.question.author]),{},{questions:e[t.question.author].questions.concat(t.question.id)})));case j:return Object(d.a)(Object(d.a)({},e),{},Object(m.a)({},t.authedUser,Object(d.a)(Object(d.a)({},e[t.authedUser]),{},{answers:Object(d.a)(Object(d.a)({},e[t.authedUser].answers),{},Object(m.a)({},t.qid,t.answer))})));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var n=t.question;return Object(d.a)(Object(d.a)({},e),{},Object(m.a)({},n.id,n));case O:return Object(d.a)(Object(d.a)({},e),t.questions);case j:return Object(d.a)(Object(d.a)({},e),{},Object(m.a)({},t.qid,Object(d.a)(Object(d.a)({},e[t.qid]),{},Object(m.a)({},t.answer,Object(d.a)(Object(d.a)({},e[t.qid][t.answer]),{},{votes:e[t.qid][t.answer].votes.concat(t.authedUser)})))));default:return e}}}),T=n(27);var U=Object(u.a)(T.a,(function(e){return function(t){return function(n){console.group(n.type),console.log("The action: ",n);var a=t(n);return console.log("The new state is: ",e.getState()),console.groupEnd(),a}}})),k=n(8),S=n(9),C=n(11),A=n(10),R=n(5),I=n(15);function z(){return function(e){return Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(d.a)({},h))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(d.a)({},v))}),1e3)}))]).then((function(e){var t=Object(p.a)(e,2);return{users:t[0],questions:t[1]}})).then((function(t){var n=t.users,a=t.questions;e(function(e){return{type:"RECEIVE_USERS",users:e}}(n)),e(g(a))}))}}var _=Object(c.b)((function(e){return{authedUser:e.authedUser,users:e.users}}),null,null,{pure:!1})((function(e){var t=e.authedUser,n=e.users,a=t?n[t].avatarURL:"avatar.png",o=null!==t;return r.a.createElement("nav",{className:"nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(R.c,{to:"/",exact:!0,activeClassName:"nav-active"},"Home")),r.a.createElement("li",null,r.a.createElement(R.c,{to:"/leaderboard",exact:!0,activeClassName:"nav-active"},"Leaderboard")),r.a.createElement("li",null,r.a.createElement(R.c,{to:"/add",exact:!0,activeClassName:"nav-active"},"New Question")),o?r.a.createElement("li",null,r.a.createElement("div",{className:"nav-user"},r.a.createElement("img",{className:"nav-avatar",src:a,alt:"Avatar of ".concat(t)}),r.a.createElement("div",{className:"nav-username"},r.a.createElement("span",null,t),r.a.createElement(R.c,{to:"/login",exact:!0,className:"nav-logout"},"Logout")))):r.a.createElement("li",null,r.a.createElement(R.c,{to:"/login",exact:!0,activeClassName:"nav-active"},"Login"))))})),L=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={option:""},e.handleOptionClicked=function(){var t=e.props;(0,t.answerQuestion)(t.authedUser,t.question.id,e.state.option)},e}return Object(S.a)(n,[{key:"handleOptionChange",value:function(e){this.setState((function(){return{option:e}}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.authedUser,a=t.question,o=t.users,s=t.page,i=Object.keys(o[n].answers).indexOf(a.id)>-1,c=a.optionOne.votes.length,u=a.optionTwo.votes.length,l=c+u,m=100*(c/l).toFixed(2),d=100*(u/l).toFixed(2);return r.a.createElement("div",{className:"question"},r.a.createElement("div",{className:"question-head"},r.a.createElement("img",{src:"".concat(o[a.author].avatarURL),alt:"Avatar of ".concat(a.author),className:"question-avatar"}),r.a.createElement("div",{className:"question-title"},r.a.createElement("div",{className:"question-author"},r.a.createElement("span",null,a.author)," asks"),r.a.createElement("span",{className:"question-subtitle"},"Would You Rather..."))),s?r.a.createElement("div",{className:"question-page"},i?r.a.createElement("div",{className:"question-stat"},r.a.createElement("div",{className:a.optionOne.votes.indexOf(n)>-1?"question-option-selected":"question-option-notselected"},r.a.createElement("div",null,a.optionOne.text),r.a.createElement("span",null,"Votes: ",a.optionOne.votes.length," (",m,"%)")),r.a.createElement("div",{className:a.optionTwo.votes.indexOf(n)>-1?"question-option-selected":"question-option-notselected"},r.a.createElement("div",null,a.optionTwo.text),r.a.createElement("span",null,"Votes: ",a.optionTwo.votes.length," (",d,"%)"))):r.a.createElement("div",{className:"question-options"},r.a.createElement("form",null,r.a.createElement("div",{className:"question-option"},r.a.createElement("label",null,r.a.createElement("input",{type:"radio",value:"optionOne",checked:"optionOne"===this.state.option,onChange:function(){return e.handleOptionChange("optionOne")}}),a.optionOne.text)),r.a.createElement("div",{className:"question-option"},r.a.createElement("label",null,r.a.createElement("input",{type:"radio",value:"optionTwo",label:a.optionTwo.text,checked:"optionTwo"===this.state.option,onChange:function(){return e.handleOptionChange("optionTwo")}}),a.optionTwo.text))),r.a.createElement("button",{className:"question-submit",disabled:""===this.state.option,onClick:this.handleOptionClicked},"Submit"))):r.a.createElement("div",{className:"question-body"},r.a.createElement("span",null,a.optionOne.text),r.a.createElement("span",null,"or..."),r.a.createElement("div",{className:"question-poll"},r.a.createElement("button",null,r.a.createElement(R.b,{to:"/questions/".concat(a.id)},"View Poll")))))}}]),n}(o.Component);var Q=Object(c.b)((function(e){return{authedUser:e.authedUser,users:e.users}}),a)(L),D=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={answered:!1},e.handleFilter=function(e){this.setState((function(){return{answered:e}}))},e}return Object(S.a)(n,[{key:"render",value:function(){var e=this,t=this.state.answered,n=this.props,a=n.authedUser,o=n.questions,s=Object.keys(o).map((function(e){return o[e]})).filter((function(e){var n=e.optionOne.votes.indexOf(a)>-1||e.optionTwo.votes.indexOf(a)>-1;return t?n:!n})).sort((function(e,t){return t.timestamp-e.timestamp}));return r.a.createElement("div",null,r.a.createElement("div",{className:"dashboard-button-group"},r.a.createElement("button",{className:t?"button-left":"button-left active",onClick:function(){return e.handleFilter(!1)}},"Unanswered"),r.a.createElement("button",{className:t?"button-right active":"button-right",onClick:function(){return e.handleFilter(!0)}},"Answered")),r.a.createElement("ul",{className:"question-list"},s.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(Q,{question:e}))}))))}}]),n}(o.Component);var P=Object(c.b)((function(e){return{authedUser:e.authedUser,questions:e.questions,users:e.users}}))(D);var V=Object(c.b)((function(e){return{users:e.users}}))((function(e){var t=e.users,n=Object.keys(t).map((function(e){return t[e]})).sort((function(e,t){var n=Object.keys(e.answers).length+e.questions.length;return Object.keys(t.answers).length+t.questions.length-n}));return r.a.createElement("div",{className:"leaderboard"},r.a.createElement("ul",{className:"leaderboard-list"},n.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("div",{className:"leaderboard-user"},r.a.createElement("img",{src:e.avatarURL,alt:"Avatar of ".concat(e.name),className:"leaderboard-avatar"}),r.a.createElement("div",{className:"leaderboard-user-stats"},r.a.createElement("span",{className:"leaderboard-user-name"},e.name),r.a.createElement("span",null,"Asked: ",Object.keys(e.questions).length),r.a.createElement("span",null,"Answered: ",Object.keys(e.answers).length))))}))))})),F=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={optionOne:"",optionTwo:"",home:!1},e.handleChange=function(e,t){var n=e.target.value;this.setState((function(e){return 1===t?Object(d.a)(Object(d.a)({},e),{},{optionOne:n}):Object(d.a)(Object(d.a)({},e),{},{optionTwo:n})}))},e.handleSubmit=function(e){e.preventDefault();var t=this.state,n=t.optionOne,a=t.optionTwo;(0,this.props.dispatch)(y(n,a)),this.setState((function(e){return Object(d.a)(Object(d.a)({},e),{},{home:!0})}))},e}return Object(S.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.optionOne,a=t.optionTwo;return!0===t.home?r.a.createElement(I.a,{to:"/"}):r.a.createElement("div",{className:"newquestion"},r.a.createElement("span",{className:"newquestion-title"},"Create New Question"),r.a.createElement("span",{className:"newquestion-subtitle"},"Would You Rather..."),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("div",{className:"newquestion-option"},r.a.createElement("textarea",{placeholder:"Type first option",value:n,onChange:function(t){return e.handleChange(t,1)}})),r.a.createElement("span",null,"or"),r.a.createElement("div",{className:"newquestion-option"},r.a.createElement("textarea",{placeholder:"Type second option",value:a,onChange:function(t){return e.handleChange(t,2)}})),r.a.createElement("button",{className:"newquestion-submit",type:"submit",disabled:""===n||""===a},"Submit")))}}]),n}(o.Component);var H=Object(c.b)((function(e){return{authedUser:e.authedUser,users:e.users}}))(F);var W=Object(c.b)((function(e,t){e.authedUser;var n=e.questions;return{id:t.match.params.id,questions:n}}))((function(e){var t=e.id,n=e.questions[t];return null==n?r.a.createElement(I.a,{from:"*",to:"/not-found"}):r.a.createElement("div",null,n&&r.a.createElement(Q,{question:n,page:"page"}))})),M=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(k.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={userId:null,home:!1},e.handleSelection=function(e){var t=e.target.value;this.setState((function(e){return Object(d.a)(Object(d.a)({},e),{},{userId:t})}))},e.handleLogin=function(e){this.props.dispatch(l(this.state.userId)),this.setState((function(e){return Object(d.a)(Object(d.a)({},e),{},{home:!0})}))},e}return Object(S.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"CLEAR_AUTHED_USER"})}},{key:"render",value:function(){var e=this,t=this.state,n=t.userId,a=t.home,o=this.props,s=o.history,i=o.users,c=n||-1,u=n?i[n].avatarURL:"avatar.png";if(a){var l=s.location.state;return null!=l?r.a.createElement(I.a,{to:l,push:!0}):r.a.createElement(I.a,{to:"/"})}return r.a.createElement("div",null,r.a.createElement("div",{className:"login"},r.a.createElement("img",{className:"login-avatar",src:u,alt:"Avatar of ".concat(n)}),r.a.createElement("div",{className:"login-select"},r.a.createElement("select",{value:c,onChange:function(t){return e.handleSelection(t)}},r.a.createElement("option",{value:-1,disabled:!0},"Select user..."),Object.keys(i).map((function(e){return r.a.createElement("option",{value:i[e].id,key:e},i[e].id)})))),r.a.createElement("button",{className:"login-button",disabled:null===n,onClick:function(t){return e.handleLogin(t)}},"Login")))}}]),n}(o.Component);var J=Object(I.g)(Object(c.b)((function(e){return{users:e.users}}))(M)),$=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"notfound"},r.a.createElement("h1",{className:"notfound-title"},r.a.createElement("span",{className:"notfound-404"},"404"),r.a.createElement("span",null,"Page not found")),r.a.createElement("h2",{className:"notfound-subtitle"},"The page you're looking for doesn't exist."),r.a.createElement(R.b,{className:"notfound-link",to:"/"},"Go to Home"))}}]),n}(o.Component);var B=Object(c.b)((function(e){return{users:e.users}}))($),G=n(30);var Y=Object(I.g)((function(e){var t=e.component,n=Object(G.a)(e,["component"]),a=n.location.pathname;return r.a.createElement(I.b,Object.assign({},n,{render:function(e){return n.loggedIn?r.a.createElement(t,e):r.a.createElement(I.a,{to:{pathname:"/login",state:a}})}}))})),K=function(e){Object(C.a)(n,e);var t=Object(A.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(z())}},{key:"render",value:function(){var e=this.props.loggedIn;return r.a.createElement(R.a,null,r.a.createElement(o.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(_,null),r.a.createElement("div",null,r.a.createElement(I.d,null,r.a.createElement(Y,{path:"/",exact:!0,component:P,loggedIn:e}),r.a.createElement(Y,{path:"/leaderboard",exact:!0,component:V,loggedIn:e}),r.a.createElement(Y,{path:"/add",exact:!0,component:H,loggedIn:e}),r.a.createElement(Y,{path:"/questions/:id",exact:!0,component:W,loggedIn:e}),r.a.createElement(I.b,{path:"/login",exact:!0,component:J}),r.a.createElement(I.b,{component:B}))))))}}]),n}(o.Component);var X=Object(c.b)((function(e){return{loggedIn:null!==e.authedUser}}))(K);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(41);var Z=Object(u.d)(N,U);i.a.render(r.a.createElement(c.a,{store:Z},r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.8c17d015.chunk.js.map