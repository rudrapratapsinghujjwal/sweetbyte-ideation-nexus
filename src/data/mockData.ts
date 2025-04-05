
// Mock data for demonstration purposes
export const mockIdeas = [
  {
    id: 1,
    title: "AI-Powered Supply Chain Optimization",
    shortDescription: "Revolutionizing logistics with predictive AI models for supply chain efficiency.",
    fullDescription: "A comprehensive system that utilizes machine learning algorithms to predict supply chain disruptions before they occur, optimize inventory levels in real-time, and reduce logistics costs by up to 30%. The solution integrates with existing ERP systems and provides actionable insights through an intuitive dashboard.",
    createdAt: "2023-01-15T14:30:00Z",
    price: 5000,
    creator: "alex_innovator",
    ratings: {
      originality: 85,
      marketFit: 92,
      profitability: 88,
      technicalFeasibility: 78
    },
    status: "Open",
    category: "Logistics & Supply Chain"
  },
  {
    id: 2,
    title: "Decentralized Healthcare Records Platform",
    shortDescription: "Secure, patient-controlled medical records on blockchain technology.",
    fullDescription: "A blockchain-based platform that gives patients complete control over their medical records while ensuring security and interoperability between healthcare providers. The system uses smart contracts to manage access permissions and maintains a comprehensive audit trail of all data accesses.",
    createdAt: "2023-02-22T09:15:00Z",
    price: 7500,
    creator: "elena_health",
    ratings: {
      originality: 90,
      marketFit: 85,
      profitability: 80,
      technicalFeasibility: 75
    },
    status: "Open",
    category: "Healthcare"
  },
  {
    id: 3,
    title: "Carbon Footprint NFT Marketplace",
    shortDescription: "Tokenizing carbon credits as NFTs for transparent environmental impact.",
    fullDescription: "An innovative marketplace that converts verified carbon credits into NFTs, allowing companies and individuals to trade and retire carbon offsets with complete transparency. Each NFT represents a specific environmental project with detailed impact metrics and verification proof.",
    createdAt: "2023-03-05T16:45:00Z",
    price: 4200,
    creator: "green_future",
    ratings: {
      originality: 95,
      marketFit: 82,
      profitability: 78,
      technicalFeasibility: 88
    },
    status: "Open",
    category: "Sustainability"
  },
  {
    id: 4,
    title: "Personalized Microbiome Nutrition Platform",
    shortDescription: "AI-driven nutritional recommendations based on gut microbiome analysis.",
    fullDescription: "A comprehensive platform that analyzes individual gut microbiome data to provide personalized nutritional recommendations, meal plans, and supplement suggestions. The system continuously learns from user feedback and health outcomes to improve its recommendations over time.",
    createdAt: "2023-04-12T11:20:00Z",
    price: 6300,
    creator: "nutri_science",
    ratings: {
      originality: 88,
      marketFit: 90,
      profitability: 85,
      technicalFeasibility: 82
    },
    status: "Closed",
    category: "Health & Nutrition"
  }
];

export const mockUser = {
  id: 1,
  username: "innovator_prime",
  email: "creator@example.com",
  profilePicture: "/assets/profile-avatar.png",
  ideas: 7,
  earnings: 32500,
  joinedDate: "2023-01-01T00:00:00Z"
};

export const mockInvestor = {
  id: 101,
  username: "capital_ventures",
  email: "investor@example.com",
  profilePicture: "/assets/investor-avatar.png",
  totalInvestments: 45000,
  portfolioSize: 5,
  joinedDate: "2023-01-05T00:00:00Z",
  meetings: [
    {
      id: 1,
      ideaId: 2,
      ideaTitle: "Decentralized Healthcare Records Platform",
      creator: "elena_health",
      scheduledFor: "2023-05-20T13:00:00Z",
      status: "Confirmed"
    },
    {
      id: 2,
      ideaId: 3,
      ideaTitle: "Carbon Footprint NFT Marketplace",
      creator: "green_future",
      scheduledFor: "2023-05-22T15:30:00Z",
      status: "Pending"
    }
  ]
};
