define [
  "jquery"
  "backbone"
  "marionette"
  "./ManagementLayout"
  "./ManagementLayoutExternalTemplate"
],
($, Backbone, Marionette, ManagementLayout, ManagementLayoutExternalTemplate) ->
  MyApp = new Marionette.Application();

  MyApp.addRegions
    mainRegion: "._mainRegion"
    secondaryRegion: "._secondary"

  MyApp.addInitializer (options)->
    MyApp.mainRegion.show(new ManagementLayout)
    MyApp.secondaryRegion.show(new ManagementLayoutExternalTemplate)

  MyApp
