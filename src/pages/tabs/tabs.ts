import { Component } from '@angular/core';

import { LeaderboardPage } from '../leaderboard/leaderboard';
import { StatisticsPage } from '../statistics/statistics';
import { ChallengesPage } from '../challenges/challenges';
import { FriendsPage } from '../friends/friends';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ChallengesPage;
  tab2Root = FriendsPage;
  tab3Root = LeaderboardPage;
  tab4Root = StatisticsPage;

  constructor() {

  }
}
