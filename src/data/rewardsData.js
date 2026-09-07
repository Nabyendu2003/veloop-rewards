// Realistic dummy data only — no backend integration.
// Reward figures are illustrative placeholders, not approved values.

export const referEarnData = {
  referralCode: "VELOOP123",
  youEarn: 500,
  friendGets: 200,
  unit: "VEs",
  highlights: [
    { id: "share", label: "Easy to Share", desc: "One tap, any app" },
    { id: "instant", label: "Instant Rewards", desc: "Credited on signup" },
    { id: "secure", label: "100% Secure", desc: "Verified referrals only" },
  ],
};

export const swapCenterData = {
  fromCurrency: "VE",
  toCurrency: "SVE",
  fromLabel: "Reward Currency",
  toLabel: "Savings Currency",
  rate: "1 VE = 1 SVE",
};

export const bonusVEsData = {
  bonusLabel: "Bonus VE",
  balance: 1240,
  tasks: [
    { id: "checkin", label: "Daily Check-in", desc: "Stay active", done: true },
    { id: "invite", label: "Invite Friends", desc: "Grow together", done: true },
    { id: "complete", label: "Complete Tasks", desc: "Earn more", done: false },
  ],
};

export const captchaTasksData = {
  sampleCode: "K7M4",
  reward: 15,
  unit: "Gems",
  steps: ["Task", "Verify", "Reward"],
};

export const exchangeCenterData = {
  from: "Gem",
  to: "VE",
  rate: "10 Gems = 1 VE",
  options: ["UPI", "Gift Cards", "VE Wallet"],
};
