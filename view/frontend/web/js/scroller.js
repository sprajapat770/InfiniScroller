define(['uiComponent','Suraj_InfiniScroll/js/item'],function (Component,ItemComponent){
    "use strict";

    return Component.extend({
        defaults:{
            items:[],
            tracks:{
                items:true
            }
        },
        renderItem:function (item){
            this.items.push(new ItemComponent({item:item}))
        },
        renderItems:function (items){
            items.forEach(this.renderItem.bind(this))
        }
    });

});
