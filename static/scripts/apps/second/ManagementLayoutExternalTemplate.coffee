define [
  "backbone"
  "marionette"
  "hbs!./secondaryTemplate2"
],
(Backbone, Marionette, secondaryTemplate) ->

  Marionette.Layout.extend
    template: secondaryTemplate

    initialize: ->
      @model = new Backbone.Model(testMessage: "testMessage testMessage testMessage")

    regions:
      breadcrumbContainer: "#_breadcrumbContainer"