"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[140],{4626:function(e,a,t){t.d(a,{A:function(){return T}});t(4114);var n=t(6768),s=t(4232),r=t(144),l=t(782),o=t(1387);const i={class:"card-inner"},c={class:"card-front"},u={class:"avatar-container"},g=["src","alt"],p={class:"level-badge"},d={class:"agent-info"},m={class:"name"},v={class:"tag"},k={class:"description"},h={class:"creator"},b={class:"card-actions"},y=["disabled"],L=["disabled"];var f={__name:"AiAgentCard",props:{avatar:{type:[String,Number],required:!0},name:{type:String,required:!0},agentTag:{type:String,required:!0},description:{type:String,required:!0},userTag:{type:String,required:!0},used:{type:String,required:!1,default:"0"},isDisabled:{type:Boolean,default:!1}},emits:["more-info","use-agent"],setup(e){const a=(0,o.rd)(),t=(0,l.Pj)(),f=(0,r.KR)(!1),C=e,A=e=>{a.push(`/ai-agents/${e}`)},T=()=>{f.value=!0,t.commit("UPDATE_AGENT_INFO",{name:C.name,agentTag:C.agentTag,avatar:C.avatar}),localStorage.setItem("selectedAgent",JSON.stringify({name:C.name,agentTag:C.agentTag,avatar:C.avatar}));let e=JSON.parse(localStorage.getItem("chatHistory")||"{}");e[C.agentTag]||(e[C.agentTag]=[{type:"agent",content:C.description,timestamp:(new Date).toISOString()}],localStorage.setItem("chatHistory",JSON.stringify(e))),t.commit("SET_CURRENT_AGENT",{name:C.name,agentTag:C.agentTag,avatar:C.avatar}),t.commit("TOGGLE_AGENTS_LIST",!1),t.commit("TOGGLE_CHAT",!0)},_=e=>`https://solanabitcat.com/data/ai-agents/bitcat-ai-agent-avatar-${e}.png`;return(a,t)=>((0,n.uX)(),(0,n.CE)("div",{class:(0,s.C4)(["agent-card",{disabled:e.isDisabled}])},[(0,n.Lk)("div",i,[(0,n.Lk)("div",c,[(0,n.Lk)("div",u,[t[2]||(t[2]=(0,n.Lk)("div",{class:"avatar-glow"},null,-1)),(0,n.Lk)("img",{src:_(e.avatar),alt:e.name,class:"avatar"},null,8,g),(0,n.Lk)("div",p,[t[1]||(t[1]=(0,n.Lk)("i",{class:"fas fa-chart-line"},null,-1)),(0,n.eW)(" "+(0,s.v_)(e.used),1)])]),(0,n.Lk)("div",d,[(0,n.Lk)("h3",m,(0,s.v_)(e.name),1),(0,n.Lk)("div",v,(0,s.v_)(e.agentTag),1),(0,n.Lk)("p",k,(0,s.v_)(e.description),1),(0,n.Lk)("div",h,[t[3]||(t[3]=(0,n.eW)("Created by ")),(0,n.Lk)("span",null,(0,s.v_)(e.userTag),1)])]),(0,n.Lk)("div",b,[(0,n.Lk)("button",{onClick:t[0]||(t[0]=a=>A(e.agentTag)),class:"card-btn",disabled:e.isDisabled},t[4]||(t[4]=[(0,n.Lk)("span",{class:"btn-text"},"Profile",-1)]),8,y),(0,n.Lk)("button",{class:"card-btn primary",onClick:T,disabled:e.isDisabled},t[5]||(t[5]=[(0,n.Lk)("i",{class:"fas fa-comments"},null,-1),(0,n.Lk)("span",{class:"btn-text"},"Chat",-1)]),8,L)])])]),t[6]||(t[6]=(0,n.Lk)("div",{class:"card-effects"},[(0,n.Lk)("div",{class:"glow-effect"}),(0,n.Lk)("div",{class:"particles"})],-1))],2))}},C=t(1241);const A=(0,C.A)(f,[["__scopeId","data-v-02a7b17f"]]);var T=A},5759:function(e,a,t){t.r(a),t.d(a,{default:function(){return me}});t(4114),t(8992),t(3949),t(1454);var n=t(6768),s=t(5130),r=t(4232),l=t(144),o=t(1387),i=t(4373),c=t(8881),u=t(4626),g=t(4348);const p={class:"page-container"},d={key:0,class:"page-header"},m={key:1,class:"page-header"},v={key:2,class:"agent-carousel"},k={class:"carousel-indicators"},h=["onClick"],b={class:"create-agent-page"},y={class:"create-form"},L={class:"form-section"},f={key:0,class:"warning-message"},C=["src"],A={class:"form-group"},T={key:0,class:"error-message"},_={class:"form-group"},w=["disabled"],x={key:0,class:"error-message"},I={class:"form-group"},E={class:"form-group form-group_last"},U={class:"connection-options"},W={key:0,class:"options-content"},K={class:"form-group"},S={class:"hint hint-last"},F={key:0,class:"error-message"},R={class:"hint"},X={key:0,class:"error-message"},D={class:"form-section"},N={class:"form-group form-group_last prompt-template"},J={class:"prompt-editor"},P={class:"prompt-line"},B={key:0,class:"error-message"},V={class:"prompt-line"},Y={class:"prompt-tasks"},$={class:"prompt-line"},q={class:"prompt-line"},Q={class:"prompt-line"},O={class:"prompt-preview"},z={key:0,class:"preview-content"},G={class:"form-section"},M={class:"form-group"},H={class:"slider-container"},j={class:"form-group form-group_last"},Z={class:"slider-container"},ee={class:"form-section credits-policy"},ae={class:"policy-content"},te={class:"form-actions"},ne={key:0},se=["disabled"],re={key:3,class:"error-message"},le={key:0,class:"popup"},oe={class:"popup-content"},ie={class:"avatar-grid"},ce=["onClick"],ue=["src","alt"];var ge={__name:"AiAgentFormPage",setup(e){const a=(0,o.rd)(),t=(0,l.KR)(!1),ge=(0,l.KR)(Math.floor(26*Math.random())+1),pe=((0,l.KR)(""),(0,l.KR)(!1)),de=(0,l.Kh)({name:"",tag:"",apiKey:"",botUsername:"",groups:"",role:"",general:""}),me=(0,l.KR)(!1),ve=(0,l.KR)(!1),ke=(0,l.KR)(!1),he=(0,l.Kh)({role:"",style:"",task1:"",task2:"",task3:"",expertise:"",context:""}),be=e=>{const a=e.target,t=a.value.replace(/\s+/g," ").replace(/\n+/g," ");t.length>100&&(a.value=t.substring(0,100)),xe.description=t.replace(/\s+/g," ").replace(/\n+/g," ")},ye=(e,a,t)=>{const n=e.target,s=n.value.replace(/\s+/g," ").replace(/\n+/g," ").trim();s.length>t&&(n.value=s.substring(0,t)),he[a]=n.value.replace(/\s+/g," ").replace(/\n+/g," ")},Le=(0,n.EW)((()=>{let e=`You are a ${he.role||"[role]"}.`;return he.style&&(e+=`\n\nYour communication style: ${he.style}. `),he.task1&&(e+="\n\nYour main task:\n",e+=`- ${he.task1}`),he.expertise&&(e+=`\n\nYour expertise areas include: ${he.expertise}. `),he.context&&(e+=`\n\nAdditional context: ${he.context}`),e})),fe=[{avatar:3,name:"BitTrader Pro",agentTag:"bittrader_pro_agent",description:"Expert crypto trading assistant with real-time market analysis and portfolio management.",userTag:"bitcat",isDisabled:!0,used:571},{avatar:7,name:"NFT Curator",agentTag:"nft_curator_agent",description:"Your personal guide in the NFT world. Discovers rare gems and analyzes market trends.",userTag:"bitcat",isDisabled:!0,used:154},{avatar:12,name:"DeFi Wizard",agentTag:"defi_wizard_agent",description:"Smart DeFi strategist helping you navigate yield farming and liquidity pools.",userTag:"bitcat",isDisabled:!0,used:416},{avatar:15,name:"Chain Guardian",agentTag:"chain_guardian_agent",description:"Blockchain security expert monitoring smart contracts and transactions.",userTag:"bitcat",isDisabled:!0,used:261},{avatar:19,name:"MetaVerse Guide",agentTag:"meta_guide_agent",description:"Your companion in exploring and building in the metaverse.",userTag:"bitcat",isDisabled:!0,used:75},{avatar:23,name:"Web3 Sage",agentTag:"web3_sage_agent",description:"Decentralized web expert helping with dApps and web3 development.",userTag:"bitcat",isDisabled:!0,used:184}],Ce=(0,l.KR)(0);let Ae;const Te=e=>{Ce.value=e},_e=()=>{Ce.value=(Ce.value+1)%fe.length},we=e=>{g.log("More info for:",e.agentTag)};(0,n.hi)((()=>{Re.value||clearInterval(Ae)}));const xe=(0,l.Kh)({name:"",tag:"",description:"",avatar:"",role:"assistant",traits:{formal:!1,friendly:!0,professional:!1,casual:!1},knowledgeAreas:[],settings:{responseLength:150,temperature:.7},apiKey:"",botUsername:"",groups:""}),Ie=()=>{xe.name.length<3?de.name="Name must be at least 3 characters long":xe.name.length>50?de.name="Name must be less than 50 characters":de.name=""},Ee=()=>{const e=/^[a-z0-9_]+$/;e.test(xe.tag)?de.tag="":de.tag="Tag can only contain lowercase letters, numbers and underscores"},Ue=()=>{let e=!0;if(de.general="",Object.keys(de).forEach((e=>de[e]="")),xe.name.trim()?xe.name.length<3&&(de.name="Name must be at least 3 characters long",e=!1):(de.name="Name is required",e=!1),xe.tag.trim()?/^[a-z0-9_]+agent$/.test(xe.tag)||(de.tag='Tag must contain only lowercase letters, numbers, underscores and end with "agent"',e=!1):(de.tag="Tag is required",e=!1),xe.apiKey&&!/^[0-9]+:[A-Za-z0-9_-]+$/.test(xe.apiKey)&&(de.apiKey="Invalid API Key format",e=!1),xe.botUsername&&!/^[a-zA-Z0-9_]+$/.test(xe.botUsername)&&(de.botUsername="Invalid bot username format",e=!1),xe.groups){const a=xe.groups.split(",").map((e=>e.trim()));a.length>5&&(de.groups="Maximum 5 groups allowed",e=!1)}return he.role.trim()||(de.role="Role is required",e=!1),e},We=(0,n.EW)((()=>xe.name.length>=3&&xe.tag.length>0&&xe.description.length>0&&ge.value&&!de.name&&!de.tag&&!de.groups)),Ke=e=>`https://solanabitcat.com/data/ai-agents/bitcat-ai-agent-avatar-${e}.png`,Se=e=>{ge.value=e,xe.avatar=e,t.value=!1},Fe=async()=>{if(Ue()){pe.value=!0;try{const e={name:xe.name.trim(),tag:xe.tag.trim(),description:xe.description?xe.description.trim():null,avatar:ge.value,apiKey:xe.apiKey?xe.apiKey.trim():null,botUsername:xe.botUsername?xe.botUsername.trim():null,groups:xe.groups?xe.groups.trim():"",prompt:{role:he.role.trim(),style:he.style.trim(),task1:he.task1.trim(),expertise:he.expertise.trim(),context:he.context.trim()},settings:{temperature:parseFloat(xe.settings.temperature),responseLength:parseInt(xe.settings.responseLength)}};let t=null;if(t=Re.value?await i.A.post("/ai/agent-update",e):await i.A.post("/ai/agent",e),g.log("Response:",t.data),!t.data.success)throw new Error(t.data.error||`Failed to ${Re.value?"update":"create"} agent`);g.log("Agent created successfully"),a.push("/ai-agents/"+xe.tag)}catch(e){g.error("Error creating agent:",e),de.general=e.response?.data?.error||e.message||"Failed to create agent. Please try again."}finally{pe.value=!1}}else de.general="Please fix the errors before submitting"},Re=(0,n.EW)((()=>"UpdateAgent"===a.currentRoute.value.name));(0,n.wB)((()=>a.currentRoute.value.name),(async e=>{"UpdateAgent"===e&&await Xe()}));const Xe=async()=>{try{const e=await i.A.get("/ai/agent-for-update",{params:{agentTag:a.currentRoute.value.params.agentTag}}),t=e.data,n=JSON.parse(t.prompt);xe.name=t.name,xe.tag=t.agentTag,xe.description=t.description,ge.value=t.avatar,xe.apiKey=t.tgApi,xe.botUsername=t.botUsername,he.role=n.role,he.style=n.style,he.task1=n.task1,he.expertise=n.expertise,he.context=n.context,xe.settings.temperature=t.temperature,xe.settings.responseLength=t.tokens}catch(e){g.error("Error loading agent:",e)}};return(0,n.sV)((async()=>{Re.value?await Xe():Ae=setInterval(_e,5e3)})),(e,a)=>{const o=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",p,[Re.value?((0,n.uX)(),(0,n.CE)("div",m,a[25]||(a[25]=[(0,n.Lk)("h1",null,"🤖 Update AI Agent",-1),(0,n.Lk)("p",{class:"subtitle"},"Upgrade your AI agent and make it better",-1)]))):((0,n.uX)(),(0,n.CE)("div",d,a[24]||(a[24]=[(0,n.Lk)("h1",null,"🤖 AI Agents Launcher",-1),(0,n.Lk)("p",{class:"subtitle"},"Create your own AI Agent for the BITCAT Universe or for your own Telegram group",-1)]))),Re.value?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("div",v,[a[26]||(a[26]=(0,n.Lk)("span",{class:"carousel-title"},"Sample AI Agents",-1)),(0,n.bF)(s.eB,{name:"fade",mode:"out-in"},{default:(0,n.k6)((()=>[((0,n.uX)(),(0,n.CE)("div",{class:"carousel-slide",key:Ce.value},[(0,n.bF)(u.A,(0,n.v6)(fe[Ce.value],{onMoreInfo:a[0]||(a[0]=e=>we(fe[Ce.value]))}),null,16)]))])),_:1}),(0,n.Lk)("div",k,[((0,n.uX)(),(0,n.CE)(n.FK,null,(0,n.pI)(fe,((e,a)=>(0,n.Lk)("button",{key:a,class:(0,r.C4)(["indicator",{active:Ce.value===a}]),onClick:e=>Te(a)},null,10,h))),64))])])),(0,n.Lk)("div",b,[(0,n.Lk)("div",y,[(0,n.Lk)("div",L,[a[37]||(a[37]=(0,n.Lk)("h2",null,"Basic Information",-1)),(0,l.R1)(c.A).getters.isAuthenticated?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("h2",f,[a[28]||(a[28]=(0,n.eW)("Your need to be logged in to create an AI Agent. ")),(0,n.bF)(o,{to:"/my",class:"more-info"},{default:(0,n.k6)((()=>a[27]||(a[27]=[(0,n.eW)("Login →")]))),_:1})])),(0,n.Lk)("div",{class:"avatar-preview",onClick:a[1]||(a[1]=e=>t.value=!0)},[(0,n.Lk)("img",{src:Ke(ge.value),alt:"Agent Avatar"},null,8,C),a[29]||(a[29]=(0,n.Lk)("div",{class:"avatar-overlay"},"Change Avatar",-1))]),(0,n.Lk)("div",A,[(0,n.Lk)("label",null,[a[30]||(a[30]=(0,n.eW)("Agent Name")),(0,n.Lk)("span",{class:(0,r.C4)(["char-counter",{"near-limit":xe.name.length>40}])},"("+(0,r.v_)(xe.name.length)+"/50)",3)]),(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>xe.name=e),type:"text",placeholder:"Enter agent name",onInput:Ie,maxlength:"50"},null,544),[[s.Jo,xe.name]]),de.name?((0,n.uX)(),(0,n.CE)("span",T,(0,r.v_)(de.name),1)):(0,n.Q3)("",!0)]),(0,n.Lk)("div",_,[(0,n.Lk)("label",null,[a[31]||(a[31]=(0,n.eW)("Agent Tag")),(0,n.Lk)("span",{class:(0,r.C4)(["char-counter",{"near-limit":xe.tag.length>25}])},"("+(0,r.v_)(xe.tag.length)+"/30)",3)]),(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":a[3]||(a[3]=e=>xe.tag=e),type:"text",placeholder:"e.g., awesome_agent (сannot be changed)",onInput:Ee,disabled:Re.value,maxlength:"30"},null,40,w),[[s.Jo,xe.tag]]),a[32]||(a[32]=(0,n.Lk)("span",{class:"hint"},"Only lowercase letters, numbers and underscores. Must end with 'agent'.",-1)),de.tag?((0,n.uX)(),(0,n.CE)("span",x,(0,r.v_)(de.tag),1)):(0,n.Q3)("",!0)]),(0,n.Lk)("div",I,[(0,n.Lk)("label",null,[a[33]||(a[33]=(0,n.eW)("Description")),(0,n.Lk)("span",{class:(0,r.C4)(["char-counter",{"near-limit":xe.description.length>90}])},"("+(0,r.v_)(xe.description.length)+"/100)",3)]),(0,n.bo)((0,n.Lk)("textarea",{"onUpdate:modelValue":a[4]||(a[4]=e=>xe.description=e),placeholder:"Describe your agent's purpose and capabilities. This will be the first message in a new chat with an agent.",onInput:a[5]||(a[5]=e=>be(e)),rows:"3"},null,544),[[s.Jo,xe.description]])]),(0,n.Lk)("div",E,[(0,n.Lk)("div",U,[(0,n.Lk)("button",{class:"toggle-options",onClick:a[6]||(a[6]=e=>ve.value=!ve.value)},(0,r.v_)(ve.value?"Hide Options":"Show API Options"),1),ve.value?((0,n.uX)(),(0,n.CE)("div",W,[(0,n.Lk)("div",K,[a[36]||(a[36]=(0,n.Lk)("label",null,"Your Telegram bot API Key",-1)),(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":a[7]||(a[7]=e=>xe.apiKey=e),type:"text",placeholder:"API Key is optional (soon)",disabled:!0},null,512),[[s.Jo,xe.apiKey]]),(0,n.Lk)("span",S,[a[34]||(a[34]=(0,n.eW)("If you'd like to connect your AI Agent with your Telegram bot. With zero code ")),de.apiKey?((0,n.uX)(),(0,n.CE)("span",F,". "+(0,r.v_)(de.apiKey),1)):(0,n.Q3)("",!0)]),(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":a[8]||(a[8]=e=>xe.botUsername=e),type:"text",placeholder:"Bot username without @",disabled:!0},null,512),[[s.Jo,xe.botUsername]]),(0,n.Lk)("span",R,[a[35]||(a[35]=(0,n.eW)("Required if you provide an API key ")),de.botUsername?((0,n.uX)(),(0,n.CE)("span",X,". "+(0,r.v_)(de.botUsername),1)):(0,n.Q3)("",!0)])])])):(0,n.Q3)("",!0)])])]),(0,n.Lk)("div",D,[a[46]||(a[46]=(0,n.Lk)("h2",null,"Agent Prompt",-1)),(0,n.Lk)("div",N,[(0,n.Lk)("div",J,[(0,n.Lk)("p",P,[a[38]||(a[38]=(0,n.eW)(" You are a")),a[39]||(a[39]=(0,n.Lk)("small",null," (required)",-1)),a[40]||(a[40]=(0,n.eW)()),(0,n.bo)((0,n.Lk)("textarea",{class:"prompt-input","onUpdate:modelValue":a[9]||(a[9]=e=>he.role=e),onInput:a[10]||(a[10]=e=>ye(e,"role",100)),placeholder:"e.g., crypto trading expert, NFT curator, blockchain analyst"},null,544),[[s.Jo,he.role]]),(0,n.Lk)("span",{class:(0,r.C4)(["char-counter",{"near-limit":he.role.length>80}])},"("+(0,r.v_)(he.role.length)+"/100)",3)]),de.role?((0,n.uX)(),(0,n.CE)("span",B,(0,r.v_)(de.role),1)):(0,n.Q3)("",!0),(0,n.Lk)("p",V,[a[41]||(a[41]=(0,n.eW)(" Your communication style is ")),(0,n.bo)((0,n.Lk)("textarea",{class:"prompt-input","onUpdate:modelValue":a[11]||(a[11]=e=>he.style=e),onInput:a[12]||(a[12]=e=>ye(e,"style",50)),placeholder:"e.g., professional and friendly, casual but informative"},null,544),[[s.Jo,he.style]]),(0,n.Lk)("span",{class:(0,r.C4)(["char-counter",{"near-limit":he.style.length>40}])},"("+(0,r.v_)(he.style.length)+"/50)",3)]),(0,n.Lk)("div",Y,[(0,n.Lk)("p",$,[a[42]||(a[42]=(0,n.eW)(" Your main task ")),(0,n.bo)((0,n.Lk)("textarea",{class:"prompt-input","onUpdate:modelValue":a[13]||(a[13]=e=>he.task1=e),onInput:a[14]||(a[14]=e=>ye(e,"task1",400)),placeholder:"Enter primary task. Write what task the agent should perform"},null,544),[[s.Jo,he.task1]]),(0,n.Lk)("span",{class:(0,r.C4)(["char-counter",{"near-limit":he.task1.length>320}])},"("+(0,r.v_)(he.task1.length)+"/400)",3)])]),(0,n.Lk)("p",q,[a[43]||(a[43]=(0,n.eW)(" Your expertise areas include ")),(0,n.bo)((0,n.Lk)("textarea",{class:"prompt-input","onUpdate:modelValue":a[15]||(a[15]=e=>he.expertise=e),onInput:a[16]||(a[16]=e=>ye(e,"expertise",100)),placeholder:"e.g., DeFi, NFTs, blockchain gaming"},null,544),[[s.Jo,he.expertise]]),(0,n.Lk)("span",{class:(0,r.C4)(["char-counter",{"near-limit":he.expertise.length>80}])},"("+(0,r.v_)(he.expertise.length)+"/100)",3)]),(0,n.Lk)("p",Q,[a[44]||(a[44]=(0,n.eW)(" Additional context ")),(0,n.bo)((0,n.Lk)("textarea",{class:"prompt-input","onUpdate:modelValue":a[17]||(a[17]=e=>he.context=e),onInput:a[18]||(a[18]=e=>ye(e,"context",300)),placeholder:"Any other relevant information about your agent"},null,544),[[s.Jo,he.context]]),(0,n.Lk)("span",{class:(0,r.C4)(["char-counter",{"near-limit":he.context.length>240}])},"("+(0,r.v_)(he.context.length)+"/300)",3)])]),(0,n.Lk)("div",O,[(0,n.Lk)("h3",null,[a[45]||(a[45]=(0,n.eW)("Prompt Preview ")),(0,n.Lk)("button",{class:"toggle-preview",onClick:a[19]||(a[19]=e=>ke.value=!ke.value)},(0,r.v_)(ke.value?"Hide":"Show"),1)]),ke.value?((0,n.uX)(),(0,n.CE)("div",z,(0,r.v_)(Le.value),1)):(0,n.Q3)("",!0)])])]),(0,n.Lk)("div",G,[a[51]||(a[51]=(0,n.Lk)("h2",null,"Advanced Settings",-1)),(0,n.Lk)("div",M,[a[47]||(a[47]=(0,n.Lk)("label",null,"Response Length",-1)),(0,n.Lk)("div",H,[(0,n.bo)((0,n.Lk)("input",{type:"range","onUpdate:modelValue":a[20]||(a[20]=e=>xe.settings.responseLength=e),min:"25",max:"250",step:"25"},null,512),[[s.Jo,xe.settings.responseLength]]),(0,n.Lk)("span",null,(0,r.v_)(xe.settings.responseLength)+" tokens",1)]),a[48]||(a[48]=(0,n.Lk)("span",{class:"setting-hint"},"Controls how long the agent's responses will be. Lower values (25-100) for concise answers, higher values (150-250) for more detailed explanations.",-1))]),(0,n.Lk)("div",j,[a[49]||(a[49]=(0,n.Lk)("label",null,"Temperature",-1)),(0,n.Lk)("div",Z,[(0,n.bo)((0,n.Lk)("input",{type:"range","onUpdate:modelValue":a[21]||(a[21]=e=>xe.settings.temperature=e),min:"0.1",max:"1.5",step:"0.1"},null,512),[[s.Jo,xe.settings.temperature]]),(0,n.Lk)("span",null,(0,r.v_)(xe.settings.temperature),1)]),a[50]||(a[50]=(0,n.Lk)("span",{class:"setting-hint"},"Controls the creativity of responses. Lower values (0.1-0.3) for more focused and deterministic responses, higher values (0.7-1.5) for more creative and varied outputs. Recommended values are between 0.5 and 1.0.",-1))])]),(0,n.Lk)("div",ee,[a[54]||(a[54]=(0,n.Lk)("h2",null,"Credits Policy",-1)),(0,n.Lk)("div",ae,[(0,n.Lk)("div",{class:(0,r.C4)(["policy-preview",{expanded:me.value}])},[a[53]||(a[53]=(0,n.Lk)("p",null,[(0,n.Lk)("strong",null,"🎁 Currently FREE for Everyone!"),(0,n.eW)(" During our promotional period, all agent interactions are completely free. To create an agent and make it available, you simply need to be a holder of 100,000 BITCAT tokens for each new agent.")],-1)),me.value?((0,n.uX)(),(0,n.CE)("div",{key:0,class:(0,r.C4)(["policy-details",{visible:me.value}])},a[52]||(a[52]=[(0,n.Fv)("<h3 data-v-3faf5be8>How Credits Work:</h3><ul data-v-3faf5be8><li data-v-3faf5be8><strong data-v-3faf5be8>Free Within BITCAT:</strong> Using your agent inside the BITCAT Universe is free. Your agent will be publicly available to everyone thanks to the Agent Tag(your_tag_agent) both on the site(AI agents list) and in the telegram(@BitcatAiBot your_tag_agent Hello) group </li><li data-v-3faf5be8><strong data-v-3faf5be8>External Usage:</strong> Connecting your agent to external platforms (Telegram groups, Twitter*) requires credits. You can buy credits for BITCAT tokens. <ul data-v-3faf5be8><li data-v-3faf5be8>Each interaction outside BITCAT Universe consumes credits</li><li data-v-3faf5be8>Credits must be available in your account before external usage</li><li data-v-3faf5be8>*Twitter integration coming soon</li></ul></li><li data-v-3faf5be8><strong data-v-3faf5be8>Future Plans:</strong> Credits will become a paid feature after the promotional period </li></ul>",2)]),2)):(0,n.Q3)("",!0)],2),(0,n.Lk)("button",{class:"toggle-policy",onClick:a[22]||(a[22]=e=>me.value=!me.value)},(0,r.v_)(me.value?"Show Less":"Show More"),1)])]),(0,n.Lk)("div",te,[Re.value?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("strong",ne,a[55]||(a[55]=[(0,n.eW)("Free for now. Just need to be holder of "),(0,n.Lk)("s",null,"100,000",-1),(0,n.eW)(),(0,n.Lk)("u",{style:{color:"#ff0000"}},"50,000",-1),(0,n.eW)(" BITCAT")]))),(0,l.R1)(c.A).getters.isAuthenticated?((0,n.uX)(),(0,n.CE)("button",{key:1,class:"create-button",onClick:Fe,disabled:!We.value||pe.value},(0,r.v_)(Re.value?"Update Agent":"Create Agent"),9,se)):((0,n.uX)(),(0,n.Wv)(o,{key:2,to:"/my",class:"create-button"},{default:(0,n.k6)((()=>a[56]||(a[56]=[(0,n.eW)(" Login first ")]))),_:1})),de.general?((0,n.uX)(),(0,n.CE)("span",re,(0,r.v_)(de.general),1)):(0,n.Q3)("",!0)])]),t.value?((0,n.uX)(),(0,n.CE)("div",le,[(0,n.Lk)("div",oe,[a[57]||(a[57]=(0,n.Lk)("h3",null,"AI Agent Avatars for Universe",-1)),(0,n.Lk)("div",ie,[((0,n.uX)(),(0,n.CE)(n.FK,null,(0,n.pI)(26,(e=>(0,n.Lk)("div",{key:e,class:(0,r.C4)(["avatar-option",{selected:ge.value==e}]),onClick:a=>Se(e)},[(0,n.Lk)("img",{src:Ke(e),alt:`avatar #${e}`},null,8,ue)],10,ce))),64))]),(0,n.Lk)("button",{class:"close-button",onClick:a[23]||(a[23]=e=>t.value=!1)},"Close")])])):(0,n.Q3)("",!0)])])}}},pe=t(1241);const de=(0,pe.A)(ge,[["__scopeId","data-v-3faf5be8"]]);var me=de}}]);
//# sourceMappingURL=140.a8746ef4.js.map