define(['uiComponent'],function (Component){
    "use strict";


    const width=200,height=300;

    const ItemComponent = Component.extend({

        defaults:{
         template:'Suraj_InfiniScroll/item',
         width,
         height
        },

        /**this is a hook method just to check what is rendered not required**/
        initConfig:function(options){
        	this._super(options);
			this.item = options.item;
        	return this;
        }
    });

    ItemComponent.width = width;
    ItemComponent.height = height;
    return ItemComponent;

});
