import { ProjectCardProps } from "../components/project-card";

export const projectsData: ProjectCardProps[] = [
  {
    title: "Card Counting Simulator",
    img: "blackjack.png",
    tags: ['Python', 'pandas', 'numpy', 'Statistics', 'TensorFlow'],
    description: "This project is a Python-based simulation of Blackjack card counting. It includes a detailed implementation of the game mechanics, basic strategy, and the Zen card counting technique. The simulator allows users to run multiple rounds and games, tracking various statistics like total earnings, bets, and Return on Investment (ROI).",
    url: "https://github.com/ryan-bert/card-counting"
  },
  {
    title: "Diversification Project",
    img: "candles.png",
    tags: ['Python', 'pandas', 'matplotlib', 'Statistics', 'Finance'],
    description: "This project analyzes the effectiveness of portfolio diversification during pre- and post-COVID-19 periods. It examines correlations between various asset classes and the S&P 500, offering insights into performance across different market conditions. Data analysis and visualizations were done using Python libraries.",
    url: "https://github.com/ryan-bert/diversification-project"
  },
  {
    title: "Shamir Secret Seed Splitter",
    img: "bitcoin-key.png",
    tags: ['Python', 'cryptography', 'SymPy', 'Security'],
    description: "This Python application allows users to securely split and reconstruct private keys or seed phrases using Shamir's Secret Sharing Scheme. It provides functionality to split a BIP39-compatible seed phrase or private key into multiple shares, which can then be securely stored. Reconstruction requires a minimum threshold of shares to retrieve the original secret.",
    url: "https://github.com/ryan-bert/shamir-secret-seed-splitter"
  },
  {
    title: "Financial Data Extractor",
    img: "openbb.png",
    tags: ['Python', 'finance', 'API', 'OpenBB', 'Data Extraction'],
    description: "This Python script extracts financial data for stocks, cryptocurrencies, and forex rates. It leverages the OpenBB SDK to fetch data across various intervals, which can be exported into different formats. The project supports API integrations from services like Alpha Vantage and Financial Modeling Prep.",
    url: "https://github.com/ryan-bert/fin-data-extractor"
  },
  {
    title: "Personal Portfolio Website",
    img: "my-website.png",
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Frontend'],
    description: "This is my personal portfolio website, built using React and Tailwind CSS. It features a dynamic layout with sections for showcasing my projects, sharing my story, and providing a contact form for visitors. The site includes animated components, interactive project cards, and links to my profiles on GitHub, IMDb, Goodreads, and LinkedIn.",
    url: "https://github.com/ryan-bert/my-website"
  }]