export interface SpecialistData {
    id: string;
    type: "Doctor" | "Nurse" | "Caregiver";
    name: string;
    title: string;
    location: string;
    state: string;
    image: string;
    specialties: string[];
    description: string;
    experience: string;
    featured?: boolean;
    age?: number;
    rating?: number;
}

export const specialistsData: SpecialistData[] = [
    // --- DOCTORS ---
    {
        id: "doc-1",
        type: "Doctor",
        name: "Dr. Gangurde Purnima",
        title: "Department Head | MBBS",
        location: "Mumbai",
        state: "Maharashtra",
        image: "/images/gangurde.png",
        specialties: ["General Medicine", "Clinical Standards", "Hospital Operations"],
        description: "Heading medical operations and maintaining the highest clinical standards of medical care.",
        experience: "15",
        featured: true,
        age: 42,
        rating: 4.9
    },
    {
        id: "doc-2",
        type: "Doctor",
        name: "Dr. Suvas Ganeshbhai Prajapati",
        title: "Co-Founder & Doctor",
        location: "Mumbai",
        state: "Maharashtra",
        image: "/images/suvas.png",
        specialties: ["Hospital Administration", "Patient Care", "Medical Strategy"],
        description: "Driving medical excellence and organizational strategy to provide world-class patient care.",
        experience: "12",
        featured: true,
        age: 38,
        rating: 4.8
    },
    // {
    //     id: "doc-3",
    //     type: "Doctor",
    //     name: "Dr. Vikram Reddy",
    //     title: "Chief Orthopedic Surgeon",
    //     location: "Bengaluru",
    //     state: "Karnataka",
    //     image: "/doctor-1.png",
    //     specialties: ["Joint Replacement", "Sports Injuries", "Spine"],
    //     description: "Pioneer in minimally invasive robotic joint replacement surgeries.",
    //     experience: "18",
    //     featured: true,
    //     age: 49,
    //     rating: 4.7
    // },
    // {
    //     id: "doc-4",
    //     type: "Doctor",
    //     name: "Dr. Sneha Patel",
    //     title: "Pediatrician",
    //     location: "Ahmedabad",
    //     state: "Gujarat",
    //     image: "/doctor-2.png",
    //     specialties: ["Neonatology", "Childhood Asthma", "Vaccinations"],
    //     description: "Dedicated to holistic child wellness and early developmental tracking.",
    //     experience: "12",
    //     age: 38,
    //     rating: 4.9
    // },
    // {
    //     id: "doc-5",
    //     type: "Doctor",
    //     name: "Dr. Arvind Kumar",
    //     title: "Oncologist",
    //     location: "Chennai",
    //     state: "Tamil Nadu",
    //     image: "/doctor-1.png",
    //     specialties: ["Medical Oncology", "Immunotherapy", "Breast Cancer"],
    //     description: "Leading research and personalized treatment plans for advanced-stage combat.",
    //     experience: "25",
    //     featured: true,
    //     age: 55,
    //     rating: 4.9
    // },
    // {
    //     id: "doc-6",
    //     type: "Doctor",
    //     name: "Dr. Priya Singh",
    //     title: "Dermatologist & Cosmetologist",
    //     location: "Hyderabad",
    //     state: "Telangana",
    //     image: "/doctor-2.png",
    //     specialties: ["Acne Treatment", "Laser Therapy", "Anti-Aging"],
    //     description: "Expert in clinical dermatology and non-invasive aesthetic procedures.",
    //     experience: "14",
    //     age: 41,
    //     rating: 4.6
    // },
    // --- NURSES ---
    {
        id: "nur-1",
        type: "Nurse",
        name: "Sister Ranjana Yadav",
        title: "Nursing Staff",
        location: "Mumbai",
        state: "Maharashtra",
        image: "/images/ranjana.png",
        specialties: ["Patient Comfort", "Recovery Care", "General Nursing"],
        description: "Dedicated to delivering attentive, high-quality patient care and ensuring patient comfort and recovery.",
        experience: "6",
        featured: true,
        age: 28,
        rating: 4.9
    },
    // {
    //     id: "nur-2",
    //     type: "Nurse",
    //     name: "Brother Amit Patel",
    //     title: "Senior Home Nurse",
    //     location: "Ahmedabad",
    //     state: "Gujarat",
    //     image: "/nurse-2.png",
    //     specialties: ["Wound Management", "IV Therapy", "Palliative Care"],
    //     description: "Compassionate care dedicated to improving the quality of life for seniors.",
    //     experience: "9",
    //     featured: true,
    //     age: 32,
    //     rating: 4.8
    // },
    // {
    //     id: "nur-3",
    //     type: "Nurse",
    //     name: "Sister Priya Menon",
    //     title: "Registered General Nurse",
    //     location: "Chennai",
    //     state: "Tamil Nadu",
    //     image: "/nurse-1.png",
    //     specialties: ["Medication Management", "Diabetic Care", "Vitals"],
    //     description: "Providing reliable, clinical-grade nursing interventions in the comfort of your home.",
    //     experience: "16",
    //     featured: true,
    //     age: 42,
    //     rating: 4.7
    // },
    // {
    //     id: "nur-4",
    //     type: "Nurse",
    //     name: "Sister Meera Joshi",
    //     title: "Pediatric Nurse",
    //     location: "New Delhi",
    //     state: "Delhi",
    //     image: "/nurse-1.png",
    //     specialties: ["Newborn Care", "Vaccination Support", "Special Needs"],
    //     description: "Expert in providing gentle, specialized care for infants and young children at home.",
    //     experience: "11",
    //     age: 35,
    //     rating: 4.9
    // },
    // {
    //     id: "nur-5",
    //     type: "Nurse",
    //     name: "Brother Santosh Kumar",
    //     title: "Rehabilitation Nurse",
    //     location: "Bengaluru",
    //     state: "Karnataka",
    //     image: "/nurse-2.png",
    //     specialties: ["Stroke Rehab", "Mobility Assistance", "Orthopedic Care"],
    //     description: "Focused on helping patients regain independence through targeted physical support.",
    //     experience: "7",
    //     age: 30,
    //     rating: 4.6
    // },
    // {
    //     id: "nur-6",
    //     type: "Nurse",
    //     name: "Brother Rahul Singh",
    //     title: "Psychiatric Nurse",
    //     location: "Hyderabad",
    //     state: "Telangana",
    //     image: "/nurse-2.png",
    //     specialties: ["Dementia Care", "Mental Health Support", "Behavioral Therapy"],
    //     description: "Trained in providing empathetic support for patients with cognitive and mental health conditions.",
    //     experience: "10",
    //     age: 34,
    //     rating: 4.8
    // },
    // --- CAREGIVERS ---
    // {
    //     id: "care-1",
    //     type: "Caregiver",
    //     name: "Suresh Kumar",
    //     title: "Senior Care Companion",
    //     location: "Bengaluru",
    //     state: "Karnataka",
    //     image: "/nurse-2.png",
    //     specialties: ["Dementia Support", "Mobility Assist", "Companionship"],
    //     description: "Specializes in providing warm, empathetic care and daily living assistance for seniors.",
    //     experience: "8",
    //     featured: true,
    //     age: 35,
    //     rating: 4.8
    // },
    // {
    //     id: "care-2",
    //     type: "Caregiver",
    //     name: "Laxmi Devi",
    //     title: "Certified Elder Caregiver",
    //     location: "Mumbai",
    //     state: "Maharashtra",
    //     image: "/nurse-1.png",
    //     specialties: ["Personal Hygiene", "Meal Prep", "Medication Reminder"],
    //     description: "Dedicated to treating elders with the utmost dignity, ensuring safety and comfort at home.",
    //     experience: "12",
    //     featured: true,
    //     age: 40,
    //     rating: 4.9
    // },
    // {
    //     id: "care-3",
    //     type: "Caregiver",
    //     name: "Ramesh Narayan",
    //     title: "Rehabilitation Caregiver",
    //     location: "Chennai",
    //     state: "Tamil Nadu",
    //     image: "/nurse-2.png",
    //     specialties: ["Post-Op Assist", "Physio Support", "Palliative Care"],
    //     description: "Experienced in assisting seniors transition back to home life after hospital stays.",
    //     experience: "10",
    //     featured: true,
    //     age: 36,
    //     rating: 4.7
    // }
];
