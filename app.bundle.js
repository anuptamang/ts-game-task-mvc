!function(){"use strict";var e={132:function(e,t,i){i.r(t)},752:function(e,t,i){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),i(132);const r=n(i(714)),o=n(i(692)),a=n(i(102));new r.default(new o.default,new a.default)},714:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{model;view;constructor(e,t){this.model=e,this.view=t,this.view.bindToggleStartStop(this.handleToggleStartStop),this.view.bindAdd(this.handleAdd),this.view.bindRemove(this.handleRemove)}handleToggleStartStop=()=>({state:this.model.stopGame()});handleAdd=()=>{const e=this.model.addItem(),t=this.model.state;return{item:e,state:t,callback:()=>this.model.updateOnMoveUp(e)}};handleRemove=()=>({item:this.model.removeItem(),state:this.model.state});handleUpdateCounter=()=>({counter:this.model.updateCounter()})}},808:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UI_CONSTANTS=void 0,t.UI_CONSTANTS={app:"app",gameBox:"data-game-box",gameScreenHolder:"data-game-screen-holder",gameControllerBtn:"data-game-controller-btn",gameCounterBtn:"data-game-counter-btn",gameCounterDisplay:"data-game-counter-display",controllerBtnAttr:"data-game-controller-btn",counterBtnAttr:"data-game-counter-btn",disabledClass:"disabled",START:"START",INCREMENT:"INCREMENT",DECREMENT:"DECREMENT",ADD:"ADD",REMOVE:"REMOVE"}},692:function(e,t,i){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(i(463)),o=i(928);t.default=class{state;constructor(){this.state={data:r.default,initialData:[],counter:0,favColors:["blue","green","yellow","purple","orange","red"],size:["small","medium","large"]}}_updateCounter(){return this.state.counter=this.state.initialData.length}addItem(){const e=(0,o.getUniqueCompareResult)(this.state.data,this.state.initialData);let t=(0,o.shuffle)(e).pop(),i=[...(0,o.shuffle)(this.state.favColors)],n=[...(0,o.shuffle)(this.state.size)];return t.figure=`${t.figure} ${(0,o.shuffle)(i).pop()} ${(0,o.shuffle)(n).pop()}`,this.state.initialData=[...this.state.initialData,t],this._updateCounter(),t}removeItem(){const e=this.state.initialData.pop();return this.state.initialData=this.state.initialData?.filter((t=>t.id!==e?.id)),this._updateCounter(),e}stopGame(){return this.state.counter=0,this.state.initialData=[],this.state}updateOnMoveUp(e){this.state.initialData=this.state.initialData?.filter((t=>t.id!==e?.id)),this._updateCounter()}}},652:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.shuffle=void 0,t.shuffle=function(e){let t,i=e.length;for(;0!=i;)t=Math.floor(Math.random()*i),i--,[e[i],e[t]]=[e[t],e[i]];return e}},60:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.createElement=void 0,t.createElement=function(e,t,i){const n=document.createElement(e);return t&&n.classList.add(t),i&&n.setAttribute(i,!0),n}},962:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getElement=void 0,t.getElement=function(e){return document.querySelector(e)}},62:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getLimitedItems=void 0,t.getLimitedItems=function(e,t){return e?.filter(((e,i)=>i<t))}},137:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getUniqueCompareResult=void 0,t.getUniqueCompareResult=function(e,t){return e.filter((e=>!t.find((t=>e.id===t.id))))}},689:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getUniqueItems=void 0,t.getUniqueItems=function(e){return e.filter(((e,t,i)=>i.findIndex((t=>t.type===e.type))===t))}},897:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.handleCountState=void 0,t.handleCountState=function(e,t){return e}},928:function(e,t,i){var n=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i);var r=Object.getOwnPropertyDescriptor(t,i);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,r)}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),r=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||n(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),r(i(652),t),r(i(62),t),r(i(137),t),r(i(689),t),r(i(897),t),r(i(60),t),r(i(962),t)},102:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});const n=i(808);t.default=class{gameBox;gameBoxScreenHolder;playBtns;counterBtns;counterDisplay;constructor(){this.gameBox=document.querySelector(`[${n.UI_CONSTANTS.gameBox}]`),this.gameBoxScreenHolder=this.gameBox?.querySelector(`[${n.UI_CONSTANTS.gameScreenHolder}]`),this.playBtns=this.gameBox?.querySelectorAll(`[${n.UI_CONSTANTS.gameControllerBtn}]`),this.counterBtns=this.gameBox?.querySelectorAll(`[${n.UI_CONSTANTS.gameCounterBtn}]`),this.counterDisplay=this.gameBox?.querySelector(`[${n.UI_CONSTANTS.gameCounterDisplay}]`)}_disableCounter(){this.counterBtns?.forEach((e=>e.classList.add(n.UI_CONSTANTS.disabledClass)))}_enableCounter(){this.counterBtns?.forEach((e=>e.classList.remove(n.UI_CONSTANTS.disabledClass)))}_itemIncrement(e){const{item:t,state:i,callback:n}=e();i.counter<i.data.length&&(this._addItem(t,i,n),this._updateCounter(i))}_itemDecrement(e){const{item:t,state:i}=e();t&&(this._removeItem(t,i),this._updateCounter(i))}_addItem(e,t,i){this._moveShapeView(e,this._createImageView(e),t,i),this._updateCounter(t)}_removeItem(e,t){this._itemRemoveFromDomView(e.id),this._updateCounter(t)}_itemRemoveFromDomView(e){document.getElementById(e)?.remove()}_moveShapeView(e,t,i,n){let r=0,o=setInterval((()=>{r===this.gameBoxScreenHolder?.clientHeight-t.offsetHeight?(clearInterval(o),t.remove(),n(),this._updateCounter(i)):(r++,t.style.bottom=r+"px")}),15)}_createImageView(e){if(e){const t=e.figure?.split(" "),i=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,n=document.createElement("div");return t&&(t?.length>1&&t?.length<3?n.classList.add("figure",`figure-${t[0]}`,`${t[1]}`):t?.length>2?n.classList.add("figure",`figure-${t[0]}`,`${t[1]}`,`${t[2]}`):n.classList.add("figure",`figure-${t[0]}`)),n.setAttribute("id",e.id),n.style.left=`${i(0,80)}%`,this.gameBoxScreenHolder?.appendChild(n),document.getElementById(`${e.id}`)?.classList.add("out"),setTimeout((()=>document.getElementById(`${e.id}`)?.classList.add("in"))),n}}_updateCounter(e){this.counterDisplay&&(this.counterDisplay.innerHTML=`Counts: ${e.counter}`)}bindToggleStartStop(e){this._disableCounter(),this.playBtns?.forEach((t=>{t?.addEventListener("click",(()=>{if(t?.getAttribute(n.UI_CONSTANTS.controllerBtnAttr)?.toUpperCase()===n.UI_CONSTANTS.START)this._enableCounter();else{this.gameBoxScreenHolder.innerHTML="",this._disableCounter();const{state:t}=e();this._updateCounter(t)}}))}))}bindAdd(e){this.counterBtns?.forEach((t=>{t.addEventListener("click",(()=>t?.getAttribute(n.UI_CONSTANTS.counterBtnAttr)?.toUpperCase()===n.UI_CONSTANTS.INCREMENT&&this._itemIncrement(e)))}))}bindRemove(e){this.counterBtns?.forEach((t=>{t.addEventListener("click",(()=>t?.getAttribute(n.UI_CONSTANTS.counterBtnAttr)?.toUpperCase()===n.UI_CONSTANTS.DECREMENT&&this._itemDecrement(e)))}))}}},463:function(e){e.exports=JSON.parse('[{"id":"101","figure":"circle"},{"id":"102","figure":"rectangle"},{"id":"103","figure":"square"},{"id":"104","figure":"triangle"},{"id":"105","figure":"star"},{"id":"106","figure":"trapezoid"},{"id":"107","figure":"rhombus"},{"id":"108","figure":"pentagon"},{"id":"109","figure":"hexagon"},{"id":"110","figure":"ellipse"},{"id":"111","figure":"chat"},{"id":"112","figure":"close"},{"id":"113","figure":"frame"},{"id":"114","figure":"cross"}]')}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,i),o.exports}i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i(752)}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9nYW1lLXRhc2svLi9zcmMvYXBwLnRzIiwid2VicGFjazovL2dhbWUtdGFzay8uL3NyYy9jb250cm9sbGVycy9jb250cm9sbGVyLnRzIiwid2VicGFjazovL2dhbWUtdGFzay8uL3NyYy9kYXRhL2NvbnN0YW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9nYW1lLXRhc2svLi9zcmMvbW9kZWxzL21vZGVsLnRzIiwid2VicGFjazovL2dhbWUtdGFzay8uL3NyYy91dGlscy9hcnJheVN1ZmZsZS50cyIsIndlYnBhY2s6Ly9nYW1lLXRhc2svLi9zcmMvdXRpbHMvY3JlYXRlRWxlbWVudC50cyIsIndlYnBhY2s6Ly9nYW1lLXRhc2svLi9zcmMvdXRpbHMvZ2V0RWxlbWVudC50cyIsIndlYnBhY2s6Ly9nYW1lLXRhc2svLi9zcmMvdXRpbHMvZ2V0TGltaXRlZEl0ZW1zLnRzIiwid2VicGFjazovL2dhbWUtdGFzay8uL3NyYy91dGlscy9nZXRVbmlxdWVDb21wYXJlUmVzdWx0LnRzIiwid2VicGFjazovL2dhbWUtdGFzay8uL3NyYy91dGlscy9nZXRVbmlxdWVJdGVtcy50cyIsIndlYnBhY2s6Ly9nYW1lLXRhc2svLi9zcmMvdXRpbHMvaGFuZGxlQ291bnRTdGF0ZS50cyIsIndlYnBhY2s6Ly9nYW1lLXRhc2svLi9zcmMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ2FtZS10YXNrLy4vc3JjL3ZpZXdzL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vZ2FtZS10YXNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbWUtdGFzay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dhbWUtdGFzay93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzJ1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9jb250cm9sbGVyJ1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kZWxzL21vZGVsJ1xuaW1wb3J0IFZpZXcgZnJvbSAnLi92aWV3cy92aWV3J1xuXG5jb25zdCBhcHAgPSBuZXcgQ29udHJvbGxlcihuZXcgTW9kZWwoKSwgbmV3IFZpZXcoKSlcbiIsImltcG9ydCB7IE1vZGVsUHJvcHMsIFZpZXdQcm9wcyB9IGZyb20gXCJzcmMvdHlwZXMvdHlwZXNcIlxuXG5jbGFzcyBDb250cm9sbGVyIHtcbiAgbW9kZWw6IE1vZGVsUHJvcHNcbiAgdmlldzogVmlld1Byb3BzXG5cbiAgY29uc3RydWN0b3IobW9kZWwsIHZpZXcpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcbiAgICB0aGlzLnZpZXcgPSB2aWV3XG5cbiAgICB0aGlzLnZpZXcuYmluZFRvZ2dsZVN0YXJ0U3RvcCh0aGlzLmhhbmRsZVRvZ2dsZVN0YXJ0U3RvcClcbiAgICB0aGlzLnZpZXcuYmluZEFkZCh0aGlzLmhhbmRsZUFkZClcbiAgICB0aGlzLnZpZXcuYmluZFJlbW92ZSh0aGlzLmhhbmRsZVJlbW92ZSlcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZVN0YXJ0U3RvcCA9ICgpID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMubW9kZWwuc3RvcEdhbWUoKVxuICAgIHJldHVybiB7IHN0YXRlIH1cbiAgfVxuXG4gIGhhbmRsZUFkZCA9ICgpID0+IHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5tb2RlbC5hZGRJdGVtKClcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMubW9kZWwuc3RhdGVcbiAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHRoaXMubW9kZWwudXBkYXRlT25Nb3ZlVXAoaXRlbSlcbiAgICByZXR1cm4geyBpdGVtLCBzdGF0ZSwgY2FsbGJhY2sgfVxuICB9XG5cbiAgaGFuZGxlUmVtb3ZlID0gKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLm1vZGVsLnJlbW92ZUl0ZW0oKVxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5tb2RlbC5zdGF0ZVxuXG4gICAgcmV0dXJuIHsgaXRlbSwgc3RhdGUgfVxuICB9XG5cbiAgaGFuZGxlVXBkYXRlQ291bnRlciA9ICgpID0+IHtcbiAgICBjb25zdCBjb3VudGVyID0gdGhpcy5tb2RlbC51cGRhdGVDb3VudGVyKClcbiAgICByZXR1cm4geyBjb3VudGVyIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyXG4iLCJleHBvcnQgY29uc3QgVUlfQ09OU1RBTlRTID0ge1xuICBhcHA6ICdhcHAnIGFzIHN0cmluZyxcbiAgZ2FtZUJveDogJ2RhdGEtZ2FtZS1ib3gnIGFzIHN0cmluZyxcbiAgZ2FtZVNjcmVlbkhvbGRlcjogJ2RhdGEtZ2FtZS1zY3JlZW4taG9sZGVyJyBhcyBzdHJpbmcsXG4gIGdhbWVDb250cm9sbGVyQnRuOiAnZGF0YS1nYW1lLWNvbnRyb2xsZXItYnRuJyBhcyBzdHJpbmcsXG4gIGdhbWVDb3VudGVyQnRuOiAnZGF0YS1nYW1lLWNvdW50ZXItYnRuJyBhcyBzdHJpbmcsXG4gIGdhbWVDb3VudGVyRGlzcGxheTogJ2RhdGEtZ2FtZS1jb3VudGVyLWRpc3BsYXknIGFzIHN0cmluZyxcblxuICBjb250cm9sbGVyQnRuQXR0cjogJ2RhdGEtZ2FtZS1jb250cm9sbGVyLWJ0bicgYXMgc3RyaW5nLFxuICBjb3VudGVyQnRuQXR0cjogJ2RhdGEtZ2FtZS1jb3VudGVyLWJ0bicgYXMgc3RyaW5nLFxuICBkaXNhYmxlZENsYXNzOiAnZGlzYWJsZWQnIGFzIHN0cmluZyxcbiAgU1RBUlQ6ICdTVEFSVCcgYXMgc3RyaW5nLFxuICBJTkNSRU1FTlQ6ICdJTkNSRU1FTlQnIGFzIHN0cmluZyxcbiAgREVDUkVNRU5UOiAnREVDUkVNRU5UJyBhcyBzdHJpbmcsXG4gIEFERDogJ0FERCcgYXMgc3RyaW5nLFxuICBSRU1PVkU6ICdSRU1PVkUnIGFzIHN0cmluZyxcbn1cbiIsImltcG9ydCB7IFN0YXRlUHJvcHMgfSBmcm9tICdzcmMvdHlwZXMvdHlwZXMnXG5pbXBvcnQgU0hBUEVTIGZyb20gJy4uL2RhdGEvc2hhcGVzLmpzb24nXG5pbXBvcnQgeyBnZXRVbmlxdWVDb21wYXJlUmVzdWx0LCBzaHVmZmxlIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNsYXNzIE1vZGVsIHtcbiAgc3RhdGU6IFN0YXRlUHJvcHNcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogU0hBUEVTLFxuICAgICAgaW5pdGlhbERhdGE6IFtdLFxuICAgICAgY291bnRlcjogMCxcbiAgICAgIGZhdkNvbG9yczogWydibHVlJywgJ2dyZWVuJywgJ3llbGxvdycsICdwdXJwbGUnLCAnb3JhbmdlJywgJ3JlZCddLFxuICAgICAgc2l6ZTogWydzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXSxcbiAgICB9XG4gIH1cblxuICBfdXBkYXRlQ291bnRlcigpIHtcbiAgICByZXR1cm4gKHRoaXMuc3RhdGUuY291bnRlciA9IHRoaXMuc3RhdGUuaW5pdGlhbERhdGEubGVuZ3RoKVxuICB9XG5cbiAgYWRkSXRlbSgpIHtcbiAgICBjb25zdCBpdGVtVG9BZGQgPSBnZXRVbmlxdWVDb21wYXJlUmVzdWx0KFxuICAgICAgdGhpcy5zdGF0ZS5kYXRhLFxuICAgICAgdGhpcy5zdGF0ZS5pbml0aWFsRGF0YVxuICAgIClcblxuICAgIGxldCBuZXdJdGVtID0gc2h1ZmZsZShpdGVtVG9BZGQpLnBvcCgpIGFzIHVua25vd24gYXMgeyBpZDogc3RyaW5nLCBmaWd1cmU6IHN0cmluZyB9XG5cbiAgICBsZXQgZmF2ID0gWy4uLnNodWZmbGUodGhpcy5zdGF0ZS5mYXZDb2xvcnMpXVxuICAgIGxldCBzaXplID0gWy4uLnNodWZmbGUodGhpcy5zdGF0ZS5zaXplKV1cblxuICAgIG5ld0l0ZW0uZmlndXJlID0gYCR7bmV3SXRlbS5maWd1cmV9ICR7c2h1ZmZsZShmYXYpLnBvcCgpfSAke3NodWZmbGUoXG4gICAgICBzaXplXG4gICAgKS5wb3AoKX1gXG5cbiAgICB0aGlzLnN0YXRlLmluaXRpYWxEYXRhID0gWy4uLnRoaXMuc3RhdGUuaW5pdGlhbERhdGEsIG5ld0l0ZW1dXG4gICAgdGhpcy5fdXBkYXRlQ291bnRlcigpXG5cbiAgICByZXR1cm4gbmV3SXRlbVxuICB9XG5cbiAgcmVtb3ZlSXRlbSgpIHtcbiAgICBjb25zdCBwb3BEYXRhID0gdGhpcy5zdGF0ZS5pbml0aWFsRGF0YS5wb3AoKVxuXG4gICAgdGhpcy5zdGF0ZS5pbml0aWFsRGF0YSA9IHRoaXMuc3RhdGUuaW5pdGlhbERhdGE/LmZpbHRlcihcbiAgICAgIChkYXRhKSA9PiBkYXRhLmlkICE9PSBwb3BEYXRhPy5pZFxuICAgIClcbiAgICB0aGlzLl91cGRhdGVDb3VudGVyKClcblxuICAgIHJldHVybiBwb3BEYXRhXG4gIH1cblxuICBzdG9wR2FtZSgpIHtcbiAgICB0aGlzLnN0YXRlLmNvdW50ZXIgPSAwXG4gICAgdGhpcy5zdGF0ZS5pbml0aWFsRGF0YSA9IFtdXG4gICAgcmV0dXJuIHRoaXMuc3RhdGVcbiAgfVxuXG4gIHVwZGF0ZU9uTW92ZVVwKGl0ZW0pIHtcbiAgICB0aGlzLnN0YXRlLmluaXRpYWxEYXRhID0gdGhpcy5zdGF0ZS5pbml0aWFsRGF0YT8uZmlsdGVyKFxuICAgICAgKGRhdGEpID0+IGRhdGEuaWQgIT09IGl0ZW0/LmlkXG4gICAgKVxuICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVsXG4iLCJleHBvcnQgZnVuY3Rpb24gc2h1ZmZsZShhcnJheTogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gIGxldCBjdXJyZW50SW5kZXggPSBhcnJheS5sZW5ndGgsXG4gICAgcmFuZG9tSW5kZXhcblxuICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS5cbiAgd2hpbGUgKGN1cnJlbnRJbmRleCAhPSAwKSB7XG4gICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50LlxuICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KVxuICAgIGN1cnJlbnRJbmRleC0tXG5cbiAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgIDtbYXJyYXlbY3VycmVudEluZGV4XSwgYXJyYXlbcmFuZG9tSW5kZXhdXSA9IFtcbiAgICAgICAgYXJyYXlbcmFuZG9tSW5kZXhdLFxuICAgICAgICBhcnJheVtjdXJyZW50SW5kZXhdLFxuICAgICAgXVxuICB9XG5cbiAgcmV0dXJuIGFycmF5XG59XG4iLCJmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgY2xhc3NOYW1lLCBhdHRyKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpXG4gIGlmIChjbGFzc05hbWUpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gIGlmIChhdHRyKSBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCB0cnVlKVxuXG4gIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQgfVxuIiwiZnVuY3Rpb24gZ2V0RWxlbWVudChzZWxlY3Rvcik6IEhUTUxFbGVtZW50IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG5cbiAgcmV0dXJuIGVsZW1lbnRcbn1cblxuZXhwb3J0IHsgZ2V0RWxlbWVudCB9XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0TGltaXRlZEl0ZW1zKGl0ZW1zLCBsaW1pdCk6IFtdIHtcbiAgcmV0dXJuIGl0ZW1zPy5maWx0ZXIoKGl0ZW0sIGlkeCkgPT4gaWR4IDwgbGltaXQpXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0VW5pcXVlQ29tcGFyZVJlc3VsdChhcnIxLCBhcnIyKTogW10ge1xuICBjb25zdCBmaW5hbEFycmF5ID0gYXJyMS5maWx0ZXIoXG4gICAgKG9uZSkgPT4gIWFycjIuZmluZCgodHdvKSA9PiBvbmUuaWQgPT09IHR3by5pZClcbiAgKVxuICByZXR1cm4gZmluYWxBcnJheVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFVuaXF1ZUl0ZW1zKGl0ZW1zKTogW10ge1xuICByZXR1cm4gaXRlbXMuZmlsdGVyKFxuICAgICh2YWx1ZSwgaW5kZXgsIHNlbGYpID0+XG4gICAgICBzZWxmLmZpbmRJbmRleCgodikgPT4gdi50eXBlID09PSB2YWx1ZS50eXBlKSA9PT0gaW5kZXhcbiAgKVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNvdW50U3RhdGUoY291bnQsIHN0YXRlKTogbnVtYmVyIHtcbiAgcmV0dXJuIChzdGF0ZSA9IGNvdW50KVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9hcnJheVN1ZmZsZSdcbmV4cG9ydCAqIGZyb20gJy4vZ2V0TGltaXRlZEl0ZW1zJ1xuZXhwb3J0ICogZnJvbSAnLi9nZXRVbmlxdWVDb21wYXJlUmVzdWx0J1xuZXhwb3J0ICogZnJvbSAnLi9nZXRVbmlxdWVJdGVtcydcbmV4cG9ydCAqIGZyb20gJy4vaGFuZGxlQ291bnRTdGF0ZSdcbmV4cG9ydCAqIGZyb20gJy4vY3JlYXRlRWxlbWVudCdcbmV4cG9ydCAqIGZyb20gJy4vZ2V0RWxlbWVudCdcbiIsImltcG9ydCB7IFVJX0NPTlNUQU5UUyB9IGZyb20gJy4uL2RhdGEvY29uc3RhbnRzJ1xuXG5jbGFzcyBWaWV3IHtcbiAgZ2FtZUJveDogSFRNTEVsZW1lbnRcbiAgZ2FtZUJveFNjcmVlbkhvbGRlcjogSFRNTEVsZW1lbnRcbiAgcGxheUJ0bnM6IE5vZGVMaXN0T2Y8RWxlbWVudD5cbiAgY291bnRlckJ0bnM6IE5vZGVMaXN0T2Y8RWxlbWVudD5cbiAgY291bnRlckRpc3BsYXk6IEhUTUxFbGVtZW50XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYW1lQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgWyR7VUlfQ09OU1RBTlRTLmdhbWVCb3h9XWApIGFzIEhUTUxFbGVtZW50XG4gICAgdGhpcy5nYW1lQm94U2NyZWVuSG9sZGVyID0gdGhpcy5nYW1lQm94Py5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFske1VJX0NPTlNUQU5UUy5nYW1lU2NyZWVuSG9sZGVyfV1gXG4gICAgKSBhcyBIVE1MRWxlbWVudFxuICAgIHRoaXMucGxheUJ0bnMgPSB0aGlzLmdhbWVCb3g/LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBgWyR7VUlfQ09OU1RBTlRTLmdhbWVDb250cm9sbGVyQnRufV1gXG4gICAgKVxuICAgIHRoaXMuY291bnRlckJ0bnMgPSB0aGlzLmdhbWVCb3g/LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBgWyR7VUlfQ09OU1RBTlRTLmdhbWVDb3VudGVyQnRufV1gXG4gICAgKVxuICAgIHRoaXMuY291bnRlckRpc3BsYXkgPSB0aGlzLmdhbWVCb3g/LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgWyR7VUlfQ09OU1RBTlRTLmdhbWVDb3VudGVyRGlzcGxheX1dYFxuICAgICkgYXMgSFRNTEVsZW1lbnRcbiAgfVxuXG4gIF9kaXNhYmxlQ291bnRlcigpIHtcbiAgICB0aGlzLmNvdW50ZXJCdG5zPy5mb3JFYWNoKChidG4pID0+XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChVSV9DT05TVEFOVFMuZGlzYWJsZWRDbGFzcylcbiAgICApXG4gIH1cblxuICBfZW5hYmxlQ291bnRlcigpIHtcbiAgICB0aGlzLmNvdW50ZXJCdG5zPy5mb3JFYWNoKChidG4pID0+XG4gICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShVSV9DT05TVEFOVFMuZGlzYWJsZWRDbGFzcylcbiAgICApXG4gIH1cblxuICBfaXRlbUluY3JlbWVudChoYW5kbGVyKSB7XG4gICAgY29uc3QgeyBpdGVtLCBzdGF0ZSwgY2FsbGJhY2sgfSA9IGhhbmRsZXIoKVxuXG4gICAgaWYgKHN0YXRlLmNvdW50ZXIgPCBzdGF0ZS5kYXRhLmxlbmd0aCkge1xuICAgICAgdGhpcy5fYWRkSXRlbShpdGVtLCBzdGF0ZSwgY2FsbGJhY2spXG4gICAgICB0aGlzLl91cGRhdGVDb3VudGVyKHN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIF9pdGVtRGVjcmVtZW50KGhhbmRsZXIpIHtcbiAgICBjb25zdCB7IGl0ZW0sIHN0YXRlIH0gPSBoYW5kbGVyKClcblxuICAgIGlmIChpdGVtKSB7XG4gICAgICB0aGlzLl9yZW1vdmVJdGVtKGl0ZW0sIHN0YXRlKVxuICAgICAgdGhpcy5fdXBkYXRlQ291bnRlcihzdGF0ZSlcbiAgICB9XG4gIH1cblxuICBfYWRkSXRlbShpdGVtLCBzdGF0ZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLl9tb3ZlU2hhcGVWaWV3KGl0ZW0sIHRoaXMuX2NyZWF0ZUltYWdlVmlldyhpdGVtKSwgc3RhdGUsIGNhbGxiYWNrKVxuICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIoc3RhdGUpXG4gIH1cblxuICBfcmVtb3ZlSXRlbShpdGVtLCBzdGF0ZSkge1xuICAgIHRoaXMuX2l0ZW1SZW1vdmVGcm9tRG9tVmlldyhpdGVtLmlkKVxuICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIoc3RhdGUpXG4gIH1cblxuICBfaXRlbVJlbW92ZUZyb21Eb21WaWV3KGlkKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpPy5yZW1vdmUoKVxuICB9XG5cbiAgX21vdmVTaGFwZVZpZXcoaXRlbSwgc2hhcGUsIHN0YXRlLCBjYWxsYmFjaykge1xuICAgIGxldCBwb3NpdGlvbiA9IDBcblxuICAgIGNvbnN0IGZyYW1lID0gKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBwb3NpdGlvbiA9PT1cbiAgICAgICAgdGhpcy5nYW1lQm94U2NyZWVuSG9sZGVyPy5jbGllbnRIZWlnaHQgLSBzaGFwZS5vZmZzZXRIZWlnaHRcbiAgICAgICkge1xuICAgICAgICBjbGVhckludGVydmFsKGlkKVxuICAgICAgICBzaGFwZS5yZW1vdmUoKVxuICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIoc3RhdGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3NpdGlvbisrXG4gICAgICAgIHNoYXBlLnN0eWxlLmJvdHRvbSA9IHBvc2l0aW9uICsgJ3B4J1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgaWQgPSBzZXRJbnRlcnZhbChmcmFtZSwgMTUpXG4gIH1cblxuICBfY3JlYXRlSW1hZ2VWaWV3KGl0ZW0pIHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgY29uc3QgdHlwZSA9IGl0ZW0uZmlndXJlXG4gICAgICBjb25zdCB0eXBlQXJyID0gdHlwZT8uc3BsaXQoJyAnKVxuICAgICAgY29uc3QgcmFuZG9tVmFsID0gKG1pbiwgbWF4KSA9PlxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG5cbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBpZiAodHlwZUFycikge1xuICAgICAgICB0eXBlQXJyPy5sZW5ndGggPiAxICYmIHR5cGVBcnI/Lmxlbmd0aCA8IDNcbiAgICAgICAgICA/IGRpdi5jbGFzc0xpc3QuYWRkKCdmaWd1cmUnLCBgZmlndXJlLSR7dHlwZUFyclswXX1gLCBgJHt0eXBlQXJyWzFdfWApXG4gICAgICAgICAgOiB0eXBlQXJyPy5sZW5ndGggPiAyXG4gICAgICAgICAgICA/IGRpdi5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgICAnZmlndXJlJyxcbiAgICAgICAgICAgICAgYGZpZ3VyZS0ke3R5cGVBcnJbMF19YCxcbiAgICAgICAgICAgICAgYCR7dHlwZUFyclsxXX1gLFxuICAgICAgICAgICAgICBgJHt0eXBlQXJyWzJdfWBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogZGl2LmNsYXNzTGlzdC5hZGQoJ2ZpZ3VyZScsIGBmaWd1cmUtJHt0eXBlQXJyWzBdfWApXG4gICAgICB9XG4gICAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsIGl0ZW0uaWQpXG4gICAgICBkaXYuc3R5bGUubGVmdCA9IGAke3JhbmRvbVZhbCgwLCA4MCl9JWBcbiAgICAgIHRoaXMuZ2FtZUJveFNjcmVlbkhvbGRlcj8uYXBwZW5kQ2hpbGQoZGl2KVxuXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpdGVtLmlkfWApPy5jbGFzc0xpc3QuYWRkKCdvdXQnKVxuICAgICAgc2V0VGltZW91dCgoKSA9PlxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpdGVtLmlkfWApPy5jbGFzc0xpc3QuYWRkKCdpbicpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBkaXZcbiAgICB9XG4gIH1cblxuICBfdXBkYXRlQ291bnRlcihzdGF0ZSkge1xuICAgIGlmICh0aGlzLmNvdW50ZXJEaXNwbGF5KSB7XG4gICAgICB0aGlzLmNvdW50ZXJEaXNwbGF5LmlubmVySFRNTCA9IGBDb3VudHM6ICR7c3RhdGUuY291bnRlcn1gXG4gICAgfVxuICB9XG5cbiAgYmluZFRvZ2dsZVN0YXJ0U3RvcChoYW5kbGVyKSB7XG4gICAgdGhpcy5fZGlzYWJsZUNvdW50ZXIoKVxuXG4gICAgdGhpcy5wbGF5QnRucz8uZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYnRuPy5nZXRBdHRyaWJ1dGUoVUlfQ09OU1RBTlRTLmNvbnRyb2xsZXJCdG5BdHRyKT8udG9VcHBlckNhc2UoKSA9PT1cbiAgICAgICAgICBVSV9DT05TVEFOVFMuU1RBUlRcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5fZW5hYmxlQ291bnRlcigpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5nYW1lQm94U2NyZWVuSG9sZGVyLmlubmVySFRNTCA9ICcnXG4gICAgICAgICAgdGhpcy5fZGlzYWJsZUNvdW50ZXIoKVxuICAgICAgICAgIGNvbnN0IHsgc3RhdGUgfSA9IGhhbmRsZXIoKVxuICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIoc3RhdGUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGJpbmRBZGQoaGFuZGxlcikge1xuICAgIHRoaXMuY291bnRlckJ0bnM/LmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjbGljaycsXG4gICAgICAgICgpID0+XG4gICAgICAgICAgYnRuPy5nZXRBdHRyaWJ1dGUoVUlfQ09OU1RBTlRTLmNvdW50ZXJCdG5BdHRyKT8udG9VcHBlckNhc2UoKSA9PT1cbiAgICAgICAgICBVSV9DT05TVEFOVFMuSU5DUkVNRU5UICYmIHRoaXMuX2l0ZW1JbmNyZW1lbnQoaGFuZGxlcilcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgYmluZFJlbW92ZShoYW5kbGVyKSB7XG4gICAgdGhpcy5jb3VudGVyQnRucz8uZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgKCkgPT5cbiAgICAgICAgICBidG4/LmdldEF0dHJpYnV0ZShVSV9DT05TVEFOVFMuY291bnRlckJ0bkF0dHIpPy50b1VwcGVyQ2FzZSgpID09PVxuICAgICAgICAgIFVJX0NPTlNUQU5UUy5ERUNSRU1FTlQgJiYgdGhpcy5faXRlbURlY3JlbWVudChoYW5kbGVyKVxuICAgICAgKVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlld1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc1Mik7XG4iXSwibmFtZXMiOlsibW9kZWwiLCJ2aWV3IiwiY29uc3RydWN0b3IiLCJ0aGlzIiwiYmluZFRvZ2dsZVN0YXJ0U3RvcCIsImhhbmRsZVRvZ2dsZVN0YXJ0U3RvcCIsImJpbmRBZGQiLCJoYW5kbGVBZGQiLCJiaW5kUmVtb3ZlIiwiaGFuZGxlUmVtb3ZlIiwic3RhdGUiLCJzdG9wR2FtZSIsIml0ZW0iLCJhZGRJdGVtIiwiY2FsbGJhY2siLCJ1cGRhdGVPbk1vdmVVcCIsInJlbW92ZUl0ZW0iLCJoYW5kbGVVcGRhdGVDb3VudGVyIiwiY291bnRlciIsInVwZGF0ZUNvdW50ZXIiLCJVSV9DT05TVEFOVFMiLCJhcHAiLCJnYW1lQm94IiwiZ2FtZVNjcmVlbkhvbGRlciIsImdhbWVDb250cm9sbGVyQnRuIiwiZ2FtZUNvdW50ZXJCdG4iLCJnYW1lQ291bnRlckRpc3BsYXkiLCJjb250cm9sbGVyQnRuQXR0ciIsImNvdW50ZXJCdG5BdHRyIiwiZGlzYWJsZWRDbGFzcyIsIlNUQVJUIiwiSU5DUkVNRU5UIiwiREVDUkVNRU5UIiwiQUREIiwiUkVNT1ZFIiwiZGF0YSIsImluaXRpYWxEYXRhIiwiZmF2Q29sb3JzIiwic2l6ZSIsIl91cGRhdGVDb3VudGVyIiwibGVuZ3RoIiwiaXRlbVRvQWRkIiwiZ2V0VW5pcXVlQ29tcGFyZVJlc3VsdCIsIm5ld0l0ZW0iLCJzaHVmZmxlIiwicG9wIiwiZmF2IiwiZmlndXJlIiwicG9wRGF0YSIsImZpbHRlciIsImlkIiwiYXJyYXkiLCJyYW5kb21JbmRleCIsImN1cnJlbnRJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNyZWF0ZUVsZW1lbnQiLCJ0YWciLCJjbGFzc05hbWUiLCJhdHRyIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwiZ2V0RWxlbWVudCIsInNlbGVjdG9yIiwicXVlcnlTZWxlY3RvciIsIml0ZW1zIiwibGltaXQiLCJpZHgiLCJhcnIxIiwiYXJyMiIsIm9uZSIsImZpbmQiLCJ0d28iLCJ2YWx1ZSIsImluZGV4Iiwic2VsZiIsImZpbmRJbmRleCIsInYiLCJ0eXBlIiwiY291bnQiLCJnYW1lQm94U2NyZWVuSG9sZGVyIiwicGxheUJ0bnMiLCJjb3VudGVyQnRucyIsImNvdW50ZXJEaXNwbGF5IiwicXVlcnlTZWxlY3RvckFsbCIsIl9kaXNhYmxlQ291bnRlciIsImZvckVhY2giLCJidG4iLCJfZW5hYmxlQ291bnRlciIsInJlbW92ZSIsIl9pdGVtSW5jcmVtZW50IiwiaGFuZGxlciIsIl9hZGRJdGVtIiwiX2l0ZW1EZWNyZW1lbnQiLCJfcmVtb3ZlSXRlbSIsIl9tb3ZlU2hhcGVWaWV3IiwiX2NyZWF0ZUltYWdlVmlldyIsIl9pdGVtUmVtb3ZlRnJvbURvbVZpZXciLCJnZXRFbGVtZW50QnlJZCIsInNoYXBlIiwicG9zaXRpb24iLCJzZXRJbnRlcnZhbCIsImNsaWVudEhlaWdodCIsIm9mZnNldEhlaWdodCIsImNsZWFySW50ZXJ2YWwiLCJzdHlsZSIsImJvdHRvbSIsInR5cGVBcnIiLCJzcGxpdCIsInJhbmRvbVZhbCIsIm1pbiIsIm1heCIsImRpdiIsImxlZnQiLCJhcHBlbmRDaGlsZCIsInNldFRpbWVvdXQiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0QXR0cmlidXRlIiwidG9VcHBlckNhc2UiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImNhbGwiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VSb290IjoiIn0=