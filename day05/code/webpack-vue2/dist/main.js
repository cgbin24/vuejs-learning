/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../node_modules/vue/dist/vue.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n// 这个是入口文件\r\n\r\n\r\n// 如何在 webpack 构建的项目中，使用 Vue 进行开发\r\n\r\n/**\r\n * 复习：在普通网页中如何使用vue\r\n *  1、使用 script 标签，引入 vue 的包\r\n *  2、在 index 页面中，创建一个id为 app div 容器\r\n *  3、通过new Vue 得到一个vm 的实例\r\n */\r\n\r\n /**\r\n  * 在 webpack 中尝试 使用Vue\r\n  * 在 webpack 中导入的Vue包功能不全，只提供了runtime-only的方式，并没有提供 像网页中那样的使用方式\r\n  */\r\n//  import Vue from 'vue'\r\n\r\n\r\n/**\r\n * 分析：\r\n *  1、找项目根目录中有没有 node_modules 的文件夹\r\n *  2、在 node_modules中根据报名，找对应的 vue 文件夹\r\n *  3、在 vue文件夹中，找一个叫 package.json 的包配置文件\r\n *  4、在 package.json 文件中，查找一个 main 属性【main 属性指定了这个包在被加载时的入口文件】\r\n */\r\n\r\n\r\nvar login = {\r\n    template: '<h1>这是login组件，是使用网页中形式创建出来的组件</h1>'\r\n}\r\n\r\n\r\n\r\n var vm = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../node_modules/vue/dist/vue.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\r\n     el: '#app',\r\n     data: {\r\n         msg: '123'\r\n     },\r\n     components: {\r\n         login\r\n     }\r\n })\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });