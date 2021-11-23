const allOptions = {
  domestic1: {
    colors: ["#C9F1FE", "#8FDFF9", "#66CBEB", "#33B9E5", "#00A8DE"],
    caption: `SINKS: Under age 60, Single, Divorced, or Widowed, No Children in Household<br/>
  DINKS: Under age 60, Engaged, Married, or Living with Partner, 2+ people in Household, No Children in Household<br/>
  Households With Children: Under age 60, Children in Household<br/>
  Empty Nesters: Ages 55+, No Children in Household`,
    categories: [
      "Total New Zealand Population",
      "SINKS",
      "DINKS",
      "Household With Children",
      "Empty Nesters",
      "New Migrants (Within Past 10 Years)",
      "New Migrants (Within Past 10 Years)",
    ],
    categories2: [],
    series: [
      {
        name: "Curious Explorers",
        data: [12, 11, 11, 9, 16, 9, 9],
      },
      {
        name: "Here & Now-ers",
        data: [20, 18, 17, 26, 16, 29, 26],
      },
      {
        name: "Considered Rejuvenators",
        data: [24, 23, 21, 23, 32, 12, 15],
      },
      {
        name: "Thrifty Planners",
        data: [19, 24, 21, 17, 17, 15, 12],
      },
      {
        name: "Lux Adventurers",
        data: [24, 24, 28, 25, 19, 35, 38],
      },
    ].reverse(),
  },
  domestic2: {
    colors: ["#8FDFF9", "#66CBEB", "#33B9E5", "#00A8DE"],
    caption: ``,
    categories: [
      "Total New Zealand Population",
      "Cautious Escapists",
      "Experienced Connectors",
      "Vibrant Adventures",
      "Organised Joy Seekers",
      "Spontaneous Explorers",
      "Fun Loving Trail Blazers",
      "Passive Passengers",
    ],
    categories2: [
      "43.4",
      "47.2",
      "52.1",
      "42.6",
      "45.2",
      "38.8",
      "38.5",
      "38.5",
    ],
    categories3: [],
    series: [
      {
        name: "65-74",
        data: [12, 17, 23, 9, 9, 4, 4, 3],
      },
      {
        name: "50-64",
        data: [20, 29, 38, 25, 32, 18, 16, 16],
      },
      {
        name: "35-49",
        data: [31, 28, 24, 30, 31, 33, 35, 37],
      },
      {
        name: "18-34",
        data: [34, 25, 15, 36, 28, 45, 45, 45],
      },
    ].reverse(),
  },
  domestic3: {
    colors: ["#66CBEB", "#33B9E5", "#00A8DE"],
    caption: ``,
    categories: [
      "Lux Adventurers",
      "Thrifty Planners",
      "Considered Rejuvenators",
      "Here & Now-ers",
      "Curious Explorers",
    ],
    categories2: [4.4, 3.4, 3.9, 4.2, 4.5],
    categories3: [],
    series: [
      {
        name: "Takes 1-2 domestic holidays per year",
        data: [42, 51, 47, 49, 34],
      },
      {
        name: "Takes 3-4 domestic holidays per year",
        data: [29, 20, 30, 27, 26],
      },
      {
        name: "Takes 5+ domestic holidays per year",
        data: [29, 24, 21, 21, 35],
      },
    ].reverse(),
  },
  international1: {
    colors: [
      "#EBEBEB",
      "#CACACA",
      "#C9F1FE",
      "#8FDFF9",
      "#66CBEB",
      "#33B9E5",
      "#00A8DE",
    ],
    caption: `China tends to have the most unique distribution compared to other markets. Mindset 1 is also largely represented in Japan.`,
    categories: [
      "Global",
      "Australia",
      "North America",
      "United Kingdom",
      "Germany",
      "China",
      "Japan",
      "Singapore",
    ],
    series: [
      {
        name: "Passive Passengers",
        data: [15, 11, 11, 7, 16, 23, 13, 18],
      },
      {
        name: "Fun Loving Trail Blazers",
        data: [10, 6, 10, 9, 10, 15, 6, 8],
      },
      {
        name: "Spontaneous Explorers",
        data: [16, 13, 16, 14, 10, 20, 10, 18],
      },
      {
        name: "Organised Joy Seekers",
        data: [12, 8, 5, 8, 12, 21, 11, 13],
      },
      {
        name: "Vibrant Adventures",
        data: [16, 20, 27, 24, 16, 7, 12, 15],
      },
      {
        name: "Experienced Connectors",
        data: [15, 22, 16, 22, 24, 8, 11, 11],
      },
      {
        name: "Cautious Escapists",
        data: [15, 19, 16, 15, 7, 5, 37, 16],
      },
    ].reverse(),
  },
  international2: {
    colors: ["#8FDFF9", "#66CBEB", "#33B9E5", "#00A8DE"],
    caption: ``,
    categories: [
      "Total",
      "Cautious Escapists",
      "Experienced Connectors",
      "Vibrant Adventures",
      "Organised Joy Seekers",
      "Spontaneous Explorers",
      "Fun Loving Trail Blazers",
      "Passive Passengers",
    ],
    categories2: [
      "43.4",
      "47.2",
      "52.1",
      "42.6",
      "45.2",
      "38.8",
      "38.5",
      "38.5",
    ],
    series: [
      {
        name: "18-34",
        data: [34, 25, 15, 36, 28, 45, 45, 43],
      },
      {
        name: "35-49",
        data: [31, 28, 24, 30, 31, 33, 35, 37],
      },
      {
        name: "50-64",
        data: [25, 29, 38, 25, 32, 18, 16, 16],
      },
      {
        name: "65-74",
        data: [10, 17, 23, 9, 9, 4, 4, 3],
      },
    ],
  },
  international3: {
    colors: ["#C9F1FE", "#66CBEB", "#00A8DE"],
    caption: ``,
    categories: [
      "Total",
      "Cautious Escapists",
      "Experienced Connectors",
      "Vibrant Adventures",
      "Organised Joy Seekers",
      "Spontaneous Explorers",
      "Fun Loving Trail Blazers",
      "Passive Passengers",
    ],
    series: [
      {
        name: "Takes 1 international holiday per year",
        data: [42, 45, 45, 42, 52, 39, 38, 33],
      },
      {
        name: "Takes 2 international holiday per year",
        data: [22, 12, 24, 25, 22, 21, 25, 24],
      },
      {
        name: "Takes 3+ international holiday per year",
        data: [19, 8, 14, 18, 12, 25, 26, 29],
      },
    ].reverse(),
  },
};

const getDataByTypeAndIndex = (selectedTab: number, selectedFilter: number) => {
  if (selectedTab === 0) {
    return allOptions["international" + (selectedFilter + 1)];
  } else {
    return allOptions["domestic" + (selectedFilter + 1)];
  }
};

export default getDataByTypeAndIndex;
