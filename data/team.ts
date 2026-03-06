export interface TeamMember {
    name: string;
    role: string;
    image: string;
    bio: string;
}

export const teamData: TeamMember[] = [
    {
        name: "Nandjee Yadav",
        role: "Founder | Hospital Management (MBA), MSc Nursing, BSc Nursing",
        image: "/images/nandjee.png",
        bio: "Leading our vision for accessible and compassionate healthcare with extensive experience in nursing and hospital management."
    },
    {
        name: "Dr. Suvas Ganeshbhai Prajapati",
        role: "Co-Founder",
        image: "/images/suvas.png",
        bio: "Driving medical excellence and organizational strategy to provide world-class patient care."
    },
    {
        name: "Vijendra Singh",
        role: "Director",
        image: "/images/vijendra.png",
        bio: "Ensuring operational efficiency and strong governance across all our healthcare services."
    },
    {
        name: "Dr. Gangurde Purnima",
        role: "Department Head | MBBS",
        image: "/images/gangurde.png",
        bio: "Heading medical operations and maintaining the highest clinical standards of medical care."
    },
    {
        name: "Amar Singh",
        role: "Marketing Head",
        image: "/images/amar.png",
        bio: "Connecting patients with our services through effective communication and outreach strategies."
    },
    // {
    //     name: "Rani Yadav",
    //     role: "Senior Nursing Staff",
    //     image: "/images/rani.png",
    //     bio: "Providing expert, compassionate care and mentoring the next generation of nursing professionals."
    // },
    // {
    //     name: "Ranjana Yadav",
    //     role: "Nursing Staff",
    //     image: "/images/ranjana.png",
    //     bio: "Dedicated to delivering attentive, high-quality patient care and ensuring patient comfort and recovery."
    // }
];
