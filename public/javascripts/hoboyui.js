HoboYui = {
    initEditor: function() {
        $$('textarea.html').each(function(el,i) {
            HoboYui.makeEditor(el).render();
        });
    },

    defaultEditor: function(el) {
        return new YAHOO.widget.Editor(el.id, {
            height: '300px',
            width: '99%',
            handleSubmit: true
        });
    },
    
    simplifiedEditor: function(el) {
        return new YAHOO.widget.Editor(el.id, {
            height: '300px',
            autoHeight: true,
            width: '99%',
			handleSubmit: true,
			toolbar: {
        		draggable: false,
        		buttonType: 'advanced',
        		buttons: HoboYui.simplifiedButtons
		    }
		});        
    },
    
    simplifiedButtons: [
	    { group: 'textstyle',
	        buttons: [
	            { type: 'push', label: 'Bold CTRL + SHIFT + B', value: 'bold' },
	            { type: 'push', label: 'Italic CTRL + SHIFT + I', value: 'italic' },
	        ]
	    },
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
	            ]
	        }
	        ]
	    },
	    { type: 'separator' },
	    { group: 'indentlist',
	        buttons: [
	            { type: 'push', label: 'Indent', value: 'indent', disabled: true },
	            { type: 'push', label: 'Outdent', value: 'outdent', disabled: true },
	            { type: 'push', label: 'Create an Unordered List', value: 'insertunorderedlist' },
	            { type: 'push', label: 'Create an Ordered List', value: 'insertorderedlist' }
	        ]
	    },
	    { type: 'separator' },
	    { group: 'insertitem',
	        buttons: [
	            { type: 'push', label: 'HTML Link CTRL + SHIFT + L', value: 'createlink', disabled: true }
	        ]
	    },
	    { type: 'separator' },
	    { group: 'misc',
	        buttons: [
        		{ type: 'push', label: 'Remove Formatting', value: 'removeformat', disabled: true },
        		{ type: 'push', label: 'Show/Hide Hidden Elements', value: 'hiddenelements' }
			]
		}
	],
	
	makeEditor: null // Set this to a function that will create a YAHOO.widget.Editor
	
}

HoboYui.makeEditor = HoboYui.simplifiedEditor