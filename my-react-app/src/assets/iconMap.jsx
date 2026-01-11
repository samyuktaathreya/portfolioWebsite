import * as icons from "simple-icons";
import {FaJava, FaBoxOpen} from "react-icons/fa";

function Icon({ path, color }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="skill-logo"
      fill={color}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

export const skillIconMap = {
  // Programming Languages
  "python": <Icon path={icons.siPython.path} color={`#${icons.siPython.hex}`} />,
  "typescript": <Icon path={icons.siTypescript.path} color={`#${icons.siTypescript.hex}`} />,
  "javascript": <Icon path={icons.siJavascript.path} color={`#${icons.siJavascript.hex}`} />,
  "c++": <Icon path={icons.siCplusplus.path} color={`#${icons.siCplusplus.hex}`} />,
  "c": <Icon path={icons.siC.path} color={`#${icons.siC.hex}`} />,
  "java": <FaJava className="skill-logo-java" />,
  "bash": <Icon path={icons.siGnubash.path} color={`#${icons.siGnubash.hex}`} />,

  // Web / Full Stack
  "react": <Icon path={icons.siReact.path} color={`#${icons.siReact.hex}`} />,
  "node.js": <Icon path={icons.siNodedotjs.path} color={`#${icons.siNodedotjs.hex}`} />,
  "express.js": <Icon path={icons.siExpress.path} color={`#${icons.siExpress.hex}`} />,
  "mongodb": <Icon path={icons.siMongodb.path} color={`#${icons.siMongodb.hex}`} />,
  "mongoose": <Icon path={icons.siMongoose.path} color={`#${icons.siMongoose.hex}`} />,
  "socket io": <Icon path={icons.siSocketdotio.path} color={`#${icons.siSocketdotio.hex}`} />,
  "fastapi": <Icon path={icons.siFastapi.path} color={`#${icons.siFastapi.hex}`} />,
  "jwt": <Icon path={icons.siJsonwebtokens.path} color={`#${icons.siJsonwebtokens.hex}`} />,

  // AI / ML
  "pytorch": <Icon path={icons.siPytorch.path} color={`#${icons.siPytorch.hex}`} />,
  "tensorflow": <Icon path={icons.siTensorflow.path} color={`#${icons.siTensorflow.hex}`} />,
  "scikit-learn": <Icon path={icons.siScikitlearn.path} color={`#${icons.siScikitlearn.hex}`} />,
  "numpy": <Icon path={icons.siNumpy.path} color={`#${icons.siNumpy.hex}`} />,
  "pandas": <Icon path={icons.siPandas.path} color={`#${icons.siPandas.hex}`} />,

  // DevOps & Tools
  "git": <Icon path={icons.siGit.path} color={`#${icons.siGit.hex}`} />,
  "github": <Icon path={icons.siGithub.path} color={`#${icons.siGithub.hex}`} />,
  "github actions": <Icon path={icons.siGithubactions.path} color={`#${icons.siGithubactions.hex}`} />,
  "render (cloud deployment)": <Icon path={icons.siRender.path} color={`#${icons.siRender.hex}`} />,
  "parcel": <FaBoxOpen className="skill-logo-parcel"/>,
  "eslint": <Icon path={icons.siEslint.path} color={`#${icons.siEslint.hex}`} />,
  "prettier": <Icon path={icons.siPrettier.path} color={`#${icons.siPrettier.hex}`} />,
};
