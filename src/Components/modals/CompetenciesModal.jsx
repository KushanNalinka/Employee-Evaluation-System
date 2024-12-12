import React from "react";

const CompetenciesModal = ({ closePopup, toggleModal }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case "Achievement Orientation":
        return "text-red-500";
      case "People Orientation":
        return "text-green-500";
      case "Managerial Orientation":
        return "text-red-800";
      case "Adaptive Orientation":
        return "text-purple-500";
      default:
        return "text-black";
    }
  };

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
        {
          title: "5. Written Communication & Documentation Skills",
          options: [
            "1: Written communication is often unclear, poorly structured, or lacks necessary detail, leading to misunderstandings.",
            "2: Writing is occasionally unclear or incomplete, requiring follow-up for clarification.",
            "3: Writes clearly and concisely, conveying necessary information without confusion.",
            "4: Produces well-organized and insightful written content, contributing to effective decision-making and team understanding.",
            "5: Consistently delivers exceptional written communication that is persuasive, detailed, and highly impactful.",
          ],
        },
        {
          title: "6. Analytical & Strategic Thinking",
          options: [
            "1: Struggles to analyze information or problems; solutions are often superficial or incorrect.",
            "2: Displays limited analytical thinking; occasionally misses key details or fails to address the root of problems.",
            "3: Analyzes problems effectively, drawing reasonable conclusions and proposing viable solutions.",
            "4: Consistently displays strong analytical skills, identifying underlying issues and proposing strategic solutions.",
            "5: Demonstrates exceptional analytical and strategic thinking, foreseeing potential challenges and developing innovative, long-term solutions.",
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
        {
          title: "12. Accountability & Ownership",
          options: [
            "1: Avoids taking responsibility for mistakes or outcomes; fails to hold others accountable.",
            "2: Occasionally avoids accountability or fails to take ownership of significant challenges.",
            "3: Takes responsibility for own and team's outcomes; holds others accountable for their work.",
            "4: Consistently takes ownership of both successes and failures, driving accountability within the team.",
            "5: Exemplifies accountability, setting a standard of ownership and responsibility that inspires others.",
          ],
        },
        {
          title: "13. Reliability & Commitment",
          options: [
            "1: Frequently unreliable; misses deadlines or fails to complete tasks.",
            "2: Occasionally unreliable, missing some deadlines or producing incomplete work.",
            "3: Reliable and meets deadlines consistently; completes tasks as assigned.",
            "4: Demonstrates high reliability, frequently going beyond expectations to deliver quality work.",
            "5: Exceptionally reliable, consistently delivering high-quality work ahead of deadlines.",
          ],
        },
        {
          title: "14. Ethical Integrity & Transparency",
          options: [
            "1: Frequently displays unethical behavior or lacks transparency, damaging trust within the team or organization.",
            "2: Occasionally acts in ways that are not entirely transparent; ethical integrity may be compromised in certain situations.",
            "3: Consistently demonstrates ethical behavior and transparency in all interactions; follows company values and ethical standards.",
            "4: Actively promotes ethical behavior and transparency across the team, leading by example and ensuring fairness in decision-making.",
            "5: Serves as a role model for ethical behavior and transparency; inspires trust and commitment to integrity throughout the organization.",
          ],
        },
        {
          title: "15. Organizational Alignment & Loyalty",
          options: [
            "1: Lacks alignment with organizational goals; frequently disengaged or indifferent to company objectives.",
            "2: Shows occasional misalignment with organizational values or objectives; loyalty to the organization is inconsistent.",
            "3: Aligns personal and team goals with organizational objectives; demonstrates loyalty to the company and supports its mission.",
            "4: Regularly contributes to aligning team performance with company objectives; shows strong loyalty and commitment to the organization’s success.",
            "5: Acts as a key advocate for the organization’s values and vision; consistently works to align the team’s goals with those of the company and drives loyalty among others.",
          ],
        },
        {
          title: "16. Professionalism & Stakeholder Relations",
          options: [
            "1: Exhibits unprofessional behavior or struggles to maintain positive relationships with stakeholders.",
            "2: Inconsistent professionalism; stakeholder relationships may be weak or strained at times.",
            "3: Demonstrates professionalism in interactions with all stakeholders; maintains positive and productive working relationships.",
            "4: Regularly demonstrates high levels of professionalism; fosters strong, productive relationships with both internal and external stakeholders.",
            "5: Exemplifies professionalism in all aspects; builds and maintains exceptional relationships with stakeholders, enhancing the company’s reputation.",
          ],
        },
        {
          title: "17. Adherence to Corporate Values & Policies",
          options: [
            "1: Frequently disregards company policies and values, showing little commitment to organizational rules.",
            "2: Occasionally ignores or challenges company policies and values; inconsistent adherence.",
            "3: Consistently follows company policies and demonstrates adherence to corporate values in day-to-day activities.",
            "4: Proactively upholds and promotes company policies and values within the team, serving as an example to others.",
            "5: Exemplifies unwavering commitment to corporate values and policies; consistently encourages others to do the same and contributes to improving company culture.",
          ],
        },
      ],
    },
    {
      category: "Adaptive Orientation",
      subCategories: [
        {
          title: "18. Stress Management & Emotional Intelligence",
          options: [
            "1: Displays inconsistent stress management; emotional responses under pressure may occasionally affect decision-making or team dynamics.",
            "2: Manages stress effectively; remains composed under pressure and demonstrates good emotional intelligence in dealing with others.",
            "3: Handles high-pressure situations with calm and grace; demonstrates strong emotional intelligence, positively influencing team dynamics.",
            "4: Excels in stress management, remaining consistently composed and supportive under the most challenging circumstances; exemplifies emotional intelligence and fosters resilience in others.",
          ],
        },
        {
          title: "19. Adaptability & Change Leadership",
          options: [
            "1: Resists change or is slow to adapt to new circumstances, leading to missed opportunities or delays in projects.",
            "2: Occasionally struggles to adapt to new situations or changes in the business environment, affecting productivity.",
            "3: Embraces change and adapts well to new circumstances; encourages the team to accept and work through changes effectively.",
            "4: Demonstrates strong adaptability in shifting conditions; leads the team through change with clarity and positive energy.",
            "5: Champions organizational change; quickly adapts and innovates in response to new challenges, driving the team to thrive in changing environments.",
          ],
        },
        {
          title: "20. Agility & Situational Flexibility",
          options: [
            "1: Struggles to adjust to unexpected changes or challenges; often rigid in approach and unable to modify behavior to suit different situations.",
            "2: Occasionally shows difficulty in modifying behavior or approaches in the face of situational changes.",
            "3: Demonstrates flexibility and adjusts behavior as needed to manage different situations and challenges.",
            "4: Shows strong agility in navigating complex, dynamic situations, effectively adjusting approaches and driving positive outcomes.",
            "5: Exceptionally agile in diverse and unpredictable situations; consistently adapts and leads the team to success, regardless of changing circumstances.",
          ],
        },
      ],
    },
  ];

  return (
    // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      {/* <div className="bg-white p-6 rounded shadow-lg max-h-screen overflow-auto w-full max-w-4xl" onClick={toggleModal}> */}
      <div
        className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-4xl overflow-y-auto max-h-[90vh]"
        style={{ width: "1250px", maxWidth: "100%" }}
        onClick={toggleModal}
      >
        <button
          className="absolute top-2 right-2 text-red-500 text-2xl font-bold focus:outline-none"
          onClick={closePopup}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Competencies Evaluation</h2>
        <div>
          {evaluationCriteria.map((criteria, index) => (
            <div key={index} className="mb-6">
              {/* <h3 className="text-lg font-semibold mb-2">
                {criteria.category}
              </h3> */}
              <h2
                className={`font-bold text-lg ${getCategoryColor(
                  criteria.category
                )}`}
              >
                {criteria.category}
              </h2>
              {criteria.subCategories.map((subCategory, subIndex) => (
                <div key={subIndex} className="mb-4">
                  <h4 className="text-md font-medium mb-2">
                    {subCategory.title}
                  </h4>
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
        <div className="flex mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Save
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={closePopup}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompetenciesModal;
