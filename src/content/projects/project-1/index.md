---
title: "Adaptive Book Compressor"
summary: "An intelligent, constraint-based summarization engine that uses Recursive Map-Reduce to compress full-length books into strict time budgets."
date: "Jan 14 2026"
draft: false
tags:
- Python (FastAPI)
- Next.js
- TypeScript
- PostgreSQL (pgvector)
- LangChain
demoUrl: "" 
repoUrl: https://github.com/cullan-wick/adaptive-compressor
---

Standard AI models struggle with massive texts like full-length books due to context window limitations and "lost-in-the-middle" hallucinations. This project is a distributed AI processing pipeline designed to perform **lossless compression** on long-form content, respecting strict user-defined time constraints (e.g., "Summarize this 50,000-word book into a 15-minute read").

### 🚀 The Architecture

The system moves beyond simple API wrappers by implementing a custom **Recursive Map-Reduce** algorithm:

1.  **Ingestion & Semantic Chunking:** The pipeline ingests binary PDFs and splits them into semantic blocks based on paragraph structures, ensuring no context is severed mid-thought.
2.  **Parallel "Map" Phase:** Utilizing Python's `asyncio` and `Semaphore` patterns, the backend spawns 20 concurrent workers to summarize chunks in parallel, reducing processing time for a 300-page book from ~10 minutes to under 60 seconds.
3.  **Recursive "Reduce" Phase:** The core engineering innovation. If the draft summary exceeds the user's word budget, the system recursively splits the text into a geometric tree, compressing each branch individually until the total token count satisfies the constraint without losing the author's original voice.

### 🛠 Tech Stack

*   **Backend:** Python, FastAPI (Async), SQLAlchemy
*   **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS
*   **Database:** PostgreSQL with `pgvector` extension (for 1,536-dimensional vector storage)
*   **AI Logic:** LangChain, OpenAI GPT-4o-mini, Custom Recursive Logic

This project demonstrates the shift from simple prompt engineering to **Systems Engineering**, focusing on latency optimization, type safety, and algorithmic constraint satisfaction.