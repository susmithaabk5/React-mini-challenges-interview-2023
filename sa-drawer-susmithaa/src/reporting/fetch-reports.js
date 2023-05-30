import reports from "./reports.json";

const sleep = (sleepForInMs) =>
  new Promise((resolve) => {
    setTimeout(resolve, sleepForInMs);
  });

export const fetchReports = async () => {
  // Simulate async fetching
  await sleep(2000);

  return reports;
};
