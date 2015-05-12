var expect = require("chai").expect;
var connect = require("connect");
var request = require("supertest");
var harp = require("../");

var root = __dirname + "/assets"

var jade;

jade = connect().use(require("../lib/processor/jade")(root));