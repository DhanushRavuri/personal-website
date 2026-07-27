/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Western Digital',
    position: 'Software Engineering Intern',
    url: 'https://www.linkedin.com/company/western-digital',
    startDate: '2026-05-18',
    endDate: '2026-08-14',
    summary: `Western Digital is a global leader in data storage, designing and manufacturing flash and hard drive
    technologies that power everything from personal devices to hyperscale data centers. Its firmware and validation
    teams operate at the intersection of low-level systems engineering and large-scale telemetry analysis.`,
    highlights: [
      'Architected a LangGraph agent that leverages a custom parser and multi-step reasoning to unify 9+ SSD log formats into a correlated timeline, categorizing firmware failures and reducing manual triage from 2-3 hours to 10 minutes per failure.',
      'Implemented a hybrid RAG pipeline, combining Qdrant vector search over historical bug reports, structured failure-pattern retrieval from Amazon Aurora, and MCP-based retrieval from Jira/Confluence, improving failure-categorization accuracy from 64% to 87%.',
      'Designed the agent’s data layer using SQLite to isolate every triage run, storing metadata, and failure classifications for later lookup.',
    ],
  },
  {
    name: 'Flipkart Internet Private Limited (a Walmart subsidiary)',
    position: 'Software Development Engineer II',
    url: 'https://www.linkedin.com/company/flipkart',
    startDate: '2022-06-08',
    endDate: '2025-08-05',
    summary: `Flipkart is one of India's largest e-commerce platforms, offering a wide range of products across categories like electronics, fashion, home, and groceries. 
    Founded in 2007 and now a subsidiary of Walmart Inc., Flipkart serves hundreds of millions of customers and is known for innovations like cash-on-delivery, 
    easy returns, and Big Billion Days. It plays a key role in shaping the digital retail experience in India.`,
    highlights: [
      'Built a centralized configuration management service with CRUD via REST APIs, supporting promotion and rollback, RBAC, and deployment-free updates across 100+ services, cutting rollout time by 90%.',
      'Architected a feature store service that asynchronously pre-aggregates data from 25+ downstream clients, decoupling runtime data collection from the core service and eliminating tail latency, lowering response time by 33%.',
      'Developed a high-throughput image similarity service performing top-K search over 10M+ image embeddings with p99 latency around 200ms, flagging invalid product return claims and saving $350K annually.',
      'Designed a backtesting application using Apache Spark to process 12M+ daily audit records in under 10 minutes, enabling rapid evaluation of configuration updates and persisting automated summary reports to GCS.',
      'Optimized the image similarity service by integrating the Qdrant vector database after comparative benchmarking, improving accuracy from 88% to 96% and reducing p99 latency from 200ms to 75ms.',
      'Reduced core service latency by 13% via Java 17 upgrade and JVM optimization, informed by load testing and JFR analysis.',
      'Migrated team-managed HBase to a central offering, involving 60+ tables, 10+ applications, and over 300TB of data.',
    ],
  },
  {
    name: 'Spur.fit',
    position: 'Deep Learning Intern',
    url: 'https://www.linkedin.com/company/spur-fit',
    startDate: '2021-06-01',
    endDate: '2021-08-31',
    summary: `Spur.fit is a fitness technology platform that leverages advanced computer vision and AI techniques
    to deliver personalized workout experiences. It focuses on enabling users to track their fitness goals with 
    innovative solutions like real-time motion analysis, repetition counting, and privacy-enhanced live video processing.`,
    highlights: [
      'Built a pose classification model using PoseNet and MoveNet to identify workout poses and phases, improving accuracy by 18% and enabling precise repetition counting.',
      'Integrated real-time human background segmentation in live workout videos, sustaining 24 FPS on 720p streams while masking 94% of background pixels to enhance user privacy.',
    ],
  },
  {
    name: 'The 10x Academy',
    position: 'Technical Instructor',
    url: 'https://www.linkedin.com/company/the-10x-academy',
    startDate: '2021-12-15',
    endDate: '2022-05-15',
    summary: `The 10x Academy is an intensive coding bootcamp designed to transform individuals into industry-ready software developers. 
    It offers hands-on training in data structures, algorithms, and full-stack development through real-world projects and personalized mentorship.`,
    highlights: [
      'Mentored around 200 students in improving their problem solving skills and conceptual clarifications on DSA and Web development.',
      'Lectured solutions regularly and conducted one-to-one interactive sessions to effectively facilitate their learning and growth.',
    ],
  },
];

export default work;
