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
    name: 'Flipkart Internet Private Limited',
    position: 'Software Development Engineer - 2',
    url: 'https://www.linkedin.com/company/flipkart',
    startDate: '2022-06-08',
    endDate: '2025-08-5',
    summary: `Flipkart is one of India's largest e-commerce platforms, offering a wide range of products across categories like electronics, fashion, home, and groceries. 
    Founded in 2007 and now a subsidiary of Walmart Inc., Flipkart serves hundreds of millions of customers and is known for innovations like cash-on-delivery, 
    easy returns, and Big Billion Days. It plays a key role in shaping the digital retail experience in India.`,
    highlights: [
      'Implemented a non-blocking image similarity service using Spring WebFlux, leveraging Redis to retrieve 500K+ embedding vectors per request and performing top-K matching on top of it via Locality-Sensitive Hashing (LSH) using Spark MLlib within 2000ms, with Kafka-based fault-tolerant auditing.',
      'Benchmarked Qdrant, Milvus, and ElasticSearch for vector search performance; Integrated Qdrant for its fast ANN search using HNSW indexing, reducing p99 from 2000ms to 75ms under 5 QPS load and improving accuracy from 88% to 96%.',
      'Upgraded a microservice from Java 8 to 17, refactoring with streams, optionals, lambdas, and records, and optimised the garbage collection by migrating from G1GC to ZGC after extensive GC tuning and analysis of JFR dumps, GC logs, and runtime metrics under varying traffic conditions, ultimately resulting in an 13% reduction in latency at 150 QPS.',
      'Developed a Spring Boot-based config management service performing CRUD on client configs via REST APIs with MySQL, implementing RBAC and promotion/rollback workflows, including a cron job refreshing in-memory configs every 5 minutes.',
      'Built a Spark-based backtesting application using historical data from HBase to validate updates to business rules, features, and ML models, evaluating 10 million rows (1 day’s data) in under 10 minutes while also supporting concurrent evaluations.',
      'Managed the end-to-end datacenter migration of a 480TB Hadoop cluster across 50+ nodes, covering Hadoop, HBase, Hive, Yarn and Zookeeper components. Also migrated team-managed HBase to central offering without any downtime, involving 60+ tables, 10+ applications, and over 300TB of data.',
    ],
  },
  {
    name: 'Spur.fit',
    position: 'Deep Learning Engineer Intern',
    url: 'https://www.linkedin.com/company/spur-fit',
    startDate: '2021-06-01',
    endDate: '2021-08-31',
    summary: `Spur.fit is a fitness technology platform that leverages advanced computer vision and AI techniques
    to deliver personalized workout experiences. It focuses on enabling users to track their fitness goals with 
    innovative solutions like real-time motion analysis, repetition counting, and privacy-enhanced live video processing.`,
    highlights: [
      'Improved the accuracy of exercise pose classification models by 10% by building a custom CNN model on top of body keypoints extracted from PoseNet and MoveNet, enhancing the distinction between starting and ending exercise positions, and enabling more accurate repetition counting.',
      'Integrated real-time human background segmentation in live workout videos using OpenCV, employing GrabCut and background subtraction to enhance user privacy.',
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
      'Mentored around 200 students in improving their problem solving skills and conceptual clarifications on DSA and full stack development.',
      'Lectured solutions regularly and conducted one-to-one interactive sessions to effectively facilitate their learning and growth.',
    ],
  },
];

export default work;
