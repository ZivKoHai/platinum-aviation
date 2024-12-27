import { H2Aviation } from "./H2Aviation";
import { Paviation } from "./Paviation";

export function Description({
  title,
  description,
  id = "services",
}: {
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <section id={id} className="wDyn h-fit py-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <H2Aviation>{title}</H2Aviation>
        <Paviation>{description}</Paviation>
      </div>
    </section>
  );
}
