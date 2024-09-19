import axios from 'axios';
import config from '../config';

export async function fetchOpportunities(timeFrame: number) {
  const endpoint = `https://api.devrev.ai/v1/opportunities?status=won&closed_since=${timeFrame}h`;
  const response = await axios.get(endpoint, {
    headers: { Authorization: `Bearer ${config.devRevApiKey}` },
  });
  return response.data;
}
