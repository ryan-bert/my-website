import { ProjectCardProps } from "../components/project-card";

export const projectsData: ProjectCardProps[] = [
  {
    title: "Allocation Engine",
    img: "bloomberg.png",
    tags: ['R', 'dplyr', 'ggplot2', 'PostgreSQL', 'backtesting'],
    description: "A portfolio backtesting engine in R that keeps the strategy separate from the machinery that tests it. A strategy is a single function returning target weights; the engine aligns asset histories loaded from PostgreSQL, rebalances on a fixed schedule, charges transaction fees, and accrues interest on leverage or idle cash at the 3-month US Treasury rate. It then compares the portfolio with a benchmark on CAGR, volatility, Sharpe, Sortino, Calmar and maximum drawdown, and plots indexed returns, drawdowns and weights over time.",
    url: "https://github.com/ryan-bert/allocation-engine"
  },
  {
    title: "Microstructure Simulation",
    img: "candles.png",
    tags: ['Python', 'Flask', 'order book', 'matching engine'],
    description: "A limit order book and matching engine written in Python. Orders enter an instruction queue (new, cancel, price or quantity update) and the engine fills market and limit orders against the opposite side of the book with price-time priority, logging every trade. The market runs as a Flask server with an interactive command-line client for submitting orders, and the repository includes a scripted simulation, unit tests for the order book and a throughput test.",
    url: "https://github.com/ryan-bert/microstructure-simulation"
  },
  {
    title: "Yield Curve",
    img: "yield-curve.png",
    tags: ['R', 'ggplot2', 'gganimate', 'PostgreSQL', 'fixed income'],
    description: "R functions that plot the US Treasury yield curve from bond yields stored in PostgreSQL. The static plot shows the curve on a chosen date alongside the curves one, two and three months earlier, and the animated plot steps through every date in a range to show how the curve's level and shape change over time. Both outputs are saved to the repository's plots folder.",
    url: "https://github.com/ryan-bert/yield-curve"
  }]
