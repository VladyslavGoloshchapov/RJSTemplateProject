var require = {
    baseUrl: "/" + appUrl + "/static/scripts",
    paths:{
        jquery: "libs/jquery/jquery-1.9.0",
        underscore: "libs/underscore/underscore",
        backboneLib: "libs/backbone/backbone",
        backbone: "appsJS/common/backboneMixins",
        marionette: "libs/marionette/backbone.marionette",
        Handlebars: "libs/handlebars/handlebars",
        json2: "libs/json2/json2",
        hbs:"libs/requireJS/plugins/hbs",
        bootstrap:"libs/bootstrap/bootstrap"
                                             /*
        BackboneFormLib:"libs/backboneForms/0.10.1",
        BackboneForm:"common/utils/backboneFormLoader",
        //Jquery plugins
        "jquery-ui":"libs/jquery-ui/js/jquery-ui-1.8.18.custom.min",
        //External RequireJS Plugins
        text:"libs/require/plugins/text",
        i18n:"libs/require/plugins/i18n",

        i18nprecompile: "libs/require/plugins/hbs/i18nprecompile",
        //Internal RequireJS Plugins
        translate:"common/utils/requirePlugins/translate",

        */
    },
    shim: {
        underscore: { exports: "_" },
        backboneLib: {
            deps: ["jquery","underscore",'bootstrap'],
            exports: "Backbone"
        },
        backbone: {
            deps: ["backboneLib"],
            exports: "Backbone"
        },
        marionette: {
            deps: ["jquery","backbone","underscore"],
            exports: "Marionette"
        },
        HighchartsLib: {
            deps: ["jquery"],
            exports: "Highcharts"
        },
        less: { exports: "less" },
        json2: { exports: "JSON" },
        jquery: { exports: "$" },
        Handlebars: { exports: "Handlebars" },
        "BackboneFormLib/backbone-forms": ["backbone","jquery"],
        "BackboneFormLib/templates/bootstrap": ["BackboneFormLib/backbone-forms"],
        "BackboneFormLib/editors/jquery-ui": ["BackboneFormLib/backbone-forms","jquery-ui"],
        "BackboneFormLib/editors/list": ["BackboneFormLib/backbone-forms"],
        "BackboneFormLib/adapters/backbone.bootstrap-modal": ["BackboneFormLib/backbone-forms","bootstrap"],
        bootstrap:["jquery"],
        dataTables:["jquery"],
        dataTablesBootstrap:["dataTables","underscore"]
    },
    waitSeconds:25,
    hbs: {
        disableI18n: true,
        disableHelpers: true,
        templateExtension: "html",
        helperPathCallback: function(name) {
            return "cs!common/utils/templateHelpers/"+name;
        }
    }
};
