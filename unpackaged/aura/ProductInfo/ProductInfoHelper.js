({
	getProductInfo : function(component) {
		var action = component.get('c.getProductInfo'); 
        action.setParams({
            "caseId" : component.get('v.recordId') 
        });
        action.setCallback(this, function(result) {
            console.log('>>> result = ', result);
            var state = result.getState();
            console.log('>>> state = ', state);
            if (state == 'SUCCESS') {
                var products = result.getReturnValue();
                var productInfo;
                console.log('>>> products = ', products);
                if(products!=null){
                    
                for (var i = 0; i < products.length; i++) {
                    console.log('>>> products[i] = ', products[i]);
                    console.log('>>> !products[i].Product2.Product__c = ', !products[i].Product2.Product__c);
                    if (!products[i].Product2.Product__c) {
                        productInfo = products[i];
                        products.splice(i, 1);
                        
                        console.log('>>> productInfo = ', productInfo);
                        component.set('v.productInfo', productInfo);
                        //alert(productInfo.CurrencyIsoCode);
                        component.set('v.additionProductsInfo', products);
                        console.log('>>> component.get("v.productInfo") = ', component.get("v.productInfo"));
                        console.log('>>> component.get("v.additionProductsInfo") = ', component.get("v.additionProductsInfo"));
                        break;
                    }
                }
            }
            }
        });
        $A.enqueueAction(action);
	},
    
    	getProductInfoWithChild : function(component) {
		var action = component.get('c.getProductInfo'); 
        action.setParams({
            "caseId" : component.get('v.recordId') 
        });
        action.setCallback(this, function(result) {
            console.log('>>> result = ', result);
            var state = result.getState();
            console.log('>>> state = ', state);
            if (state == 'SUCCESS') {
                var products = result.getReturnValue();
                var productInfo;
                console.log('>>> products = ', products);
                if(products!=null){
                    
                for (var i = 0; i < products.length; i++) {
                    console.log('>>> products[i] = ', products[i]);
                    //console.log('>>> !products[i].Product2.Product__c = ', !products[i].Product2.Product__c);
                    
                        productInfo = products[i];
                        //component.set('v.productInfo', productInfo);
                        //products.splice(i, 1);
                        
                        console.log('>>> productInfo = ', productInfo);
                        
                        //alert(productInfo.CurrencyIsoCode);
                        component.set('v.additionProductsInfo', products);
                    
                        //console.log('>>> component.get("v.productInfo") = ', component.get("v.productInfo"));
                        console.log('>>> component.get("v.additionProductsInfo") = ', component.get("v.additionProductsInfo"));
                        break;
                    
                }
            }
            }
        });
        $A.enqueueAction(action);
	}
})