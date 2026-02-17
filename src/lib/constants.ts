export const VALID_SCHOOL_DOMAINS: Record<string, string> = {
  "hbs.edu": "Harvard Business School",
  "gsb.stanford.edu": "Stanford GSB",
  "wharton.upenn.edu": "Wharton",
  "kellogg.northwestern.edu": "Kellogg",
  "booth.uchicago.edu": "Chicago Booth",
  "columbia.edu": "Columbia Business School",
  "stern.nyu.edu": "NYU Stern",
  "tuck.dartmouth.edu": "Tuck",
  "darden.virginia.edu": "Darden",
  "ross.umich.edu": "Michigan Ross",
  "haas.berkeley.edu": "Haas",
  "yale.edu": "Yale SOM",
  "sloan.mit.edu": "MIT Sloan",
  "fuqua.duke.edu": "Fuqua",
  "anderson.ucla.edu": "UCLA Anderson",
  "mccombs.utexas.edu": "McCombs",
  "tepper.cmu.edu": "Tepper",
  "johnson.cornell.edu": "Cornell Johnson",
  "kenan-flagler.unc.edu": "Kenan-Flagler",
  "goizueta.emory.edu": "Goizueta",
  "marshall.usc.edu": "Marshall",
  "kelley.iu.edu": "Kelley",
  "smith.umd.edu": "Smith",
  "foster.uw.edu": "Foster",
  "london.edu": "LBS",
  "insead.edu": "INSEAD",
};

export const FEATURED_SCHOOLS = [
  "HBS",
  "Stanford GSB",
  "Wharton",
  "Booth",
  "Kellogg",
  "Columbia",
  "Darden",
  "Sloan",
];

export const CITY_OPTIONS = [
  "New York City",
  "San Francisco / Bay Area",
  "Los Angeles",
  "Chicago",
  "Boston",
  "Miami",
  "Austin",
  "Seattle",
  "Washington D.C.",
  "London",
  "Other / Flexible",
];

export const CAREER_OPTIONS = [
  "Investment Banking / High Finance",
  "Private Equity / Venture Capital",
  "Management Consulting",
  "Tech (Product / Engineering)",
  "Entrepreneurship / Startup",
  "Corporate Strategy",
  "Healthcare / Biotech",
  "Real Estate",
  "Other",
];

export const SUNDAY_OPTIONS = [
  "Brunch & Recovery",
  "Meal Prep & Organize",
  "Outdoors / Active",
  "Working Ahead on Monday",
  "Netflix & Decompress",
];

export const OCEAN_DIMENSION_LABELS: Record<string, string> = {
  conscientiousness: "Operations & Planning",
  openness: "Risk Appetite & Innovation",
  extraversion: "Network & Social Capital",
  agreeableness: "Negotiation & Conflict",
  emotionalStability: "Volatility & Risk Mgmt",
};

export const MATCHING_WEIGHTS: Record<string, number> = {
  conscientiousness: 0.25,
  emotionalStability: 0.3,
  agreeableness: 0.2,
  openness: 0.15,
  extraversion: 0.1,
};
