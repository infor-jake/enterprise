module.exports = function(grunt) {

  grunt.file.defaultEncoding = 'utf-8';
  grunt.file.preserveBOM = true;
  let controls = grunt.option('controls'),
    excludeControls = grunt.option('excludeControls');
  const mapperPath = grunt.option('mapperPath'),
    extractNameFromPath = function(path) {
      const matches = path.match(/.*(\/.*)(\.js)/),
        name = matches[1].replace('/', '');
      return name;
    },
    dependencyPusher = function(arr, dependencies) {
      let name;
      for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
        name = extractNameFromPath(arr[i].fileFound);
        dependencies.push(name);
      }
      return dependencies;
    },
    dependencyBuilder = function(mapperPath) {

      if (mapperPath && controls) {
        const obj = grunt.file.readJSON(mapperPath);
        let paths,
          deps = [];

        //1st pass at dependencies
        for (let i in controls) {
          let firstLevelName = controls[i],
            arr = obj[firstLevelName];
          deps = dependencyPusher(arr, deps);
        }

        //2nd pass at dependencies of dependencies
        for (let k = 0, depsLength = deps.length; k < depsLength; k++) {
          let secondLevelName = deps[k],
            arrDeps = obj[secondLevelName];
          if(arrDeps) {
            deps = dependencyPusher(arrDeps, deps);
          }
        }

        const depsSet = new Set(deps),
          arrDepsSet= [...depsSet];

        let dist = arrDepsSet.concat(controls);

        //Include initialize by default
        dist.unshift('initialize');

        //Modify array based on options, include, exclude options
        if (excludeControls) {
          for (let i in excludeControls) {
            dist = dist.filter( function(err) {
              return err !== excludeControls[i];
            });
          }

        }

        paths = dist.map((path) => {
          return `temp/amd/${path}.js`;
        });


        grunt.log.writeln('List of included controls in sohoxi.*.js'['green']); //jshint ignore:line
        const logOptions = {
          separator: '\n'
        };
        grunt.log.write(grunt.log.wordlist(paths, logOptions)); // jshint ignore:line
        return paths;
      } else {
        return;
      }

  };

  //Convert string to array, if one option
  if(!Array.isArray(controls)) {
    const control = controls;
    controls = [];
    controls.push(control);
  }

  if(!Array.isArray(excludeControls)) {
    const excludeControl = excludeControls;
    excludeControls = [];
    excludeControls.push(excludeControl);
  }

  const arrControls = dependencyBuilder(mapperPath) ||
    [
      'temp/amd/personalize.js',
      'temp/amd/initialize.js',
      'temp/amd/base.js',
      'temp/amd/utils.js',
      'temp/amd/animations.js',
      'temp/amd/locale.js',
      'temp/amd/listfilter.js',
      'temp/amd/about.js',
      'temp/amd/accordion.js',
      'temp/amd/applicationmenu.js',
      'temp/amd/autocomplete.js',
      'temp/amd/busyindicator.js',
      'temp/amd/button.js',
      'temp/amd/chart.js',
      'temp/amd/colorpicker.js',
      'temp/amd/contextualactionpanel.js',
      'temp/amd/datepicker.js',
      'temp/amd/datagrid.js',
      'temp/amd/dropdown.js',
      'temp/amd/drag.js',
      'temp/amd/editor.js',
      'temp/amd/environment.js',
      'temp/amd/expandablearea.js',
      'temp/amd/flyingfocus.js',
      'temp/amd/form.js',
      'temp/amd/fileupload.js',
      'temp/amd/fileuploadadvanced.js',
      'temp/amd/header.js',
      'temp/amd/hierarchy.js',
      'temp/amd/highlight.js',
      'temp/amd/homepage.js',
      'temp/amd/icon.js',
      'temp/amd/lookup.js',
      'temp/amd/lifecycle.js',
      'temp/amd/lightbox.js',
      'temp/amd/listview.js',
      'temp/amd/pager.js',
      'temp/amd/place.js',
      'temp/amd/popdown.js',
      'temp/amd/popupmenu.js',
      'temp/amd/progress.js',
      'temp/amd/mask.js',
      'temp/amd/multiselect.js',
      'temp/amd/message.js',
      'temp/amd/modal.js',
      'temp/amd/modalsearch.js',
      'temp/amd/rating.js',
      'temp/amd/resize.js',
      'temp/amd/searchfield.js',
      'temp/amd/sidebar.js',
      'temp/amd/shell.js',
      'temp/amd/signin.js',
      'temp/amd/slider.js',
      'temp/amd/arrange.js',
      'temp/amd/scrollaction.js',
      'temp/amd/spinbox.js',
      'temp/amd/splitter.js',
      'temp/amd/steppedprocess.js',
      'temp/amd/swaplist.js',
      'temp/amd/toast.js',
      'temp/amd/tabs.js',
      'temp/amd/tag.js',
      'temp/amd/textarea.js',
      'temp/amd/timepicker.js',
      'temp/amd/tmpl.js',
      'temp/amd/toolbar.js',
      'temp/amd/toolbarsearchfield.js',
      'temp/amd/tooltip.js',
      'temp/amd/tree.js',
      'temp/amd/validation.js',
      'temp/amd/wizard.js',
      'temp/amd/zoom.js'
    ];

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    banner: '/**\n* Soho XI Controls v<%= pkg.version %> \n* Date: <%= grunt.template.today("dd/mm/yyyy h:MM:ss TT") %> \n* Revision: <%= meta.revision %> \n */ \n',
    amdHeader: '(function(factory) {\n\n  if (typeof define === \'function\' && define.amd) {\n    // AMD. Register as an anonymous module\n    define([\'jquery\'], factory);\n  } else if (typeof exports === \'object\') {\n    // Node/CommonJS\n    module.exports = factory(require(\'jquery\'));\n} else {\n    // Browser globals \n    factory(jQuery);\n  }\n\n}(function($) {\n\n',

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/css/demo.css'       : 'sass/demo.scss',
          'dist/css/light-theme.css' : 'sass/light-theme.scss',
          'dist/css/dark-theme.css' : 'sass/dark-theme.scss',
          'dist/css/high-contrast-theme.css'  : 'sass/high-contrast-theme.scss',
          'dist/css/css-only.css'   : 'sass/css-only.scss',
          'dist/css/site.css'       : 'sass/site.scss'
        }
      }
    },

    watch: {
      source: {
        files: ['sass/**/*.scss', 'svg/*.svg', 'views/docs/**.html', 'views/**.html', 'views/includes/**.html', 'views/controls/**.html', 'js/*/*.js', 'js/*.js', 'js/cultures/*.*'],
        tasks: ['sohoxi-watch'],
        options: {
          livereload: true
        }
      }
    },

    jshint: {
      files: ['gruntfile.js', 'app.js', 'js/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    concat: {
      options: {
        separator: '',
        banner: '<%= banner %>'+'<%= amdHeader %>',
        footer: '\n}));\n//# sourceURL=<%= pkg.shortName %>.js'
      },
      basic: {
        files: {
          'dist/js/<%= pkg.shortName %>.js': arrControls
        }
      }
    },

    uglify: {
      dist: {
        options: {
          banner: '<%= banner %>',
          sourceMap: true,
          sourceMapName: 'dist/js/sohoxi.map',
          separator: ';'
        },
        files: {
          'dist/js/sohoxi.min.js': ['dist/js/sohoxi.js']
        }
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: ['dist/js/sohoxi.js'], dest: 'public/js/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['dist/js/sohoxi.min.js'], dest: 'public/js/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['js/sohoxi-angular.js'], dest: 'public/js/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['js/sohoxi-angular.js'], dest: 'dist/js/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['js/sohoxi-knockout.js'], dest: 'public/js/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['js/sohoxi-knockout.js'], dest: 'dist/js/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['js/*.js'], dest: 'dist/js/all/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['dist/css/*'], dest: 'public/stylesheets/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['js/demo/*.js'], dest: 'public/js/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['js/vendor/jquery-3*.js'], dest: 'public/js/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['js/vendor/jquery-3*.min.js'], dest: 'public/js/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['js/vendor/jquery-3*.map'], dest: 'public/js/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['js/vendor/jquery-3*.js'], dest: 'dist/js/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['js/vendor/jquery-3*.min.js'], dest: 'dist/js/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['js/vendor/jquery-3*.map'], dest: 'dist/js/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['js/vendor/d3.*'], dest: 'public/js/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['js/vendor/jquery-2*.js'], dest: 'dist/js/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['js/vendor/jquery-2*.min.js'], dest: 'dist/js/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['js/vendor/jquery-2*.map'], dest: 'dist/js/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['js/vendor/d3.*'], dest: 'dist/js/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['js/cultures/*.*'], dest: 'public/js/cultures/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['js/cultures/*.*'], dest: 'dist/js/cultures/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['views/controls/svg*.html'], dest: 'dist/svg/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['views/controls/svg*.html'], dest: 'public/svg/', filter: 'isFile'}
        ]
      },
      amd: {
        files: [
          {expand: true, flatten: true, src: ['js/*.*'], dest: 'temp/amd/', filter: 'isFile'}
        ]
      }
    },

    // Minify css
    cssmin: {
      options: {
        roundingPrecision: -1
      },
      dist: {
        files: {
          'dist/css/high-contrast-theme.min.css': ['dist/css/high-contrast-theme.css'],
          'dist/css/dark-theme.min.css': ['dist/css/dark-theme.css'],
          'dist/css/light-theme.min.css': ['dist/css/light-theme.css'],
          'dist/css/css-only.min.css': ['dist/css/css-only.css'],
        }
      }
    },

    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '<%= banner %>',
          linebreak: true
        },

        files: {
          src: [
            'dist/css/508-theme.css',
            'dist/css/508-theme.min.css',
            'dist/css/dark-theme.css',
            'dist/css/dark-theme.min.css',
            'dist/css/light-theme.css',
            'dist/css/light-theme.min.css',
            'dist/css/css-only.css',
            'dist/css/css-only.min.css',
            'dist/js/all/*.js'
          ]
        }
      }
    },

    // Git Revision
    revision: {
      options: {
        property: 'meta.revision',
        ref: 'HEAD',
        short: false
      }
    },

    meta: {
      revision: undefined
    },

    strip_code: { // jshint ignore:line
      options: {
        start_comment: 'start-amd-strip-block', // jshint ignore:line
        end_comment: 'end-amd-strip-block' // jshint ignore:line
      },
      src: {
        src: 'temp/amd/*.js'
      }
    },

    clean: {
      amd: ['temp'],
      dist: ['dist/js/*', 'dist/svg/*', 'dist/css/*'],
      public: ['public/js/*','public/svg/*','public/stylesheets/*']
    },

    compress: {
      main: {
        options: {
          archive: 'dist/all.zip'
        },

        files: [
          {src: ['dist/**'], dest: 'dist/'}
        ]
      }
    },

    md2html: {
      changelog: {
        options: {
          // Task-specific options go here.
        },
        files: [{
          src: ['CHANGELOG.md'],
          dest: 'views/docs/changelog-contents.html'
        }]
      }
    }

  });

  // load all grunt tasks from 'node_modules' matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', [
    'clean:dist',
    'clean:public',
    'revision',
    'jshint',
    'sass',
    'copy:amd',
    'strip_code',
    'concat',
    'clean:amd',
    'uglify',
    'cssmin',
    'copy:main',
    'usebanner',
    'compress',
    'md2html'
  ]);

  // Don't do any uglify/minify/jshint while the Dev Watch is running.
  grunt.registerTask('sohoxi-watch', [
    'revision', 'sass', 'copy:amd', 'strip_code','concat', 'clean:amd', 'copy:main', 'usebanner'
  ]);

};
