export class HashtagAnalyzerData {
  posts: HashtagPost[];
}

export class HashtagPost {
  hashtags: string;
  insights: HashtagInsights;
}

export class HashtagInsights {
  reach: HashtagInsightReach;
  interactions: HashtagInsightInteractions;
  profile: HashtagInsightProfile;
}

export abstract class HashtagInsight {
  total: number;
  followers?: number;
  nonFollowers?: number;
}

export class HashtagInsightReach extends HashtagInsight {
  origin: HashtagInsightReachOrigin;
}

export class HashtagInsightReachOrigin {
  home: number;
  hashtag: number;
  profile: number;
  other: number;
}

export class HashtagInsightInteractions extends HashtagInsight {
  post: HashtagInsightInteractionsPost;
}

export class HashtagInsightInteractionsPost {
  like: number;
  comments: number;
  shares: number;
  saves: number;
}

export class HashtagInsightProfile extends HashtagInsight {
  visits: number;
  newFollowers: number;
  email: number;
}

export class Hashtag {
  tag: string;
  used: number;
}
