(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{XT3z:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),o=u("AytR");class t{constructor(l,n,u){this.reportService=l,this.shareService=n,this.documentService=u}ngOnInit(){this.host=o.a.host,this.companyNum=this.shareService.getCompany,this.getAllReports(this.companyNum),this.subVars=this.shareService.client.subscribe(l=>{l&&this.getAllReports(l.companyNum)})}ngOnDestroy(){this.subVars&&this.subVars.unsubscribe()}getAllReports(l){this.reportService.getAllReports(l).subscribe(l=>{this.reports=l,console.log(l)})}sendShipmentFileByEmail(l){const n=this.shareService.getUserId(),u={company_num:this.shareService.getCompany,file_name:l.fileName,mail_to:this.shareService.getUserEmail,platform:o.a.PLATFORM_ID,device_id:o.a.APP_ID,generated_by:this.shareService.getUserName,physical_route:`${o.a.host}${l.pRoute}`,user_id:n,file_id:l.fileId};console.log(u),this.documentService.sendByMail(u).subscribe(l=>{console.log(l)})}}class r{}var i=u("pMnS"),s=u("G0yt"),d=u("SVse"),a=u("Do2H"),b=u("IheW"),p=u("EApP");const c=(()=>{class l extends a.a{getAllReports(l){return this.get(`${o.a.api}/getFilesForClient?company_num=${l}`)}}return l.ngInjectableDef=e.Qb({factory:function(){return new l(e.Ub(b.c),e.Ub(p.j))},token:l,providedIn:"root"}),l})();var w=u("dz5x"),m=u("V9dR"),y=e.sb({encapsulation:2,styles:[[".dropdown-option .dropdown-toggle::after{display:none!important}.reports .box,.reports .table-responsive{overflow:hidden}"]],data:{}});function h(l){return e.Ob(0,[(l()(),e.ub(0,0,null,null,26,"tr",[],null,null,null,null,null)),(l()(),e.ub(1,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.ub(2,0,null,null,1,"a",[["class","linkdocument"]],[[8,"href",4]],null,null,null,null)),(l()(),e.Mb(3,null,[" "," "])),(l()(),e.ub(4,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Mb(5,null,[" "," "])),(l()(),e.ub(6,0,null,null,20,"td",[["align","right"]],null,null,null,null,null)),(l()(),e.ub(7,0,null,null,19,"div",[["class","d-inline-block dropdown-option"],["display","dynamic"],["ngbDropdown",""],["placement","left"]],[[2,"show",null]],null,null,null,null)),e.tb(8,1720320,null,3,s.u,[e.i,s.w,d.c,e.C,e.n,e.I,[2,s.N]],{placement:[0,"placement"],display:[1,"display"]},null),e.Kb(603979776,1,{_menu:0}),e.Kb(603979776,2,{_menuElement:0}),e.Kb(603979776,3,{_anchor:0}),(l()(),e.ub(12,0,null,null,3,"button",[["aria-haspopup","true"],["class","btn dot-report dropdown-toggle"],["id","dropdownBasic1"],["ngbDropdownToggle",""]],[[1,"aria-expanded",0]],[[null,"click"],[null,"keydown.ArrowUp"],[null,"keydown.ArrowDown"],[null,"keydown.Home"],[null,"keydown.End"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Eb(l,13).dropdown.toggle()&&o),"keydown.ArrowUp"===n&&(o=!1!==e.Eb(l,13).dropdown.onKeyDown(u)&&o),"keydown.ArrowDown"===n&&(o=!1!==e.Eb(l,13).dropdown.onKeyDown(u)&&o),"keydown.Home"===n&&(o=!1!==e.Eb(l,13).dropdown.onKeyDown(u)&&o),"keydown.End"===n&&(o=!1!==e.Eb(l,13).dropdown.onKeyDown(u)&&o),o},null,null)),e.tb(13,16384,null,0,s.A,[s.u,e.n],null,null),e.Jb(2048,[[3,4]],s.v,null,[s.A]),(l()(),e.ub(15,0,null,null,0,"i",[["class","far fa-ellipsis-v"]],null,null,null,null,null)),(l()(),e.ub(16,0,[[2,0]],null,10,"div",[["aria-labelledby","dropdownBasic1"],["ngbDropdownMenu",""]],[[2,"dropdown-menu",null],[2,"show",null],[1,"x-placement",0]],[[null,"keydown.ArrowUp"],[null,"keydown.ArrowDown"],[null,"keydown.Home"],[null,"keydown.End"],[null,"keydown.Enter"],[null,"keydown.Space"]],function(l,n,u){var o=!0;return"keydown.ArrowUp"===n&&(o=!1!==e.Eb(l,17).dropdown.onKeyDown(u)&&o),"keydown.ArrowDown"===n&&(o=!1!==e.Eb(l,17).dropdown.onKeyDown(u)&&o),"keydown.Home"===n&&(o=!1!==e.Eb(l,17).dropdown.onKeyDown(u)&&o),"keydown.End"===n&&(o=!1!==e.Eb(l,17).dropdown.onKeyDown(u)&&o),"keydown.Enter"===n&&(o=!1!==e.Eb(l,17).dropdown.onKeyDown(u)&&o),"keydown.Space"===n&&(o=!1!==e.Eb(l,17).dropdown.onKeyDown(u)&&o),o},null,null)),e.tb(17,16384,[[1,4]],1,s.y,[s.u],null,null),e.Kb(603979776,4,{menuItems:1}),(l()(),e.ub(19,0,null,null,3,"a",[["class","btn dropdown-item"],["ngbDropdownItem",""],["target","_blank"]],[[8,"href",4],[2,"disabled",null]],null,null,null,null)),e.tb(20,16384,[[4,4]],0,s.x,[e.n],null,null),(l()(),e.ub(21,0,null,null,0,"i",[["class","far fa-arrow-to-bottom mr-2"]],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Download"])),(l()(),e.ub(23,0,null,null,3,"button",[["class","btn dropdown-item"],["ngbDropdownItem",""]],[[2,"disabled",null]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.sendShipmentFileByEmail(l.context.$implicit)&&e),e},null,null)),e.tb(24,16384,[[4,4]],0,s.x,[e.n],null,null),(l()(),e.ub(25,0,null,null,0,"i",[["class","far fa-envelope mr-2"]],null,null,null,null,null)),(l()(),e.Mb(-1,null,[" Sent Email"]))],function(l,n){l(n,8,0,"left","dynamic")},function(l,n){var u=n.component;l(n,2,0,u.host+n.context.$implicit.web_route),l(n,3,0,null==n.context.$implicit?null:n.context.$implicit.file_name),l(n,5,0,null==n.context.$implicit?null:n.context.$implicit.strLastModified),l(n,7,0,e.Eb(n,8).isOpen()),l(n,12,0,e.Eb(n,13).dropdown.isOpen()),l(n,16,0,!0,e.Eb(n,17).dropdown.isOpen(),e.Eb(n,17).placement),l(n,19,0,u.host+n.context.$implicit.web_route,e.Eb(n,20).disabled),l(n,23,0,e.Eb(n,24).disabled)})}function f(l){return e.Ob(0,[(l()(),e.ub(0,0,null,null,15,"div",[["class","d-flex"],["id","wrapper"]],null,null,null,null,null)),(l()(),e.ub(1,0,null,null,14,"div",[["id","page-content-wrapper"]],null,null,null,null,null)),(l()(),e.ub(2,0,null,null,13,"div",[["class","container reports"]],null,null,null,null,null)),(l()(),e.ub(3,0,null,null,12,"div",[["class","box"]],null,null,null,null,null)),(l()(),e.ub(4,0,null,null,11,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),e.ub(5,0,null,null,10,"table",[["class","table table-custom table-nolinktr mb-0"],["id","example"]],null,null,null,null,null)),(l()(),e.ub(6,0,null,null,6,"thead",[],null,null,null,null,null)),(l()(),e.ub(7,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.ub(8,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["File name"])),(l()(),e.ub(10,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Mb(-1,null,["Date"])),(l()(),e.ub(12,0,null,null,0,"th",[],null,null,null,null,null)),(l()(),e.ub(13,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e.jb(16777216,null,null,1,null,h)),e.tb(15,278528,null,0,d.k,[e.T,e.Q,e.v],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,15,0,n.component.reports)},null)}function g(l){return e.Ob(0,[(l()(),e.ub(0,0,null,null,1,"app-report",[],null,null,null,f,y)),e.tb(1,245760,null,0,t,[c,w.a,m.a],null,null)],function(l,n){l(n,1,0)},null)}var v=e.qb("app-report",t,g,{},{},[]),k=u("iInd");u.d(n,"ReportModuleNgFactory",function(){return E});var E=e.rb(r,[],function(l){return e.Bb([e.Cb(512,e.l,e.eb,[[8,[i.a,v]],[3,e.l],e.A]),e.Cb(4608,d.n,d.m,[e.x,[2,d.C]]),e.Cb(1073742336,d.b,d.b,[]),e.Cb(1073742336,s.z,s.z,[]),e.Cb(1073742336,k.o,k.o,[[2,k.t],[2,k.k]]),e.Cb(1073742336,r,r,[]),e.Cb(1024,k.i,function(){return[[{path:"",component:t}]]},[])])})}}]);