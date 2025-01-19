"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[759],{7137:function(e,t,a){a.r(t),a.d(t,{default:function(){return We}});var s=a(6768),i=a(4232);const l={class:"multiplayer-container"},n={class:"game-status"},r={class:"score-panel"},c={class:"score-item"},o={class:"score-item"},v={class:"score-item"},m={class:"score-item"},d={class:"score-item"},p={class:"score-item"},u={class:"score-item"},k={class:"score-item"};function h(e,t,a,h,L,A){const g=(0,s.g2)("multiplayer-header"),D=(0,s.g2)("multiplayer-game-board"),y=(0,s.g2)("multiplayer-controls"),w=(0,s.g2)("multiplayer-score-board");return(0,s.uX)(),(0,s.CE)("div",l,[(0,s.bF)(g,{"player-stats":L.playerStats,"opponent-stats":L.opponentStats,onShowStatsInfo:t[0]||(t[0]=e=>L.showStatsInfo=!0),onGenerateOpponent:A.generateNewOpponent,onStartGame:A.startGame},null,8,["player-stats","opponent-stats","onGenerateOpponent","onStartGame"]),(0,s.Lk)("div",n,[t[11]||(t[11]=(0,s.Lk)("div",{class:"status-title"},"Game Status",-1)),(0,s.Lk)("div",r,[(0,s.Lk)("div",c,[t[1]||(t[1]=(0,s.eW)("Score: ")),(0,s.Lk)("span",null,(0,i.v_)(L.score),1),t[2]||(t[2]=(0,s.eW)("₿"))]),(0,s.Lk)("div",o,[t[3]||(t[3]=(0,s.eW)("Lives: ")),(0,s.Lk)("span",null,(0,i.v_)(L.lives),1)]),(0,s.Lk)("div",v,[t[4]||(t[4]=(0,s.eW)("Time: ")),(0,s.Lk)("span",null,(0,i.v_)(L.timeLeft),1),t[5]||(t[5]=(0,s.eW)("s"))]),(0,s.Lk)("div",m,[t[6]||(t[6]=(0,s.eW)("Strength: ")),(0,s.Lk)("span",null,(0,i.v_)(L.playerStats.strength),1)]),(0,s.Lk)("div",d,[t[7]||(t[7]=(0,s.eW)("Agility: ")),(0,s.Lk)("span",null,(0,i.v_)(L.playerStats.agility),1)]),(0,s.Lk)("div",p,[t[8]||(t[8]=(0,s.eW)("Stamina: ")),(0,s.Lk)("span",null,(0,i.v_)(L.playerStats.stamina),1)]),(0,s.Lk)("div",u,[t[9]||(t[9]=(0,s.eW)("Luck: ")),(0,s.Lk)("span",null,(0,i.v_)(L.playerStats.luck),1)]),(0,s.Lk)("div",k,[t[10]||(t[10]=(0,s.eW)("Intelligence: ")),(0,s.Lk)("span",null,(0,i.v_)(L.playerStats.intelligence),1)])])]),(0,s.bF)(D,{ref:"gameBoard",onCatHit:A.onCatHit},null,8,["onCatHit"]),(0,s.bF)(y,{score:L.score,lives:L.lives,"time-left":L.timeLeft,onRestartGame:A.startGame},null,8,["score","lives","time-left","onRestartGame"]),(0,s.bF)(w,{"online-players":L.onlinePlayers,players:L.players,achievements:L.achievements,onChallengePlayer:A.challengePlayer},null,8,["online-players","players","achievements","onChallengePlayer"])])}const L={class:"game-panel"},A={class:"stats-container"},g={class:"player-stats game-card"},D={class:"stats-grid"},y={class:"stat-label"},w={class:"stat-bar"},b={class:"opponent-stats game-card"},z={class:"stats-grid"},C={class:"stat-label"},f={class:"stat-bar"},I={class:"game-controls"};function S(e,t,a,l,n,r){return(0,s.uX)(),(0,s.CE)("div",L,[t[8]||(t[8]=(0,s.Lk)("div",{class:"panel-title"},"Player Stats",-1)),(0,s.Lk)("div",A,[(0,s.Lk)("div",g,[t[3]||(t[3]=(0,s.Lk)("h3",{class:"card-title"},"Your Character",-1)),(0,s.Lk)("div",D,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.playerStats,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t,class:"stat-item"},[(0,s.Lk)("label",y,(0,i.v_)(t.charAt(0).toUpperCase()+t.slice(1)),1),(0,s.Lk)("div",w,[(0,s.Lk)("div",{class:"stat-value",style:(0,i.Tr)({width:10*e+"%"})},null,4)])])))),128))])]),(0,s.Lk)("div",b,[t[4]||(t[4]=(0,s.Lk)("h3",{class:"card-title"},"Opponent",-1)),(0,s.Lk)("div",z,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.opponentStats,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t,class:"stat-item"},[(0,s.Lk)("label",C,(0,i.v_)(t.charAt(0).toUpperCase()+t.slice(1)),1),(0,s.Lk)("div",f,[(0,s.Lk)("div",{class:"stat-value",style:(0,i.Tr)({width:10*e+"%"})},null,4)])])))),128))])])]),(0,s.Lk)("div",I,[(0,s.Lk)("button",{onClick:t[0]||(t[0]=t=>e.$emit("show-stats-info")),class:"game-button info"},t[5]||(t[5]=[(0,s.Lk)("span",null,"Stats Info",-1)])),(0,s.Lk)("button",{onClick:t[1]||(t[1]=t=>e.$emit("generate-opponent")),class:"game-button generate"},t[6]||(t[6]=[(0,s.Lk)("span",null,"New Opponent",-1)])),(0,s.Lk)("button",{onClick:t[2]||(t[2]=t=>e.$emit("start-game")),class:"game-button start"},t[7]||(t[7]=[(0,s.Lk)("span",null,"Start Game",-1)]))])])}var x={name:"MultiplayerHeader",props:{playerStats:{type:Object,required:!0},opponentStats:{type:Object,required:!0}}},H=a(1241);const E=(0,H.A)(x,[["render",S],["__scopeId","data-v-22cd62d2"]]);var X=E,Y=a(5130),G=a.p+"img/cat.736d27e6.png";const P={class:"game-panel"},U={class:"play-area",ref:"playArea"};function Q(e,t,a,l,n,r){return(0,s.uX)(),(0,s.CE)("div",P,[t[2]||(t[2]=(0,s.Lk)("div",{class:"panel-title"},"Game Board",-1)),(0,s.Lk)("div",U,[(0,s.bF)(Y.F,{name:"coin"},{default:(0,s.k6)((()=>[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.coins,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"coin",style:(0,i.Tr)({left:e.x+"px",top:e.y+"px"})}," ₿ ",4)))),128))])),_:1}),n.isGameActive?((0,s.uX)(),(0,s.CE)("div",{key:0,class:(0,i.C4)(["cat",{"cat-hit":n.isHit}]),style:(0,i.Tr)({left:n.catPosition.x+"px",top:n.catPosition.y+"px",transform:`scale(${n.catScale})`}),onClick:t[0]||(t[0]=(...e)=>r.hitCat&&r.hitCat(...e))},t[1]||(t[1]=[(0,s.Lk)("img",{src:G,alt:"Cat"},null,-1)]),6)):(0,s.Q3)("",!0)],512)])}a(4114);var F={name:"MultiplayerGameBoard",data(){return{coins:[],catPosition:{x:0,y:0},catScale:1,isGameActive:!1,isHit:!1,playAreaSize:{width:0,height:0},moveInterval:null,coinId:0}},methods:{hitCat(){this.isGameActive&&(this.isHit=!0,this.$emit("cat-hit"),setTimeout((()=>{this.isHit=!1}),200))},moveCat(){if(!this.isGameActive)return;const e=Math.random()*(this.playAreaSize.width-50),t=Math.random()*(this.playAreaSize.height-50);this.catPosition={x:e,y:t},this.catScale=.8+.4*Math.random()},spawnCoins(e){for(let t=0;t<e;t++){const e={id:this.coinId++,x:Math.random()*(this.playAreaSize.width-30),y:Math.random()*(this.playAreaSize.height-30)};this.coins.push(e)}},updatePlayAreaSize(){if(this.$refs.playArea){const e=this.$refs.playArea.getBoundingClientRect();this.playAreaSize={width:e.width,height:e.height}}},startGame(){this.isGameActive=!0,this.updatePlayAreaSize(),this.moveInterval=setInterval(this.moveCat,1e3),this.spawnCoins(5)},stopGame(){this.isGameActive=!1,clearInterval(this.moveInterval),this.coins=[]}},mounted(){window.addEventListener("resize",this.updatePlayAreaSize),this.updatePlayAreaSize()},beforeUnmount(){window.removeEventListener("resize",this.updatePlayAreaSize),this.stopGame()}};const M=(0,H.A)(F,[["render",Q],["__scopeId","data-v-4bb87ba1"]]);var B=M,W=a(7562),T=a(8107),K=a.p+"img/heart.736d27e6.png",q="data:image/png;base64,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";const O={class:"game-panel"},V={class:"game-stats"},j={class:"stat-box"},Z={class:"stat-value"},J={class:"stat-box"},R={class:"stat-value"},N={class:"stat-box"},_={class:"stat-value"},$={class:"character-panel"},ee={class:"character-info"},te={class:"stats-bar"},ae={class:"stat-item"},se={class:"stat-text"},ie={class:"stat-item"},le={class:"stat-text"},ne={class:"stat-item"},re={class:"stat-text"};function ce(e,t,a,l,n,r){return(0,s.uX)(),(0,s.CE)("div",O,[t[13]||(t[13]=(0,s.Lk)("div",{class:"panel-title"},"Game Status",-1)),(0,s.Lk)("div",V,[(0,s.Lk)("div",j,[t[1]||(t[1]=(0,s.Lk)("div",{class:"stat-icon"},"₿",-1)),(0,s.Lk)("div",Z,(0,i.v_)(a.score),1),t[2]||(t[2]=(0,s.Lk)("div",{class:"stat-label"},"Score",-1))]),(0,s.Lk)("div",J,[t[3]||(t[3]=(0,s.Lk)("div",{class:"stat-icon"},"⏱️",-1)),(0,s.Lk)("div",R,(0,i.v_)(a.timeLeft),1),t[4]||(t[4]=(0,s.Lk)("div",{class:"stat-label"},"Seconds",-1))]),(0,s.Lk)("div",N,[t[5]||(t[5]=(0,s.Lk)("div",{class:"stat-icon"},"❤️",-1)),(0,s.Lk)("div",_,(0,i.v_)(a.lives),1),t[6]||(t[6]=(0,s.Lk)("div",{class:"stat-label"},"Lives",-1))])]),(0,s.Lk)("div",$,[t[11]||(t[11]=(0,s.Lk)("div",{class:"character-image"},[(0,s.Lk)("img",{src:W,alt:"BitCat Hero"})],-1)),(0,s.Lk)("div",ee,[t[10]||(t[10]=(0,s.Lk)("h2",{class:"character-name"},"BitCat Warrior",-1)),(0,s.Lk)("div",te,[(0,s.Lk)("div",ae,[t[7]||(t[7]=(0,s.Lk)("img",{src:T,alt:"Score",class:"stat-icon"},null,-1)),(0,s.Lk)("span",se,(0,i.v_)(a.score)+"₿",1)]),(0,s.Lk)("div",ie,[t[8]||(t[8]=(0,s.Lk)("img",{src:K,alt:"Lives",class:"stat-icon"},null,-1)),(0,s.Lk)("span",le,(0,i.v_)(a.lives),1)]),(0,s.Lk)("div",ne,[t[9]||(t[9]=(0,s.Lk)("img",{src:q,alt:"Time",class:"stat-icon"},null,-1)),(0,s.Lk)("span",re,(0,i.v_)(a.timeLeft)+"s",1)])])])]),0===a.timeLeft?((0,s.uX)(),(0,s.CE)("button",{key:0,onClick:t[0]||(t[0]=t=>e.$emit("restart-game")),class:"game-button restart"},t[12]||(t[12]=[(0,s.Lk)("span",{class:"button-icon"},"🔄",-1),(0,s.Lk)("span",{class:"button-text"},"Play Again",-1)]))):(0,s.Q3)("",!0)])}var oe={name:"MultiplayerControls",props:{score:{type:Number,required:!0},lives:{type:Number,required:!0},timeLeft:{type:Number,required:!0}}};const ve=(0,H.A)(oe,[["render",ce],["__scopeId","data-v-03184e16"]]);var me=ve;a(8992),a(4520);const de={class:"game-panel"},pe={class:"panels-container"},ue={class:"matchmaking-panel game-card"},ke={class:"card-header"},he={class:"online-badge"},Le={class:"players-list"},Ae={class:"player-avatar"},ge=["src","alt"],De={class:"player-info"},ye={class:"player-name"},we={class:"player-rank"},be=["onClick"],ze={class:"achievements-panel game-card"},Ce={class:"card-header"},fe={class:"achievement-progress"},Ie={class:"achievements-grid"},Se={class:"achievement-icon"},xe=["src","alt"],He={key:0,class:"achievement-overlay"},Ee={class:"achievement-info"},Xe={class:"achievement-name"},Ye={class:"achievement-description"};function Ge(e,t,a,l,n,r){return(0,s.uX)(),(0,s.CE)("div",de,[t[4]||(t[4]=(0,s.Lk)("div",{class:"panel-title"},"Leaderboard",-1)),(0,s.Lk)("div",pe,[(0,s.Lk)("div",ue,[(0,s.Lk)("div",ke,[t[0]||(t[0]=(0,s.Lk)("h3",{class:"card-title"},"Players Online",-1)),(0,s.Lk)("div",he,(0,i.v_)(a.onlinePlayers),1)]),(0,s.Lk)("div",Le,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.players,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:"player-card"},[(0,s.Lk)("div",Ae,[(0,s.Lk)("img",{src:e.avatar,alt:e.name},null,8,ge)]),(0,s.Lk)("div",De,[(0,s.Lk)("span",ye,(0,i.v_)(e.name),1),(0,s.Lk)("div",we,[t[1]||(t[1]=(0,s.Lk)("span",{class:"rank-icon"},"🏆",-1)),(0,s.eW)(" "+(0,i.v_)(e.rank),1)])]),(0,s.Lk)("button",{class:"challenge-button",onClick:t=>r.challengePlayer(e.id)},t[2]||(t[2]=[(0,s.Lk)("span",{class:"button-icon"},"⚔️",-1),(0,s.eW)(" Challenge ")]),8,be)])))),128))])]),(0,s.Lk)("div",ze,[(0,s.Lk)("div",Ce,[t[3]||(t[3]=(0,s.Lk)("h3",{class:"card-title"},"Achievements",-1)),(0,s.Lk)("div",fe,(0,i.v_)(a.achievements.filter((e=>e.achieved)).length)+"/"+(0,i.v_)(a.achievements.length),1)]),(0,s.Lk)("div",Ie,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.achievements,(e=>((0,s.uX)(),(0,s.CE)("div",{key:e.id,class:(0,i.C4)(["achievement-card",{achieved:e.achieved}])},[(0,s.Lk)("div",Se,[(0,s.Lk)("img",{src:e.icon,alt:e.name},null,8,xe),e.achieved?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",He," 🔒 "))]),(0,s.Lk)("div",Ee,[(0,s.Lk)("span",Xe,(0,i.v_)(e.name),1),(0,s.Lk)("span",Ye,(0,i.v_)(e.description),1)])],2)))),128))])])])])}var Pe={name:"MultiplayerScoreBoard",props:{onlinePlayers:{type:Number,default:0},players:{type:Array,default:()=>[]},achievements:{type:Array,default:()=>[]}},methods:{challengePlayer(e){this.$emit("challenge-player",e)}}};const Ue=(0,H.A)(Pe,[["render",Ge],["__scopeId","data-v-d685c908"]]);var Qe=Ue,Fe=a(4348),Me={name:"MultiplayerGamePage",components:{MultiplayerHeader:X,MultiplayerGameBoard:B,MultiplayerControls:me,MultiplayerScoreBoard:Qe},data(){return{showStatsInfo:!1,playerStats:{strength:5,agility:5,stamina:5,luck:5,intelligence:5},opponentStats:{strength:5,agility:5,stamina:5,luck:5,intelligence:5},score:0,lives:3,timeLeft:10,gameTimer:null,onlinePlayers:42,players:[{id:1,name:"Player 1",rank:"Gold",avatar:"@/assets/avatar1.png"},{id:2,name:"Player 2",rank:"Silver",avatar:"@/assets/avatar2.png"},{id:3,name:"Player 3",rank:"Bronze",avatar:"@/assets/avatar3.png"}],achievements:[{id:1,name:"First Win",description:"Win your first game",achieved:!0,icon:"@/assets/achievement1.png"},{id:2,name:"Score Master",description:"Score 1000 points",achieved:!1,icon:"@/assets/achievement2.png"}]}},methods:{generateNewOpponent(){this.opponentStats={strength:Math.floor(10*Math.random())+1,agility:Math.floor(10*Math.random())+1,stamina:Math.floor(10*Math.random())+1,luck:Math.floor(10*Math.random())+1,intelligence:Math.floor(10*Math.random())+1}},startGame(){this.gameTimer&&clearInterval(this.gameTimer),this.score=0,this.timeLeft=10,this.lives=3,this.$refs.gameBoard.startGame(),this.gameTimer=setInterval(this.updateTimer,1e3)},updateTimer(){this.timeLeft>0?this.timeLeft--:this.stopGame()},stopGame(){clearInterval(this.gameTimer),this.$refs.gameBoard.stopGame()},onCatHit(){this.score+=10},challengePlayer(e){Fe.log("Challenging player:",e)}},beforeUnmount(){this.gameTimer&&clearInterval(this.gameTimer)}};const Be=(0,H.A)(Me,[["render",h],["__scopeId","data-v-534a3b1c"]]);var We=Be},7562:function(e,t,a){e.exports=a.p+"img/bitcat-hero.736d27e6.png"},8107:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAC61BMVEUAAAD10hz720XwzQD+3En/3k//3k711SnwzQDwzQD920LwzQDwzQD+3Uz93Eb21CL31zP+3U3+3UzxzgTwzQDwzQDwzQD+3UvwzQD93EX95n/xzQDy0Sb/6pL/6pLwzQD+3U3wzQD/6Y/wzQDwzQD+3U3/3k/72UD+3Uz/6Y//3k7+6In+3U3+3UvwzQD93Ej93EjwzQD+5oLwzQD95n7820D21zjwzQDwzQD/3U7+3U3+6Y7wzQD+3Uz+6Iv+54f93Ej93EfwzQD93Ef95oL93EfwzQDwzQDwzQD/3lD/3k7/3k741jf21C/z0R7+6IjwzQDwzQD+3UvwzQDwzQDwzQD+6Ir+54n+3Er+54j+54b+54P820P322H/6ZH/6ZH/6Y3/3lD/6pT/vQD6owD2jgDwzQD3kgD+3YP/uwD/6ZL/54//31j3lQD/5o75mwD/3k/2kQH/3U37xm7/vwX/43P/6Iz8sAD6ogD3kQD/6In/5Hb/3Ev6oQD7uEj51zn3lRf5nwD6rir6pgb2kAb4qkfxzg3/vgr+tgD4mAD/0Dv924L/23z/10X/yCr/wRr/vxX3lAr6pgD820b/00D9yUD10if3lhz+uQD9sgD+4Yj92ID8yW/8wlj82kX62Dz8vjj7uTD4nS/20yz8rAD+44v903T5sVH/2kz+2Ev5rUr93Ej72kL7wTv31TH7sDD6qyX00SDxzgj5ngD4lgD+44z+3oX/33z/0Fv6uVv/yEj90kf/xDP7tDD/yS/6pAX7qgD91Hr91nj8y3H7wmb9zkT8xj78wzz/zzn7sTf3mCL6qBz5nxv3mhT5nQD/5Yz/4YP/2G/9ymf8xF37tUHz0BvyzxX8rwD+5Yf/23P8v1P/zFH+1kn8vEn41jX5ozX+wSz4nBn6pxL2khH8z3X7xWn622P6vmL5tFT6sUb+z0H7tDv/zDP/xCj85IL+0W7/3VX5qDz9xzr7rhn2kA373mn8vE/8wkL9thZBdLQGAAAAYXRSTlMABAf5cfvzEeJmJPDDvEYXDN3LpFhAybOxPy0h/ff17tPT0moc+/f289rEr46CeGlhXkI6Jh0J+/Lo0My/rKhoZF1UUk9LSjk0/uno5dS/uLSsppqIh4F6eXBgWSv07em7cCJNqAAACf5JREFUaN69m1OgG0EUhrepbdu2bdvGBts2RW5ubaapbdu2bdu2rcfuTJqcwW6zO2n7v6VJ+/WcOdqZWcmsIsRNHL1Rwjq1a2XNOmVN/8zZ4udImitSnMIW6V8qXsE8yaJdX7JgSrjMKKx47Nxxokr/RJmi10urTB+0JkzWU5TYkWL8bWrUjLEiKpsG9ZeDKHKCSHH/IrZqwmLKiPVTZEPKUjp5hL9CjVAhlqJcHxQuG1eJ8pbQsYnSq9gFgDWm+PlCtDpxEkUZAdaaULrKIWBT1lcUZUl/WUid66YQ9XLGmIpybb4syO1rTd2kiJC5sVRz14eLc1VlEDA6f1o1qNbK4lys1M1NYos0VM2d3j80LlbOqKbcnAS5Wbc49h83dfTb/XsfLlq0b9G643tWaXBB2QsZ51aLpnIXaDLDxp0cP7G7za+Os5YO6OI+N3ThsXCGC2pTwCi3ihrNm7WWN3zqeK+N18iDLodj0tDjK4FLKXVLY9xEEdWiMV/DVqBqsLsg9rEw4IJ6di5nKJwRdwpn7OgJmkRwei/VbMfZEx81uHLkvAbtncJhJ9qCaxZCn57rZLmoXQa1uUpEjfWdOsFmTL26qOjFh5wMF5ErBolnNa4Uhrvync2wOk52q+jVsykuVpbkf8xflEeDaO5oLxFDS5eOtNn27tw5rfvvZLox09Z92s6de+Eno1Ty4CNOkotVI8Yf6lUS1I3CKHPHA3bmeQeKn1voH72oomYhx7rfXFQ/Om9NAKPRr1ZsI7lY6fRrGKqTm6i2MG4C4UZki2P4ISvWhYcj3ejzYpWAtAOqyo0+6M/HMFy5X07dRFK5I9ZQUUVm7kEHNsW/epdc+PMR/+c7xIp0Qe5eznCt1uY6CxyTLZSjbaR8oKd+0DJs8FdkMNYtG2jmKOSbHwzXmjqFZt+PhRqSTOgkHbBdMHiOH9RphgPZFUidHTaSjP+XC0kuUgatySAjcnR/iisMBjJwsZroOHoQ5WcRMJC3oq/XkVxtZ9dHER1GxJVNDAzk9ijZpgEXqx03xyqq5hN55CU6z2RV+3bO7Ya0zPpbTvx5rlUP3GuIQ9WkPZgLqsREFi4dRN2AemDH2XvUaQ2iHQzXbsfL/GgV4oKyW+iehAwmUhjqFeY6XliD6uZDmqsKL84r5ndlKYPT0waPBj9j7umu1uDqtJPh2nv3gRKjbXIF2uBVXq5cGdIlL3CxtjhUzZhN/6oFAWZqB9EHJ2PwLqsx3fICFwvn1Ao6PjJEgOdfBbowk0lLMXi11aAuARdrAK6rh+gfwdSZUOVeC+Rw+AQyG/EyPZltlHyH4v6O7Ae0yYEuFbUYFC2ILNpkp0HwhXfAhfhC2Q7qEZeo0pv7Bwxm5robOCk8YwySPwAUTF7cieTKkTRDazRXK0fOmuV2DF/s8QQc3mm3T/deeTyeFUe3k0m1kQb3duOUIrlyAh83U0SyD4fBChPs9g6kDoF/vbv/C5xuw3cReX6FMXkUucqYK0eOEfC0EvD0OJshMKwE/sYDvhzLgAdAb8FcJJ+v66G+BMXSDBgy/QX4+gxDxjHykuTKsfE+YVoVfD8QWl6z4JluJuHeMODzuH12JbhyFDRwFoSGCMUjOBh03kFnzG27Vng9Ba6qOCo4D0qmcPC0STBfVefZdXwNXDm3Ck5GLnGY9++CIZVnOIGLFzlCNLTrADFtHjwEf/eMdjUf1ztlQjUtUtyiZBafNAeG74ZDZRtoZ9UHJk6/Zwszw9Z4s2C+fzkhnajmOBQDILqiU+VjomnwSPzVacim7Qfsmot8jgJHkhqhOd7fEvt3NwuehUP2AVGtL1NMGESGU7tSuXy9GGLLIHjCRKyfjwcPHnzaM5doPs5TAKSjaw8JTiqVIlvTVINga1dCdKs+bNeQA+k4Cc4hUfPlaGNgXrzBfFivo3bSJSqN3wqDYYW1hP/6IhKcTYpJtoj9IYNnXwUcUzT3keDMUkSYtwTAvDrN0wNvoCqIpIiB9eWcZwxcVBSsT75nBCzuan1dGGoA/DeDC3LZQHCJpZPz4sUOfo1B2k5XkYHB08lcAYFa3QvqoasP6hK7yOF6bPACIlYyO82ihirsySfP9OuXA2kaVTLFmkTXYWzDRTpKFLDgTaIx3RbFwL3bwzYn1pigbVFoEAAwtHqkT87AWjwONgiwo48guLebybdTwUYfsWEPwJCp9EPhwGDDHjveCoOZ8LrHxdYxElzcwg30IYGfgcXsEk8KI8Gx+UcYQbDvBxDWZFvuwi9xboGHNgBz3hy8LVBBNrKBd5yJLf4xVQg8inl+WsY+pk5aKWPBYyosMvjaNHiIA85FsA7rehoezJkSMk4APMSNuUSbuM3HNKlIgpsvAIaoHb5iGXAvPGZW4SwV05FjCG83DQS9Wu3xrH6JtpxAl9nQOiGTSiD5FJ3aYPv4UHSDDQzeyNbpcNbT/JZi576XBLcUQfPILUXe4Cxx2U1UzLU694ptokJIH2AMPksbXJrdNsZcNLiIbBuDOpxht42nyZSSsxvlmIt0R2CjHLgb2Ya4keYmiMAeDSAu1s0JZo8GQGPPsKPHpLs0uDx3GIK5WJdEDkNwnl2B9YXIohTfwh7/pPJxGWdvga3KoHIu36C36QLKxx54pXpPXinYGzhP2WrwwMvZ4TKFDRx40dx0EZgjPswFXZzg46JK7Bql6sGVbtpHfDDEM/If8VGqzl1sy8kGiRdzCbl1DjUBzHcOfKhJz9OsCqWhwT1fA1cEPKA9PLaAosSQODVl76ucRFwRMIz4C2VGzSRelpLsfZXP4uAB2twEFklDKdKQXKRpB7h5Tv9ywnKW617HcqO0kjRVluRivX7MZgcUsQ/MDP+diKs+KJ6nyax07ziVIblYd7/oPZktGwqDFrQkIn/3cNwG+venM5BcrJX3CAdiGx8td6JWcEqtxLgifuqAa1agRPcehevVKo6bLp6kq0Jt1Q4xhb43snwj4UOXa4jdvmHelasHMGOLyzXAfuDqlXkb4CftkZtPyJxqQiZpqECam6mUBQQXOfW23ZDA3I13eW4U6MKaqpQKXyQDLs6UNwa555HzzzJRBRfJDF+d6wdt55QB7Bbk5XPrwrW45QxeFpzv5wL6ajBrEfbsCcCS3LwmrkdiLokeM++MLnXIqD7+65Fa3HxmLoQCF+aLw/M2alFd7ckLoXxcVTRzBfa5Trt//nnRl2EQxUNcXfoMR1dgwVZWNZKbeCciCcclz39X3n09be9C9crvPrj0q6sSMUy9A1JGj2tWDeJJ5lQ2zd/gRskrmVaKkqFzE7SSBGRpmiY0bpRmFklMheqGwK2eNIYkrkoZRLjwgoa4IrTILsKFV1LEZWmJouzbf3wJB6wuUKb1/33tCBQ1eqn//qIVvFqW7P++Wsa/TDfoP71Mx78+2PgvvD74Cx0O9NzyNtgzAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=759.c6a3f5d5.js.map