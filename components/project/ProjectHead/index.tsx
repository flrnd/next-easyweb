import { Heading } from "../../typography";

interface Props {
  title: string;
  client: string;
  description: string;
  year: string;
  url?: string;
}

const ProjectHead = ({
  title,
  client,
  description,
  year,
  url,
}: Props): JSX.Element => {
  return (
    <>
      <div className="flex flex-col lg:justify-between lg:flex-row">
        <div>
          <Heading level={1} weight="font-normal" size="normal" margin="mb-2">
            {title}
          </Heading>

          <div className="small">Cliente: {client}</div>
          <div className="small">Año: {year}</div>
          <div className="small">
            {url && (
              <div>
                Web:&nbsp;
                <a className="inline-block underline" href={url}>
                  {url}
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="max-w-2xl">
          <Heading
            level={3}
            weight="font-normal"
            size="normal"
            margin="mb-2 mt-4 lg:mt-0"
          >
            Briefing
          </Heading>
          <div className="small">{description}</div>
        </div>
      </div>
    </>
  );
};

export default ProjectHead;
