webpackJsonp([1],{"4rMW":function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),a=s("zL8q"),r=s.n(a),o=(s("tvR6"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]});var l=s("VU/8")({name:"App"},o,!1,function(e){s("gsu9")},null,null).exports,c=s("/ocq"),i=s("Xxa5"),u=s.n(i),d=s("exGp"),p=s.n(d),j=s("mtWM"),m=s.n(j),f=s("BO1k"),h=s.n(f),v=s("PJh5"),b=s.n(v),k={name:"ReportForm",watch:{show:function(){this.show||this.close()}},data:function(){return{title:"Neue Meldung",show:!0,location:null,community_id:null,infected:0,cured:0,dead:0}},methods:{close:function(){this.$emit("pp-close")},save:function(){var e=this;return p()(u.a.mark(function t(){var s,n,a,r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(s={report_date:b()(new Date).format("YYYY-MM-DD"),origin:"web-ui",community_id:e.community_id,infected:e.infected,cured:e.cured,dead:e.dead},t.prev=1,s.community_id){t.next=4;break}throw new Error("Bitte Gemeinde/Landkreis wählen");case 4:return t.next=6,m.a.post(e.backendEndpoint+"api/reports",s);case 6:if(n=t.sent,a=n.status,r=n.data,200!==a){t.next=14;break}e.$emit("data-update",r),e.close(),t.next=15;break;case 14:throw new Error("Fehler beim anlegen der Meldung");case 15:t.next=21;break;case 17:return t.prev=17,t.t0=t.catch(1),e.$notify({type:"error",title:"Fehler",message:t.t0.message}),t.abrupt("return");case 21:case"end":return t.stop()}},t,e,[[1,17]])}))()},querySearch:function(e,t){var s=this;return p()(u.a.mark(function n(){var a,r,o,l,c,i,d,p,j,f;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a=s.backendEndpoint+"api/locations",e&&(a+="?q="+encodeURIComponent(e)),n.next=5,m.a.get(a);case 5:if(r=n.sent,o=r.status,l=r.data,200===o){n.next=11;break}return t([]),n.abrupt("return");case 11:for(c=!0,i=!1,d=void 0,n.prev=14,p=h()(l);!(c=(j=p.next()).done);c=!0)(f=j.value).value=f.type+" "+f.community+" ("+f.state+")";n.next=22;break;case 18:n.prev=18,n.t0=n.catch(14),i=!0,d=n.t0;case 22:n.prev=22,n.prev=23,!c&&p.return&&p.return();case 25:if(n.prev=25,!i){n.next=28;break}throw d;case 28:return n.finish(25);case 29:return n.finish(22);case 30:t(l),n.next=37;break;case 33:n.prev=33,n.t1=n.catch(0),console.log(n.t1),t([]);case 37:case"end":return n.stop()}},n,s,[[0,33],[14,18,22,30],[23,,25,29]])}))()},handleSelect:function(e){this.community_id=e.community_id}}},w={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dialog",{attrs:{title:e.title,visible:e.show,"append-to-body":""},on:{"update:visible":function(t){e.show=t},close:e.close}},[s("el-row",[s("el-col",{staticClass:"form-label",attrs:{span:10}},[e._v("Gemeinde/Landkreis")]),e._v(" "),s("el-col",{attrs:{span:14}},[s("el-autocomplete",{staticStyle:{width:"100%"},attrs:{"fetch-suggestions":e.querySearch,placeholder:"Gemeinde/Landkreis wählen"},on:{select:e.handleSelect},model:{value:e.location,callback:function(t){e.location=t},expression:"location"}})],1)],1),e._v(" "),s("el-row",[s("el-col",{staticClass:"form-label",attrs:{span:10}},[e._v("Infiziert")]),e._v(" "),s("el-col",{attrs:{span:14}},[s("el-input-number",{attrs:{min:0},model:{value:e.infected,callback:function(t){e.infected=t},expression:"infected"}})],1)],1),e._v(" "),s("el-row",[s("el-col",{staticClass:"form-label",attrs:{span:10}},[e._v("Geheilt")]),e._v(" "),s("el-col",{attrs:{span:14}},[s("el-input-number",{attrs:{min:0},model:{value:e.cured,callback:function(t){e.cured=t},expression:"cured"}})],1)],1),e._v(" "),s("el-row",[s("el-col",{staticClass:"form-label",attrs:{span:10}},[e._v("Tot")]),e._v(" "),s("el-col",{attrs:{span:14}},[s("el-input-number",{attrs:{min:0},model:{value:e.dead,callback:function(t){e.dead=t},expression:"dead"}})],1)],1),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.close}},[e._v("Abbrechen")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("Einreichen")])],1)],1)},staticRenderFns:[]};var y={components:{ReportForm:s("VU/8")(k,w,!1,function(e){s("YPHD")},"data-v-9519e0e4",null).exports},name:"Reports",data:function(){return{form:{display:!1},reports:[]}},created:function(){this.load()},methods:{load:function(){var e=this;return p()(u.a.mark(function t(){var s,n,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.reports=[],t.next=4,m.a.get(e.backendEndpoint+"api/reports");case 4:if(s=t.sent,n=s.status,a=s.data,200===n){t.next=10;break}return e.$notify({type:"error",title:"Fehler",message:"Fehler beim laden der Daten"}),t.abrupt("return");case 10:e.reports=a||[],t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}},t,e,[[0,13]])}))()}}},g={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"headline"},[s("h1",[e._v("Meldungen")]),e._v(" "),s("el-button",{on:{click:function(t){e.form.display=!0}}},[e._v("Neue Meldung")])],1),e._v(" "),s("div",[s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.reports,"empty-text":"Keine Meldungen"}},[s("el-table-column",{attrs:{prop:"report_date",label:"Gemeldet am",width:"180"}}),e._v(" "),s("el-table-column",{attrs:{prop:"community",label:"Gemeinde/Landkreis",width:"380"}}),e._v(" "),s("el-table-column",{attrs:{prop:"community_id",label:"Schlüssel",width:"380"}}),e._v(" "),s("el-table-column",{attrs:{prop:"infected",label:"Infiziert"}}),e._v(" "),s("el-table-column",{attrs:{prop:"cured",label:"Geheilt"}}),e._v(" "),s("el-table-column",{attrs:{prop:"dead",label:"Tot"}})],1),e._v(" "),e.form.display?s("ReportForm",{on:{"pp-close":function(t){e.form.display=!1},"data-update":function(t){return e.load()}}}):e._e()],1)])},staticRenderFns:[]};var x=s("VU/8")(y,g,!1,function(e){s("4rMW")},"data-v-ca38c884",null).exports;n.default.use(c.a);var z=new c.a({routes:[{path:"/",name:"Reports",component:x},{path:"/reports",name:"Reports",component:x},{path:"/reports/:community_id",name:"Reports",component:x}]});n.default.use(r.a),window.webpackHotUpdate?n.default.prototype.backendEndpoint="//localhost:8080/":n.default.prototype.backendEndpoint="/",new n.default({el:"#app",router:z,components:{App:l},template:"<App/>"})},YPHD:function(e,t){},gsu9:function(e,t){},tvR6:function(e,t){},uslO:function(e,t,s){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(e){return s(r(e))}function r(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.dc9411ed200859c691df.js.map