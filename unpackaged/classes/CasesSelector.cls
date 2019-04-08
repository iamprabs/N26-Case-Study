public inherited sharing class CasesSelector {
    
    public CasesSelector() {}

    public static Case getCaseById(Id caseId) {
        return [
            SELECT
                Id,
                ContactId,
                Contact.Product__c,
            	Contact.Language__c,
            	Contact.Home_Country__c
            FROM
                Case
            WHERE
                Id = :caseId
        ];
    }

}