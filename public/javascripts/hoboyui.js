HoboYui = {
    
    makeInPlaceHtmlEditor: function(el) {
        var options = { 
            rows: 2, handleLineBreaks: false, okButton: true, cancelLink: true, okText: "Save", submitOnBlur: false
        }
        var ipe = Hobo._makeInPlaceEditor(el, options) 
        ipe.afterEnterEditMode = function() {
            var textarea = ipe._controls.editor
            var config = HoboYui.toolbarConfig.concat(HoboYui.saveCancelToolbarConfig)
            var ed = HoboYui.makeEditor(textarea, config)
            //ed.on('toolbarLoaded', function() { 
            //    ed.toolbar.on('saveClick', function(ev) {  });       
            //});
            ed.DOMReady = true
            ed.render();
            ////bkLib.addEvent(this._controls.ok,'click', function () {
            ////    nicInstance.saveContent()
            ////    setTimeout(function() {nicInstance.remove()}, 1)
            ////})
        }

    },
    
    makeEditor: function(el, buttons) {
        buttons = buttons || HoboYui.toolbarConfig
        
        return new YAHOO.widget.Editor(el, 
            Object.merge(
                HoboYui.basicConfig,
                { toolbar: {
        		    draggable: false,
            		buttonType: 'advanced',
            		buttons: buttons
        		}})
            );
    },
    
    editorConfig: { autoHeight: true, width: '99%', handleSubmit: true },
    
    toolbarConfig: [
        { group: 'textstyle',
          buttons: [
            { type: 'push', label: 'Bold CTRL + SHIFT + B', value:'bold' },
            { type: 'push', label: 'Italic CTRL + SHIFT + I', value: 'italic' },
          ] },
        { type: 'separator' },
        { group: 'parastyle',
          buttons: [
              { type: 'select', label: 'Normal', value: 'heading', disabled: true,
                menu: [
                  { text: 'Normal', value: 'none', checked: true },
                  { text: 'Header 1', value: 'h1' },
                  { text: 'Header 2', value: 'h2' },
                  { text: 'Header 3', value: 'h3' },
                  { text: 'Header 4', value: 'h4' },
                  { text: 'Header 5', value: 'h5' },
                  { text: 'Header 6', value: 'h6' }
              ]}
          ] },
        { type: 'separator' },
        { group: 'alignment', 
          buttons: [ 
            { type: 'push', label: 'Align Left CTRL + SHIFT + [', value: 'justifyleft' }, 
            { type: 'push', label: 'Align Center CTRL + SHIFT + |', value: 'justifycenter' }, 
            { type: 'push', label: 'Align Right CTRL + SHIFT + ]', value: 'justifyright' }, 
            { type: 'push', label: 'Justify', value: 'justifyfull' } 
          ] },
        { type: 'separator' },
        { group: 'indentlist',
          buttons: [
            { type: 'push', label: 'Indent', value: 'indent', disabled: true },
            { type: 'push', label: 'Outdent', value: 'outdent', disabled: true },
            { type: 'push', label: 'Create an Unordered List', value: 'insertunorderedlist' },
            { type: 'push', label: 'Create an Ordered List', value: 'insertorderedlist' }
          ] },
        { type: 'separator' },
        { group: 'insertitem',
          buttons: [
            { type: 'push', label: 'HTML Link CTRL + SHIFT + L', value: 'createlink', disabled: true },
            { type: 'push', label: 'Insert Image', value: 'insertimage' }
          ] },
        { type: 'separator' },
        { group: 'insertitem',
          buttons: [
            { type: 'push', label: 'Remove Formatting', value: 'removeformat', disabled: true },
            { type: 'push', label: 'Show/Hide Hidden Elements', value: 'hiddenelements' }
          ] }
    ],
    
    saveCancelToolbarConfig: [
        { type: 'separator' },
        { group: 'savecancel',
          buttons: [
    		{ type: 'push', label: 'Save', value: 'save', title: "Save" },
    		{ type: 'push', label: 'Cancel', value: 'cancel' }
    	  ] }
	]
		
}

Hobo.makeInPlaceHtmlEditor = HoboYui.makeInPlaceHtmlEditor

Event.addBehavior({
    'textarea.html' : function() {
        var ed = HoboYui.makeEditor(this)
        ed.DOMReady = true
        ed.render();
    }
})
