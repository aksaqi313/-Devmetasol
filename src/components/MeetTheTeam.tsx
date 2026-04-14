import teamImage1 from "../assets/team-member-1.png";
import teamImage2 from "../assets/team-member-2.png";
import teamImage3 from "../assets/team-member-3.png";
import teamImage4 from "../assets/team1.jpg";
import teamImage5 from "../assets/team2.jpg";
import teamImage6 from "../assets/team3.jpg";
import teamImage7 from "../assets/team4.jpg";

const MeetTheTeam = () => {
  const topTeamMembers = [
    {
      name: "Ahmed Raza",
      title: "Regional Director Pakistan",
      image: teamImage1,
      flag: "🇵🇰",
      description: "Leading Pakistan operations with strategic vision",
    },
    {
      name: "Muhammad Hassan",
      title: "Founder & CEO",
      image: teamImage2,
      flag: "",
      description: "Visionary leader driving company innovation",
    },
    {
      name: "Fatima Ali",
      title: "Chief Operating Officer",
      image: teamImage3,
      flag: "",
      description: "Overseeing day-to-day operations excellence",
    },
  ];

  const regionalManagers = [
    {
      name: "Abdullah Noor",
      title: "Regional Manager KSA",
      image: teamImage4,
      flag: "🇸🇦",
    },
    {
      name: "M. Shoaib",
      title: "Regional Manager UAE",
      image: teamImage5,
      flag: "🇦🇪",
    },
    {
      name: "Umer Wahla",
      title: "Regional Manager Canada",
      image: teamImage6,
      flag: "🇨🇦",
    },
    {
      name: "Waqar Ahmed",
      title: "Regional Manager Portugal",
      image: teamImage7,
      flag: "🇵🇹",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Meet The <span className="text-blue-600">Dev Meta Sol</span> Team
          </h1>

          {/* Descriptive Paragraph */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Our team comprises innovative thinkers and industry experts who
              deliver comprehensive technology services spanning strategic
              consultation, solution design, implementation, and ongoing
              support. We are committed to driving measurable success and
              helping our clients achieve competitive advantage in their
              markets.
            </p>
          </div>
        </div>

        {/* Top 3 Leadership Team - Centered with spacing */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {topTeamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6"
              >
                {/* Image Container - Rounded Box */}
                <div className="relative mb-6">
                  <div className="w-48 h-56 mx-auto rounded-xl overflow-hidden border-4 border-white shadow-lg bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                      onError={() => {
                        console.error("Image failed to load:", member.image);
                      }}
                    />
                  </div>
                  {member.flag && (
                    <div className="absolute bottom-4 right-1/3 text-3xl bg-white rounded-lg p-1 shadow-md">
                      {member.flag}
                    </div>
                  )}
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg mb-3">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Managers - With side spacing */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Regional Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {regionalManagers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                {/* Image Container - Rounded Box */}
                <div className="relative mb-4">
                  <div className="w-40 h-48 mx-auto rounded-lg overflow-hidden border-4 border-white shadow-md bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                      onError={() => {
                        console.error("Image failed to load:", member.image);
                      }}
                    />
                  </div>
                  {member.flag && (
                    <div className="absolute bottom-2 right-1/4 text-2xl bg-white rounded-md p-1 shadow-sm">
                      {member.flag}
                    </div>
                  )}
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 font-medium">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
