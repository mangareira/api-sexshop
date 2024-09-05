import { MethodStatus } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export type PaymentParams = {
    customer: string;
    billingType: MethodStatus;
    dueDate: string;
    value: Decimal;
    description: string;
    externalReference: string;
    creditCard?: {
      holderName: string;
      number: string;
      expiryMonth: string;
      expiryYear: string;
      ccv: string;
    };
    creditCardHolderInfo?: {
      name: string;
      email: string;
      cpfCnpj: string;
      postalCode: string;
      addressNumber: string;
      addressComplement: string | null;
      mobilePhone: string;
    };
  }