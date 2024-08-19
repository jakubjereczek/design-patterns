import {
  BusinessClientBankRating,
  IndividualClientBankRating,
} from './BankRatingMethod';

try {
  const individualRating = new IndividualClientBankRating();
  const individualScore = individualRating.calculate();
  console.log(`Final rating for individual client. ${individualScore}`);
} catch (error) {
  console.error(`Error in individual client assessment`, error);
}

try {
  const businessRating = new BusinessClientBankRating();
  const businessScore = businessRating.calculate();
  console.log(`Final rating for business client. ${businessScore}`);
} catch (error) {
  console.error(`Error in business client assessment`, error);
}

// Final rating for individual client: Score: 15240
// Final rating for business client: Score: 60396

// Final rating for individual client: Score: 15240
// Error in business client assessment",  NIP number/KRS is not valid