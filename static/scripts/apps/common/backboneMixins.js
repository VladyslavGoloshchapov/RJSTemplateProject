var Model = Backbone.Model,
    Collection = Backbone.Collection,
    Router = Backbone.Router,
    View = Backbone.View,
    slice = Array.prototype.slice;

/*
 mixin
 ----
 Args are all mixins that you want included
 with the Backbone object
 */
var mixinFunc = function() {
    var mixins = slice.call(arguments);
    // add empty object to the beginning which is used as container for all properties from all mixins
    mixins.unshift({});
    var mixinAggregate = _.extend.apply({}, mixins);
    return this.extend(mixinAggregate);
};

Model.mixin = Collection.mixin = Router.mixin = View.mixin = mixinFunc;