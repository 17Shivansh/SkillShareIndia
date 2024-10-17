import React, { useState } from 'react';
import { motion } from 'framer-motion';

const reviews = [
    {
        id: 1,
        name: "Alice Johnson",
        rating: 5,
        comment: "Excellent service! Highly recommend SkillShareIndia. The team was professional and attentive to our needs, ensuring we received the best support possible. Their strategies not only improved our school's performance but also fostered a culture of collaboration among our staff, which has been invaluable.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Bob Smith",
        rating: 4,
        comment: "Great experience, very professional. SkillShareIndia provided us with the guidance we needed to improve our school's educational outcomes. Their staff was knowledgeable and always available for assistance, making the whole process seamless and efficient. I truly appreciated their proactive approach to problem-solving.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Cathy Lee",
        rating: 5,
        comment: "Helped me improve my school's performance significantly. The consultancy's expertise and strategic insights were instrumental in transforming our approach to education, leading to higher student satisfaction and better overall results. I saw immediate positive changes in both teaching methods and student engagement.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 4,
        name: "David Brown",
        rating: 3,
        comment: "Good consultancy but could improve communication. While the strategies provided were helpful, there were times when follow-ups could have been more consistent. Overall, their insights helped our school move in the right direction, but I felt more regular updates would have been beneficial.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 5,
        name: "Eva White",
        rating: 4,
        comment: "Supportive team that really cares about education. SkillShareIndia's consultants genuinely wanted to see our school succeed, and their tailored advice helped us implement necessary changes effectively. The workshops they provided were particularly impactful and engaging, allowing our faculty to grow together.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 6,
        name: "Frank Black",
        rating: 5,
        comment: "Very knowledgeable and helpful. The team's insights on curriculum improvement and teacher training were particularly valuable. We saw immediate positive changes in our educational offerings, and our students responded enthusiastically to the new strategies implemented in the classroom.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 7,
        name: "Grace Green",
        rating: 4,
        comment: "A bit expensive but worth the investment. The quality of service and depth of knowledge provided made it a worthwhile expenditure for our school. We have seen great progress since implementing their recommendations, particularly in enhancing student participation in class.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 8,
        name: "Henry Gold",
        rating: 3,
        comment: "Satisfactory service with room for improvement. Overall, our experience was good, but there were areas where we hoped for more detailed support and better communication throughout the process. While the strategies worked, timely feedback would have helped us more.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 9,
        name: "Isabella Blue",
        rating: 5,
        comment: "Amazing results, exceeded my expectations. Thanks to SkillShareIndia, we implemented new strategies that dramatically improved our student engagement and academic performance. The team was fantastic throughout the entire process, providing consistent support and innovative ideas tailored to our needs.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 10,
        name: "Jack Red",
        rating: 4,
        comment: "Very professional staff and good outcomes. Their tailored approach made a significant impact on our school's operations and educational quality. I would definitely recommend their services to others. Their dedication to improvement truly sets them apart in the education consultancy field.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 11,
        name: "Kathy Pink",
        rating: 5,
        comment: "I saw a big improvement in my school’s rankings. The actionable insights and practical recommendations provided by the SkillShareIndia team were invaluable. They guided us every step of the way, and their follow-ups ensured we remained on track towards our goals.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 12,
        name: "Liam Purple",
        rating: 4,
        comment: "Good guidance and resources. The tools and materials they provided were incredibly helpful for our faculty development. The investment paid off in improved student outcomes and teacher satisfaction, as we noticed a marked increase in engagement and academic performance.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 13,
        name: "Mia Orange",
        rating: 5,
        comment: "The best consultancy for educational needs! They delivered exceptional results by providing insightful strategies and dedicated support. Our overall school culture has improved significantly since partnering with them, and we've seen a positive shift in staff morale and student behavior.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 14,
        name: "Noah Grey",
        rating: 3,
        comment: "Decent service, but I expected more follow-up. While the initial consultation was productive, I felt there could have been more consistent check-ins to ensure we stayed on track. Their recommendations were helpful, but ongoing communication would have maximized their impact.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 15,
        name: "Olivia Aqua",
        rating: 4,
        comment: "Very insightful, learned a lot. The workshops offered by SkillShareIndia were engaging and filled with practical knowledge that our staff could implement immediately in the classroom. The interactive approach facilitated collaboration among our teachers, which was refreshing.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 16,
        name: "Paul Cyan",
        rating: 5,
        comment: "Outstanding support and advice. Their team's commitment to education shines through in their approach. They not only provided solutions but also motivated our staff to strive for excellence. Our teachers felt empowered to implement new strategies that foster student growth.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 17,
        name: "Quinn Magenta",
        rating: 4,
        comment: "Effective strategies for improvement. We implemented their recommendations and saw a noticeable boost in student performance and satisfaction, which has been great for our school's reputation. The practical tools they provided were easy to understand and execute.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 18,
        name: "Ryan Indigo",
        rating: 5,
        comment: "Exceptional service, truly dedicated to education. The team's expertise and personalized approach made a significant difference in our school's development. I highly recommend their services! They genuinely care about their clients and aim for the best outcomes.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 19,
        name: "Sophia Turquoise",
        rating: 4,
        comment: "Helped me achieve my goals efficiently. The structured plans and hands-on support provided by SkillShareIndia enabled us to meet our objectives effectively and sustainably. The feedback and adjustments made along the way were crucial to our success.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 20,
        name: "Thomas Silver",
        rating: 5,
        comment: "Fantastic team, highly skilled! Their knowledge in educational consultancy is unparalleled. They helped us streamline our operations and improve overall effectiveness within our institution. The ongoing support was invaluable, and we felt like partners throughout the process.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 21,
        name: "Uma Coral",
        rating: 4,
        comment: "Very satisfied with the consultancy's services. They offered valuable insights into our operational practices, which led to significant improvements in both staff and student engagement. Their expertise made a noticeable difference in how we approached teaching and learning.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 22,
        name: "Victor Tan",
        rating: 5,
        comment: "Great experience from start to finish. The team's dedication to our school’s success was evident, and their tailored strategies brought about remarkable improvements in our educational offerings. We truly felt valued and supported every step of the way.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 23,
        name: "Wendy Fuchsia",
        rating: 3,
        comment: "Good service but could be more affordable. While the expertise provided was beneficial, I felt the costs were on the higher side for a smaller institution like ours. However, we did see some improvements, which made it somewhat worth it.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 24,
        name: "Xander Olive",
        rating: 5,
        comment: "Truly transformative experience for my school. SkillShareIndia's thorough analysis and actionable strategies revolutionized our approach to education. We have witnessed a dramatic increase in student engagement and academic success since implementing their recommendations.",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 25,
        name: "Yara Mint",
        rating: 4,
        comment: "Impressed with their comprehensive support. The workshops were engaging, and the resources provided were very useful. Our teachers felt empowered to apply new strategies in the classroom, leading to noticeable improvements in student performance. Highly recommend for schools looking to enhance their educational approach!",
        photo: "https://via.placeholder.com/150",
    },
    {
        id: 26,
        name: "Zane Lavender",
        rating: 5,
        comment: "Absolutely phenomenal service! SkillShareIndia went above and beyond to ensure our school received the best guidance and support. The results speak for themselves, with enhanced student performance and improved faculty morale. I couldn't be happier with our partnership!",
        photo: "https://via.placeholder.com/150",
    },
];


const Reviews = () => {
    const [visibleReviews, setVisibleReviews] = useState(7);

    const loadMoreReviews = () => {
        setVisibleReviews(prevVisibleReviews => Math.min(prevVisibleReviews + 7, reviews.length));
    };

    return (
        <div className="bg-gradient-to-r from-blue-200 to-blue-400 min-h-screen flex items-center justify-center">
            <div className="container mx-auto p-8 rounded-lg shadow-lg bg-white">
                <h2 className="text-4xl text-center font-bold text-gray-800 mb-6">What Our Clients Say</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.slice(0, visibleReviews).map((review) => (
                        <motion.div
                            key={review.id}
                            className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={review.photo}
                                alt={review.name}
                                className="w-24 h-24 rounded-full border-2 border-blue-500 mb-4 mx-auto"
                            />
                            <h3 className="text-xl font-semibold text-center text-blue-600">{review.name}</h3>
                            <p className="text-yellow-500 text-center">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
                            <p className="text-gray-600 text-center mt-2">{review.comment}</p>
                        </motion.div>
                    ))}
                </div>
                {visibleReviews < reviews.length && (
                    <div className="text-center mt-6">
                        <button 
                            onClick={loadMoreReviews} 
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};


export default Reviews;
