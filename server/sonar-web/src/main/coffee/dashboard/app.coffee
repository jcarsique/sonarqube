requirejs.config
  baseUrl: "#{baseUrl}/js"

  paths:
    'backbone': 'third-party/backbone'
    'backbone.marionette': 'third-party/backbone.marionette'
    'handlebars': 'third-party/handlebars'

  shim:
    'backbone.marionette':
      deps: ['backbone']
      exports: 'Marionette'
    'backbone':
      exports: 'Backbone'
    'handlebars':
      exports: 'Handlebars'


requirejs [
  'backbone.marionette'
  'dashboard/collections/widgets'
  'dashboard/views/widgets-view'
  'dashboard/mockjax'
  'common/handlebars-extensions'
], (
  Marionette
  Widgets
  WidgetsView
) ->

  $ = jQuery
  App = new Marionette.Application()
  App.dashboard = window.did
  App.resource = window.resource

  App.addInitializer ->
    @widgetsView = new WidgetsView
      collection: @widgets
      dashboard: @dashboard
      el: $('#dashboard')
      app: @
    @widgetsView.render();

  requestDetails = ->
    $.get "#{baseUrl}/api/dashboards/details", did: App.dashboard, (data) ->
      console.log JSON.stringify data
      App.dashboard = new Backbone.Model _.omit data, 'widgets'
      App.widgets = new Widgets data.widgets

  $.when(requestDetails(), window.requestMessages()).done -> App.start()

