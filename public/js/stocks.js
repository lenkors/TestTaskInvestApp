"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[136],{8101:(t,a,e)=>{e.d(a,{Z:()=>o});var n=e(3645),c=e.n(n)()((function(t){return t[1]}));c.push([t.id,".stock__header{align-items:center;display:flex;justify-content:space-between}",""]);const o=c},7016:(t,a,e)=>{e.r(a),e.d(a,{default:()=>m});var n=e(8222),c={class:"stock wrapper container mx-auto"},o={class:"stock__header"},i=(0,n._)("h2",{class:"head__title"},"Stock List",-1),s={class:"stock__create-btn"},r=(0,n.Uk)("Create stock"),u={class:"stock__list wrapper"};var l=e(6121),p=e(1068),k=e(5684);const g={name:"Main",setup:function(){var t=(0,l.iH)(["id","Company","Unit price","Updated at"]),a=(0,l.iH)([]),e=(0,p.h)(),n=(0,k.Jk)(e),c=n.stocks,o=n.stockPaginationData,i=(0,l.Fl)((function(){return function(t){var a=new Date(t);return"".concat(a.getDate(),".").concat(a.getMonth(),".").concat(a.getFullYear())}}));e.getAllStocks({current_page:1}).then((function(t){s(t)}));var s=function(t){a.value=t.map((function(t){return{id:t.id,name:t.name,price:t.price,updated_at:i.value(t.updated_at)}}))};(0,l.YP)((function(){return c.value}),(function(){s(c.value)}));return{timestampToDate:i,headerTitles:t,stockByPages:a,stockPaginationData:o,stockPaginationAction:function(t){e.getAllStocks({current_page:t}).then((function(t){s(t)}))}}}};var d=e(3379),_=e.n(d),f=e(8101),h={insert:"head",singleton:!1};_()(f.Z,h);f.Z.locals;const m=(0,e(3744).Z)(g,[["render",function(t,a,e,l,p,k){var g=(0,n.up)("router-link"),d=(0,n.up)("app-table"),_=(0,n.up)("pagination");return(0,n.wg)(),(0,n.iD)("div",c,[(0,n._)("div",o,[i,(0,n._)("span",s,[(0,n.Wm)(g,{to:"/stock/create"},{default:(0,n.w5)((function(){return[r]})),_:1})])]),(0,n._)("div",u,[(0,n.Wm)(d,{params:{headers:l.headerTitles,isAction:!0,type:"stock",cellData:l.stockByPages}},null,8,["params"]),l.stockPaginationData&&l.stockPaginationData.total>l.stockPaginationData.per_page?((0,n.wg)(),(0,n.j4)(_,{key:0,params:{action:l.stockPaginationAction,currentPage:l.stockPaginationData.current_page,total:l.stockPaginationData.total,perPage:l.stockPaginationData.per_page}},null,8,["params"])):(0,n.kq)("",!0)])])}]])}}]);