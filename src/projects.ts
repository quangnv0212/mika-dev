export const projects = [
  {
    title: "Junior College Platform",
    slug: "junior-college-platform",
    client: "Singapore 🇸🇬",
    category: ["Education"],
    tools: ["ReactJS", "ExpressJS", "NodeJS", "Ant Design", "Prisma"],
    thumbnail: "/assets/images/projects/JCP.png",
    hero: "/assets/images/projects/JCP.png",
    overview: [
      "Project goal is to create a seamless platform where teachers can craft learning content, and students can effortlessly discover and learn on-demand. We envision an intuitive UI for uploading and managing lecture notes and recorded videos. The students should be able to access the learning materials based on the course they are registered for",
    ],
    projectChallenge: [
      "Managing Large Datasets: As the number of students, teachers, and courses increases, data management becomes more complex. This includes efficient data storage, security, and access.",
      "Optimizing User Experience (UI/UX): Ensure that the user interface is friendly and easy to use for both teachers and students, especially for those with little experience using technology.",
      "Cross-Platform Support: Ensure the system runs smoothly on various devices and operating systems, from computers to tablets to smartphones.",
      "Assessment and Learning Analytics: Develop question sets and assessments to help teachers accurately evaluate student capabilities. Create lecture materials and topics to allow students to review and watch video lectures.",
    ],
    projectResult: [
      "Develop a user interface that is simple and easy to navigate. Use clear visual hierarchies and guide through tooltips or help sections. Consider the needs of users with varying levels of tech experience by offering straightforward, task-oriented workflows.",
      "Provide teachers to create and customize assessments, including quizzes, exams, and assignments. Include various question types (multiple-choice, short answer, etc.) to cater to different evaluation needs.",
      "Content Review Tools: Allow students to easily access and review lecture materials and video content. Features like bookmarking, note-taking, and progress tracking can enhance the learning experience.",
    ],
    position: "Frontend Developer",
    techStack: [],
    imgs: [
      "/assets/images/projects/jcp-1.png",
      "/assets/images/projects/jcp-2.png",
      "/assets/images/projects/jcp-3.png",
      "/assets/images/projects/jcp-4.png",
      "/assets/images/projects/jcp-5.png",
    ],
  },
  {
    title: "Legal Workflow System",
    slug: "legal-workflow-system",
    client: "UK 🇬🇧",
    category: ["Education"],
    tools: ["ReactJS", "ExpressJS", "NodeJS", "Ant Design", "Prisma"],
    thumbnail: "/assets/images/projects/Propero.png",
    hero: "/assets/images/projects/Propero.png",

    overview: [
      "A legal data collection tool is designed to gather information for specific legal tasks. This system efficiently captures relevant data, ensuring accuracy and compliance. It serves as a crucial resource for law firms, streamlining data collection processes and supporting the precise needs of each legal project.",
      "The system also integrates an online payment model through GoCardless, facilitating usage-based billing and direct debits for monthly fees. This feature ensures that law firms can manage payments seamlessly, linking them directly to their usage of the tool. The automated payment system simplifies financial management, enhancing the overall efficiency of the legal workflow.",
    ],
    projectChallenge: [
      "API and Integration: Integrating with different Systems can be challenging due to varying APIs and data structures across platforms. Ensuring secure connections between 2 systems is crucial to protect sensitive client data. This includes encrypting data during transmission and complying with data security standards.",
      "Building the Question Builder and Logic Tree: Developing a system that allows users to create complex question flows with conditional logic can be demanding, especially if it needs to accommodate diverse customer requirements. The user interface must be intuitive and easy to use, enabling non-technical users to build complex logic trees. ",
      "Payment System and Billing Management: Integrating online payments, particularly with GoCardless, requires compliance with payment regulations and security measures, as well as ensuring accurate billing based on usage and recurring invoices. Setting up a system to track and calculate fees based on customer usage can be complex, especially if different pricing models need to be supported.",
      "Security and Privacy: Since the system will handle client and legal data, security is paramount. Implementing robust security measures, including data encryption and two-factor authentication (2FA). The system needs to comply with data protection regulations, such as GDPR if serving European customers, and other laws related to personal and legal data protection.",
    ],
    imgs: [
      "/assets/images/projects/pro-1.png",
      "/assets/images/projects/pro-2.png",
      "/assets/images/projects/pro-3.png",
      "/assets/images/projects/pro-4.png",
      "/assets/images/projects/pro-5.png",
    ],
    projectResult: [
      "Unified API Gateway:Implement an API gateway to standardize interactions between 2 systems. The gateway can act as a middle layer, translating requests and responses to and from the specific formats required by different systems.",
      "Visual Workflow Designer: Create a visual drag-and-drop workflow designer that allows users to create question flows and logic trees easily. This can simplify the process for non-technical users.",
      "Validation Engine: Implement a validation engine that checks the logic trees for errors or conflicts before they are deployed, ensuring smooth execution",
      "Compliance Automation:  ensuring that GoCardless integration meets payment regulations and security standards without manual oversight. ",
    ],
    position: "Frontend Developer",
    techStack: [],
  },
  {
    title: "Quotation System",
    slug: "quotation-system-web-app",
    client: "Vietnam 🇻🇳",
    category: ["Logistics"],
    tools: ["ReactJS", "ExpressJS", "NodeJS", "Ant Design", "Prisma"],
    thumbnail: "/assets/images/projects/qs-thumb.png",
    hero: "/assets/images/projects/qs-thumb.png",

    overview: [
      "The Quotation System is a comprehensive platform that streamlines the process of requesting quotations for goods in the construction industry. It enables suppliers to manage these requests alongside customer orders, while clients can submit their own requests for both standard and customized products.",
      "Quotations are automatically generated using predefined or customizable formulas, incorporating vouchers and discounts. Once clients receive a quotation, they can proceed to place an order. Additionally, the system functions as an e-commerce site, allowing clients to browse products, add them to their cart, and complete purchases directly with suppliers.",
    ],
    projectChallenge: [
      "The system must allow users to input complex formulas for calculating the area of a product, including the use of special characters such as mathematical symbols (e.g., π, √, ) and operators (e.g., exponents, fractions). ",
      "Designing a user-friendly interface that allows both clients and suppliers to easily navigate the system, submit requests, and generate quotations.",
      "As the system grows, the database and backend services may struggle to handle an increasing number of quotation requests and customer orders, leading to slow performance.",
      "Handling complex pricing models, discounts, and vouchers accurately, especially when the system needs to accommodate customizable products and varying client needs.",
    ],
    imgs: [
      "/assets/images/projects/qs-1.png",
      "/assets/images/projects/qs-2.png",
      "/assets/images/projects/qs-3.png",
      "/assets/images/projects/qs-4.png",
    ],
    projectResult: [
      "Using a Library to Support Inputting Special Characters in Formulas Integrate a specialized math expression library that supports the input of special characters and complex mathematical notations.",
      "Focus on a clean, intuitive UI using ReactJS, with a particular emphasis on simplifying complex tasks like creating custom quotations. Regularly gather user feedback to improve the design iteratively.",
      "Optimize database queries, implement caching strategies, and consider using a load balancer. Additionally, design the system with scalability in mind, using cloud services or microservices architecture if necessary.",
      "Implement a flexible and modular pricing engine that can handle both predefined and customizable formulas. Ensure thorough testing of different pricing scenarios to validate accuracy.",
    ],
    position: "Frontend Developer",
    techStack: [],
  },
  {
    title: "E-commerce Management System",
    slug: "e-commerce-management-system",
    client: "Vietnam 🇻🇳",
    category: ["E-commerce"],
    tools: ["ReactJS", "ExpressJS", "NodeJS", "Ant Design", "Sequelize"],
    thumbnail: "/assets/images/projects/Ecom.png",
    hero: "/assets/images/projects/Ecom.png",
    overview: [
      "The project aims to create a comprehensive restaurant management platform that enables owners and staff to efficiently manage business operations while providing a convenient online ordering experience for customers. The system is designed with an intuitive interface for managing menus, orders, tables, and revenue reports",
    ],
    //     Project Results
    // 1. Efficient Order System
    // Result: Successfully built a real-time order management system with clear statuses.
    // Evidence:
    // }
    // 2. Optimized Ordering Process
    // Result: Successfully implemented QR code system for each table, enabling easy customer ordering.
    // Evidence:
    // )
    // 3. Complete Multi-language System
    // Result: Full support for Vietnamese and English with smooth switching capability.
    // Evidence:
    // '
    // 4. Secure and Flexible Authorization
    // Result: Successfully implemented RBAC with three distinct roles.
    // Evidence:
    // only
    // 5. Comprehensive Analytics Dashboard
    // Result: Built dashboard with revenue, order, and sales performance tracking capabilities.
    // Evidence:

    projectChallenge: [
      "Real-time Processing and Synchronization: Building a system capable of handling multiple simultaneous orders from different tables while ensuring data consistency and real-time status updates.Synchronizing states between multiple users (customers, staff, kitchen) and handling conflict scenarios.",
      "QR Code System and Ordering: Creating a dynamic QR code system for each table, ensuring security and smooth ordering experience.Handling edge cases like connection loss, multiple users ordering at one table, or menu changes. ",
      "Multi-language and Internationalization: Building a system supporting multiple languages (Vietnamese and English) with expansion capability. Ensuring all content, notifications, and UI elements are accurately and consistently translated.",
      "Role-based Access Control: Building a dashboard system with real-time data analysis capabilities. Processing and aggregating large amounts of data to create meaningful reports.",
      "Statistics and Reporting: Ensuring seamless integration with popular payment gateways to support safe and quick online transactions.",
    ],
    projectResult: [
      "Efficient Order System: Successfully built a real-time order management system with clear statuses.",
      "Optimized Ordering Process: Successfully implemented QR code system for each table, enabling easy customer ordering.",
      "Complete Multi-language System: Full support for Vietnamese and English with smooth switching capability.",
      "Secure and Flexible Authorization: Successfully implemented RBAC with three distinct roles.",
      "Comprehensive Analytics Dashboard: Built dashboard with revenue, order, and sales performance tracking capabilities.",
    ],
    position: "Fullstack Developer",
    techStack: [],
    imgs: [
      "/assets/images/projects/ecom-1.png",
      "/assets/images/projects/ecom-2.png",
      "/assets/images/projects/ecom-3.png",
      "/assets/images/projects/ecom-4.png",
      "/assets/images/projects/ecom-5.png",
      "/assets/images/projects/ecom-6.png",
      "/assets/images/projects/ecom-7.png",
      "/assets/images/projects/ecom-8.png",
    ],
  },
  {
    title: "Social Network Platform",
    slug: "social-network-platform",
    client: "Vietnam 🇻🇳",
    category: ["Social"],
    tools: ["React Native CLI", "ExpressJS", "NodeJS", "MongoDB"],
    thumbnail: "/assets/images/projects/social-app-thumb.png",
    hero: "/assets/images/projects/social-app-thumb.png",
    overview: [
      "Our Social Network Platform is a dynamic solution designed to connect people and foster meaningful interactions online. With a comprehensive set of features including real-time chat, customizable profiles, and intuitive post management, the platform creates an engaging environment for users to share, connect, and build communities.",
    ],
    projectChallenge: [
      "User Authentication Security: Implementing robust authentication systems while maintaining a smooth user experience for registration and login processes.",
      "Real-time Performance: Ensuring stable and fast real-time chat functionality using Socket.io while handling multiple concurrent connections.",
      "Data Management: Efficiently managing user-generated content including posts, comments, and profile information while maintaining system performance.",
      "User Experience Optimization: Creating an intuitive interface that works seamlessly across different display modes (Dark/Light) and various user interactions.",
      "Social Connection Features: Implementing complex friend and follow relationships while maintaining system scalability.",
    ],
    projectResult: [
      "Enhanced User Engagement: Successfully implemented interactive features like post sharing, commenting, and liking that drive user participation.",
      "Optimized Performance: Achieved improved load times and system efficiency through Code Splitting implementation.",
      "Robust Authentication: Developed secure and user-friendly authentication system with password recovery capabilities.",
      "Flexible User Customization: Created comprehensive profile customization options including avatar and cover photo management.",
      "Seamless Real-time Communication: Successfully integrated Socket.io for reliable real-time chat functionality.",
    ],
    position: "Fullstack Developer",
    techStack: [],
    imgs: [
      "/assets/images/projects/social-app-1.png",
      "/assets/images/projects/social-app-2.png",
      "/assets/images/projects/social-app-3.png",
      "/assets/images/projects/social-app-4.png",
      "/assets/images/projects/social-app-5.png",
      "/assets/images/projects/social-app-6.png",
      "/assets/images/projects/social-app-7.png",
      "/assets/images/projects/social-app-8.png",
      "/assets/images/projects/social-app-9.png",
      "/assets/images/projects/social-app-10.png",
    ],
  },
  {
    title: "Restaurant Management System",
    slug: "restaurant-management-system",
    client: "Vietnam 🇻🇳",
    category: ["Restaurant"],
    tools: ["NextJS", "Fastify", "Prisma"],
    thumbnail: "/assets/images/projects/restaurant-thumb.png",
    hero: "/assets/images/projects/restaurant-thumb.png",
    overview: [
      "The project aims to create a comprehensive restaurant management platform that enables owners and staff to efficiently manage business operations while providing a convenient online ordering experience for customers. The system is designed with an intuitive interface for managing menus, orders, tables, and revenue reports.",
    ],
    projectChallenge: [
      "User Authentication Security: Implementing robust authentication systems while maintaining a smooth user experience for registration and login processes.",
      "Real-time Performance: Ensuring stable and fast real-time chat functionality using Socket.io while handling multiple concurrent connections.",
      "Data Management: Efficiently managing user-generated content including posts, comments, and profile information while maintaining system performance.",
      "User Experience Optimization: Creating an intuitive interface that works seamlessly across different display modes (Dark/Light) and various user interactions.",
      "Social Connection Features: Implementing complex friend and follow relationships while maintaining system scalability.",
    ],
    projectResult: [
      "Enhanced User Engagement: Successfully implemented interactive features like post sharing, commenting, and liking that drive user participation.",
      "Optimized Performance: Achieved improved load times and system efficiency through Code Splitting implementation.",
      "Robust Authentication: Developed secure and user-friendly authentication system with password recovery capabilities.",
      "Flexible User Customization: Created comprehensive profile customization options including avatar and cover photo management.",
      "Seamless Real-time Communication: Successfully integrated Socket.io for reliable real-time chat functionality.",
    ],
    position: "Fullstack Developer",
    techStack: [],
    imgs: [
      "/assets/images/projects/res-1.png",
      "/assets/images/projects/res-2.png",
      "/assets/images/projects/res-3.png",
      "/assets/images/projects/res-4.png",
      "/assets/images/projects/res-5.png",
      "/assets/images/projects/res-6.png",
      "/assets/images/projects/res-7.png",
    ],
  },
];
