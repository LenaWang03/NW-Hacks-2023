import miu from "../../../assets/miu.png";

function Miu() {
  return (
    <div className="miu">
      <div className = "miu-info">
        <h2 className="meet-miu">Meet Miu</h2>
        <p className="meet-miu-text">
          Hiya! I’m Miu. I’ll be guiding you through some helpful resources designed 
          specifically for students dealing with mental health concerns. With the stress 
          and pressure that comes with being a student, it can be tough to know where 
          to turn for help. That's where mindfulU comes in! MindfulU has a wide range 
          of resources to help you manage stress, anxiety, and other mental health issues.
        </p>
        <p className="meet-miu-text">
          So whether you're struggling with exam anxiety, feeling overwhelmed, or just need
          someone to talk to, I am here to help.
        </p>
      </div>
      <div className="meet-miu-img">
        <img className = "divider" src={miu} alt=""/>
      </div>

    </div>
  );
}

export default Miu;
