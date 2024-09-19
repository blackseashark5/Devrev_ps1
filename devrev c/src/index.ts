import { fetchOpportunities } from './components/fetchOpportunities';
import { summarizeData } from './components/summarization';
import { enrichSummary } from './components/enrichment';
import { postToSlack } from './components/slackIntegration';

document.getElementById('summaryForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const timeFrame = (document.getElementById('timeframe') as HTMLInputElement).value;
  const slackChannel = (document.getElementById('slackChannel') as HTMLInputElement).value;
  
  const loading = document.getElementById('loading');
  loading?.classList.remove('hidden');

  try {
    const opportunities = await fetchOpportunities(Number(timeFrame));
    let summary = summarizeData(opportunities);
    summary = enrichSummary(summary);
    await postToSlack(slackChannel, summary);
    alert('Summary posted to Slack successfully!');
  } catch (error) {
    alert('Failed to post summary. Please try again.');
    console.error(error);
  } finally {
    loading?.classList.add('hidden');
  }
});
