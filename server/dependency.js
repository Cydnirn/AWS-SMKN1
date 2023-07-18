const http = require("http");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const mongoose = require("mongoose");

module.exports = {
    http,
    express,
    router,
    fs,
    path,
    helmet,
    rateLimit,
    bodyParser,
    crypto,
    mongoose,
};
