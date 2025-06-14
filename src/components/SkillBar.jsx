// src/components/SkillBar.jsx
const levelColors = {
  Beginner: "bg-yellow-200 text-yellow-700",
  Intermediate: "bg-blue-100 text-blue-700",
  Advanced: "bg-green-100 text-green-700"
};

const levelWidths = {
  Beginner: "w-1/4",
  Intermediate: "w-2/3",
  Advanced: "w-full"
};

const SkillBar = ({ name, level, category }) => (
  <div className="bg-white rounded-xl shadow p-4 mb-4 w-full">
    <div className="flex items-center justify-between mb-2">
      <span className="font-semibold">{name}</span>
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${levelColors[level]}`}>
        {level}
      </span>
    </div>
    <div className="w-full h-2 bg-gray-200 rounded-full mb-2">
      <div
        className={`h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ${levelWidths[level]}`}
      ></div>
    </div>
    <span className="text-xs text-gray-400">{category}</span>
  </div>
);

export default SkillBar;
