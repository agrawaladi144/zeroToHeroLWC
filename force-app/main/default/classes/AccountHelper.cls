public with sharing class AccountHelper {
    @AuraEnabled(cacheable=true)
    public static list<account> getAccountList(){
        
        list<account> accounts =[SELECT Id, Name
            FROM Account];

            return accounts;

}



}
