var assert = require("assert");
var bunyan = require("bunyan");
var dep = require("npm_deps_test_dep");

assert(bunyan === dep.bunyan);