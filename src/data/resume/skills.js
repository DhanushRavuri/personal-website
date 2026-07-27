const skills = [
  {
    title: 'Spring + Spring Boot + Spring Reactive',
    competency: 4,
    category: ['Web Development', 'Java', 'Frameworks'],
  },
  {
    title: 'Hibernate',
    competency: 4,
    category: ['Web Development', 'Java', 'Databases', 'Frameworks'],
  },
  {
    title: 'Dropwizard',
    competency: 2,
    category: ['Web Development', 'Java', 'Frameworks'],
  },
  {
    title: 'Node.js + Express.js',
    competency: 3,
    category: ['Web Development', 'Javascript', 'Frameworks'],
  },
  {
    title: 'Firebase',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'JUnit',
    competency: 4,
    category: ['Java', 'Frameworks'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'SQLite',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'Amazon Aurora',
    competency: 3,
    category: ['Databases', 'Cloud'],
  },
  {
    title: 'Qdrant',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'Milvus',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'Spark',
    competency: 4,
    category: ['Data Engineering', 'Big Data', 'Frameworks'],
  },
  {
    title: 'Hadoop Ecosystem',
    competency: 4,
    category: ['Big Data', 'Data Engineering'],
  },
  {
    title: 'HBase',
    competency: 4,
    category: ['Big Data', 'Data Engineering'],
  },
  {
    title: 'Kafka',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Zookeeper',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'AWS S3',
    competency: 3,
    category: ['Cloud', 'Tools', 'Web Development'],
  },
  {
    title: 'OpenCV',
    competency: 3,
    category: ['Python', 'Data Science'],
  },
  {
    title: 'Linux',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Maven + Gradle',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'CMake',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'gRPC + Protobuf',
    competency: 4,
    category: ['Tools', 'Frameworks'],
  },
  {
    title: 'Git + GitHub',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development', 'Javascript', 'Frameworks'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'ElasticSearch',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Aerospike',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Kubernetes',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 2,
    category: ['Cloud', 'Tools', 'Web Development'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Cloud', 'Tools', 'Web Development'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'AWS Lambda',
    competency: 3,
    category: ['Cloud', 'Tools', 'Web Development'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['ML Engineering', 'Python', 'Data Science'],
  },
  {
    title: 'PyTorch',
    competency: 2,
    category: ['ML Engineering', 'Python', 'Data Science'],
  },
  {
    title: 'LangGraph',
    competency: 4,
    category: ['ML Engineering', 'Python', 'Frameworks'],
  },
  {
    title: 'Model Context Protocol (MCP)',
    competency: 4,
    category: ['ML Engineering', 'Python', 'Frameworks'],
  },
  {
    title: 'AWS Bedrock',
    competency: 3,
    category: ['Cloud', 'ML Engineering', 'Tools'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python', 'Data Science'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Go',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Scala',
    competency: 3,
    category: ['Languages', 'Big Data', 'Data Engineering'],
  },
  {
    title: 'Groovy',
    competency: 3,
    category: ['Languages', 'Java'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages', 'Data Science'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages', 'Java'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python', 'Data Science'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['ML Engineering', 'Python', 'Data Science'],
  },
  {
    title: 'Scikit-Learn',
    competency: 3,
    category: ['ML Engineering', 'Python', 'Data Science'],
  },
  {
    title: 'Prometheus + Grafana',
    competency: 4,
    category: ['Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
