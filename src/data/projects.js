// TODO Add a couple lines about each project
const data = [
  {
    title: 'Pollit.Online Startup (Co-Founder)',
    subtitle: 'Javascript, Node.js, Express.js, MongoDB, Redis, JWT, AWS S3, Firebase',
    link: 'https://github.com/polls-org',
    image: '/images/projects/BTP.png',
    date: '2022-04-10',
    desc:
      '• Engineered a full-stack MERN based polling application, enabling users to create, vote, and engage in real time, with secure authentication and automated deployments on AWS, serving 1000+ users.\n'
      + '• Delivered real-time engagement at scale, enabling live voting, comments, personalized recommendations, geospatial and temporal vote visualizations, and analytics dashboards, resulting in a 22% increase in user session duration.\n'
      + '• Architected AI infrastructure, automating 60% of poll generation using LLM pipelines, and building a recommendation system with Deep Learning, Semantic Search, Collaborative and Content-Based Filtering, delivering results in 160ms.',
  },
  {
    title: 'Distributed Parallel File System',
    subtitle: 'C++, gRPC',
    image: '/images/projects/IITRMS.png',
    link: 'https://github.com/DhanushRavuri/Distributed-Parallel-File-System',
    date: '2020-02-04',
    desc:
      '• Developed a parallel file system leveraging gRPC and Protobuf, enabling access across 8+ nodes with file striping for efficient data distribution and supporting file sizes up to 2ˆ28 bytes (∼ 256 MB) under high-concurrency conditions.\n'
      + '• Optimized system performance to support up to 2ˆ10 (1024) concurrent clients and manage up to 2ˆ16 (65,536) concurrently open files, by applying token-based synchronization, client-side LRU caching, and multithreaded processing with Pthreads.',
  },
  {
    title: 'Paxos Library',
    subtitle: 'Go, net/rpc',
    link: 'https://github.com/DhanushRavuri/Paxos',
    image: '/images/projects/IOP.png',
    date: '2021-04-15',
    desc:
      '• Designed a fault tolerant, Multi-Paxos consensus library in Go, implementing concurrent Proposer-Acceptor coordination and leader election, achieving 120ms median latency per instance on a 5-node cluster.\n'
      + '• Ensured high fault tolerance and memory efficiency, correctly reaching consensus with up to 2 node failures, supporting dozens of concurrent instances, and safely garbage-collecting forgotten instances to reduce memory usage.',
  },
  // {
  //   title: 'Cat Detector',
  //   subtitle: 'A convolutional neural network to classify cats! (and dogs)',
  //   image: '/images/projects/catdetector.jpg',
  //   date: '2015-05-15',
  //   desc:
  //     'Trained a convolutional neural network to classify between ~ 80 cats breeds. '
  //     + 'Over 60,000 cats were classified before server bills made the project too expensive '
  //     + 'to continue hosting.',
  // },
];

export default data;
