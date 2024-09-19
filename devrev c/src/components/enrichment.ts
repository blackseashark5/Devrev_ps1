export function enrichSummary(summary: any) {
    // Add upsell potential and trends
    summary.upsellPotential = summary.totalRevenue > 10000 ? "High" : "Moderate";
    summary.trend = summary.numberOfDeals > 5 ? "Increasing" : "Stable";
  
    return summary;
  }
  