webpackJsonp([1,5],{"+kUY":function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=function(){function n(){}return n.fromDto=function(t){var l=new n;return l.question=t.question,l.answers=t.responses,l},n.empty=function(){return new n},n}()},"/2jI":function(n,t,l){"use strict";var u=l("Gvdl"),e=(l.n(u),l("M4fF")),r=(l.n(e),l("PJh5")),i=(l.n(r),l("Fzro")),o=l("+kUY");l.d(t,"a",function(){return s});var s=function(){function n(n){var t=this;this.http=n,this.questions=new Array,this.mapQuestions=function(n){var l=n.json();t.questions=e.map(l,function(n){return o.a.fromDto(n)}),t.answers=new Array(t.questions.length)},this.mapRoundComplete=function(n){return n.json()},this.mapRound=function(n){return n.json().round}}return n.prototype.start=function(){this.questionIndex=0,this.startTime=r()},n.prototype.hasStarted=function(){return Boolean(this.startTime)},n.prototype.next=function(){return this.questionIndex=Math.min(this.questions.length-1,this.questionIndex+1),this.questionIndex},n.prototype.isLast=function(){return this.questionIndex===this.questions.length-1},n.prototype.answer=function(n){this.answers[this.questionIndex]=n},n.prototype.stop=function(){var n=this;return this.http.get("/api/questionRound").flatMap(function(t){var l="Xavier",u=t.json().round,e={name:l,time:r().diff(n.startTime),responses:n.answers,questionsRound:u};return n.http.post("/api/responses",e)})},n.prototype.getQuestions=function(){return this.http.get("/api/questions").map(this.mapQuestions)},n.prototype.getQuestion=function(){return this.questions[this.questionIndex]},n.prototype.hasCompleted=function(){var n=new i.l;return n.append("name","Xavier"),this.http.get("/api/questionrounddone",{search:n}).map(this.mapRoundComplete).catch(function(){return u.Observable.throw("error")})},n.ctorParameters=function(){return[{type:i.i}]},n}()},"/KaM":function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=[".page[_ngcontent-%COMP%]{background:radial-gradient(circle,rgba(0,0,0,.1),rgba(0,0,0,.5))}.page[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{position:absolute;top:0;right:0;bottom:0;left:0;background-image:url(/assets/images/demol.png);background-repeat:no-repeat;background-position:50%;opacity:.4}"]},"/fcW":function(n,t){function l(n){throw new Error("Cannot find module '"+n+"'.")}l.keys=function(){return[]},l.resolve=l,n.exports=l,l.id="/fcW"},1:function(n,t,l){n.exports=l("x35b")},"1A80":function(n,t,l){"use strict";function u(n){return r._25(0,[(n()(),r._26(0,null,null,4,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),r._27(null,["\n    "])),(n()(),r._26(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r._28(212992,null,0,i.y,[i.q,r.W,r.e,[8,null],r.T],null,null),(n()(),r._27(null,["\n"]))],function(n,t){n(t,3,0)},null)}function e(n){return r._25(0,[(n()(),r._26(0,null,null,1,"dmmb-app-root",[],null,null,null,u,a)),r._28(49152,null,0,o.a,[],null,null)],null,null)}var r=l("3j3K"),i=l("5oXY"),o=l("YWx4");l.d(t,"a",function(){return c});var s=[],a=r._24({encapsulation:2,styles:s,data:{}}),c=r._29("dmmb-app-root",o.a,e,{},{},[])},"2QE3":function(n,t,l){"use strict";var u=l("5oXY"),e=l("xBD6");l.d(t,"a",function(){return r});var r=function(){function n(n,t){this.router=n,this.userService=t}return n.prototype.canActivate=function(){return!!this.userService.isAdmin()||(this.router.navigate([""]),!1)},n.ctorParameters=function(){return[{type:u.a},{type:e.a}]},n}()},"31mI":function(n,t,l){"use strict";function u(n){return o._25(0,[(n()(),o._26(0,null,null,1,"div",[],null,null,null,null,null)),(n()(),o._27(null,["Je antwoorden zijn verstuurd!"]))],null,null)}function e(n){return o._25(0,[(n()(),o._26(0,null,null,1,"div",[],null,null,null,null,null)),(n()(),o._27(null,["Je hebt de vragen al beantwoord!"]))],null,null)}function r(n){return o._25(0,[(n()(),o._30(16777216,null,null,1,null,u)),o._28(16384,null,0,s.l,[o.W,o._7],{ngIf:[0,"ngIf"]},null),(n()(),o._27(null,["\n"])),(n()(),o._30(16777216,null,null,1,null,e)),o._28(16384,null,0,s.l,[o.W,o._7],{ngIf:[0,"ngIf"]},null)],function(n,t){var l=t.component;n(t,1,0,!l.done),n(t,4,0,l.done)},null)}function i(n){return o._25(0,[(n()(),o._26(0,null,null,1,"dmmb-end",[],null,null,null,r,d)),o._28(114688,null,0,a.a,[c.b],null,null)],function(n,t){n(t,1,0)},null)}var o=l("3j3K"),s=l("2Je8"),a=l("qgg2"),c=l("5oXY");l.d(t,"a",function(){return p});var f=[],d=o._24({encapsulation:2,styles:f,data:{}}),p=o._29("dmmb-end",a.a,i,{},{},[])},"4GQj":function(n,t,l){"use strict";var u=l("/2jI");l.d(t,"a",function(){return e});var e=function(){function n(n){this.questionsService=n}return n.prototype.ngOnInit=function(){this.questionsService.getQuestions().subscribe()},n.ctorParameters=function(){return[{type:u.a}]},n}()},AB5K:function(n,t,l){"use strict";function u(n){return i._25(0,[(n()(),i._26(0,null,null,3,"div",[["class","page page-center"]],[[24,"@result",0]],[[null,"@result.done"]],function(n,t,l){var u=!0,e=n.component;if("@result.done"===t){u=!1!==e.onAnimationEnd()&&u}return u},null,null)),(n()(),i._27(null,["\n    "])),(n()(),i._26(0,null,null,0,"div",[["class","logo"]],null,null,null,null,null)),(n()(),i._27(null,["\n"]))],null,function(n,t){n(t,0,0,t.component.result)})}function e(n){return i._25(0,[(n()(),i._26(0,null,null,1,"dmmb-elimination-result",[],null,null,null,u,c)),i._28(114688,null,0,o.a,[s.b,s.a],null,null)],function(n,t){n(t,1,0)},null)}var r=l("/KaM"),i=l("3j3K"),o=l("x5C8"),s=l("5oXY");l.d(t,"a",function(){return f});var a=[r.a],c=i._24({encapsulation:0,styles:a,data:{animation:[{type:7,name:"result",definitions:[{type:0,name:"failed",styles:{type:6,styles:{backgroundColor:"rgba(255, 0, 0, 0.8)"},offset:null}},{type:0,name:"passed",styles:{type:6,styles:{backgroundColor:"rgba(102, 255, 102, .8)"},offset:null}},{type:1,expr:"void => failed",animation:{type:4,styles:{type:6,styles:{backgroundColor:"rgba(255, 0, 0, 0.8)"},offset:null},timings:".1s ease-in"},options:null},{type:1,expr:"void => passed",animation:{type:4,styles:{type:6,styles:{backgroundColor:"rgba(102, 255, 102, .8)"},offset:null},timings:".1s ease-in"},options:null}],options:{}}]}}),f=i._29("dmmb-elimination-result",o.a,e,{},{},[])},ANR9:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=function(){function n(){}return n}()},Basu:function(n,t,l){"use strict";function u(n){return r._25(0,[(n()(),r._26(0,null,null,1,"div",[],null,[[null,"click"]],function(n,t,l){var u=!0,e=n.component;if("click"===t){u=!1!==e.start()&&u}return u},null,null)),(n()(),r._27(null,["\n    BEGIN\n"]))],null,null)}function e(n){return r._25(0,[(n()(),r._26(0,null,null,1,"dmmb-start",[],null,null,null,u,c)),r._28(49152,null,0,i.a,[o.a,s.a],null,null)],null,null)}var r=l("3j3K"),i=l("uVNX"),o=l("/2jI"),s=l("5oXY");l.d(t,"a",function(){return f});var a=[],c=r._24({encapsulation:2,styles:a,data:{}}),f=r._29("dmmb-start",i.a,e,{},{},[])},Cd9f:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=function(){function n(){}return n}()},F5VT:function(n,t,l){"use strict";var u=l("1APj"),e=(l.n(u),l("h0qH")),r=(l.n(e),l("6Yye")),i=(l.n(r),l("tDJK")),o=(l.n(i),l("+pb+")),s=(l.n(o),l("HcJ8"));l.n(s)},FFBQ:function(n,t,l){"use strict";var u=l("5oXY"),e=l("z3+g");l.d(t,"a",function(){return r});var r=function(){function n(n,t){this.eliminationService=n,this.router=t}return n.prototype.onEnterName=function(n){var t=this;this.eliminationService.getIsPlayerEliminated(n).subscribe(function(n){t.router.navigate(["elimination/result",{eliminated:n}])})},n.ctorParameters=function(){return[{type:e.a},{type:u.a}]},n}()},GMmW:function(n,t,l){"use strict";function u(n){return r._25(0,[(n()(),r._26(0,null,null,4,"div",[["class","page page-fade"]],null,null,null,null,null)),(n()(),r._27(null,["\n    "])),(n()(),r._26(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r._28(212992,null,0,i.y,[i.q,r.W,r.e,[8,null],r.T],null,null),(n()(),r._27(null,["\n"]))],function(n,t){n(t,3,0)},null)}function e(n){return r._25(0,[(n()(),r._26(0,null,null,1,"dmmb-questions",[],null,null,null,u,c)),r._28(114688,null,0,o.a,[s.a],null,null)],function(n,t){n(t,1,0)},null)}var r=l("3j3K"),i=l("5oXY"),o=l("4GQj"),s=l("/2jI");l.d(t,"a",function(){return f});var a=[],c=r._24({encapsulation:2,styles:a,data:{}}),f=r._29("dmmb-questions",o.a,e,{},{},[])},IKYl:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=["h1[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:30vh;padding:5vh 0;margin-bottom:0;font-size:5vh}form[_ngcontent-%COMP%]{height:70vh;padding-bottom:15vh}form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:4vh}form[_ngcontent-%COMP%]   h3.selected[_ngcontent-%COMP%]{background-color:#48b398}form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]{padding:0}.button[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:2vh;width:60%;margin:auto;background-color:#fff;color:#000}"]},Iksp:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=function(){function n(){}return n}()},KJ3A:function(n,t,l){"use strict";function u(n){return s._25(0,[(n()(),s._26(0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(n()(),s._27(null,["\n            "])),(n()(),s._26(0,null,null,4,"div",[],[[8,"className",0]],[[null,"click"]],function(n,t,l){var u=!0,e=n.component;if("click"===t){u=!1!==e.select(n.context.index)&&u}return u},null,null)),(n()(),s._27(null,["\n                "])),(n()(),s._26(0,null,null,1,"h3",[],[[2,"selected",null]],null,null,null,null)),(n()(),s._27(null,["",""])),(n()(),s._27(null,["\n            "])),(n()(),s._27(null,["\n        "]))],null,function(n,t){var l=t.component;n(t,2,0,s._31(1,"col-",l.columnSize,"")),n(t,4,0,l.isSelected(t.context.index)),n(t,5,0,t.context.$implicit)})}function e(n){return s._25(0,[(n()(),s._26(0,null,null,1,"h3",[["class","button"]],null,[[null,"click"]],function(n,t,l){var u=!0,e=n.component;if("click"===t){u=!1!==e.next()&&u}return u},null,null)),(n()(),s._27(null,["VOLGENDE"]))],null,null)}function r(n){return s._25(0,[(n()(),s._26(0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(n()(),s._27(null,["\n    ","\n"])),(n()(),s._27(null,["\n"])),(n()(),s._26(0,null,null,14,"div",[],null,null,null,null,null)),(n()(),s._27(null,["\n    "])),(n()(),s._26(0,null,null,8,"form",[["class","container"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,t,l){var u=!0;if("submit"===t){u=!1!==s._32(n,7).onSubmit(l)&&u}if("reset"===t){u=!1!==s._32(n,7).onReset()&&u}return u},null,null)),s._28(16384,null,0,a.d,[],null,null),s._28(16384,null,0,a.e,[[8,null],[8,null]],null,null),s._33(2048,null,a.f,null,[a.e]),s._28(16384,null,0,a.g,[a.f],null,null),(n()(),s._27(null,["\n        "])),(n()(),s._30(16777216,null,null,1,null,u)),s._28(802816,null,0,c.m,[s.W,s._7,s.l],{ngForOf:[0,"ngForOf"]},null),(n()(),s._27(null,["\n    "])),(n()(),s._27(null,["\n    "])),(n()(),s._30(16777216,null,null,1,null,e)),s._28(16384,null,0,c.l,[s.W,s._7],{ngIf:[0,"ngIf"]},null),(n()(),s._27(null,["\n"]))],function(n,t){var l=t.component;n(t,12,0,l.question.answers),n(t,16,0,l.hasSelection)},function(n,t){n(t,1,0,t.component.question.question),n(t,5,0,s._32(t,9).ngClassUntouched,s._32(t,9).ngClassTouched,s._32(t,9).ngClassPristine,s._32(t,9).ngClassDirty,s._32(t,9).ngClassValid,s._32(t,9).ngClassInvalid,s._32(t,9).ngClassPending)})}function i(n){return s._25(0,[(n()(),s._26(0,null,null,1,"dmmb-question",[],null,null,null,r,h)),s._28(49152,null,0,f.a,[d.b,d.a,p.a],null,null)],null,null)}var o=l("IKYl"),s=l("3j3K"),a=l("NVOs"),c=l("2Je8"),f=l("yy9k"),d=l("5oXY"),p=l("/2jI");l.d(t,"a",function(){return v});var m=[o.a],h=s._24({encapsulation:0,styles:m,data:{}}),v=s._29("dmmb-question",f.a,i,{},{},[])},MaOD:function(n,t,l){"use strict";var u=l("5oXY"),e=l("xBD6");l.d(t,"a",function(){return r});var r=function(){function n(n,t){this.router=n,this.userService=t}return n.prototype.canActivate=function(){return!!this.userService.isUserAvailable()||(this.router.navigate(["./login"]),!1)},n.ctorParameters=function(){return[{type:u.a},{type:e.a}]},n}()},OeS0:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=[".form-group[_ngcontent-%COMP%]{margin:10%}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{text-align:center}"]},P4Qf:function(n,t,l){"use strict";var u=l("5oXY"),e=l("/2jI");l.d(t,"a",function(){return r});var r=function(){function n(n,t){this.router=n,this.questionsService=t}return n.prototype.canActivate=function(){return!!this.questionsService.hasStarted()||(this.router.navigate(["questions/start"]),!1)},n.ctorParameters=function(){return[{type:u.a},{type:e.a}]},n}()},Q6QH:function(n,t,l){"use strict";var u=l("5oXY"),e=l("xBD6");l.d(t,"a",function(){return r});var r=function(){function n(n,t){this.router=n,this.userService=t}return n.prototype.canActivate=function(){return!this.userService.isUserAvailable()||(this.router.navigate([""]),!1)},n.ctorParameters=function(){return[{type:u.a},{type:e.a}]},n}()},QCYw:function(n,t,l){"use strict";function u(n){return i._25(0,[(n()(),i._26(0,null,null,16,"div",[["class","page page-fade"]],null,null,null,null,null)),(n()(),i._27(null,["\n    "])),(n()(),i._26(0,null,null,13,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,t,l){var u=!0;if("submit"===t){u=!1!==i._32(n,4).onSubmit(l)&&u}if("reset"===t){u=!1!==i._32(n,4).onReset()&&u}return u},null,null)),i._28(16384,null,0,o.d,[],null,null),i._28(16384,null,0,o.e,[[8,null],[8,null]],null,null),i._33(2048,null,o.f,null,[o.e]),i._28(16384,null,0,o.g,[o.f],null,null),(n()(),i._27(null,["\n        "])),(n()(),i._26(0,null,null,6,"div",[["class","form-group row"]],null,null,null,null,null)),(n()(),i._27(null,["\n            "])),(n()(),i._26(0,null,null,1,"label",[["class","col-12"]],null,null,null,null,null)),(n()(),i._27(null,["Naam: "])),(n()(),i._27(null,["\n            "])),(n()(),i._26(0,[["name",1]],null,0,"input",[["autocomplete","off"],["class","col-12"],["type","text"]],null,[[null,"keyup.enter"]],function(n,t,l){var u=!0,e=n.component;if("keyup.enter"===t){u=!1!==e.login(i._32(n,13).value)&&u}return u},null,null)),(n()(),i._27(null,["\n        "])),(n()(),i._27(null,["\n    "])),(n()(),i._27(null,["\n"]))],null,function(n,t){n(t,2,0,i._32(t,6).ngClassUntouched,i._32(t,6).ngClassTouched,i._32(t,6).ngClassPristine,i._32(t,6).ngClassDirty,i._32(t,6).ngClassValid,i._32(t,6).ngClassInvalid,i._32(t,6).ngClassPending)})}function e(n){return i._25(0,[(n()(),i._26(0,null,null,1,"dmmb-login",[],null,null,null,u,c)),i._28(49152,null,0,s.a,[],null,null)],null,null)}var r=l("OeS0"),i=l("3j3K"),o=l("NVOs"),s=l("iHe/");l.d(t,"a",function(){return f});var a=[r.a],c=i._24({encapsulation:0,styles:a,data:{}}),f=i._29("dmmb-login",s.a,e,{},{},[])},VUE6:function(n,t,l){"use strict";function u(n){return r._25(0,[(n()(),r._26(0,null,null,4,"div",[["class","page-container"]],null,null,null,null,null)),(n()(),r._27(null,["\n    "])),(n()(),r._26(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r._28(212992,null,0,i.y,[i.q,r.W,r.e,[8,null],r.T],null,null),(n()(),r._27(null,["\n"]))],function(n,t){n(t,3,0)},null)}function e(n){return r._25(0,[(n()(),r._26(0,null,null,1,"dmmb-main",[],null,null,null,u,a)),r._28(49152,null,0,o.a,[],null,null)],null,null)}var r=l("3j3K"),i=l("5oXY"),o=l("ndwB");l.d(t,"a",function(){return c});var s=[],a=r._24({encapsulation:2,styles:s,data:{}}),c=r._29("dmmb-main",o.a,e,{},{},[])},WHE4:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=function(){function n(){}return n}()},YWx4:function(n,t,l){"use strict";l("F5VT");l.d(t,"a",function(){return u});var u=function(){function n(){}return n}()},hZIH:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=function(){function n(){}return n}()},hf64:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=function(){function n(){}return n}()},"iHe/":function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=function(){function n(){}return n.prototype.login=function(n){},n.ctorParameters=function(){return[]},n}()},kZql:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u={production:!0}},kke6:function(n,t,l){"use strict";var u=l("3j3K"),e=l("Iksp"),r=l("YWx4"),i=l("VUE6"),o=l("xt2P"),s=l("AB5K"),a=l("QCYw"),c=l("GMmW"),f=l("Basu"),d=l("KJ3A"),p=l("31mI"),m=l("1A80"),h=l("2Je8"),v=l("Qbdm"),g=l("1GJ2"),_=l("KN8t"),j=l("Um43"),y=l("NVOs"),b=l("Fzro"),q=l("xBD6"),k=l("2QE3"),x=l("5oXY"),w=l("MaOD"),P=l("Q6QH"),C=l("/2jI"),O=l("P4Qf"),z=l("z3+g"),S=l("ndwB"),I=l("FFBQ"),M=l("x5C8"),A=l("iHe/"),X=l("4GQj"),F=l("uVNX"),E=l("yy9k"),B=l("qgg2"),Y=l("hZIH"),N=l("WHE4"),K=l("qrkX"),Q=l("ANR9"),V=l("hf64"),D=l("Cd9f");l.d(t,"a",function(){return U});var U=u.b(e.a,[r.a],function(n){return u.c([u.d(512,u.e,u.f,[[8,[i.a,o.a,s.a,a.a,c.a,f.a,d.a,p.a,m.a]],[3,u.e],u.g]),u.d(5120,u.h,u.i,[[3,u.h]]),u.d(4608,h.a,h.b,[u.h]),u.d(5120,u.j,u.k,[]),u.d(5120,u.l,u.m,[]),u.d(5120,u.n,u.o,[]),u.d(4608,v.b,v.c,[v.d]),u.d(6144,u.p,null,[v.b]),u.d(4608,v.e,v.f,[]),u.d(5120,v.g,function(n,t,l,u){return[new v.h(n),new v.i(t),new v.j(l,u)]},[v.d,v.d,v.d,v.e]),u.d(4608,v.k,v.k,[v.g,u.q]),u.d(135680,v.l,v.l,[v.d]),u.d(4608,v.m,v.m,[v.k,v.l]),u.d(5120,g.a,_.a,[]),u.d(5120,g.b,_.b,[]),u.d(4608,g.c,_.c,[g.a,g.b]),u.d(5120,u.r,_.d,[v.m,g.c,u.q]),u.d(6144,v.n,null,[v.l]),u.d(4608,u.s,u.s,[u.q]),u.d(4608,v.o,v.o,[v.d]),u.d(4608,v.p,v.p,[v.d]),u.d(4608,j.a,_.e,[u.r]),u.d(4608,y.a,y.a,[]),u.d(4608,b.a,b.a,[]),u.d(4608,b.b,b.c,[]),u.d(5120,b.d,b.e,[]),u.d(4608,b.f,b.f,[b.a,b.b,b.d]),u.d(4608,b.g,b.h,[]),u.d(5120,b.i,b.j,[b.f,b.g]),u.d(4608,q.a,q.a,[]),u.d(4608,k.a,k.a,[x.a,q.a]),u.d(4608,w.a,w.a,[x.a,q.a]),u.d(4608,P.a,P.a,[x.a,q.a]),u.d(4608,C.a,C.a,[b.i]),u.d(4608,O.a,O.a,[x.a,C.a]),u.d(4608,z.a,z.a,[b.i]),u.d(5120,x.b,x.c,[x.a]),u.d(4608,x.d,x.d,[]),u.d(6144,x.e,null,[x.d]),u.d(135680,x.f,x.f,[x.a,u.t,u.u,u.v,x.e]),u.d(4608,x.g,x.g,[]),u.d(5120,x.h,x.i,[x.j]),u.d(5120,u.w,function(n){return[n]},[x.h]),u.d(512,h.c,h.c,[]),u.d(1024,u.x,v.q,[]),u.d(1024,u.y,function(){return[x.k()]},[]),u.d(512,x.j,x.j,[u.v]),u.d(1024,u.z,function(n,t,l){return[v.r(n,t),x.l(l)]},[[2,v.s],[2,u.y],x.j]),u.d(512,u.A,u.A,[[2,u.z]]),u.d(131584,u.B,u.B,[u.q,u.C,u.v,u.x,u.e,u.A]),u.d(2048,u.D,null,[u.B]),u.d(512,u.E,u.E,[u.D]),u.d(512,v.t,v.t,[[3,v.t]]),u.d(512,_.f,_.f,[]),u.d(512,y.b,y.b,[]),u.d(512,y.c,y.c,[]),u.d(512,b.k,b.k,[]),u.d(1024,x.m,x.n,[[3,x.a]]),u.d(512,x.o,x.p,[]),u.d(512,x.q,x.q,[]),u.d(256,x.r,{},[]),u.d(1024,h.d,x.s,[h.e,[2,h.f],x.r]),u.d(512,h.g,h.g,[h.d]),u.d(512,u.u,u.u,[]),u.d(512,u.t,u.F,[u.u,[2,u.G]]),u.d(1024,x.t,function(){return[[{path:"",component:S.a,children:[{path:"elimination",component:I.a,canActivate:[w.a,k.a]},{path:"elimination/result",component:M.a,canActivate:[w.a,k.a]},{path:"login",component:A.a,canActivate:[P.a]},{path:"",redirectTo:"questions/start",pathMatch:"full"},{path:"questions",component:X.a,children:[{path:"",redirectTo:"start",pathMatch:"full"},{path:"start",component:F.a},{path:"question/:id",component:E.a,canActivate:[O.a]},{path:"end",component:B.a}],canActivate:[w.a]}]}],[{path:"**",pathMatch:"full",redirectTo:""}]]},[]),u.d(1024,x.a,x.u,[u.D,x.o,x.q,h.g,u.v,u.t,u.u,x.t,x.r,[2,x.v],[2,x.w]]),u.d(512,x.x,x.x,[[2,x.m],[2,x.a]]),u.d(512,Y.a,Y.a,[]),u.d(512,N.a,N.a,[]),u.d(512,K.a,K.a,[]),u.d(512,Q.a,Q.a,[]),u.d(512,V.a,V.a,[]),u.d(512,D.a,D.a,[]),u.d(512,e.a,e.a,[])])})},ndwB:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=function(){function n(){}return n.ctorParameters=function(){return[]},n}()},qgg2:function(n,t,l){"use strict";var u=l("5oXY");l.d(t,"a",function(){return e});var e=function(){function n(n){this.route=n,this.done=!1}return n.prototype.ngOnInit=function(){var n=this.route.snapshot.params.done;n&&(this.done=JSON.parse(n))},n.ctorParameters=function(){return[{type:u.b}]},n}()},qrkX:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=function(){function n(){}return n}()},uVNX:function(n,t,l){"use strict";var u=l("5oXY"),e=l("/2jI");l.d(t,"a",function(){return r});var r=function(){function n(n,t){this.questionsService=n,this.router=t}return n.prototype.start=function(){var n=this;this.questionsService.hasCompleted().subscribe(function(){n.questionsService.start(),n.router.navigate(["/questions/question/0"])},function(){n.router.navigate(["/questions/end",{done:!0}])})},n.ctorParameters=function(){return[{type:e.a},{type:u.a}]},n}()},uslO:function(n,t,l){function u(n){return l(e(n))}function e(n){var t=r[n];if(!(t+1))throw new Error("Cannot find module '"+n+"'.");return t}var r={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};u.keys=function(){return Object.keys(r)},u.resolve=e,n.exports=u,u.id="uslO"},x35b:function(n,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=l("3j3K"),e=l("kZql"),r=l("Qbdm"),i=l("kke6");e.a.production&&l.i(u.a)(),l.i(r.a)().bootstrapModuleFactory(i.a)},x5C8:function(n,t,l){"use strict";var u=l("5oXY");l.d(t,"a",function(){return e});var e=function(){function n(n,t){this.route=n,this.router=t,this.result="",this.goBackTimer=3e3}return n.prototype.ngOnInit=function(){var n=JSON.parse(this.route.snapshot.params.eliminated);this.animate(n)},n.prototype.onAnimationEnd=function(){var n=this;setTimeout(function(){return n.router.navigate(["elimination"])},this.goBackTimer)},n.prototype.animate=function(n){if(n)return void(this.result="failed");this.result="passed"},n.ctorParameters=function(){return[{type:u.b},{type:u.a}]},n}()},xBD6:function(n,t,l){"use strict";l.d(t,"a",function(){return u});var u=function(){function n(){}return n.prototype.isUserAvailable=function(){return!0},n.prototype.isAdmin=function(){return!0},n.ctorParameters=function(){return[]},n}()},xt2P:function(n,t,l){"use strict";function u(n){return r._25(0,[(n()(),r._26(0,null,null,18,"div",[["class","page page-center page-fade"]],null,null,null,null,null)),(n()(),r._27(null,["\n    "])),(n()(),r._26(0,null,null,0,"i",[["class","page-icon"]],null,null,null,null,null)),(n()(),r._27(null,["\n    "])),(n()(),r._26(0,null,null,13,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,t,l){var u=!0;if("submit"===t){u=!1!==r._32(n,6).onSubmit(l)&&u}if("reset"===t){u=!1!==r._32(n,6).onReset()&&u}return u},null,null)),r._28(16384,null,0,i.d,[],null,null),r._28(16384,null,0,i.e,[[8,null],[8,null]],null,null),r._33(2048,null,i.f,null,[i.e]),r._28(16384,null,0,i.g,[i.f],null,null),(n()(),r._27(null,["\n        "])),(n()(),r._26(0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),r._27(null,["\n            "])),(n()(),r._26(0,null,null,1,"label",[],null,null,null,null,null)),(n()(),r._27(null,["Naam: "])),(n()(),r._27(null,["\n            "])),(n()(),r._26(0,[["name",1]],null,0,"input",[["autocomplete","off"],["type","text"]],null,[[null,"keyup.enter"]],function(n,t,l){var u=!0,e=n.component;if("keyup.enter"===t){u=!1!==e.onEnterName(r._32(n,15).value)&&u}return u},null,null)),(n()(),r._27(null,["\n        "])),(n()(),r._27(null,["\n    "])),(n()(),r._27(null,["\n"]))],null,function(n,t){n(t,4,0,r._32(t,8).ngClassUntouched,r._32(t,8).ngClassTouched,r._32(t,8).ngClassPristine,r._32(t,8).ngClassDirty,r._32(t,8).ngClassValid,r._32(t,8).ngClassInvalid,r._32(t,8).ngClassPending)})}function e(n){return r._25(0,[(n()(),r._26(0,null,null,1,"dmmb-elimination",[],null,null,null,u,f)),r._28(49152,null,0,o.a,[s.a,a.a],null,null)],null,null)}var r=l("3j3K"),i=l("NVOs"),o=l("FFBQ"),s=l("z3+g"),a=l("5oXY");l.d(t,"a",function(){return d});var c=[],f=r._24({encapsulation:2,styles:c,data:{}}),d=r._29("dmmb-elimination",o.a,e,{},{},[])},yy9k:function(n,t,l){"use strict";var u=l("5oXY"),e=l("+kUY"),r=l("/2jI");l.d(t,"a",function(){return i});var i=function(){function n(n,t,l){var u=this;this.route=n,this.router=t,this.questionsService=l,this.question=e.a.empty(),this.selectedAnswer=-1,this.columnSize=12,this.route.params.subscribe(function(){u.question=u.questionsService.getQuestion()})}return n.prototype.isSelected=function(n){return this.selectedAnswer==n},Object.defineProperty(n.prototype,"hasSelection",{get:function(){return-1!==this.selectedAnswer},enumerable:!0,configurable:!0}),n.prototype.select=function(n){this.selectedAnswer=n},n.prototype.next=function(){var n=this;if(this.questionsService.answer(this.selectedAnswer),this.questionsService.isLast())this.questionsService.stop().subscribe(function(){n.router.navigate(["questions/end"])});else{var t=this.questionsService.next();this.router.navigate(["questions/question/"+t])}},n.ctorParameters=function(){return[{type:u.b},{type:u.a},{type:r.a}]},n}()},"z3+g":function(n,t,l){"use strict";var u=l("Fzro");l.d(t,"a",function(){return e});var e=function(){function n(n){this.http=n}return n.prototype.getIsPlayerEliminated=function(n){return this.http.get("/api/elimination").map(function(n){return n.json()}).map(function(t){return-1!==t.indexOf(n)})},n.ctorParameters=function(){return[{type:u.i}]},n}()}},[1]);