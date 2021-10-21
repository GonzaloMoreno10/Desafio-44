"use strict";

module.exports = {
  apps: [{
    name: 'app1',
    script: 'dist/src/index.js',
    watch: true,
    instances: 1,
    autorestart: true,
    args: '--puerto=8081',
    exec_mode: 'fork'
  }, {
    name: 'app2',
    script: 'dist/src/index.js',
    watch: true,
    instances: 1,
    autorestart: true,
    args: '--puerto=8082'
  }]
};