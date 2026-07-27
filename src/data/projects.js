// TODO Add a couple lines about each project
const data = [
  {
    title: 'Parallel File System',
    subtitle: 'C++, gRPC',
    image: '/images/projects/IITRMS.png',
    link: 'https://github.com/DhanushRavuri/Distributed-Parallel-File-System',
    date: '2020-02-04',
    desc:
      '• Developed a parallel file system leveraging gRPC and Protobuf, enabling access across 8+ nodes with file striping for efficient data distribution and supporting file sizes up to 2ˆ28 bytes (256 MB) under high-concurrency conditions.\n'
      + '• Optimized system performance to support up to 2ˆ10 (1024) concurrent clients and manage up to 2ˆ16 (65,536) concurrently open files, by applying token-based synchronization, client-side LRU caching, and multithreaded processing with Pthreads.',
  },
  {
    title: 'Disk-Based Database Engine',
    subtitle: 'C++, PostgreSQL',
    image: '/images/projects/IITRMS.png',
    link: 'https://github.com/DhanushRavuri',
    date: '2026-04-20',
    desc:
      '• Engineered the storage layer of a database engine with an LRU buffer manager, heap-file table storage, and a B+-Tree index supporting inserts, deletes, and range scans, achieving 1 ms point-lookup latency on a 6M-row table.\n'
      + '• Implemented a database query execution engine with relational operators for scanning, sorting, aggregation, and joins, then performance-tuned TPC-H query plans to run within a 64 MB memory limit.',
  },
  {
    title: 'Paxos Library',
    subtitle: 'Go, net/rpc',
    link: 'https://github.com/DhanushRavuri/Paxos',
    image: '/images/projects/IOP.png',
    date: '2021-04-15',
    desc:
      '• Designed a fault tolerant, Multi-Paxos consensus library in Go, implementing concurrent Proposer-Acceptor coordination and leader election, achieving 120ms latency per instance on a 5-node cluster.\n'
      + '• Ensured high fault tolerance and memory efficiency, correctly reaching consensus with up to 2 node failures, supporting dozens of concurrent instances, and safely garbage-collecting forgotten instances to reduce memory usage.',
  },
  {
    title: 'Polling Application',
    subtitle: 'Javascript, Node.js, Express.js, MongoDB, Redis, JWT, AWS S3, Firebase',
    link: 'https://github.com/polls-org',
    image: '/images/projects/BTP.png',
    date: '2022-04-10',
    desc:
      '• Implemented a polling application supporting real-time poll creation and voting, with time and location based analytics dashboards, validated at scale through load testing with 1,000+ simulated users.\n'
      + '• Architected AI infrastructure, automating poll generation using LLM pipelines and building a recommendation system with Deep learning–based semantic, collaborative, and content filtering, evaluating across 10K+ polls.',
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
