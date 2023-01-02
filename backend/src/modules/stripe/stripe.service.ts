import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class StripeService {
  private stripe: Stripe;
  constructor(private configService: ConfigService) {
    this.stripe = new Stripe(configService.get('STRIPE_SECRET_KEY'), {
      apiVersion: '2022-11-15',
    });
  }
  public async createCustomer(name: string, email: string) {
    return this.stripe.customers.create({
      name,
      email,
    });
  }

  public async charge(
    customerId: string,
    paymentMethodId: string,
    amount: number,
  ) {
    return this.stripe.paymentIntents.create({
      amount,
      currency: this.configService.get('STRIPE_CURRENCY'),
      payment_method: paymentMethodId,
      payment_method_types: ['card'],
      customer: customerId,
      confirm: true,
    });
  }
}
