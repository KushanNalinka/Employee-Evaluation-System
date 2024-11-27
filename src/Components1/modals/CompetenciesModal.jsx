// import React from 'react';

// const CompetenciesModal = ({ closePopup }) => (
//   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//     <div className="bg-white p-6 rounded shadow-lg">
//       <h2 className="text-xl font-bold mb-4">Competencies Popup</h2>
//       <p>This is the content for the Competencies popup.</p>
//       <button
//         className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//         onClick={closePopup}
//       >
//         Close
//       </button>
//     </div>
//   </div>
// );

// export default CompetenciesModal;

import React from "react";

const CompetenciesModal = ({ closePopup }) => {
  const evaluationCriteria = [
    {
      category: "Achievement Orientation",
      subCategories: [
        {
          title: "1. Goal Achievement & Performance Impact",
          options: [
            "1: Regularly misses individual and team objectives; fails to make a measurable contribution to strategic goals.",
            "2: Occasionally misses targets; contributions are inconsistent and lack impact on overall objectives.",
            "3: Consistently meets individual and team objectives; contributes effectively to the fulfillment of strategic goals.",
            "4: Frequently surpasses objectives; contributions are impactful and drive progress toward strategic goals.",
            "5: Consistently exceeds expectations; delivers exceptional performance that significantly advances strategic objectives.",
          ],
        },
        {
          title: "2. Technical & Industry Expertise",
          options: [
            "1: Lacks fundamental technical knowledge or fails to apply it effectively, often requiring assistance.",
            "2: Displays basic knowledge but struggles to handle more complex tasks or changes in industry standards.",
            "3: Demonstrates solid understanding and can apply knowledge effectively in daily tasks and problem-solving.",
            "4: Shows advanced expertise, applies technical knowledge creatively, and anticipates industry trends.",
            "5: Considered an expert in the field, proactively shares knowledge and leads initiatives that set industry benchmarks.",
          ],
        },
        {
          title: "3. Innovation & Problem Solving",
          options: [
            "1: Rarely proposes new ideas; often sticks to conventional methods even when they fail to work.",
            "2: Occasionally suggests new ideas, but they are seldom impactful or implemented.",
            "3: Regularly proposes useful ideas that improve processes or solve issues effectively.",
            "4: Frequently initiates innovative solutions that significantly improve efficiency and effectiveness.",
            "5: Demonstrates a unique ability to innovate continuously, solving complex challenges with creative and impactful solutions.",
          ],
        },
        {
          title: "4. Effective Communication & Active Listening",
          options: [
            "1: Struggles to communicate ideas clearly; often misunderstood by colleagues and stakeholders.",
            "2: Occasionally unclear in communication, causing some confusion or misinterpretation.",
            "3: Communicates clearly and effectively most of the time; ideas are well understood.",
            "4: Consistently communicates in a clear, concise, and impactful manner; listens actively to others.",
            "5: Excels in all forms of communication, frequently influencing stakeholders and teams; listens attentively and encourages open dialogue.",
          ],
        },
      ],
    },
    {
      category: "People Orientation",
      subCategories: [
        {
          title: "7. Decisive & Ethical Leadership",
          options: [
            "1: Avoids making decisions or makes poor decisions that often lack ethical consideration.",
            "2: Sometimes hesitates in decision-making, and ethical considerations are inconsistent.",
            "3: Makes sound decisions with an ethical approach, balancing short-term and long-term implications.",
            "4: Demonstrates decisiveness, making ethically sound decisions that positively influence team performance.",
            "5: Consistently exhibits decisive and ethical leadership, fostering a strong culture of trust and responsibility.",
          ],
        },
        {
          title: "8. Influential & Inclusive Leadership",
          options: [
            "1: Struggles to lead effectively; fails to create an inclusive and collaborative team environment.",
            "2: Occasionally shows leadership but struggles to engage or include all team members.",
            "3: Leads effectively, promoting teamwork and inclusivity while respecting different perspectives.",
            "4: Demonstrates strong leadership, empowering diverse teams and fostering an environment of collaboration and inclusivity.",
            "5: Exemplifies inclusive leadership, inspiring others and driving a culture of high performance and diversity.",
          ],
        },
        {
          title: "9. Strategic Planning & Resource Allocation",
          options: [
            "1: Fails to plan effectively or allocate resources appropriately; projects often miss deadlines or are poorly executed.",
            "2: Occasionally struggles with planning, leading to inefficient use of resources or missed deadlines.",
            "3: Plans effectively, optimizing resources to meet objectives and ensuring projects are completed on time.",
            "4: Consistently demonstrates strong planning and resource allocation skills, ensuring optimal outcomes.",
            "5: Excels in strategic planning and resource management, consistently delivering exceptional results while minimizing resource waste.",
          ],
        },
        {
          title: "10. Collaboration & Team Empowerment",
          options: [
            "1: Struggles to work collaboratively, often causing friction within teams or failing to empower others.",
            "2: Occasionally collaborates but often works independently or struggles to mediate conflicts.",
            "3: Works well with others, contributing to a positive team environment and resolving conflicts when necessary.",
            "4: Actively fosters collaboration, encouraging diverse input and empowering team members to contribute fully.",
            "5: Consistently promotes a collaborative, inclusive, and high-performing team climate, empowering individuals to achieve their best.",
          ],
        },
        {
          title: "11. Resilience & Motivational Leadership",
          options: [
            "1: Easily discouraged by challenges; struggles to motivate the team or maintain composure under pressure.",
            "2: Shows occasional resilience but may struggle to stay motivated or inspire others during setbacks.",
            "3: Demonstrates resilience, remaining composed under pressure and motivating the team to persevere.",
            "4: Regularly displays resilience and motivates the team to overcome obstacles, maintaining high morale.",
            "5: Exemplifies resilience and consistently inspires others to excel, even in the most challenging situations.",
          ],
        },
      ],
    },
    {
      category: "Managerial Orientation",
      subCategories: [
        // Include all subcategories for Managerial Orientation in the same format
      ],
    },
    {
      category: "Adaptive Orientation",
      subCategories: [
        // Include all subcategories for Adaptive Orientation in the same format
      ],
    },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-h-screen overflow-auto w-full max-w-4xl">
        <h2 className="text-xl font-bold mb-4">Competencies Evaluation</h2>
        <div>
          {evaluationCriteria.map((criteria, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{criteria.category}</h3>
              {criteria.subCategories.map((subCategory, subIndex) => (
                <div key={subIndex} className="mb-4">
                  <h4 className="text-md font-medium mb-2">{subCategory.title}</h4>
                  {subCategory.options.map((option, optIndex) => (
                    <label
                      key={optIndex}
                      className="flex items-center space-x-2 mb-1"
                    >
                      <input type="checkbox" className="form-checkbox" />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={closePopup}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CompetenciesModal;
