const config = {
    devRevApiKey: process.env.DEVREV_API_KEY || "",
    slackToken: process.env.SLACK_API_TOKEN || "",
    defaultTimeFrame: 24,  // Default to last 24 hours
  };
  
  export default config;
  