# grunt-msx

> Precompile Mithril views which use JSX into JavaScript by insin

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-msx --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-msx');
```

## The "msx" task

### Overview
In your project's Gruntfile, add a section named `msx` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  msx: {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options
Working on

### Usage Examples

#### Default Options
In this example, the `app` option are used to convert all files matched `test/fixtures/*.jsx` to Mithril views in test/expected.

```js
grunt.initConfig({
  msx: {
    app: {
      files: [{
        dest : 'test/expected',
        src  : 'test/fixtures/*.jsx'
      }]
    }
  },
})
```

### Example
```
todo.view = function(ctrl) {
  return <html>
    <body>
      <input onchange={m.withAttr("value", ctrl.description)} value={ctrl.description()}/>
      <button onclick={ctrl.add.bind(ctrl, ctrl.description)}>Add</button>
      <table>
        {ctrl.list.map(function(task, index) {
          return <tr>
            <td>
              <input
                type="checkbox"
                onclick={m.withAttr("checked", task.done)}
                checked={task.done()}
               />
            </td>
            <td style={{textDecoration: task.done() ? "line-through" : "none"}}>
              {task.description()}
            </td>
          </tr>
        })}
      </table>
    </body>
  </html>
};
```

To

```
todo.view = function(ctrl) {
  return m("html", [
    m("body", [
      m("input", {onchange:m.withAttr("value", ctrl.description), value:ctrl.description()}),
      m("button", {onclick:ctrl.add.bind(ctrl, ctrl.description)}, ["Add"]),
      m("table", [
        ctrl.list.map(function(task, index) {
          return m("tr", [
            m("td", [
              m("input",
                {type:"checkbox",
                onclick:m.withAttr("checked", task.done),
                checked:task.done()}
               )
            ]),
            m("td", {style:{textDecoration: task.done() ? "line-through" : "none"}}, [
              task.description()
            ])
          ])
        })
      ])
    ])
  ])
};
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Hung Quang Phan. Licensed under the MIT license.
