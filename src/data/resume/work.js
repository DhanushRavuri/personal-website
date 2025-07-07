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
      'Achieved $350K in annual cost savings by implementing a non-blocking image similarity platform searching over 10M+ embedding vectors for top-K matches within 200ms, leveraging Spring WebFlux, Redis, Spark MLlib (LSH), and Kafka.',
      'Optimized vector search, cutting p99 latency from 200ms to 75ms at 150 QPS, improving accuracy from 88% to 96%, by transitioning from LSH-based architecture to Qdrant database after benchmarking against Milvus and ElasticSearch.',
      'Delivered a 13% reduction in microservice latency at 180 QPS by upgrading from Java 8 to 17 and optimizing garbage collection via G1GC to ZGC migration, driven by GC analysis.',
      'Developed a config management service, leveraging Spring Boot to perform CRUD operations via REST APIs and MySQL, implementing RBAC, promotion/rollback workflows, and a cron job for 5-minute in-memory config refresh.',
      'Built a Spark-based backtesting application processing 12M+ rows (1 day’s data) from HBase in under 10min for evaluating updates to rule configs, feature configs, and ML model configs, publishing summary reports to GCS.',
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
      'Improved exercise pose classification model accuracy by 18% through building a custom CNN model on top of body keypoints extracted from PoseNet and MoveNet, refining exercise phase detection for accurate repetition counting.',
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
