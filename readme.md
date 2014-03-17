# grunt-node-inspector-setup [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

> Automatically rerun app upon save and launch node-inspector debugger

This is a frequent setup for testing code ideas in node, but did not quite warrant an entire grunt-init or a npm package.
But git clone can still save keystrokes.


## Getting Started

If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```shell
npm install --save-dev grunt-shell
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-shell');
```

*Tip: the [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) module makes it easier to load multiple grunt tasks.*

[grunt]: http://gruntjs.com
[Getting Started]: https://github.com/gruntjs/grunt/wiki/Getting-started


## Documentation


### Example usage


#### Run command

Install dependencies `npm install`.

Run app.js with debugger opened in the browser with `grunt`.

## License

MIT © [noos](http://noos.com)
