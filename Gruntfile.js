module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    concurrent: {
      debug: [
        'nodemon',
        'node-inspector',
      ],
    },

    // configuration compatible with `grunt-open`
    // here we import `open` module instead
    open: {
      node_inspector: {
        url: 'http://127.0.0.1:8080/debug?port=5858',
      }
    },

    nodemon: {
      dev: {
        script: 'app.js',
        options: {
          // to set break point at a specific line insert snippet
          //  | debugger;
          // and use nodeArgs --debug instead of of --debug-brk
          // which breaks at first line
          // nodeArgs: ['--debug'],
          nodeArgs: ['--debug-brk'],
          env: {
            // set environment variables here
            // PORT: '9000'
          },
          // omit this property if you aren't serving HTML files and 
          // don't want to open a browser tab on start
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              grunt.log.writeln(event.colour);
            });

            // opens browser on initial server start
            nodemon.on('config:update', function () {
              // Delay before server listens on port
              var node_inspect_url = grunt.template.process('<%= open.node_inspector.url %>');
              setTimeout(function() {
                require('open')(node_inspect_url);
              }, 1000);
            });

            
            // refreshes browser when server reboots
            // works with livereload and watch
            // (ie for connect and express apps)
            // nodemon.on('restart', function () {
            //   // Delay before server listens on port
            //   setTimeout(function() {
            //     require('fs').writeFileSync('.rebooted', 'rebooted');
            //   }, 1000);
            // });
          }
        }
      }
    },

    'node-inspector': {
      dev: {}
    },
  });

  grunt.registerTask('default', ["concurrent:debug"]);
}