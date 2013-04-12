{
    "baseUrl": "static/scripts/",
    "dir": "./static/scripts/production-js",
    "paths": {
        "jquery": "libs/jquery/jquery-1.9.0",
        "underscore": "libs/underscore/underscore",
        "backboneLib": "libs/backbone/backbone",
        "backbone": "apps/common/backboneMixins",
        "marionette": "libs/marionette/backbone.marionette",
        "Handlebars": "libs/handlebars/handlebars",
        "json2": "libs/json2/json2",
        "hbs": "libs/requireJS/plugins/hbs",
        "bootstrap": "libs/bootstrap/bootstrap"
    },
    "shim": {
        "underscore": {
            "exports": "_"
        },
        "backboneLib": {
            "deps": [
                "jquery",
                "underscore",
                "bootstrap"
            ],
            "exports": "Backbone"
        },
        "backbone": {
            "deps": [
                "backboneLib"
            ],
            "exports": "Backbone"
        },
        "marionette": {
            "deps": [
                "jquery",
                "backbone",
                "underscore"
            ],
            "exports": "Marionette"
        },
        "HighchartsLib": {
            "deps": [
                "jquery"
            ],
            "exports": "Highcharts"
        },
        "less": {
            "exports": "less"
        },
        "json2": {
            "exports": "JSON"
        },
        "jquery": {
            "exports": "$"
        },
        "Handlebars": {
            "exports": "Handlebars"
        },
        "BackboneFormLib/backbone-forms": [
            "backbone",
            "jquery"
        ],
        "BackboneFormLib/templates/bootstrap": [
            "BackboneFormLib/backbone-forms"
        ],
        "BackboneFormLib/editors/jquery-ui": [
            "BackboneFormLib/backbone-forms",
            "jquery-ui"
        ],
        "BackboneFormLib/editors/list": [
            "BackboneFormLib/backbone-forms"
        ],
        "BackboneFormLib/adapters/backbone.bootstrap-modal": [
            "BackboneFormLib/backbone-forms",
            "bootstrap"
        ],
        "bootstrap": [
            "jquery"
        ],
        "dataTables": [
            "jquery"
        ],
        "dataTablesBootstrap": [
            "dataTables",
            "underscore"
        ]
    },
    "skipDirOptimize": true,
    "optimize": "uglify2",
    "inlineText": true,
    "optimizeCss": "none",
    "useStrict": true,
    "preserveLicenseComments": false,
    "hbs": {
        "disableI18n": true,
        "templateExtension": "html"
    },
    "modules": [
        {
            "name": "appsJS/first/main"
        },
        {
            "name": "appsJS/second/main"
        }
    ]
}