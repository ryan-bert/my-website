import { ProjectCardProps } from "../components/project-card";

export const projectsData: ProjectCardProps[] = [
  {
    title: "Card Counting Simulation",
    img: "blackjack.png",
    tags: ['Python', 'pandas', 'numpy', 'statistics', 'TensorFlow'],
    description: "This Python-based Blackjack simulator offers a detailed implementation of game mechanics, basic strategy, and the Zen card counting technique. By simulating millions of rounds, it provides in-depth insights into Blackjack strategies and statistical outcomes. Users can track metrics like total earnings, bets, and Return on Investment (ROI) to analyze the effectiveness of card counting over extensive gameplay.",
    url: "https://github.com/ryan-bert/card-counting"
  },
  {
    title: "Diversification Analysis",
    img: "bloomberg.png",
    tags: ['Python', 'pandas', 'matplotlib', 'statistics', 'finance'],
    description: "An in-depth study examining the effectiveness of portfolio diversification before and after the COVID-19 pandemic. This project analyzes historical data across various asset classes and their correlations with the S&P 500 during significant market upheavals. Insights from the analysis help investors understand risk management and asset allocation strategies during black swan events. Data processing and visualizations are performed using Python libraries.",
    url: "https://github.com/ryan-bert/diversification-covid19-analysis"
  },
  {
    title: "Shamir Secret Seed Splitter",
    img: "bitcoin-key.png",
    tags: ['Python', 'cryptography', 'SymPy', 'security'],
    description: "This Python application securely splits and reconstructs Bitcoin private keys and BIP39 seed phrases using Shamir's Secret Sharing Scheme. It allows you to divide a private key or seed phrase into multiple shares, enhancing security by requiring only a specified threshold of shares for reconstruction. This tool provides an effective method for safeguarding digital assets against loss or unauthorized access through distributed storage.",
    url: "https://github.com/ryan-bert/shamir-secret-seed-splitter"
  },
  {
    title: "Financial Data Extractor",
    img: "openbb.png",
    tags: ['Python', 'finance', 'API', 'OpenBB'],
    description: "This Python script extracts financial data for stocks, cryptocurrencies, and forex rates. It leverages the OpenBB SDK to fetch data across various intervals, which can be exported into different formats. The project supports API integrations from services like Alpha Vantage and Financial Modeling Prep.",
    url: "https://github.com/ryan-bert/fin-data-extractor"
  },
  {
    title: "Personal Portfolio Website",
    img: "my-website.png",
    tags: ['React', 'Tailwind', 'TypeScript', 'frontend'],
    description: "This is my personal portfolio website, built using React and Tailwind CSS. It features a dynamic layout with sections for showcasing my projects, sharing my story, and providing a contact form for visitors. The site includes animated components, interactive project cards, and links to my profiles on GitHub, IMDb, Goodreads, and LinkedIn.",
    url: "https://github.com/ryan-bert/my-website"
  }]