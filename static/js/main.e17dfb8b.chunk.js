(this.webpackJsonpbattleships=this.webpackJsonpbattleships||[]).push([[0],{126:function(e,t,r){"use strict";r.r(t);var a=r(1),i=r.n(a),s=r(47),o=r.n(s),n=r(9),c=r(4),l=r(5),d=r(49),h=r(48),u=(r(18),r(0)),b=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"handleFire",value:function(e,t){this.props.handler(e,t)}},{key:"getClasses",value:function(e,t){var r=" ";return"*"===this.props.board[e][t]&&(r+="miss noHover"),"!"===this.props.board[e][t]&&(r+="sunken noHover"),"@"===this.props.board[e][t]&&(r+="hit noHover"),"#"===this.props.board[e][t]&&(r+="sunkenBorder noHover"),"object"===typeof this.props.board[e][t]&&!1===this.props.isCpu&&(r+="ship"),r}},{key:"getDisabled",value:function(e,t){return"*"===this.props.board[e][t]||"!"===this.props.board[e][t]||"@"===this.props.board[e][t]||"#"===this.props.board[e][t]}},{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"col-xs",style:{minWidth:"424px",width:"424px",height:"400px",minHeight:"400px"},children:this.props.board.map((function(t,r){return t.map((function(t,a){return e.props.isCpu?Object(u.jsx)("button",{disabled:e.getDisabled(r,a),className:"col boardButton"+e.getClasses(r,a),onClick:function(){return e.handleFire(r,a)},style:{maxWidth:"40px",maxHeight:"40px"}}):Object(u.jsx)("button",{onDrop:function(t){return e.props.dropper(t,r,a)},onDragOver:function(e){return e.preventDefault()},className:"col boardButton"+e.getClasses(r,a)})}))}))})}}]),r}(i.a.Component);function p(e){var t=e.placer,r=e.shipsSet,a=e.isV,i=e.rotate,s=e.reset;function o(e){e.dataTransfer.setData("text/plain",e.target.parentElement.id)}function n(){return a?"":"row"}return Object(u.jsxs)("div",{className:"col-md infoContainer d-flex flex-column",children:[Object(u.jsx)("div",{className:"row subT",children:"Place your ships:"}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{id:"ShipPlacer0.4",className:"col placerContainer",children:Object(u.jsxs)("div",{draggable:"true",onDragStart:function(e){return o(e)},className:n()+" blr",children:[Object(u.jsx)("div",{className:"col boardButton ship placer noHover"}),Object(u.jsx)("div",{className:"col boardButton ship placer noHover"}),Object(u.jsx)("div",{className:"col boardButton ship placer noHover"}),Object(u.jsx)("div",{className:"col boardButton ship placer noHover"})]})}),Object(u.jsx)("div",{id:"ShipPlacer1.3",className:"col placerContainer",children:Object(u.jsxs)("div",{draggable:"true",onDragStart:function(e){return o(e)},className:n()+" blr",children:[Object(u.jsx)("div",{className:"col boardButton ship placer noHover"}),Object(u.jsx)("div",{className:"col boardButton ship placer noHover"}),Object(u.jsx)("div",{className:"col boardButton ship placer noHover"})]})}),Object(u.jsx)("div",{id:"ShipPlacer2.3",className:"col placerContainer",children:Object(u.jsxs)("div",{draggable:"true",onDragStart:function(e){return o(e)},className:n()+" blr",children:[Object(u.jsx)("div",{className:"col boardButton ship placer noHover"}),Object(u.jsx)("div",{className:"col boardButton ship placer noHover"}),Object(u.jsx)("div",{className:"col boardButton ship placer noHover"})]})}),Object(u.jsx)("div",{id:"ShipPlacer3.2",className:"col placerContainer",children:Object(u.jsxs)("div",{draggable:"true",onDragStart:function(e){return o(e)},className:n()+" blr",children:[Object(u.jsx)("div",{className:"col boardButton ship placer noHover"}),Object(u.jsx)("div",{className:"col boardButton ship placer noHover"})]})}),Object(u.jsx)("div",{id:"ShipPlacer4.2",className:"col placerContainer",children:Object(u.jsxs)("div",{draggable:"true",onDragStart:function(e){return o(e)},className:n()+" blr",children:[Object(u.jsx)("div",{className:"col boardButton ship placer noHover"}),Object(u.jsx)("div",{className:"col boardButton ship placer noHover"})]})}),Object(u.jsx)("div",{id:"ShipPlacer5.2",className:"col placerContainer",children:Object(u.jsxs)("div",{draggable:"true",onDragStart:function(e){return o(e)},className:n()+" blr",children:[Object(u.jsx)("div",{className:"col boardButton ship placer noHover"}),Object(u.jsx)("div",{className:"col boardButton ship placer noHover"})]})}),Object(u.jsx)("div",{id:"ShipPlacer6.1",className:"col placerContainer",children:Object(u.jsx)("div",{draggable:"true",onDragStart:function(e){return o(e)},className:n()+" blr",children:Object(u.jsx)("div",{className:"col boardButton ship placer noHover"})})}),Object(u.jsx)("div",{id:"ShipPlacer7.1",className:"col placerContainer",children:Object(u.jsx)("div",{draggable:"true",onDragStart:function(e){return o(e)},className:n()+" blr",children:Object(u.jsx)("div",{className:"col boardButton ship placer noHover"})})}),Object(u.jsx)("div",{id:"ShipPlacer8.1",className:"col placerContainer",children:Object(u.jsx)("div",{draggable:"true",onDragStart:function(e){return o(e)},className:n()+" blr",children:Object(u.jsx)("div",{className:"col boardButton ship placer noHover"})})}),Object(u.jsx)("div",{id:"ShipPlacer9.1",className:"col placerContainer",children:Object(u.jsx)("div",{draggable:"true",onDragStart:function(e){return o(e)},className:n()+" blr",children:Object(u.jsx)("div",{className:"col boardButton ship placer noHover"})})})]}),Object(u.jsxs)("div",{className:"row d-flex flex-grow-1 justify-content-end align-items-center flex-column",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("button",{className:"col",onClick:function(){i()},children:"Rotate"}),Object(u.jsx)("button",{className:"col",onClick:function(){s()},children:"Reset"})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("button",{className:"col",onClick:function(){t()},children:"Auto-place"}),Object(u.jsx)("button",{className:"col",onClick:function(){r()},children:"Start Game"})]})]})]})}var v=function(e){var t=e.placer,r=e.shipsSet,a=e.setShips,i=e.reset,s=e.playerBoard,o=e.cpuBoard,n=e.handler,c=e.dropper,l=e.isV,d=e.rotate;return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"row gy-3",id:"mainRow",children:[Object(u.jsx)(b,{board:s,isCpu:!1,dropper:c}),r?Object(u.jsx)(b,{handler:n,board:o,isCpu:!0}):Object(u.jsx)(p,{placer:t,shipsSet:a,reset:i,isV:l,rotate:d})]})})})},f=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"fire",value:function(e,t,r){e.receiveAttack(t,r)}}]),e}(),j=function(){function e(t){Object(c.a)(this,e),this.lives=[],this.fixedLength=function(e){return e>4?4:e<1?1:e},this.shipLength=this.fixedLength(t)}return Object(l.a)(e,[{key:"isSunk",value:function(){return this.lives.join("").length===this.shipLength}},{key:"hit",value:function(){this.lives.length<=this.shipLength&&this.lives.push("x")}},{key:"getLength",value:function(){return this.shipLength}},{key:"getLives",value:function(){return this.lives}}]),e}(),m=function(){function e(){Object(c.a)(this,e),this.board=[],this.isVertical=!1,this.sunkenShips=0}return Object(l.a)(e,[{key:"setVertical",value:function(){this.isVertical=!this.isVertical}},{key:"getVertical",value:function(){return this.isVertical}},{key:"makeBoard",value:function(){for(var e=0;e<=9;e++)this.board[e]=new Array(10).fill("~")}},{key:"getSunkenShips",value:function(){return this.sunkenShips}},{key:"setSunkenShips",value:function(e){this.sunkenShips=e}},{key:"getCells",value:function(){for(var e=0,t=0;t<=9;t++)for(var r=0;r<=9;r++)"object"===typeof this.board[t][r]&&(e+=1);return e}},{key:"clearBoard",value:function(){for(var e=0;e<=9;e++)this.board[e].fill("~")}},{key:"checkCellFree",value:function(e,t,r){var a=!0;if(!1===this.isVertical)for(var i=0;i<r.getLength();i++)t+i<=9?"~"!==this.board[e][t+i]&&(a=!1):a=!1;else if(!0===this.isVertical)for(var s=0;s<r.getLength();s++)e+s<=9?"~"!==this.board[e+s][t]&&(a=!1):a=!1;return a}},{key:"placeShipBorder",value:function(e,t,r,a){if(!1===this.isVertical){if(r-1>=0&&(this.board[t][r-1]=a),t-1>=0)for(var i=0;i<e;i++)this.board[t-1][r+i]=a;if(r+e<=9&&(this.board[t][r+e]=a),t+1<=9)for(var s=0;s<e;s++)this.board[t+1][r+s]=a;t-1>=0&&r-1>=0&&(this.board[t-1][r-1]=a),t-1>=0&&r+e<=9&&(this.board[t-1][r+e]=a),t+1<=9&&r-1>=0&&(this.board[t+1][r-1]=a),t+1<=9&&r+e<=9&&(this.board[t+1][r+e]=a)}if(!0===this.isVertical){if(t-1>=0&&(this.board[t-1][r]=a),t+e<=9&&(this.board[t+e][r]=a),r-1>=0)for(var o=0;o<e;o++)this.board[t+o][r-1]=a;if(r+1<=9)for(var n=0;n<e;n++)this.board[t+n][r+1]=a;t-1>=0&&r-1>=0&&(this.board[t-1][r-1]=a),t-1>=0&&r+1<=9&&(this.board[t-1][r+1]=a),t+e<=9&&r-1>=0&&(this.board[t+e][r-1]=a),t+e<=9&&r+1<=9&&(this.board[t+e][r+1]=a)}}},{key:"placeShip",value:function(e,t,r){if(!1===this.isVertical){if(this.checkCellFree(t,r,e)){for(var a=0;a<e.getLength();a++)this.board[t][r+a]=e;this.placeShipBorder(e.getLength(),t,r,"x")}}else if(!0===this.isVertical&&this.checkCellFree(t,r,e)){for(var i=0;i<e.getLength();i++)this.board[t+i][r]=e;this.placeShipBorder(e.getLength(),t,r,"x")}}},{key:"receiveAttack",value:function(e,t){if("object"===typeof this.board[e][t]){var r=this.board[e][t];r.hit(),this.board[e][t]="@",r.isSunk()&&(this.renderSunken(e,t),this.sunkenShips=this.sunkenShips+1)}else{if("#"===this.board[e][t]||"!"===this.board[e][t]||"@"===this.board[e][t]||"*"===this.board[e][t])return;this.board[e][t]="*"}}},{key:"renderSunken",value:function(e,t){var r=1;if(e+1<=9&&"@"===this.board[e+1][t]||e-1>=0&&"@"===this.board[e-1][t]){for(this.isVertical=!0;e-1>=0&&"@"===this.board[e-1][t];)e-=1;for(var a=e;a+1<=9&&"@"===this.board[a+1][t];)a+=1,r+=1;this.placeShipBorder(r,e,t,"#");for(var i=0;i<r;i++)this.board[e+i][t]="!"}if(t-1>=0&&"@"===this.board[e][t-1]||t+1<=9&&"@"===this.board[e][t+1]){for(this.isVertical=!1;"@"===this.board[e][t-1];)t-=1;for(var s=t;"@"===this.board[e][s+1];)s+=1,r+=1;this.placeShipBorder(r,e,t,"#");for(var o=0;o<r;o++)this.board[e][t+o]="!"}else this.placeShipBorder(r,e,t,"#"),this.board[e][t]="!"}},{key:"populateBoard",value:function(){var e,t=this;[4,3,3,2,2,2,1,1,1,1].forEach((function(r){var a,i;if(e=new j(r),1===Math.floor(2*Math.random())?t.isVertical=!0:t.isVertical=!1,!1===t.isVertical){do{a=Math.floor(10*Math.random()),i=Math.floor(10*Math.random())}while(!1===t.checkCellFree(a,i,e));t.placeShip(e,a,i)}else if(!0===t.isVertical){do{a=Math.floor(10*Math.random()),i=Math.floor(10*Math.random())}while(!1===t.checkCellFree(a,i,e));t.placeShip(e,a,i)}}))}}]),e}(),x=r(16),g=r.n(x),O=r(3),S=r.n(O);var N=function(){var e=new f,t=new f,r=Object(a.useState)(new m),i=Object(n.a)(r,2),s=i[0],o=i[1],c=Object(a.useState)(new m),l=Object(n.a)(c,2),d=l[0],h=l[1],b=!0,p=Object(a.useState)(!0),x=Object(n.a)(p,2),O=x[0],N=x[1],k=Object(a.useState)(!1),B=Object(n.a)(k,2),y=B[0],C=B[1];function w(){var e=S()(d),t=S()(s),r=document.getElementsByClassName("placerContainer");e.clearBoard(),e.setSunkenShips(0),t.clearBoard(),t.populateBoard(),t.setSunkenShips(0);for(var a=0;a<r.length;a++)r[a].classList.remove("invis");h(e),o(t),C(!1)}function H(){for(var e=S()(d),r=Math.floor(10*Math.random()),a=Math.floor(10*Math.random());"*"===e.board[r][a];)r=Math.floor(10*Math.random()),a=Math.floor(10*Math.random());t.fire(e,r,a),"*"===e.board[r][a]&&(b=!0),h(e,void(10===e.getSunkenShips()&&g.a.fire({title:"You loose...",text:"Your fleet has been destroyed",customClass:{confirmButton:"swal-btn"},buttonsStyling:!1,confirmButtonText:"Play again",width:"auto",allowOutsideClick:!1}).then((function(e){e.isConfirmed&&w()}))))}return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"row-xs title",children:"BATTLESHIPS"}),O?Object(u.jsx)("button",{className:"row startBtn",onClick:function(){return console.log(d),s.makeBoard(),s.populateBoard(),d.makeBoard(),void N(!O)},children:" START"}):Object(u.jsx)(v,{placer:function(){var e=S()(d);e.clearBoard(),e.populateBoard();for(var t=document.getElementsByClassName("placerContainer"),r=0;r<t.length;r++)t[r].classList.add("invis");h(e)},shipsSet:y,setShips:function(){20===d.getCells()?C(!y):g.a.fire({icon:"error",text:"Place your ships first",customClass:{confirmButton:"swal-btn",cancelButton:"swal-btn"},buttonsStyling:!1})},reset:function(){var e=S()(d),t=document.getElementsByClassName("placerContainer");e.clearBoard();for(var r=0;r<t.length;r++)t[r].classList.remove("invis");h(e)},rotate:function(){var e=S()(d);e.setVertical(),h(e)},isV:d.getVertical(),playerBoard:d.board,cpuBoard:s.board,handler:function(t,r){var a=S()(s);for("object"!==typeof a.board[t][r]&&(b=!1),e.fire(a,t,r),o(a,void(10===a.getSunkenShips()&&g.a.fire({title:"Congratulations!",text:"You win",customClass:{confirmButton:"swal-btn"},buttonsStyling:!1,confirmButtonText:"Play again",width:"auto",allowOutsideClick:!1}).then((function(e){e.isConfirmed&&w()})))),console.log(s.getSunkenShips());!b;)H()},dropper:function(e,t,r){e.preventDefault();var a=S()(d);if("object"!==typeof a.board[t][r]){var i=e.dataTransfer.getData("text/plain"),s=parseInt(i.split(".")[1]),o=new j(s);a.placeShip(o,t,r),a.board[t][r]===o&&document.getElementById(i).classList.add("invis"),h(a)}}})]})};o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root"))},18:function(e,t,r){}},[[126,1,2]]]);
//# sourceMappingURL=main.e17dfb8b.chunk.js.map