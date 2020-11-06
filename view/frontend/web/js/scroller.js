define(['uiComponent','Suraj_InfiniScroll/js/item'],function (Component,ItemComponent){
    "use strict";

    function viewPort(element){
        return{
            width: element.clientWidth,
            height:document.documentElement.clientHeight
        };
    }
    return Component.extend({
        defaults:{
            items:[],
            tracks:{
                items:true
            }
        },
        renderItem:function (item){
            this.items.push(new ItemComponent({item:item}));
        },
        renderItems:function (items){
            items.forEach(this.renderItem.bind(this));
        },
        setContainerElement:function(domNode){
            this.containerElement = domNode;
        },
        viewPort
    });

});
