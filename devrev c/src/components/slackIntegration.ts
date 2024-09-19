import axios from 'axios';
import config from '../config';

export async function postToSlack(channel: string, summary: any) {
  const slackMessage = {
    channel,
    text: `*Opportunity Summary*\n
           - Total Revenue: $${summary.totalRevenue}\n
           - Number of Deals: ${summary.numberOfDeals}\n
           - Top Performing Accounts: ${summary.topPerformingAccounts.join(", ")}\n
           - Upsell Potential: ${summary.upsellPotential}\n
           - Trend: ${summary.trend}`,
  };

  await axios.post('https://slack.com/api/chat.postMessage', slackMessage, {
    headers: { Authorization: `Bearer ${config.slackToken}` },
  });
}
