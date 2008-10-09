# Hobo Yui

This is a simple Rails plugin to be used in conjunction with [Hobo](http://hobocentral.net). It adds the ability to use the YUI Rich Editor in place of simple textareas for fields with the type 'html'.

This plugin may later become a general home for Hobo extensions that utilise YUI.

## Installing

Install with

    ruby script/plugin install XXXXXXXXXXXXXXXXXXXXX
    
The plugin has an instal.rb script which will copy a javascript file to your public/javascripts directory.

You then need to include the taglib, e.g. in application.dryml:

    <include src="hobo_yui" plugin="hobo_yui"/>

Finally you need to activate the JavaScript in any pages where you want the editor. To do this site wide, you can extend the `<page>` tag (in application.dryml):
    
    <extend tag="page">
      <old-page merge>
        <append-scripts:><yui-editor-javascripts/></append-scripts:>
        <body: class="yui-skin-sam"/>
      </old-page>
    </page>
    
You should now have a YUI Rich Editor for any `<input:foo>` where `foo` is declared with the `:html` type in your model.