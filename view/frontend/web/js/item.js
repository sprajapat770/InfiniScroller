define(['uiComponent'],function (Component){
    "use strict";


    const width=200,height=300;

    const ItemComponent = Component.extend({

        defaults:{
         template:'Suraj_InfiniScroll/item',
         width,
         height
        }
    });

    ItemComponent.width = width;
    ItemComponent.height = height;
    return ItemComponent;

});
