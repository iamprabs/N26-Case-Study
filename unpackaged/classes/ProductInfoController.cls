public with sharing class ProductInfoController {

    @AuraEnabled
    public static List<Product2> getProductInfo(Id caseId) {
        Case currentCase = CasesSelector.getCaseById(caseId);
        if (currentCase.Contact == null || String.isBlank(currentCase.Contact.Product__c)) {
            return null;
        }
        //return ProductsSelector.getProductWithRelations(currentCase.Contact.Product__c);
        return ProductsSelector.getProductWithRelatedProducts(currentCase.Contact.Product__c,currentCase.Contact.Home_Country__c);
    }

}