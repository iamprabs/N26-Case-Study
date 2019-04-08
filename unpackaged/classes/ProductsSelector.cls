public inherited sharing class ProductsSelector {

    public ProductsSelector() {}

    public static List<PricebookEntry> getProductWithRelations(Id productId) {
        return [
            SELECT
                Id,
                Name,
                UnitPrice,
                CurrencyIsoCode,
                Product2Id,
                Product2.Name,
                Product2.Percent__c,
                Product2.Product__c
            FROM
                PricebookEntry
            WHERE
                Product2Id = :productId OR Product2.Product__c = :productId
            ORDER BY Product2.Product__c ASC
        ];
    }
    
    public static List<Product2> getProductWithRelatedProducts(Id productId, String country) {
        return [
            select id, Name, ATM_Fee_Other_currencies__c,CurrencyIsoCode, Card_Replacement_Cost__c, Cost_per_Calendar_Month__c, Country__c
                 from Product2 WHERE Product__c = :productId and Country__c=:country and IsActive=true];
    }

}