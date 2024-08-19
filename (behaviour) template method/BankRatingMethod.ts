export abstract class BankRating {
  calculate(): string {
    this.verifyIdentify();
    const creditScore = this.checkCreditHistory();
    const assetValue = this.evaluateAssets();
    const riskAssessment = this.assessRisk(creditScore, assetValue);

    return `Score: ${this.finalRating(
      creditScore,
      assetValue,
      riskAssessment,
    )}`;
  }

  protected abstract verifyIdentify(): void; // can throws error
  protected abstract checkCreditHistory(): number;
  protected abstract evaluateAssets(): number;
  protected abstract assessRisk(
    creditScore: number,
    assetValue: number,
  ): number;

  protected finalRating(
    creditScore: number,
    assetValue: number,
    riskAssessment: number,
  ): number {
    return creditScore * 0.5 + assetValue * 0.3 - riskAssessment * 0.2;
  }
}

export class IndividualClientBankRating extends BankRating {
  protected verifyIdentify(): void {
    // verify the correctness of the ID card, if incorrect return an error
    if (Math.random() > 0.5) {
      throw new Error('ID card is not valid.');
    }
  }

  protected checkCreditHistory(): number {
    // credit history check
    return 500;
  }

  protected evaluateAssets(): number {
    // assessment of an individual client assets.
    return 50000;
  }

  protected assessRisk(creditScore: number, assetValue: number): number {
    if (creditScore < 600) {
      return 50;
    } else if (assetValue < 30000) {
      return 30;
    }
    return 20;
  }

  // override
  protected finalRating(
    creditScore: number,
    assetValue: number,
    riskAssessment: number,
  ): number {
    return super.finalRating(creditScore, assetValue, riskAssessment);
  }
}

export class BusinessClientBankRating extends BankRating {
  protected verifyIdentify(): void {
    if (Math.random() > 0.5) {
      throw new Error('NIP number/KRS is not valid.');
    }  
  }

  protected checkCreditHistory(): number {
    return 800;
  }

  protected evaluateAssets(): number {
    return 200000;
  }

  protected assessRisk(creditScore: number, assetValue: number): number {
    if (creditScore < 700) {
      return 60;
    } else if (assetValue < 200000) {
      return 30;
    }
    return 20;
  }
}
