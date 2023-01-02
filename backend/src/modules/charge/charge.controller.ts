import { StripeService } from '../stripe/stripe.service';
import { CreateChargeDto } from './dto/create-charge.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { Auth } from '../auth/decorators/auth.decorator';
import { CurrentUser } from '../user/decorators/user.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('charge')
@ApiBearerAuth()
@ApiTags('charge')
export class ChargeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post()
  @Auth()
  async createCharge(
    @CurrentUser('stripeCustomerId') customerId: string,
    @Body() paymentData: CreateChargeDto,
  ) {
    return await this.stripeService.charge(
      customerId,
      paymentData.paymentMethodId,
      paymentData.amount,
    );
  }
}
