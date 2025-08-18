import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faRobot, faBrain } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFlutter = [
  "Flutter", "Dart", "Riverpod/BLoC", "Clean Arch",
  "GoRouter", "REST/WebSocket", "SQLite/Hive",
  "Firebase", "Testing"
];

const labelsAgent = [
  "ElizaOS/CryptoAgentOS", "TypeScript", "Bun/Node.js",
  "OpenAI/Groq", "RAG", "LLMs",
    "JSON Ingestion", "Reporting"
];

const labelsNLP = [
  "Python", "FastAPI", "Transformers/ViTs", "spaCy",
  "Sentence-Embeddings", "NER", "PostgreSQL", "Streamlit"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x"/>
            <h3>Flutter Development</h3>
            <p>Cross-platform apps with solid architecture, performance, testing, and user-friendly design.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFlutter.map((label, i) => <Chip key={i} className="chip" label={label} />)}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faRobot} size="3x"/>
            <h3>AI Agents</h3>
            <p>Agentic analytics for price/news insights with LLMs, RAG, Blockchain.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsAgent.map((label, i) => <Chip key={i} className="chip" label={label} />)}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faBrain} size="3x"/>
            <h3>CV & NLP</h3>
            <p>Resume parsing, entity extraction, embeddings, and job matching APIs with clean demos.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsNLP.map((label, i) => <Chip key={i} className="chip" label={label} />)}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;
