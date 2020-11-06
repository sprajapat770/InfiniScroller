define(
    ['uiComponent','Suraj_InfiniScroll/js/item','Suraj_InfiniScroll/js/app/get-next-products'],
    function (Component,ItemComponent,getNextItems){
    "use strict";

    function viewPort(element){
        return{
            width: element.clientWidth,
            height:document.documentElement.clientHeight
        };
    }

    function rows(element){
        return Math.ceil(viewPort(element).height / ItemComponent.height);
    }


    function cols(element){
        return Math.max(Math.floor(viewPort(element).width / ItemComponent.width),1);
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
            this.renderInitialItems();
        },
        renderInitialItems:function(){
            const numberOfItemsToRender = rows(this.containerElement)*cols(this.containerElement);
            this.renderItems(getNextItems(numberOfItemsToRender));        
        },
        setSentinelElement:function(domNode){
            const callback = entries=>{
                    entries.filter(entry =>entry.isIntersecting)
                    .forEach(entry=>this.renderItems(getNextItems(cols(this.containerElement))));

                    };
                new IntersectionObserver(callback).observe(domNode);
            
        }

    });

});
