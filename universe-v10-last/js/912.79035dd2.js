"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[912],{912:function(a,t,s){s.r(t),s.d(t,{default:function(){return aa}});var e=s(6768),l=s(4232),i=s(9096);const r={class:"player-page"},c={class:"content-container"},n={class:"profile-card"},d={class:"profile-header"},k={class:"player-info"},o={class:"player-tag"},L={class:"stats-container"},v={class:"stat-item"},u={class:"stat-bar"},h={class:"stat-item"},y={class:"stat-bar"},p={class:"stat-item"},g={class:"stat-bar"},m={class:"stat-item"},f={class:"stat-bar"},b={class:"stat-item"},S={class:"stat-bar"},w={class:"wallet-info"},D={key:0,class:"wallet-address"},_=["href"],C=["href"],T={key:1,class:"wallet-address"},H={class:"stats-section"},A={class:"stat-card"},W={class:"stat-value"},$={class:"stat-card"},E={class:"stat-value"},P={class:"multiplayer-stats"},I={class:"stats-grid"},B={class:"stat"},X={class:"stat"},N={class:"stat"},F={class:"nft-collection"},G={class:"nft-grid"},R={class:"nft-info"},x={class:"nft-name"},K={class:"history-card"},M={class:"history-list"},U={class:"game-score"},j={class:"score-value"},q={class:"game-date"};function z(a,t,s,z,J,O){const Q=(0,e.g2)("router-link");return(0,e.uX)(),(0,e.CE)("div",r,[(0,e.Lk)("div",c,[(0,e.Lk)("div",n,[(0,e.Lk)("div",d,[t[9]||(t[9]=(0,e.Lk)("div",{class:"character-container"},[(0,e.Lk)("img",{src:i,alt:"Player Character",class:"character-image"}),(0,e.Lk)("div",{class:"character-glow"})],-1)),(0,e.Lk)("div",k,[(0,e.Lk)("h1",o,(0,l.v_)(J.playerData.userTag||"No Named Cat"),1),(0,e.Lk)("div",L,[(0,e.Lk)("div",v,[t[1]||(t[1]=(0,e.Lk)("label",null,"Strength",-1)),(0,e.Lk)("div",u,[(0,e.Lk)("div",{class:"stat-bar-value",style:(0,l.Tr)({width:10*J.playerData.stats?.strength+"%"})},null,4)])]),(0,e.Lk)("div",h,[t[2]||(t[2]=(0,e.Lk)("label",null,"Agility",-1)),(0,e.Lk)("div",y,[(0,e.Lk)("div",{class:"stat-bar-value",style:(0,l.Tr)({width:10*J.playerData.stats?.agility+"%"})},null,4)])]),(0,e.Lk)("div",p,[t[3]||(t[3]=(0,e.Lk)("label",null,"Stamina",-1)),(0,e.Lk)("div",g,[(0,e.Lk)("div",{class:"stat-bar-value",style:(0,l.Tr)({width:10*J.playerData.stats?.stamina+"%"})},null,4)])]),(0,e.Lk)("div",m,[t[4]||(t[4]=(0,e.Lk)("label",null,"Luck",-1)),(0,e.Lk)("div",f,[(0,e.Lk)("div",{class:"stat-bar-value",style:(0,l.Tr)({width:10*J.playerData.stats?.luck+"%"})},null,4)])]),(0,e.Lk)("div",b,[t[5]||(t[5]=(0,e.Lk)("label",null,"Intelligence",-1)),(0,e.Lk)("div",S,[(0,e.Lk)("div",{class:"stat-bar-value",style:(0,l.Tr)({width:10*J.playerData.stats?.intelligence+"%"})},null,4)])])]),(0,e.Lk)("div",w,[t[8]||(t[8]=(0,e.Lk)("span",{class:"label"},"Wallet",-1)),J.playerData.walletAddress?((0,e.uX)(),(0,e.CE)("span",D,[(0,e.Lk)("a",{href:`https://solscan.io/address/${J.playerData.walletAddress}`,target:"_blank"},t[6]||(t[6]=[(0,e.Lk)("i",{class:"fas fa-external-link-alt"},null,-1)]),8,_),t[7]||(t[7]=(0,e.eW)()),(0,e.Lk)("a",{href:`https://solscan.io/address/${J.playerData.walletAddress}`,target:"_blank"},(0,l.v_)(J.playerData.walletAddress),9,C)])):((0,e.uX)(),(0,e.CE)("span",T,"not linked"))])])]),(0,e.Lk)("div",H,[(0,e.Lk)("div",A,[t[10]||(t[10]=(0,e.Lk)("div",{class:"stat-icon"},"🏆",-1)),(0,e.Lk)("div",W,(0,l.v_)(J.playerData.bestScore)+"₿",1),t[11]||(t[11]=(0,e.Lk)("div",{class:"stat-label"},"Best Score",-1))]),(0,e.Lk)("div",$,[t[12]||(t[12]=(0,e.Lk)("div",{class:"stat-icon"},"💰",-1)),(0,e.Lk)("div",E,(0,l.v_)(J.playerData.totalScore)+"₿",1),t[13]||(t[13]=(0,e.Lk)("div",{class:"stat-label"},"Total Score",-1))])]),(0,e.Lk)("div",P,[t[17]||(t[17]=(0,e.Lk)("h4",null,"Hide & Seek Stats",-1)),(0,e.Lk)("div",I,[(0,e.Lk)("div",B,[t[14]||(t[14]=(0,e.Lk)("label",null,"Wins",-1)),(0,e.Lk)("span",null,(0,l.v_)(a.hideSeekStats?.wins||0),1)]),(0,e.Lk)("div",X,[t[15]||(t[15]=(0,e.Lk)("label",null,"Losses",-1)),(0,e.Lk)("span",null,(0,l.v_)(a.hideSeekStats?.losses||0),1)]),(0,e.Lk)("div",N,[t[16]||(t[16]=(0,e.Lk)("label",null,"Win Rate",-1)),(0,e.Lk)("span",null,(0,l.v_)(O.calculateWinRate)+"%",1)])])]),(0,e.Lk)("button",{disabled:!0,onClick:t[0]||(t[0]=(...a)=>O.challengeToBattle&&O.challengeToBattle(...a)),class:"challenge-button"},t[18]||(t[18]=[(0,e.Lk)("span",{class:"button-content"},[(0,e.eW)(" ⚔️ Challenge to Battle"),(0,e.Lk)("small",null,"(soon)")],-1)]))]),(0,e.Lk)("div",F,[(0,e.Lk)("div",G,[((0,e.uX)(),(0,e.CE)(e.FK,null,(0,e.pI)(3,(a=>(0,e.Lk)("div",{key:a,class:(0,l.C4)(["nft-card",`nft-gradient-${a}`])},[t[20]||(t[20]=(0,e.Lk)("div",{class:"nft-placeholder"},[(0,e.Lk)("div",{class:"nft-shine"}),(0,e.Lk)("div",{class:"nft-icon"},"🎨")],-1)),(0,e.Lk)("div",R,[(0,e.Lk)("div",x,"BITCAT NFT #"+(0,l.v_)(a),1),t[19]||(t[19]=(0,e.Lk)("div",{class:"nft-rarity"},"Coming Soon",-1))])],2))),64))])]),(0,e.Lk)("div",K,[t[21]||(t[21]=(0,e.Lk)("h2",{class:"history-title"},[(0,e.Lk)("span",{class:"title-icon"},"📜"),(0,e.eW)(" Games History ")],-1)),(0,e.Lk)("div",M,[((0,e.uX)(!0),(0,e.CE)(e.FK,null,(0,e.pI)(J.gameHistory,(a=>((0,e.uX)(),(0,e.CE)("div",{key:a.id,class:"history-item"},[(0,e.Lk)("div",U,[(0,e.Lk)("span",j,(0,l.v_)(a.score)+"₿",1)]),(0,e.bF)(Q,{to:`/games/${a.gameId}`,class:"game-id"},{default:(0,e.k6)((()=>[(0,e.eW)((0,l.v_)(a.gameId),1)])),_:2},1032,["to"]),(0,e.Lk)("div",q,(0,l.v_)(O.formatDate(a.timestamp)),1)])))),128))])])])])}var J=s(4373),O=s(782),Q=s(4348),V={name:"PlayerPage",data(){return{playerData:{userTag:"",walletAddress:"",bestScore:0,totalScore:0,wins:0,losses:0,stats:{strength:2,agility:2,stamina:2,luck:2,intelligence:2}},gameHistory:[]}},async created(){const a=this.$route.params.userTag;await this.fetchPlayerData(a),await this.fetchGameHistory(a)},computed:{...(0,O.aH)({hideSeekStats:a=>a.hideSeek.stats}),calculateWinRate(){if(!this.hideSeekStats?.wins)return"NaN";const a=this.hideSeekStats?.wins+this.hideSeekStats?.losses;return 0===a?0:Math.round(this.hideSeekStats?.wins/a*100)}},methods:{...(0,O.i0)(["fetchHideSeekPlayerStats"]),async fetchPlayerData(a){try{const[t,s]=await Promise.all([J.A.get(`/user/${a}`),this.fetchHideSeekPlayerStats(a)]);this.playerData={...t.data,hideSeekStats:s}}catch(t){Q.error("Error fetching player data:",t)}},async fetchGameHistory(a){try{const t=await J.A.get(`/user/${a}/history`);this.gameHistory=t.data.gameHistory.slice(0,50)}catch(t){Q.error("Error fetching game history:",t)}},formatDate(a){const t=new Date(a);return t.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})},formatWallet(a){return a?`${a.slice(0,6)}...${a.slice(-4)}`:"not linked"},challengeToBattle(){}}},Y=s(1241);const Z=(0,Y.A)(V,[["render",z],["__scopeId","data-v-7399c303"]]);var aa=Z},9096:function(a,t,s){a.exports=s.p+"img/bitcat.cd4ff007.webp"}}]);
//# sourceMappingURL=912.79035dd2.js.map