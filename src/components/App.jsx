import user from 'user.json'
import { Profile } from 'components/Profile/Profile'


import data from 'data.json';
import { Statistics } from 'components/Statistics/Statistics'

import { FriendList } from './FriendList/FriendList';
import friends from 'friends.json'

import transactions from 'transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
    <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes} />
      <Statistics title="hello mentor!" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      </>
    );
};
 