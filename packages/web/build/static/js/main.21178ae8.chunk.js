(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{183:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(794);t.Router=n.BrowserRouter,t.Link=n.Link,t.Route=n.Route,t.Switch=n.Switch},188:function(e,t,r){e.exports=r.p+"static/media/comic-game-over.8c8c5747.jpeg"},191:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(138);t.uiTheme={palette:{primaryColor:n.COLOR.blueGrey700,accentColor:n.COLOR.indigoA400},toolbar:{container:{height:50}}}},346:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(e){try{s(n.next(e))}catch(t){i(t)}}function c(e){try{s(n.throw(e))}catch(t){i(t)}}function s(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(a,c)}s((n=n.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i["function"===typeof Symbol?Symbol.iterator:"@@iterator"]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var s=a(r(347)),u=c(r(1)),l=r(4),f=r(856),p=r(138),d=a(r(180)),h=a(r(870)),m=r(871),y=r(872);"web"!==l.Platform.OS&&m.GoogleSignin.configure({webClientId:"241131382173-vn5gfac8nsoku95al8920166jhg1sn87.apps.googleusercontent.com"});var g=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={passwordVisible:!1,email:"",password:""},t}return n(t,e),t.prototype.logInWithCredential=function(e){return o(this,void 0,void 0,function(){var t;return i(this,function(r){switch(r.label){case 0:return[4,h.default.auth().signInWithCredential(e).catch(function(e){return console.log(e)})];case 1:return t=r.sent(),console.log(t),[2]}})})},t.prototype.render=function(){var e=this;return u.createElement(l.View,{style:{padding:15,flex:1,justifyContent:"space-between"}},u.createElement(l.View,null),u.createElement(l.KeyboardAvoidingView,{behavior:"padding",keyboardVerticalOffset:115,style:{justifyContent:"center"}},u.createElement(y.TextField,{containerStyle:{marginLeft:39,marginRight:39},label:"Email",value:this.state.email,onChangeText:function(t){return e.setState({email:t})}}),u.createElement(l.View,{style:{marginTop:25,flexDirection:"row",justifyContent:"flex-end",alignItems:"flex-end"}},u.createElement(y.TextField,{containerStyle:{flex:1,marginLeft:39,marginRight:15},label:"Password",value:this.state.password,secureTextEntry:!this.state.passwordVisible,onChangeText:function(t){return e.setState({password:t})}}),u.createElement(l.TouchableOpacity,{style:{width:24,marginBottom:15},onPress:function(){e.setState({passwordVisible:!e.state.passwordVisible})}},u.createElement(d.default,{name:this.state.passwordVisible?"eye":"eye-off",size:24}))),u.createElement(p.Button,{raised:!0,primary:!0,style:{container:{marginTop:75,marginHorizontal:39}},text:"Ingresar",onPress:function(){return o(e,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return[4,h.default.auth().signInWithEmailAndPassword(this.state.email,this.state.password).catch(function(e){return console.log(e)}).then(function(e){return console.log(e)})];case 1:return e.sent(),[2]}})})}})),u.createElement(l.View,null,u.createElement(p.Button,{style:{container:{marginHorizontal:39,justifyContent:"flex-start"},text:{flex:1,textAlign:"center"}},raised:!0,icon:u.createElement(l.Image,{source:r(890),style:{width:20,height:20}}),text:"Continuar con Google",onPress:function(){return o(e,void 0,void 0,function(){var e,t,r;return i(this,function(n){switch(n.label){case 0:return"web"!==l.Platform.OS?[3,1]:(h.default.auth().signInWithPopup(new s.default.auth.GoogleAuthProvider).catch(function(e){return console.log(e)}),[3,6]);case 1:return n.trys.push([1,5,,6]),[4,m.GoogleSignin.hasPlayServices()];case 2:return n.sent(),[4,m.GoogleSignin.signIn()];case 3:return e=n.sent(),console.log(e),[4,s.default.auth.GoogleAuthProvider.credential(e.idToken)];case 4:return t=n.sent(),console.log(t),this.logInWithCredential(t),[3,6];case 5:return r=n.sent(),console.log(r),[3,6];case 6:return[2]}})})}}),u.createElement(p.Button,{style:{container:{marginTop:10,marginBottom:25,marginHorizontal:39,justifyContent:"flex-start",backgroundColor:"#4e71a8",paddingLeft:10},text:{color:"white",flex:1,textAlign:"center"}},raised:!0,icon:u.createElement(l.Image,{source:r(891),style:{width:32,height:32}}),text:"Continuar con Facebook",onPress:function(){return o(e,void 0,void 0,function(){var e,t,r=this;return i(this,function(n){switch(n.label){case 0:return"web"!==l.Platform.OS?[3,2]:((e=new s.default.auth.FacebookAuthProvider).addScope("public_profile"),e.addScope("email"),[4,h.default.auth().signInWithPopup(e).catch(function(e){return console.log(e)})]);case 1:return(t=n.sent())&&console.log(t),[3,3];case 2:f.LoginManager.logInWithPermissions(["public_profile","email"]).then(function(){return o(r,void 0,void 0,function(){var e,t;return i(this,function(r){switch(r.label){case 0:return[4,f.AccessToken.getCurrentAccessToken()];case 1:return(e=r.sent())?[4,s.default.auth.FacebookAuthProvider.credential(e.accessToken)]:[3,3];case 2:t=r.sent(),this.logInWithCredential(t),r.label=3;case 3:return[2]}})})}),n.label=3;case 3:return[2]}})})}})))},t}(u.PureComponent);t.Login=g},349:function(e,t,r){e.exports=r(350)},350:function(e,t,r){var n=r(5),o=r(0),i=r(4),a=o(r(490)),c=n(r(892)),s=r(893),u=r(894),l="@font-face {\n  src: url(".concat(s,");\n  font-family: MaterialIcons;\n}")+"@font-face {\n  src: url(".concat(u,");\n  font-family: MaterialCommunityIcons;\n}"),f=document.createElement("style");f.type="text/css",f.appendChild(document.createTextNode(l)),document.head.appendChild(f),i.AppRegistry.registerComponent("App",function(){return a.default}),i.AppRegistry.runApplication("App",{initialProps:{},rootTag:document.getElementById("root")}),c.unregister()},490:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(491).App;t.default=n},491:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(1)),i=r(4),a=r(138),c=r(792),s=r(191);t.App=function(){return o.default.createElement(a.ThemeContext.Provider,{value:a.getTheme(s.uiTheme)},o.default.createElement(i.View,{style:u.container},o.default.createElement(i.SafeAreaView,{style:u.wrapper},o.default.createElement(c.Routes,null))))};var u=i.StyleSheet.create({container:{flex:1,justifyContent:"center",alignItems:"center",height:"100%"},wrapper:{flex:1,backgroundColor:a.COLOR.white,width:"100%"}})},792:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(1)),i=r(4),a=r(793),c=r(818),s=r(824),u=r(834),l=r(836),f=r(346),p=r(183),d=i.StyleSheet.create({container:{height:"100%"}});t.Routes=function(){return o.default.createElement(p.Router,null,o.default.createElement(i.View,{style:d.container},"web"===i.Platform.OS&&o.default.createElement(u.Header,null),o.default.createElement(p.Switch,null,o.default.createElement(p.Route,{exact:!0,path:"/",component:"web"===i.Platform.OS?l.Inicio:f.Login}),o.default.createElement(p.Route,{exact:!0,path:"/current-workout",component:s.CurrentWorkout}),o.default.createElement(p.Route,{exact:!0,path:"/inicio",component:l.Inicio}),o.default.createElement(p.Route,{exact:!0,path:"/comics",component:a.Comics}),o.default.createElement(p.Route,{exact:!0,path:"/comics/:id",render:function(e){var t=e.match;return o.default.createElement(c.ComicViewer,{match:t})}}),o.default.createElement(p.Route,{exact:!0,path:"/workout/:year/:month/:day",component:s.CurrentWorkout}))))}},793:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(1)),a=r(4),c=r(183),s=a.StyleSheet.create({container:{flex:1,alignItems:"center"},content:{width:"90%",height:"100%",padding:10},titulo:{marginTop:10,fontSize:32,textAlign:"center"},comicsList:{marginTop:10,flex:1,flexDirection:"row",justifyContent:"space-around",flexWrap:"wrap"},comicBox:{minWidth:300,height:450,padding:10,margin:10},comicBoxTitle:{textAlign:"center",fontSize:24,marginTop:10}}),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){return i.createElement(a.View,{style:s.container},i.createElement(a.View,{style:s.content},i.createElement(a.Text,{style:s.titulo},"COMICS"),i.createElement(a.View,{style:s.comicsList},i.createElement(a.View,{style:s.comicBox},i.createElement(c.Link,{to:"/comics/game-over-1",style:{width:"100%",height:"100%"}},i.createElement(a.Image,{source:r(188),style:{width:"100%",height:"100%"},resizeMode:"contain"})),i.createElement(a.Text,{style:s.comicBoxTitle},"Game Over 1")),i.createElement(a.View,{style:s.comicBox},i.createElement(c.Link,{to:"/comics/game-over-1",style:{width:"100%",height:"100%"}},i.createElement(a.Image,{source:r(188),style:{width:"100%",height:"100%"},resizeMode:"contain"})),i.createElement(a.Text,{style:s.comicBoxTitle},"Game Over 2")),i.createElement(a.View,{style:s.comicBox},i.createElement(c.Link,{to:"/comics/game-over-1",style:{width:"100%",height:"100%"}},i.createElement(a.Image,{source:r(188),style:{width:"100%",height:"100%"},resizeMode:"contain"})),i.createElement(a.Text,{style:s.comicBoxTitle},"Game Over 3")))))},t}(i.PureComponent);t.Comics=u},818:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(1)),c=r(4),s=i(r(180)),u=c.StyleSheet.create({container:{flex:1,alignItems:"center"},content:{width:"90%",height:"100%",padding:10,alignItems:"center"},titulo:{marginTop:10,fontSize:32,textAlign:"center"},pageViewer:{flex:1,marginTop:10,width:"50%",minHeight:1e3,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={paginaActual:1,totalPaginas:4},t.paginaAnterior=function(){var e=t.state.paginaActual;e>1&&e--,t.setState({paginaActual:e})},t.paginaSiguiente=function(){var e=t.state.paginaActual;e<t.state.totalPaginas&&e++,t.setState({paginaActual:e})},t}return n(t,e),t.prototype.render=function(){return a.createElement(c.View,{style:u.container},a.createElement(c.View,{style:u.content},a.createElement(c.Text,{style:u.titulo},this.props.match.params.id),a.createElement(c.View,{style:u.pageViewer},a.createElement(c.TouchableOpacity,{onPress:this.paginaAnterior},a.createElement(s.default,{name:"arrow-left",size:48})),a.createElement(c.Image,{source:r(819)("./comic-"+this.props.match.params.id+"-"+this.state.paginaActual.toString().padStart(4,"0")+".png"),style:{width:"100%",height:"100%"},resizeMode:"contain"}),a.createElement(c.TouchableOpacity,{onPress:this.paginaSiguiente},a.createElement(s.default,{name:"arrow-right",size:48})))))},t}(a.PureComponent);t.ComicViewer=l},819:function(e,t,r){var n={"./comic-game-over-1-0001.png":820,"./comic-game-over-1-0002.png":821,"./comic-game-over-1-0003.png":822,"./comic-game-over-1-0004.png":823};function o(e){var t=i(e);return r(t)}function i(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=819},820:function(e,t,r){e.exports=r.p+"static/media/comic-game-over-1-0001.5162f480.png"},821:function(e,t,r){e.exports=r.p+"static/media/comic-game-over-1-0002.8bdf8725.png"},822:function(e,t,r){e.exports=r.p+"static/media/comic-game-over-1-0003.67a47c20.png"},823:function(e,t,r){e.exports=r.p+"static/media/comic-game-over-1-0004.1cc3558f.png"},824:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(342)),a=r(343),c=o(r(1)),s=r(4),u=r(825),l=r(831),f=r(833),p=s.StyleSheet.create({container:{flex:1,backgroundColor:"#fafafa"},scrollContainer:{padding:10,marginBottom:50}});t.CurrentWorkout=a.observer(function(e){var t=e.history,r=e.match.params,n=r.day,o=r.month,a=r.year,d=c.useContext(u.RootStoreContext);c.useEffect(function(){return function(){d.workoutTimerStore.stopTimer()}},[]);var h=!a&&!o&&!n,m=a+"-"+o+"-"+n;return c.createElement(s.View,{style:p.container},c.createElement(s.ScrollView,{keyboardShouldPersistTaps:"always",contentContainerStyle:p.scrollContainer},(h?d.workoutStore.currentExercises:d.workoutStore.history[m]).map(function(e){return c.createElement(l.WorkoutCard,{onSetPress:function(t){d.workoutTimerStore.startTimer();var r,n=e.sets[t];""===n?r=""+e.reps:"0"===n?(d.workoutTimerStore.stopTimer(),r=""):r=""+(parseInt(n)-1),e.sets[t]=r},key:e.exercise,sets:e.sets,excercise:e.exercise,repsAndWeight:e.numSets+"x"+e.reps+" "+e.weight})}),c.createElement(s.Button,{title:"SAVE",onPress:function(){h&&(d.workoutStore.history[i.default().format("YYYY-MM-DD")]=d.workoutStore.currentExercises,d.workoutStore.currentExercises=[]),t.push("/")}})),d.workoutTimerStore.isRunning?c.createElement(f.WorkoutTimer,{percent:d.workoutTimerStore.percent,currentTime:d.workoutTimerStore.display,onXPress:function(){return d.workoutTimerStore.stopTimer()}}):null)})},825:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(189),o=r(1),i=r(4),a=r(829),c=r(830),s=n.create({storage:i.AsyncStorage,jsonify:!0}),u=function(){return function(){var e=this;this.workoutStore=new a.WorkoutStore(this),this.workoutTimerStore=new c.WorkoutTimerStore,s("workoutTimer",this.workoutTimerStore).then(function(){e.workoutTimerStore.isRunning&&e.workoutTimerStore.measure()}),s("workout",this.workoutStore)}}();t.RootStore=u,t.RootStoreContext=o.createContext(new u)},829:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};Object.defineProperty(t,"__esModule",{value:!0});var o=r(90),i=r(189),a=function(){function e(e){this.currentSquat=45,this.currentBenchPress=45,this.currentOverheadPress=45,this.currentDeadlift=65,this.currentBarbellRow=65,this.lastWorkoutType="a",this.currentExercises=[],this.history={},this.rootStore=e}return Object.defineProperty(e.prototype,"hasCurrentWorkout",{get:function(){return!!this.currentExercises.length},enumerable:!0,configurable:!0}),n([i.persist,o.observable],e.prototype,"currentSquat",void 0),n([i.persist,o.observable],e.prototype,"currentBenchPress",void 0),n([i.persist,o.observable],e.prototype,"currentOverheadPress",void 0),n([i.persist,o.observable],e.prototype,"currentDeadlift",void 0),n([i.persist,o.observable],e.prototype,"currentBarbellRow",void 0),n([i.persist,o.observable],e.prototype,"lastWorkoutType",void 0),n([i.persist("list"),o.observable],e.prototype,"currentExercises",void 0),n([o.computed],e.prototype,"hasCurrentWorkout",null),n([i.persist("object"),o.observable],e.prototype,"history",void 0),e}();t.WorkoutStore=a},830:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(342)),a=r(90),c=r(189),s=function(e){return e>=10?e:"0"+e},u=function(){function e(){this.startTime=i.default(),this.isRunning=!1,this.seconds=0}return e.prototype.measure=function(){var e=this;this.isRunning&&(this.seconds=i.default().diff(this.startTime,"second"),setTimeout(function(){return e.measure()},1e3))},e.prototype.startTimer=function(){this.isRunning=!0,this.startTime=i.default(),this.measure()},e.prototype.stopTimer=function(){this.isRunning=!1,this.seconds=0},Object.defineProperty(e.prototype,"percent",{get:function(){return Math.min(100,this.seconds/180*100)+"%"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"display",{get:function(){var e=Math.floor(this.seconds/60),t=this.seconds%60;return s(e)+":"+s(t)},enumerable:!0,configurable:!0}),n([c.persist("object"),a.observable],e.prototype,"startTime",void 0),n([c.persist,a.observable],e.prototype,"isRunning",void 0),n([c.persist,a.observable],e.prototype,"seconds",void 0),n([a.action],e.prototype,"measure",null),n([a.action],e.prototype,"startTimer",null),n([a.action],e.prototype,"stopTimer",null),n([a.computed],e.prototype,"percent",null),n([a.computed],e.prototype,"display",null),e}();t.WorkoutTimerStore=u},831:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(343),i=n(r(1)),a=r(4),c=r(832),s=a.StyleSheet.create({cardContainer:{marginBottom:10},topRow:{flexDirection:"row",justifyContent:"space-between"},topRowText:{fontSize:16},bottomRow:{flexDirection:"row",justifyContent:"space-between",marginTop:14},circle:{height:50,width:50,borderRadius:25,backgroundColor:"#8FB299"},whiteText:{color:"#fff"},circleText:{fontSize:16,marginTop:"auto",marginBottom:"auto",marginLeft:"auto",marginRight:"auto"},grayText:{color:"#655252"},fadedBackground:{backgroundColor:"#B2A1A1"}});t.WorkoutCard=o.observer(function(e){var t=e.excercise,r=e.repsAndWeight,n=e.sets,o=e.onSetPress;return i.createElement(a.View,{style:s.cardContainer},i.createElement(c.Card,null,i.createElement(a.View,{style:s.topRow},i.createElement(a.Text,{style:s.topRowText},t),i.createElement(a.Text,{style:s.topRowText},r)),i.createElement(a.View,{style:s.bottomRow},n.map(function(e,t){return"x"===e?i.createElement(a.View,{style:[s.circle,s.fadedBackground],key:e+t},i.createElement(a.Text,{style:[s.grayText,s.circleText]},"X")):""===e?i.createElement(a.TouchableOpacity,{onPress:function(){return o(t)},style:[s.circle,s.fadedBackground],key:e+t}):i.createElement(a.TouchableOpacity,{onPress:function(){return o(t)},style:s.circle,key:e+t},i.createElement(a.Text,{style:[s.whiteText,s.circleText]},e))}))))})},832:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(1)),i=r(4),a=i.StyleSheet.create({card:{borderRadius:3,backgroundColor:"#fff",shadowColor:"#000",shadowOffset:{width:2,height:2},shadowOpacity:.3,shadowRadius:3,flexDirection:"column",padding:10}});t.Card=function(e){var t=e.children,r=e.onPress;return r?o.createElement(i.TouchableOpacity,{style:a.card,onPress:r},t):o.createElement(i.View,{style:a.card},t)}},833:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(1)),i=r(4),a=i.StyleSheet.create({container:{position:"absolute",bottom:0,left:0,height:50,width:"100%",backgroundColor:"#486550"},row:{paddingHorizontal:30,justifyContent:"space-between",flexDirection:"row",alignItems:"center",flex:1},x:{color:"#B2A1A1",fontSize:30},timeText:{color:"#fff",fontSize:18},line:{height:3,backgroundColor:"#B2A1A1"}});t.WorkoutTimer=function(e){var t=e.onXPress,r=e.currentTime,n=e.percent;return console.log(n),o.createElement(i.View,{style:a.container},o.createElement(i.View,{style:[a.line,{width:n}]}),o.createElement(i.View,{style:a.row},o.createElement(i.Text,{style:a.timeText},r),o.createElement(i.TouchableOpacity,{onPress:t},o.createElement(i.Text,{style:a.x},"x"))))}},834:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(1)),i=r(4),a=r(191),c=r(835),s=i.StyleSheet.create({container:{justifyContent:"center",textAlign:"center",flexDirection:"column"},titulogo:{fontSize:42,margin:20},menuBar:{backgroundColor:a.uiTheme.palette.primaryColor,height:50,flexDirection:"row",justifyContent:"center",alignItems:"center"}});t.Header=function(){return o.createElement(i.View,{style:s.container},o.createElement(i.Text,{style:s.titulogo},"My Comic App LOGO"),o.createElement(i.View,{style:s.menuBar},o.createElement(c.CustomLink,{to:"/inicio",activeOnlyWhenExact:!0},"Inicio"),o.createElement(c.CustomLink,{to:"/comics",activeOnlyWhenExact:!0},"Comics")))}},835:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(1)),i=r(4),a=r(183);i.StyleSheet.create({menuItem:{color:"white",fontSize:18,padding:10},menuItemSelected:{fontWeight:"bold"}});t.CustomLink=function(e){var t=e.children,r=e.to,n=e.activeOnlyWhenExact;return o.createElement(a.Route,{path:r,exact:n,children:function(e){var n=e.match;return o.createElement(a.Link,{style:{textDecorationLine:"none"},to:r},o.createElement(i.Text,{style:{color:"white",fontSize:18,padding:10,textDecorationLine:"none",fontWeight:n?"bold":"normal"}},t))}})}},836:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(1)),a=r(4),c=r(346),s=a.StyleSheet.create({container:{flex:1,alignItems:"center"},login:{maxWidth:400,height:"100%"}}),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){return i.createElement(a.View,{style:s.container},i.createElement(a.View,{style:s.login},i.createElement(c.Login,null)))},t}(i.PureComponent);t.Inicio=u},870:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(347));t.default=o.default.initializeApp({apiKey:"AIzaSyDFm9NblMuSE5NGUI6yw3R0ISkuOHgvRWE",authDomain:"myfirstfirestore-1b9c1.firebaseapp.com",databaseURL:"https://myfirstfirestore-1b9c1.firebaseio.com",projectId:"myfirstfirestore-1b9c1",storageBucket:"myfirstfirestore-1b9c1.appspot.com",messagingSenderId:"241131382173",appId:"1:241131382173:web:23ffca8a7637035a"})},871:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleSignIn={}},872:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(1)),a=r(873),c=r(191);t.TextField=function(e){return i.createElement(a.TextField,n({tintColor:c.uiTheme.palette.accentColor},e))}},890:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA8JJREFUSImlVm1sU1UYfs656227frFGapktUB0THMZMWBRi3NgYJZiIor8MSojEyVgmiWHwg7GYEDQhgSwjcyXoDxsxGT/wA8hGlKnVhIgDBs66TT669WsbG7Td1s97jz9om+6u7I74/rr3fc/7POe8532fewkWaJH2oyYQxQuEQQklHdG833iDAEwuj8wPeqw6FfQfSd4aLEcwwOfGmEbL+KdLAnTpcqde80QzqatLLphg+mSrJXnn367ElT/KwES5TYKai2P8S+v26hsPOGQJptqP26OuSz+wsaBCFnkWEoXKvqVNv6+lMdddkPsS+fx41Uz3uQuIhOljgQOg5uI4jKaOObyZh0mHw8BcXUEh4FVJF3FLbTPcime7OK2+h3A0nErEy0R/4HXh5tWVLJkANT8VV27YtFa3q/4vaW72BJz/9tm4BJwolVBU2U8Zmpo/yNMx+8OO1srEgPsr5crVW3S76vvznYwAgDjYZEn4ejwzp/U0dTucPjOFcuvbTYaGfUfnrY2MUQBIJccPc8J1qnunD2q7GQCgWF/5+/8FBzIlig7XAACEEFQvdoE+s1mkY7bt+RLazsdKRZ5o5IAZY1N7N6mG0gQeU25QYZmY4N/afTdf4lVfqtczDq0cgdXIogAKKQCw5INZPU8VJq8cgJyFo+CB9B3MmTf6aAkh4vzykjEhDUoBgPCLZumIGBu1PCqRycrbQ1NxEIDMJauso4jdtQKAQDh8EV9jPNG/Z1lD2XaPNLGiVLG7QmAmqf+3wdSRYAhZQTTqaCRLQApX/IgHrp2T3BIcSr6B3nEffZV4vwGwXgpUX6N0Sn3tFxMvj4YxS21NWuoG0iXiNOaDfeqNwo5QDXonfQ93FPhz3eErHfvlStHZyTh3IHVWWroni+jJLAFd9on/DGp/vRcLZxeIjOHCnZ8/O3i59Uu0tOQVv9Y+p+UaDfzT7xXNuf7lizG1ZyPvBHLax3Gr09DtdgWHp/xzxM6qM0efKyq5qFUU/kJBIzEhXjKRCNXeHBsoVxaoyeL7DfD5bcgAvrmW+7DBrnbMIgCAtmvOqu89l366H3s8uS6gHMr59zDQX4mqVYqeQ9tU1ZnYnJ5uu3G6ttvjOhecHuOlMTnbatrpat7wWiUIyd5I3qHp+Nu5xD0+3H052Pe8wARZYKO6SKgurjh2oKKuSRqbdypPXP/6Fe+079Oh0MiakUhQLeZ8n3UFhcxmsN6zGazf6RdpP/6o9N1wPowFjT0AnHJ/q0slp1eLIlFreJV3x6ptQyDyvy3/AdRmXxI/xuPJAAAAAElFTkSuQmCC"},891:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA35JREFUWIXFV01oVFcU/s55r+k4qcZCFbtxMYhRqYQGwTILkQGtaAwqmnEQFy5qW2hJVKqhCyX+YETpaAURl0qIMSVRxxGlBNtCEekmg0RKjHFXnARTk05mMj/vnC7GmcyYmHkvJuZb3XvfOef73r33nXMewSY2fX9twYemWaNKPiFUkYhHmednn+oIQM9ZEVGlrrSkwvcu7h2xE5dKGdTWt1WCtBGK3WC47AQVkQSYWtWS5vDPe55OS0DN/ttucsdPKEk9gw07xJMoyYD5fBno6C9Bf8K2gG0HW5dnRDuZeNW0iCfo0MfEvCMU9PeVFFDTcL2aFffB+GQmyAtkDJKYG29dqOt+q4BtB1uXi0V/zjz5uAiF4S3cCc4NNhy6Wp4R7Zw9cgDgRSrSsfNA27zcipkbuKyy40RwdOaLPy7H5yuW4KN5ZQABsXgK9x8+m1oC0+qkahOAw8DrI6itb6sUtnqc3PZ11UvREFgLw8hvIl68jOHrU+HSziIZZWNlKOjvy3qTNjohd5WZ+HbnmiJyR2A2SbURAGjXkRsVyTF5YTfJAMAqzyKc/s6Xn//15B/0PBtELJ7Cr4/6bUaROEz3EjOVsraAyTY5kN2BQoT+6EWkN+okBAB2k5XYzKrkK21c4MYEKpnA7UGVfKYQqpycZMvJ7XC7PihaO/7NegDAwL+j+OrEHduxBKhiEvE44J8Sw/8lHdkzxMPjJfXd8So25sheBBVmabNiBH7sQPWKT3Fs/7r82tHLv03jEmbB2WZibsCMYQbo+VwJEHA/syIyVwIYiLAqdc2VAFXq4rSkwiIyabs0u5C4K0V3+d7FvSNgan3f9KrU0n6pLsYAoJY0QyTzvsgFSBsmzgCAAQBPH3UMVXp3LQDgtRPAEsXQcALdvVF090bR0z+I+FjaiYazt38KtAMFHZGMuo9xeWwTwJ+V8h4YGkXng7+dEI5DJDKyMNmUm+br0J0rtXGFsR2QwelFtoWoRbrj96Z9+ZxdVAhDQX8fiblxlkRELeDL8Pk9RR3LhEp860Jdt8LwiujjGaMWiVhqecPB3ROS3qStQCjo73Mxr1XF2Xf5OgRIK9A8vDD5xZtvnkPJ3mbrgbZlpNoIkgDAbpvUcVVqMUycuXkuMGWfbru5qv3h5nyyEptVySdAFUM8IqgAslVNwP2M7O+5K0V32y/VxezE/R9yXmTGmSsv6gAAAABJRU5ErkJggg=="},892:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.register=function(e){if("serviceWorker"in navigator){var t=new URL("",window.location.href);if(t.origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");n?(!function(e,t){fetch(e).then(function(r){var n=r.headers.get("content-type");404===r.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):o(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):o(t,e)})}},t.unregister=function(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})};var n=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var r=e.installing;null!=r&&(r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}}},[[349,1,2]]]);
//# sourceMappingURL=main.21178ae8.chunk.js.map