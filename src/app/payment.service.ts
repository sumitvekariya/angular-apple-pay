import {DOCUMENT} from '@angular/common';
import {inject, Inject, Injectable, InjectionToken} from '@angular/core';
import {
  WINDOW
} from "@ng-web-apis/common";

export const PAYMENT_REQUEST_SUPPORT = new InjectionToken<boolean>(
  'Is Payment Request Api supported?',
  {
      factory: () => !!inject(WINDOW).PaymentRequest,
  },
);
 
@Injectable()
export class PaymentService {
   constructor(
       @Inject(DOCUMENT)
       private readonly documentRef: Document,
   ) {}
 
   pay(
       methodData: PaymentMethodData[],
       details: PaymentDetailsInit,
       options: PaymentOptions = {},
   ): Promise<PaymentResponse> {
       if (
           this.documentRef.defaultView === null ||
           !('PaymentRequest' in this.documentRef.defaultView)
       ) {
           return Promise.reject(new Error('PaymentRequest is not supported'));
       }
 
       const gateway = new PaymentRequest(methodData, details, options);
 
       return gateway
           .canMakePayment()
           .then(canPay =>
               canPay
                   ? gateway.show()
                   : Promise.reject(
                         new Error('Payment Request cannot make the payment'),
                     ),
           );
   }
}