import type { HTML } from "deco-sites/std/components/types.ts";
import Quilltext from "deco-sites/std/components/QuillText.tsx";

export interface Props {
  content: HTML[];
}

export default function TextInstitutional({ content }: Props) {
  return (
    <div class="container text-center">
      <div>
        {content.map((content) => {
          return <Quilltext html={content} />;
        })}
      </div>
    </div>
  );
}
