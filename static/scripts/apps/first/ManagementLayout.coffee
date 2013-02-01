define [
  "backbone"
  "marionette"
  "Handlebars"
],
(Backbone, Marionette, Handlebars) ->

  Marionette.Layout.extend
    template: Handlebars.compile """
      <div class="container-fluid">
          <div class="row-fluid" id="_breadcrumbContainer"></div>
      </div><div class="_container container">
          <div>Content!!<br></div>
      </div>
    """

    initialize: ->
      @model = new Backbone.Model(testMessage: "testMessage testMessage testMessage")

    regions:
      breadcrumbContainer: "#_breadcrumbContainer"