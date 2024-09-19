export function summarizeData(opportunities: any[]) {
    const totalRevenue = opportunities.reduce((sum, opp) => sum + opp.amount, 0);
    const topPerformingAccounts = opportunities.slice(0, 3).map(opp => opp.account_name);
  
    return {
      totalRevenue,
      numberOfDeals: opportunities.length,
      topPerformingAccounts,
    };
  }
  