import { fetchReports } from "./fetch-reports";

describe("fetch-reports", () => {
  it("should get the data from the server", async () => {
    const actual = await fetchReports();
    const expected = {
      "Delivery Reports": ["Daily", "Total", "Hourly", "Weekly", "Monthly"],
      "Inventory Reports": ["Daily", "Supply Sources", "Deals", "Categories"],
      "Audience Reports": ["Daily", "Audiences", "Demographics"],
      "Scheduled Reports": [
        {
          name: "Conversion Tracker"
        }
      ],
      "Deprecated Reports": ["Useless A", "Useless B"],
      "Personal Reports": []
    };

    expect(actual).toEqual(expected);
  });
});
