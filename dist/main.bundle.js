"use strict";
(self["webpackChunkresponsive_navbar"] = self["webpackChunkresponsive_navbar"] || []).push([["main"],{

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/icons */ "./src/modules/icons.js");



const dropdownBtn = document.querySelectorAll('.dropdown-btn');
const dropdown = document.querySelectorAll('.dropdown');
const hamburgerBtn = document.querySelector('#hamburger');
const navMenu = document.querySelector('.menu');
const links = document.querySelectorAll('.dropdown a');

const setAriaExpandedFalse = () => {
    dropdownBtn.forEach((btn) => btn.setAttribute('aria-expanded', 'false'));
};

const closeDropdownMenu = () => {
    dropdown.forEach((drop) => {
        drop.classList.remove('active');
        drop.addEventListener('click', e => e.stopPropagation());
    });
};

const toggleHamburger = () => {
    navMenu.classList.toggle('show');
};

dropdownBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const dropdownIndex = e.currentTarget.dataset.dropdown;
        const dropdownElement = document.getElementById(dropdownIndex);
        
        dropdownElement.classList.toggle('active');
        dropdown.forEach((drop) => {
            if (drop.id !== btn.dataset['dropdown']) {
                drop.classList.remove('active');
            };
        });
        e.stopPropagation();
        btn.setAttribute(
            'aria-expanded',
            btn.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
        );
    });
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        closeDropdownMenu();
        setAriaExpandedFalse();
        toggleHamburger();
    });
});

document.documentElement.addEventListener('click', () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDropdownMenu();
        setAriaExpandedFalse();
    };
});

hamburgerBtn.addEventListener('click', toggleHamburger);

/***/ }),

/***/ "./src/modules/icons.js":
/*!******************************!*\
  !*** ./src/modules/icons.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_icons_botd_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/botd.svg */ "./src/assets/icons/botd.svg");
/* harmony import */ var _assets_icons_fs_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/fs.svg */ "./src/assets/icons/fs.svg");
/* harmony import */ var _assets_icons_sp_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/sp.svg */ "./src/assets/icons/sp.svg");
/* harmony import */ var _assets_icons_cf_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/cf.svg */ "./src/assets/icons/cf.svg");
/* harmony import */ var _assets_icons_xd_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/xd.svg */ "./src/assets/icons/xd.svg");
/* harmony import */ var _assets_icons_ae_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/ae.svg */ "./src/assets/icons/ae.svg");
/* harmony import */ var _assets_icons_sketch_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/sketch.svg */ "./src/assets/icons/sketch.svg");
/* harmony import */ var _assets_icons_indesign_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/indesign.svg */ "./src/assets/icons/indesign.svg");
/* harmony import */ var _assets_icons_figma_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/icons/figma.svg */ "./src/assets/icons/figma.svg");
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/img/logo.png */ "./src/assets/img/logo.png");
/* harmony import */ var _assets_img_user_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/img/user.jpg */ "./src/assets/img/user.jpg");












const botdImg = document.querySelector('#botd');
botdImg.src = _assets_icons_botd_svg__WEBPACK_IMPORTED_MODULE_0__;
const fsImg = document.querySelector('#fs');
fsImg.src = _assets_icons_fs_svg__WEBPACK_IMPORTED_MODULE_1__;
const spImg = document.querySelector('#sp');
spImg.src = _assets_icons_sp_svg__WEBPACK_IMPORTED_MODULE_2__;
const cfImg = document.querySelector('#cf');
cfImg.src = _assets_icons_cf_svg__WEBPACK_IMPORTED_MODULE_3__;
const xdImg = document.querySelector('#xd');
xdImg.src = _assets_icons_xd_svg__WEBPACK_IMPORTED_MODULE_4__;
const aeImg = document.querySelector('#ae');
aeImg.src = _assets_icons_ae_svg__WEBPACK_IMPORTED_MODULE_5__;
const sketchImg = document.querySelector('#sketch');
sketchImg.src = _assets_icons_sketch_svg__WEBPACK_IMPORTED_MODULE_6__;
const indesignImg = document.querySelector('#indesign');
indesignImg.src = _assets_icons_indesign_svg__WEBPACK_IMPORTED_MODULE_7__;
const figmaImg = document.querySelector('#figma');
figmaImg.src = _assets_icons_figma_svg__WEBPACK_IMPORTED_MODULE_8__;
const logoImg = document.querySelector('#logo');
logoImg.src = _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_9__;
const userImg = document.querySelector('#user');
userImg.src = _assets_img_user_jpg__WEBPACK_IMPORTED_MODULE_10__;

/***/ }),

/***/ "./src/assets/icons/ae.svg":
/*!*********************************!*\
  !*** ./src/assets/icons/ae.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae.svg";

/***/ }),

/***/ "./src/assets/icons/botd.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/botd.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "botd.svg";

/***/ }),

/***/ "./src/assets/icons/cf.svg":
/*!*********************************!*\
  !*** ./src/assets/icons/cf.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf.svg";

/***/ }),

/***/ "./src/assets/icons/figma.svg":
/*!************************************!*\
  !*** ./src/assets/icons/figma.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "figma.svg";

/***/ }),

/***/ "./src/assets/icons/fs.svg":
/*!*********************************!*\
  !*** ./src/assets/icons/fs.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fs.svg";

/***/ }),

/***/ "./src/assets/icons/indesign.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/indesign.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "indesign.svg";

/***/ }),

/***/ "./src/assets/icons/sketch.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/sketch.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sketch.svg";

/***/ }),

/***/ "./src/assets/icons/sp.svg":
/*!*********************************!*\
  !*** ./src/assets/icons/sp.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "sp.svg";

/***/ }),

/***/ "./src/assets/icons/xd.svg":
/*!*********************************!*\
  !*** ./src/assets/icons/xd.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "xd.svg";

/***/ }),

/***/ "./src/assets/img/logo.png":
/*!*********************************!*\
  !*** ./src/assets/img/logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.png";

/***/ }),

/***/ "./src/assets/img/user.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/user.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "user.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNJOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0Q0QztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUTtBQUNJO0FBQ047QUFDSjtBQUNBOztBQUUxQztBQUNBLGNBQWMsbURBQUk7QUFDbEI7QUFDQSxZQUFZLGlEQUFFO0FBQ2Q7QUFDQSxZQUFZLGlEQUFFO0FBQ2Q7QUFDQSxZQUFZLGlEQUFFO0FBQ2Q7QUFDQSxZQUFZLGlEQUFFO0FBQ2Q7QUFDQSxZQUFZLGlEQUFFO0FBQ2Q7QUFDQSxnQkFBZ0IscURBQU07QUFDdEI7QUFDQSxrQkFBa0IsdURBQVE7QUFDMUI7QUFDQSxlQUFlLG9EQUFLO0FBQ3BCO0FBQ0EsY0FBYyxpREFBSTtBQUNsQjtBQUNBLGNBQWMsa0RBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXNwb25zaXZlLW5hdmJhci8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9yZXNwb25zaXZlLW5hdmJhci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXNwb25zaXZlLW5hdmJhci8uL3NyYy9tb2R1bGVzL2ljb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL21vZHVsZXMvaWNvbnMnO1xuXG5jb25zdCBkcm9wZG93bkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bi1idG4nKTtcbmNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duJyk7XG5jb25zdCBoYW1idXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGFtYnVyZ2VyJyk7XG5jb25zdCBuYXZNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duIGEnKTtcblxuY29uc3Qgc2V0QXJpYUV4cGFuZGVkRmFsc2UgPSAoKSA9PiB7XG4gICAgZHJvcGRvd25CdG4uZm9yRWFjaCgoYnRuKSA9PiBidG4uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJykpO1xufTtcblxuY29uc3QgY2xvc2VEcm9wZG93bk1lbnUgPSAoKSA9PiB7XG4gICAgZHJvcGRvd24uZm9yRWFjaCgoZHJvcCkgPT4ge1xuICAgICAgICBkcm9wLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IHRvZ2dsZUhhbWJ1cmdlciA9ICgpID0+IHtcbiAgICBuYXZNZW51LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbn07XG5cbmRyb3Bkb3duQnRuLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duSW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5kcm9wZG93bjtcbiAgICAgICAgY29uc3QgZHJvcGRvd25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZHJvcGRvd25JbmRleCk7XG4gICAgICAgIFxuICAgICAgICBkcm9wZG93bkVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIGRyb3Bkb3duLmZvckVhY2goKGRyb3ApID0+IHtcbiAgICAgICAgICAgIGlmIChkcm9wLmlkICE9PSBidG4uZGF0YXNldFsnZHJvcGRvd24nXSkge1xuICAgICAgICAgICAgICAgIGRyb3AuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICdhcmlhLWV4cGFuZGVkJyxcbiAgICAgICAgICAgIGJ0bi5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ2ZhbHNlJyA/ICd0cnVlJyA6ICdmYWxzZSdcbiAgICAgICAgKTtcbiAgICB9KTtcbn0pO1xuXG5saW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2xvc2VEcm9wZG93bk1lbnUoKTtcbiAgICAgICAgc2V0QXJpYUV4cGFuZGVkRmFsc2UoKTtcbiAgICAgICAgdG9nZ2xlSGFtYnVyZ2VyKCk7XG4gICAgfSk7XG59KTtcblxuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsb3NlRHJvcGRvd25NZW51KCk7XG4gICAgc2V0QXJpYUV4cGFuZGVkRmFsc2UoKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIGNsb3NlRHJvcGRvd25NZW51KCk7XG4gICAgICAgIHNldEFyaWFFeHBhbmRlZEZhbHNlKCk7XG4gICAgfTtcbn0pO1xuXG5oYW1idXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVIYW1idXJnZXIpOyIsImltcG9ydCBib3RkIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9ib3RkLnN2Zyc7XG5pbXBvcnQgZnMgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2ZzLnN2Zyc7XG5pbXBvcnQgc3AgZnJvbSAnLi4vYXNzZXRzL2ljb25zL3NwLnN2Zyc7XG5pbXBvcnQgY2YgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NmLnN2Zyc7XG5pbXBvcnQgeGQgZnJvbSAnLi4vYXNzZXRzL2ljb25zL3hkLnN2Zyc7XG5pbXBvcnQgYWUgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2FlLnN2Zyc7XG5pbXBvcnQgc2tldGNoIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9za2V0Y2guc3ZnJztcbmltcG9ydCBpbmRlc2lnbiBmcm9tICcuLi9hc3NldHMvaWNvbnMvaW5kZXNpZ24uc3ZnJztcbmltcG9ydCBmaWdtYSBmcm9tICcuLi9hc3NldHMvaWNvbnMvZmlnbWEuc3ZnJztcbmltcG9ydCBsb2dvIGZyb20gJy4uL2Fzc2V0cy9pbWcvbG9nby5wbmcnO1xuaW1wb3J0IHVzZXIgZnJvbSAnLi4vYXNzZXRzL2ltZy91c2VyLmpwZyc7XG5cbmNvbnN0IGJvdGRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm90ZCcpO1xuYm90ZEltZy5zcmMgPSBib3RkO1xuY29uc3QgZnNJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZnMnKTtcbmZzSW1nLnNyYyA9IGZzO1xuY29uc3Qgc3BJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3AnKTtcbnNwSW1nLnNyYyA9IHNwO1xuY29uc3QgY2ZJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2YnKTtcbmNmSW1nLnNyYyA9IGNmO1xuY29uc3QgeGRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjeGQnKTtcbnhkSW1nLnNyYyA9IHhkO1xuY29uc3QgYWVJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWUnKTtcbmFlSW1nLnNyYyA9IGFlO1xuY29uc3Qgc2tldGNoSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NrZXRjaCcpO1xuc2tldGNoSW1nLnNyYyA9IHNrZXRjaDtcbmNvbnN0IGluZGVzaWduSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luZGVzaWduJyk7XG5pbmRlc2lnbkltZy5zcmMgPSBpbmRlc2lnbjtcbmNvbnN0IGZpZ21hSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpZ21hJyk7XG5maWdtYUltZy5zcmMgPSBmaWdtYTtcbmNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nbycpO1xubG9nb0ltZy5zcmMgPSBsb2dvO1xuY29uc3QgdXNlckltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyJyk7XG51c2VySW1nLnNyYyA9IHVzZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9