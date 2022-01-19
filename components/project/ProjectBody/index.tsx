import markdownStyles from "../../../styles/markdown-styles.module.css";

interface Props {
  content: string;
}

const ProjectBody = ({ content }: Props): JSX.Element => {
  return (
    <div className="mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default ProjectBody;
