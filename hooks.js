var path = require('path');
var eejs = require("ep_etherpad-lite/node/eejs");

exports.eejsBlock_editbarMenuLeft = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_speechinput/templates/editbarbuttons.html");
  return cb();
};

exports.eejsBlock_scripts = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_speechinput/templates/scripts.html", {}, module);
  return cb();
};

exports.eejsBlock_styles = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_speechinput/templates/styles.html", {}, module);
  return cb();
};