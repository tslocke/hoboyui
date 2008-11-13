# Hobo Yui

This is a simple Rails plugin to be used in conjunction with [Hobo](http://hobocentral.net). It adds the ability to use the YUI Rich Editor in place of simple textareas for fields with the type 'html'.

This plugin may later become a general home for Hobo extensions that utilise YUI.


## Installing

Install with

    ruby script/plugin install git://github.com/tablatom/hoboyui.git
    
The plugin has an install script which will copy some assets to your public directory.

You then need to include the taglib, e.g. in application.dryml:

    <include src="hoboyui" plugin="hoboyui"/>

Finally you need to activate the JavaScript in any pages where you want the editor. To do this site wide, you can extend the `<page>` tag (in application.dryml):
    
    <extend tag="page">
      <old-page merge>
        <append-head:><yui-editor-assets/></append-head:>
        <body: class="yui-skin-sam" param/>
      </old-page>
    </extend>
    
You should now have a YUI Rich Editor for any `<input:foo>` where the field `foo` is declared with the `:html` type (HoboFields::HtmlString) in your model.


## More Information

For more information see: [YUI Rich Editor](http://developer.yahoo.com/yui/editor/)

