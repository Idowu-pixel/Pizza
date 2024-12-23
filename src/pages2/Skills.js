const Skills = ({ skill, color, level }) => {
  return (
    <div style={{ backgroundColor: color }}>
      <h2>{skill}</h2>
      <span>
        {level === "Beginner" && "😀"}
        {level === "Intermediate" && "👍"}
        {level === "Advance" && "🖐️"}
      </span>
    </div>
  );
};
export default Skills;
