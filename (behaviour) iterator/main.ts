import type { TIterator } from './generic/Iterator'

enum SubscriptionType {
  Sport,
  Technology,
}

interface NewsletterUser {
  userId: string;
  email: string;
  subscriptionExpirationDate: Date;
  subscriptionType: SubscriptionType;
}

const newsletterUsers: NewsletterUser[] = [
  {
    userId: 'u0',
    email: 'test0@example.com',
    subscriptionExpirationDate: new Date('2024-12-31'),
    subscriptionType: SubscriptionType.Sport,
  },
  {
    userId: 'u1',
    email: 'test1@example.com',
    subscriptionExpirationDate: new Date('2024-06-30'),
    subscriptionType: SubscriptionType.Technology,
  },
  {
    userId: 'u2',
    email: 'test2@example.com',
    subscriptionExpirationDate: new Date('2023-11-15'),
    subscriptionType: SubscriptionType.Sport,
  },
  {
    userId: 'u3',
    email: 'test3@example.com',
    subscriptionExpirationDate: new Date('2022-03-20'),
    subscriptionType: SubscriptionType.Technology,
  },
  {
    userId: 'u4',
    email: 'test4@example.com',
    subscriptionExpirationDate: new Date('2026-03-20'),
    subscriptionType: SubscriptionType.Technology,
  },
  {
    userId: 'u5',
    email: 'test5@example.com',
    subscriptionExpirationDate: new Date('2025-03-15'),
    subscriptionType: SubscriptionType.Sport,
  },
];

abstract class NewsletterIterator
  implements TIterator<NewsletterUser | undefined>
{
  public index = -1;
  constructor(protected data: NewsletterUser[]) {}

  next(): NewsletterUser | undefined {
    return this.onNext();
  }
  prev() {
    // Method not supported
    return undefined;
  }
  more(): boolean {
    return this.onMore();
  }
  abstract onNext(): NewsletterUser | undefined;
  abstract onMore(): boolean;
}

interface INewsletter {
  createNewsletterSportIterator(data: NewsletterUser[]): NewsletterIterator;
  createNewsletterTechnologyIterator(
    data: NewsletterUser[],
  ): NewsletterIterator;
}

// custom logic for iterator
// if the subscription exp. date has expired do not return the data
class NewsletterSportIterator extends NewsletterIterator {
  onNext(): NewsletterUser | undefined {
    if (!(this.index > this.data.length)) {
      ++this.index;
    }
    const nextItem = this.data[this.index];
    if (nextItem && this.isValid(nextItem)) {
      return nextItem;
    }
    return undefined;
  }

  onMore(): boolean {
    if (this.index >= this.data.length) {
      return false;
    }
    return true;
  }

  private isValid = (data: NewsletterUser) => {
    if (data.subscriptionExpirationDate >= new Date()) {
      return true;
    }
    return false;
  };
}

// custom logic for iterator
// iterate every second item
class NewsletterTechnologyIterator extends NewsletterIterator {
  onNext(): NewsletterUser | undefined {
    if (!(this.index > this.data.length)) {
      this.index += 2;
    }
    const nextItem = this.data[this.index];
    console.log('index', this.index);
    return nextItem;
  }

  onMore(): boolean {
    if (this.index >= this.data.length) {
      return false;
    }
    return true;
  }
}

class Newsletter implements INewsletter {
  createNewsletterSportIterator(data: NewsletterUser[]): NewsletterIterator {
    return new NewsletterSportIterator(data);
  }
  createNewsletterTechnologyIterator(
    data: NewsletterUser[],
  ): NewsletterIterator {
    return new NewsletterTechnologyIterator(data);
  }
}

class EmailService {
  static send(data: NewsletterUser, message: string) {
    console.log({
      data,
      message,
    });
  }
}

class EmailSpammer {
  call(iterator: NewsletterIterator, message: string) {
    while (iterator.more()) {
      const data = iterator.next();
      if (data) {
        EmailService.send(data, message);
      }
    }
  }
}

class App {
  private data: NewsletterUser[] = newsletterUsers;
  private emailSpammer: EmailSpammer = new EmailSpammer();
  private newsletter: INewsletter = new Newsletter();

  sendNewsletterMessageForTechnologySubscribers(message: string) {
    this.emailSpammer.call(
      this.newsletter.createNewsletterTechnologyIterator(
        this.getDataByType(SubscriptionType.Technology),
      ),
      message,
    );
  }

  sendNewsletterMessageForSportSubscribers(message: string) {
    this.emailSpammer.call(
      this.newsletter.createNewsletterSportIterator(
        this.getDataByType(SubscriptionType.Sport),
      ),
      message,
    );
  }

  private getDataByType(type: SubscriptionType) {
    return this.data.filter((data) => data.subscriptionType === type);
  }
}

const app = new App();
app.sendNewsletterMessageForSportSubscribers('message1');
app.sendNewsletterMessageForTechnologySubscribers('message2');
