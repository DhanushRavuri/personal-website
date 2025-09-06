// TODO Add a couple lines about each project
const data = [
  {
    title: 'Distributed Parallel File System',
    subtitle: 'C++, gRPC',
    image: '/images/projects/IITRMS.png',
    link: 'https://github.com/DhanushRavuri/Distributed-Parallel-File-System',
    date: '2020-02-04',
    desc:
      '• Developed a parallel file system leveraging gRPC and Protobuf, enabling access across 8+ nodes with file striping for efficient data distribution and supporting file sizes upto 2^28 bytes under high-concurrency conditions.\n'
      + '• Optimized system performance to support upto 2^10 concurrent clients and manage upto 2^16 concurrently open files, by applying token-based synchronization, client-side LRU caching, and multithreaded processing with pthreads.',
  },
  {
    title: 'Pollit.Online Startup',
    subtitle: 'Javascript, Node.js, Express.js, MongoDB, Redis, JWT, AWS S3, Firebase',
    link: 'https://github.com/polls-org',
    image: '/images/projects/BTP.png',
    date: '2022-04-10',
    desc:
      '• Engineered a full-stack polling platform with MongoDB and Redis, implementing key interactive features with secure authentication and real-time functionalities, with automated deployments on AWS, serving 1000+ active users.\n'
      + '• Created a multi-strategy recommendation system using Collaborative Filtering, Content-Based Filtering, Deep Learning, and Semantic Search (OpenAI), with results ranked via a priority-weighted scoring mechanism.\n'
      + '• Secured a grant of $15000 for Pollit.online at 2025 Summer Founders Program conducted at Pennsylvania State University.',
  },
  {
    title: 'Paxos Library',
    subtitle: 'Go, net/rpc',
    link: 'https://github.com/DhanushRavuri/Paxos',
    image: '/images/projects/IOP.png',
    date: '2021-04-15',
    desc:
      '• Designed a fault tolerant, multi-paxos consensus library in Go, implementing leader election and consensus protocols to ensure distributed system reliability\n'
      + '• Coordinated proposer processes to initiate proposals and interact with acceptors to reach consensus, guaranteeing high fault tolerance and smooth coordination.',
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
