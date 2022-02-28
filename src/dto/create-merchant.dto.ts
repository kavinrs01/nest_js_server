export class CreateMerchantDto {
    userName:  string 
    email:  string 
    phoneNumber:  string 
    website:  string 
    contactName:  string 
    contactPhone:  string 
    contactEmail:  string 
    notes:  string 
    typeOfBusiness: string 
    catageryOfBusiness:  string[] 
    comissionPercentage:  Number 
    activeFrom:  Date 
    criticalAccount:  Boolean 
    paymentOption:  string[] 

  }
  export class FilterMerchantDto{
    search:string
    sortBy:string
    sortOrder:number
  }