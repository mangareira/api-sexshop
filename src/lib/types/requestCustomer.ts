export type RequestCustomer = {
    object: string,
    hasMore: boolean,
    totalCount: number,
    limit: number,
    offset: number,
    data: CustomerAsaasDTO[]
}

export type CustomerAsaasDTO = {
    object: string,
    id: string,
    dateCreated: string,
    name: string,
    email: string,
    phone: string,
    mobilePhone: string,
    address: string,
    addressNumber: string,
    complement: string,
    province: string,
    postalCode: string,
    cpfCnpj: string,
    personType: string,
    deleted: boolean,
    additionalEmails: string,
    externalReference: string,
    notificationDisabled: boolean,
    observations: string,
    city: string,
    cityName: string,
    state: string,
    country: string
}