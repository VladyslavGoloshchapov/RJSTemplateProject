Model = Backbone.Model
Collection = Backbone.Collection
Router = Backbone.Router
View = Backbone.View
slice = Array.prototype.slice

/*
mixin
----
Args are all mixins that you want included
with the Backbone object
*/
mixinFunc = function() {
	mixins = slice.call(arguments)
	mixins.splice(0,0,{});
	mixinAggregate = _.extend.apply(this,mixins)
	mixedObj = this.extend(mixinAggregate)
	mixedObj.mixin = this.mixin
	mixedObj.__mixins__ = mixins.slice(1)
	return mixedObj
}

Model.mixin = Collection.mixin = Router.mixin = View.mixin = mixinFunc