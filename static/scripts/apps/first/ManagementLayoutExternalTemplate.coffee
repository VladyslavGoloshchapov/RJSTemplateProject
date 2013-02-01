define [
  "backbone"
  "marionette"
  "hbs!./secondaryTemplate"
],
(Backbone, Marionette, secondaryTemplate) ->

  Marionette.Layout.extend
    template: secondaryTemplate

    initialize: ->
      @model = new Backbone.Model(testMessage: "testMessage testMessage testMessage")

    regions:
      breadcrumbContainer: "#_breadcrumbContainer"